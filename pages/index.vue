<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        hugodesigns
      </h1>
      <h2 class="subtitle">
        My first Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  data() {
    return {
      selected: ''
    }
  },
  components: {
    AppLogo
  }
}
</script>
