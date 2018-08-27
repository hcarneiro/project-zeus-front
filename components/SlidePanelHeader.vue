<template>
  <div class="slide-overlay-header">
    <h3>{{ title }}</h3>
    <div class="slider-overlay-close" v-on:click="closePanel">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    closePanel() {
      this.$emit('closeProfilePanel', {});
    }
  }
}
</script>