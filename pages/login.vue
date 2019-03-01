<template>
  <div class="login-panel-wrapper">
    <div class="auth-logo-holder">
      <div class="auth-logo"></div>
      <div class="logo-typography">Colabora<span>.io</span></div>
    </div>
    <div class="auth-holder">
      <h1>Welcome!</h1>
      <p class="text-muted">This platform is still being developed!</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: undefined,
      isAuthenticating: false,
      remember: false
    }
  },
  head () {
    return {
      title: 'Login'
    }
  },
  methods: {
    login() {
      if (this.isAuthenticating) {
        return
      }

      this.isAuthenticating = true
      this.error = ''

      // @TODO Login AXIOS
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
        remember: this.remember,
        session: true
      })
        .then(() => {
          return this.$store.dispatch('auth/verifyUser', true)
        })
        .then(() => {
          this.isAuthenticating = false
          this.$router.push({
            path: '/'
          })
        })
        .catch((response) => {
          this.isAuthenticating = false

          if (!response) {
            this.error = 'Could not authenticate. Please try later.'
            return
          }

          if (response.data) {
            this.error = response.data.message
          } else if (response.response && response.response.data) {
            this.error = response.response.data.message
          } else {
            this.error = 'Could not authenticate. Please try later.'
          }          
        })
    }
  },
  mounted() {
    // Automatic log in
    this.$store.dispatch('auth/verifyUser', true).then(() => {
      this.$router.push({
        path: '/'
      })
    })
  }
}
</script>