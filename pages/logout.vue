<template>
  <div class="auth-holder">
    <p>{{ progressText }}</p>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      progressText: 'Logging out...'
    }
  },
  head () {
    return {
      title: 'Logout'
    }
  },
  mounted() {
    this.$store.dispatch('auth/logout')
      .then(() => {
        return this.$router.push({
          path: '/login'
        })
      })
  }
}
</script>