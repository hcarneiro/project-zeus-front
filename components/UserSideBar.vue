<template>
  <div class="sidebar-wrapper">
    <div class="user-profile-picture-holder">
      <nuxt-link class="go-back" tag="div" :to="'/'">
        <i class="fas fa-arrow-left"></i>
      </nuxt-link>
      <div class="user-picture-holder">
        <div class="user-profile-picture" v-if="userPictureBackground" :style="userPictureBackground"></div>
        <i class="far fa-user"></i>
      </div>
      <div class="edit-profile" v-on:click="showPanel">
        <i class="fas fa-pen"></i>
      </div>
    </div>
    <div class="user-profile-info">
      <div class="user-name">{{ userFullName }}</div>
      <div class="user-title" v-if="userTitle">{{ userTitle }}</div>
    </div>
    <slideout-panel></slideout-panel>
  </div>
</template>

<script>
import { vueSlideoutPanelService } from 'vue2-slideout-panel'
import UpdateProfile from '~/components/UpdateProfile.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    UpdateProfile
  },
  computed: {
    ...mapState({
      userFullName: state => {
        return state.auth.currentUser.fullName
      },
      userPictureBackground: state => {
        if (state.auth.currentUser.profilePicture) {
          return `background-image: url('${state.auth.currentUser.profilePicture}')`
        }
      },
      userTitle: state => {
        if (state.auth.currentUser.userTitle) {
          return state.auth.currentUser.userTitle
        }
        return ''
      }
    })
  },
  methods: {
    showPanel() {
      vueSlideoutPanelService.show({
          component: UpdateProfile,
          cssClass: 'update-profile-overlay',
          props: {
            user: this.$store.state.auth.currentUser,
            title: 'My profile settings'
          }
        })
    }
  }
}
</script>