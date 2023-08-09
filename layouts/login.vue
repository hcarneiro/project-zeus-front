<template>
  <div class="login-page-wrapper">
    <nuxt/>
    <div class="decor-panel-wrapper" :style="backgroundImage">
    </div>
  </div>
</template>
<script>
const imageMapping = {
  'login': 'background-image: url("/images/login.jpg")',
  'signup': 'background-image: url("/images/sign-up.jpg")',
  'forgot-password': 'background-image: url("/images/forgot-password.jpg")',
  'verify-token': 'background-image: url("/images/verify-token.jpg")',
  'reset-password-token': 'background-image: url("/images/reset.jpg")'
}
export default {
  data () {
    return {
      backgroundImage: imageMapping.login
    }
  },
  watch: {
    $route(route) {
      this.backgroundImage = imageMapping[route.name]
    }
  },
  created() {
    this.backgroundImage = imageMapping[this.$route.name]
  }
}
</script>