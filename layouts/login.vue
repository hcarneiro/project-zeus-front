<template>
  <div class="login-page-wrapper">
    <nuxt/>
    <div class="decor-panel-wrapper" :style="backgroundImage">
    </div>
  </div>
</template>
<script>
const imageMapping = {
  'login': 'background-image: url("/images/daylight-forest-glossy-443446.jpg")',
  'signup': 'background-image: url("/images/daylight-environment-forest-459225.jpg")',
  'forgot-password': 'background-image: url("/images/fog-foggy-forest-4827.jpg")',
  'verify-token': 'background-image: url("/images/bright-countryside-dawn-302804.jpg")',
  'reset-password-token': 'background-image: url("/images/adventure-calm-clouds-414171.jpg")'
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