<template>
  <div>Hello</div>
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
      console.log('HERE');
      // Great success
      this.isVerifying = false
      this.userVerified = true
    })
    .catch((error) => {
      console.log(error)
      this.error = error && error.body && error.body.message || 'Activation failed.'
      this.isVerifying = false
      this.userVerified = false
    })
  }
}
</script>