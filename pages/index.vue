<template>
  <div class="page-container">
    <div class="sidebar-component">
      <side-bar/>
    </div>
    <main-view/>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'
import MainView from '~/components/MainView.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    SideBar,
    MainView
  }
}
</script>
