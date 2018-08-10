<template>
  <div class="view-component">
    <top-menu/>
    <view-container/>
  </div>
</template>

<script>
import ViewContainer from '~/components/ViewContainer.vue'
import TopMenu from '~/components/TopMenu.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    ViewContainer,
    TopMenu
  }
}
</script>