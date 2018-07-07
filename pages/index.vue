<template>
  <div class="page-container">
    <div class="sidebar-component">
      <side-bar/>
    </div>
    <div class="view-component">
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    SideBar
  }
}
</script>
