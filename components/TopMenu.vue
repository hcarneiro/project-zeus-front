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
      <div class="profile-holder dropdown-toggle" data-toggle="dropdown">
        <div class="profile-picture" v-if="userPictureBackground" :style="userPictureBackground"></div>
        <i class="far fa-user"></i>
      </div>
      <div class="profile-dropdown dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <div class="dropdown-header">{{ userFullName }}</div>
        <div class="dropdown-divider"></div>
        <nuxt-link class="dropdown-item" tag="a" :to="'/profile'">My profile</nuxt-link>
        <nuxt-link class="dropdown-item" tag="a" :to="'/logout'">Log out</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
  computed: {
    ...mapState({
      userPictureBackground: state => {
        if (state.auth.currentUser.profilePicture) {
          return `background-image: url('${state.auth.currentUser.profilePicture}')`
        }
      },
      userFullName: state => {
        return state.auth.currentUser.fullName
      }
    })
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