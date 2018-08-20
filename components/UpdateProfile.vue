<template>
  <div class="slide-overlay-wrapper">
    <slide-panel-header @closeProfilePanel="onClose"></slide-panel-header>
    <div class="slide-overlay-body">
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label for="first_name">First name</label>
          <input type="text" class="form-control" id="first_name" placeholder="Enter first name" v-model="firstName">
        </div>
        <div class="form-group">
          <label for="last_name">Last name</label>
          <input type="text" class="form-control" id="last_name" placeholder="Enter last name" v-model="lastName">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
          <label for="job_title">Job title</label>
          <input type="text" class="form-control" id="job_title" placeholder="Enter email" v-model="userTitle">
        </div>
        <div class="form-group">
          <label for="bio">Bio</label>
          <input type="text" class="form-control" id="bio" placeholder="Enter email" v-model="userBio">
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" class="form-control" id="city" placeholder="Enter email" v-model="userCity">
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country" placeholder="Enter email" v-model="userCountry">
        </div>
        <div class="form-group">
          <label for="current_password">Current password</label>
          <input type="password" class="form-control" id="current_password" placeholder="Enter email" v-model="currentPassword">
        </div>
        <div class="form-group">
          <label for="new_password">New password</label>
          <input type="password" class="form-control" id="new_password" placeholder="Enter email" v-model="newPassword">
        </div>
        <div class="form-group">
          <label for="confirm_password">Confirm new password</label>
          <input type="password" class="form-control" id="confirm_password" placeholder="Enter email" v-model="confirmPassword">
        </div>
        <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': isSubmitting }">
          <template v-if="!isSubmitting">Update</template>
          <template v-else>Updating...</template>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import SlidePanelHeader from '~/components/SlidePanelHeader.vue'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      userTitle: this.user.userTitle,
      userBio: this.user.userBio,
      userCity: this.user.userCity,
      userCountry: this.user.userCountry,
      userResponsabilities: this.user.userResponsabilities,
      profilePicture: this.user.profilePicture,
      currentPassword: undefined,
      newPassword: undefined,
      confirmPassword: undefined,
      isSubmitting: false,
      error: undefined
    }
  },
  components: {
    SlidePanelHeader
  },
  methods: {
    saveSettings() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userTitle: this.userTitle,
        userBio: this.userBio,
        userCity: this.userCity,
        userCountry: this.userCountry,
        userResponsabilities: this.userResponsabilities,
        profilePicture: this.profilePicture,
        password: this.currentPassword,
        newPassword: this.newPassword
      }

      this.error = ''
      this.isSubmitting = true

      this.$store.dispatch('users/userUpdate', userData)
        .then(() => {
          this.isSubmitting = false
          this.onClose(userData)
        })
        .catch((error) => {
          this.isSubmitting = false
          this.error = error
        })
    },
    onClose(options) {
      this.$emit('closePanel', options);
    }
  }
}
</script>