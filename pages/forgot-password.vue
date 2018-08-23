<template>
  <div class="login-panel-wrapper">
    <div class="auth-logo-holder">
      <div class="auth-logo"></div>
      <div class="logo-typography">Colabora<span>.io</span></div>
    </div>
    <div class="auth-holder forgot-password">
      <h1>Forgot password</h1>
      <p class="text-muted">Enter your email address below, and we will send you an email to reset your password.</p>
      <form @submit.prevent="forgotPassword">
        <div class="auth-form" v-if="!success">
          <div class="form-group auth-form-field">
            <label for="forgot-email">Email address</label>
            <input type="email" class="form-control" id="forgot-email" v-model="email" required>
          </div>
        </div>
        <div class="bd-callout bd-callout-danger" v-if="error" v-html="error"></div>
        <div class="bd-callout bd-callout-success" v-if="success">
          <h4>Just one more step...</h4>
          <p>An email has been sent to <strong>{{ email }}</strong> to reset your password.</p>
          <p><strong class="text-warning">Didn't receive the password reset email?</strong><br>Please check your spam or check with your IT team.</p>
        </div>
        <div class="auth-btn-controls" v-if="!success">
          <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': isResetting }">
            <span v-if="isResetting">Please wait...</span>
            <span v-else>Reset password</span>
          </button>
          <nuxt-link class="btn btn-secondary" tag="button" :to="'/login'">Cancel</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      email: '',
      error: undefined,
      success: undefined,
      isResetting: false
    }
  },
  head () {
    return {
      title: 'Forgot password'
    }
  },
  methods: {
    forgotPassword() {
      this.error = undefined
      this.success = undefined
      this.isResetting = true

      this.$store.dispatch('auth/forgotPassword', this.email.trim().toLowerCase())
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
            this.error = 'Invalid email address.'
          }
        })
    }
  }
}
</script>
