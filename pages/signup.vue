<template>
  <div class="login-panel-wrapper">
    <div class="auth-logo-holder">
      <div class="auth-logo"></div>
      <div class="logo-typography">Colabora<span>.io</span></div>
    </div>
    <div class="auth-holder signup" v-if="!signedUp">
      <h1>Sign up</h1>
      <p class="text-muted">Start your <strong>Free</strong> account</p>
      <form @submit.prevent="verifyUserData">
        <div class="auth-form">
          <div class="form-group auth-form-field">
            <label for="first-name">First name</label>
            <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="last-name">Last name</label>
            <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="login-email">Email address</label>
            <input type="email" class="form-control" id="login-email" v-model="userEmail" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="company-name">Company name</label>
            <input type="text" class="form-control" id="company-name" v-model="userCompany" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="sign-password">Password</label>
            <input type="password" class="form-control" id="sign-password" v-model="userPassword" required>
          </div>
          <div class="form-group auth-form-field">
            <label for="sign-password-confirm">Confirm password</label>
            <input type="password" class="form-control" id="sign-password-confirm" v-model="passwordConfirm" required>
          </div>
        </div>
        <div class="bd-callout bd-callout-danger" v-if="error" v-html="error"></div>
        <div class="auth-btn-controls">
          <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': isVerifying }">
            <span v-if="isVerifying">Please wait...</span>
            <span v-else>Sign up</span>
          </button>
          <nuxt-link class="btn btn-secondary" tag="button" :to="'/login'">Login</nuxt-link>
        </div>
      </form>
    </div>
    <div class="signedup-wrapper" v-else>
      <div class="bd-callout bd-callout-info">
        <h4>Just one more step...</h4>
        <p>We have sent a verification email to <strong>{{ userEmail }}</strong>.</p>
        <p>Click on the link in the email to confirm your email address.</p>
        <p><strong class="text-warning">Didn't receive the verification email?</strong><br>Please check your spam or check with your IT team.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { characterLimits } from '~/plugins/validation'

export default {
  layout: 'login',
  data() {
    return {
      firstName: '',
      lastName: '',
      userCompany: '',
      userEmail: '',
      userPassword: '',
      passwordConfirm: '',
      error: '',
      isVerifying: false,
      signedUp: false,
      passwordMinLength: characterLimits.signupPasswordMinLength
    }
  },
  methods: {
    verifyUserData() {
      this.error = false
      this.isVerifying = true

      if (this.userPassword.length < this.passwordMinLength) {
        this.error = `Your password must have at least ${this.passwordMinLength} characters.`
        this.isVerifying = false
        return
      }

      if (this.userPassword !== this.passwordConfirm) {
        this.error = 'Passwords don\'t match, please enter them again.'
        this.isVerifying = false
        return
      }

      this.signup()
    },
    signup() {
      this.$store.dispatch('auth/signUp', {
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.userPassword,
        email: this.userEmail,
        organizationName: this.userCompany
      }).then(() => {
        this.isVerifying = false
        this.signedUp = true
      }, (err) => {
        this.isVerifying = false
        this.error = err.data.message
      })
    }
  }
}
</script>