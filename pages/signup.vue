<template>
  <div class="auth-holder signup">
    <h1>Sign up</h1>
    <p class="text-muted">Start your <strong>Free</strong> account</p>
    <form>
      <div class="auth-form">
        <div class="form-group auth-form-field">
          <label for="first-name">First name</label>
          <input type="text" class="form-control" id="first-name" required>
        </div>
        <div class="form-group auth-form-field">
          <label for="last-name">Last name</label>
          <input type="text" class="form-control" id="last-name" required>
        </div>
        <div class="form-group auth-form-field">
          <label for="login-email">Email address</label>
          <input type="email" class="form-control" id="login-email" required>
        </div>
        <div class="form-group auth-form-field">
          <label for="company-name">Company name</label>
          <input type="text" class="form-control" id="company-name">
        </div>
        <div class="form-group auth-form-field">
          <label for="sign-password">Password</label>
          <input type="password" class="form-control" id="sign-password" required>
        </div>
        <div class="form-group auth-form-field">
          <label for="sign-password-confirm">Confirm password</label>
          <input type="password" class="form-control" id="sign-password-confirm" required>
        </div>
      </div>
      <div class="auth-btn-controls">
        <button type="submit" class="btn btn-primary">Sign up</button>
        <nuxt-link class="btn btn-secondary" tag="button" :to="'/login'">Login</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>