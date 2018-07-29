<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo"></div>
    <ul class="sidebar-list">
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/my-tasks'">
        <i class="fas fa-th-list fa-fw"></i> My Tasks
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/inbox'">
        <i class="fas fa-inbox fa-fw"></i> Inbox
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/dashboard'">
        <i class="fas fa-tachometer-alt fa-fw"></i> Dashboard
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/trash'">
        <i class="fas fa-rocket fa-fw"></i> Projects
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/trash'">
        <i class="fas fa-edit fa-fw"></i> Personal
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/trash'">
        <i class="fas fa-users fa-fw"></i> Teams
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      personal: []
    }
  }
}
</script>