<template>
  <div class="main-top-header">
    <div class="top-header-controls">
      <div class="header-search-holder" v-on:click="activateSearch" v-click-outside="deactivateSearch" v-bind:class="{ active: searchIsActive }">
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
      <div class="profile-holder dropdown-toggle" data-toggle="dropdown" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
      <div class="profile-dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <div class="dropdown-header">Hugo Carneiro</div>
        <div class="dropdown-divider"></div>
        <nuxt-link class="dropdown-item" tag="a" :to="'/profile'">My profile</nuxt-link>
        <nuxt-link class="dropdown-item" tag="a" :to="'/logout'">Log out</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      searchIsActive: false,
      searchInput: '',
      isSearching: false
    }
  },
  props: {
    title: String
  },
  directives: {
    ClickOutside
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
    deactivateSearch() {
      this.searchIsActive = false
      this.searchInput = ''
    },
    closeSearch() {
      this.searchInput = ''
      this.searchIsActive = false
    }
  }
}
</script>