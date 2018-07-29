<template>
  <div class="main-top-header">
    <div class="top-header-controls">
      <div class="header-search-holder" v-on:click="activateSearch" v-bind:class="{ active: searchIsActive }">
        <div class="search-holder">
          <i class="fas fa-search search-icon"></i>
          <input type="search" class="form-control header-search" placeholder="Type to search" v-model="searchInput" v-bind:class="{ searching: isSearching }">
          <i class="fas fa-times clear-icon" v-on:click.stop="closeSearch"></i>
        </div>

      </div>
      <div class="notification-holder">
        <div class="notification-alert"></div>
        <i class="far fa-bell"></i>
      </div>
      <div class="profile-holder">
        <img src="https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchIsActive: false,
      searchInput: '',
      isSearching: false
    }
  },
  watch: {
    searchInput(value) {
      if (value.length) {
        this.isSearching = true
      } else {
        this.isSearching = false
      }
    }
  },
  methods: {
    activateSearch() {
      this.searchIsActive = true
    },
    closeSearch() {
      this.searchInput = ''
      this.searchIsActive = false
    }
  }
}
</script>