<template>
  <div>
    <div v-on:click="closePanel">Close</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    closePanel() {
      this.$emit('closeProfilePanel', {});
    }
  }
}
</script>