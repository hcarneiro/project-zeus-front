<template>
  <div class="login-panel-wrapper">
    <div class="auth-logo-holder">
      <div class="auth-logo"></div>
      <div class="logo-typography">Colabora<span>.io</span></div>
    </div>
    <div class="auth-holder reset-password">
      <h1>Reset password</h1>
      <p class="text-muted">Please enter your new password below for your account.</p>
      <div class="loading-spinner" v-if="loading"></div>
      <form @submit.prevent="resetPassword">
        <div class="auth-form" v-if="validToken">
          <div class="form-group auth-form-field">
            <label for="reset-password">New password</label>
            <input type="password" class="form-control" id="reset-password" v-model="password" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="reset-confirm-password">Confirm new password</label>
            <input type="password" class="form-control" id="reset-confirm-password" v-model="passwordConfirm" required>
          </div>
        </div>
        <div class="bd-callout bd-callout-danger" v-if="error" v-html="error"></div>
        <div class="bd-callout bd-callout-success" v-if="success">
          <h4>Password successfully reset</h4>
          <nuxt-link tag="a" :to="'/login'">Click here to login</nuxt-link>
        </div>
        <div class="auth-btn-controls" v-if="validToken && !success && !error">
          <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': isResetting }">
            <span v-if="isResetting">Please wait...</span>
            <span v-else>Reset password</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { characterLimits } from '~/plugins/validation'

export default {
  layout: 'login',
  data() {
    return {
      password: '',
      passwordConfirm: '',
      error: undefined,
      validToken: false,
      success: false,
      loading: true,
      isResetting: false,
      passwordMinLength: characterLimits.signupPasswordMinLength
    }
  },
  head () {
    return {
      title: 'Reset your password'
    }
  },
  methods: {
    resetPassword() {
      this.error = undefined
      this.success = undefined
      this.isResetting = true

      if (this.password.length < this.passwordMinLength) {
        this.error = `Your password must have at least ${this.passwordMinLength} characters.`
        this.isResetting = false
        return
      }

      if (this.password !== this.passwordConfirm) {
        this.isResetting = false
        this.error = "Passwords don't match"
        return
      }

      const token = this.$route.params.token
      this.$store.dispatch('auth/resetPassword', {
        password: this.password,
        token: token
      })
      .then(() => {
        this.isResetting = false
        this.success = true
      })
      .catch((response) => {
        this.isResetting = false
        if (response.data) {
          this.error = response.data.message
        } else if (response.body) {
          this.error = response.body.message
        } else {
          this.error = 'There was an error resetting your password. Please try again later.'
        }
      })
    }
  },
  mounted() {
    const token = this.$route.params.token
    this.$store.dispatch('auth/getResetTokenInfo', token)
      .then(() => {
        // Great success
        this.loading = false
        this.validToken = true
      })
      .catch((error) => {
        this.error = error && error.body && error.body.message || 'There was an error resetting your password. Please try again later.'
        this.loading = false
        this.validToken = false
      })
  }
}
</script>