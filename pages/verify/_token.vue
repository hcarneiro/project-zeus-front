<template>
  <div class="login-panel-wrapper">
    <div class="auth-logo-holder">
      <div class="auth-logo"></div>
      <div class="logo-typography">Colabora<span>.io</span></div>
    </div>
    <div class="auth-holder verify-account">
      <h1>Sign up</h1>
      <div v-if="isVerifying && !userVerified">
        <div class="loading-spinner"></div>
      </div>
      <div class="bd-callout bd-callout-success" v-if="userVerified && !isVerifying">
        <h4>Account verified</h4>
        <p>Your account was successfully activated.</p>
        <nuxt-link tag="a" :to="'/'">Create your first project</nuxt-link>
      </div>
      <div class="bd-callout bd-callout-danger" v-if="!userVerified && !isVerifying">
        <h4>Account could not be verified</h4>
        <p v-html="error"></p>
        <p>Please try again using the link sent to your email or contact support.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  data() {
    return {
      isVerifying: true,
      userVerified: false,
      error: ''
    }
  },
  head () {
    return {
      title: 'Verify your email'
    }
  },
  mounted() {
    const token = this.$route.params.token
    this.$store.dispatch('auth/verifyUserEmail', token).then(() => {
      return this.$store.dispatch('auth/verifyUser', true, true)
    })
    .then(() => {
      // Great success
      this.isVerifying = false
      this.userVerified = true
    })
    .catch((error) => {
      this.error = error && error.body && error.body.message || 'Activation failed.'
      this.isVerifying = false
      this.userVerified = false
    })
  }
}
</script>