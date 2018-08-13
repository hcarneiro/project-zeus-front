<template>
  <div class="auth-holder">
    <h1>Welcome!</h1>
    <p class="text-muted">Login to your account</p>
    <form @submit.prevent="login">
      <div class="auth-form">
        <div class="form-group auth-form-field">
          <label for="login-email">Email address</label>
          <input type="email" class="form-control" id="login-email" v-model="email" required>
          <i class="fas fa-user"></i>
        </div>
        <div class="form-group auth-form-field">
          <label for="login-password">Password</label>
          <input type="password" class="form-control" id="login-password" v-model='password' required>
          <i class="fas fa-lock"></i>
        </div>
      </div>
      <div class="auth-aux-controls">
        <div class="checkbox-icon">
          <label class="checkbox-label" for="remember-me">Remember me
            <input type="checkbox" id="remember-me" v-model="remember">
            <div class="checkbox-mark">
              <i class="fas fa-check"></i>
            </div>
          </label>
        </div>
        <div>
          <nuxt-link tag="a" :to="'/forgot-password'">Forgot password?</nuxt-link>
        </div>
      </div>
      <div class="bd-callout bd-callout-danger" v-if="error" v-html="error"></div>
      <div class="auth-btn-controls">
        <button type="submit" class="btn btn-primary"  v-bind:class="{ 'disabled': isAuthenticating }">
          <span v-if="isAuthenticating">Please wait...</span>
          <span v-else>Login</span>
        </button>
        <nuxt-link class="btn btn-secondary" tag="button" :to="'/signup'">Sign up</nuxt-link>
      </div>
    </form>
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

          const error = response.data
            ? response.data.message
            : 'Could not authenticate. Please try later.'
          this.error = error
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