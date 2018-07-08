<template>
  <div class="view-component">
    <top-menu/>
    <view-container/>
  </div>
</template>

<script>
import TopMenu from '~/components/TopMenu.vue'
import ViewContainer from '~/components/ViewContainer.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    TopMenu,
    ViewContainer
  }
}
</script>