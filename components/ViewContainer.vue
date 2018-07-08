<template>
  <div class="main-view-holder">
    <div class="canvas-container">
      <tasks/>
    </div>
  </div>
</template>

<script>
import Tasks from '~/components/Tasks.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Tasks
  }
}
</script>