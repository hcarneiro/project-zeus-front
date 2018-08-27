<template>
  <div class="slide-overlay-wrapper">
    <slide-panel-header :title="title" @closeProfilePanel="onClose"></slide-panel-header>
    <div class="slide-overlay-body">
      <vue-tabs>
        <v-tab title="Profile">
          <form @submit.prevent="saveSettings" class="profile-form">
            <div class="update-profile-picture">
              <div class="user-picture-holder">
                <div class="user-profile-picture" v-if="profilePicture" :style="profilePicture"></div>
                <i class="far fa-user"></i>
              </div>
              <div class="profile-picture-controls">
                <div class="add-picture" v-if="isUploading">
                  <div class="picture-action-label uploading">Uploading...</div>
                </div>
                <label class="add-picture" v-if="!isUploading">
                  <div class="picture-action-label">
                    <span v-if="profilePicture">
                    Change profile photo
                    </span>
                    <span v-else>
                    Add a profile photo
                    </span>
                    <div class="photo-upload-form">
                      <input autocomplete="off" type="file" name="file" class="photo-file-input" accept="image/gif,image/png,image/jpeg,image/tiff,image/bmp" @change="uploadPhoto($event)">
                    </div>
                  </div>
                </label>
                <div class="add-picture" v-if="profilePicture && !isUploading">
                  <div class="add-picture-separator">•</div>
                  <div class="picture-action-label" v-on:click.prevent="clearPhoto">Clear photo</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group profile-form-field col-sm-6">
                <label for="first_name">First name</label>
                <input type="text" class="form-control" id="first_name" v-model="firstName">
              </div>
              <div class="form-group profile-form-field col-sm-6">
                <label for="last_name">Last name</label>
                <input type="text" class="form-control" id="last_name" v-model="lastName">
              </div>
            </div>
            <div class="form-group profile-form-field">
              <label for="job_title">Role</label>
              <input type="text" class="form-control" id="job_title" v-model="userTitle">
            </div>
            <div class="form-group profile-form-field">
              <label for="bio">About me</label>
              <textarea class="form-control" id="bio" placeholder="I usually work from 9am to 6pm. Give me new tasks and I love binge watching series on Netflix" rows="5" v-model="userBio"></textarea>
            </div>
            <div class="row">
              <div class="form-group profile-form-field col-sm-6">
                <label for="city">City I live in</label>
                <input type="text" class="form-control" id="city" v-model="userCity">
              </div>
              <div class="form-group profile-form-field col-sm-6">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" v-model="userCountry">
              </div>
            </div>
            <div class="bd-callout bd-callout-danger" v-if="error" v-html="error"></div>
            <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': isSubmitting }">
              <template v-if="!isSubmitting">Update</template>
              <template v-else>Updating...</template>
            </button>
          </form>
        </v-tab>

        <v-tab title="Account">
          <form @submit.prevent="savePassword" class="profile-form">
            <div class="form-group profile-form-field">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email" disabled>
            </div>
            <div class="form-group profile-form-field">
              <label for="current_password">Current password</label>
              <input type="password" class="form-control" id="current_password" v-model="currentPassword">
            </div>
            <div class="form-group profile-form-field">
              <label for="new_password">New password</label>
              <input type="password" class="form-control" id="new_password" v-model="newPassword">
            </div>
            <div class="form-group profile-form-field">
              <label for="confirm_password">Confirm new password</label>
              <input type="password" class="form-control" id="confirm_password" v-model="confirmPassword">
            </div>
            <div class="bd-callout bd-callout-danger" v-if="accountError" v-html="accountError"></div>
            <button type="submit" class="btn btn-primary" v-bind:class="{ 'disabled': accountIsSubmitting }">
              <template v-if="!accountIsSubmitting">Update</template>
              <template v-else>Updating...</template>
            </button>
          </form>
          <div>
          </div>
        </v-tab>
      </vue-tabs>
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
    },
    title: {
      type: String,
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
      userPicture: this.user.profilePicture,
      currentPassword: undefined,
      newPassword: undefined,
      confirmPassword: undefined,
      isSubmitting: false,
      accountIsSubmitting: false,
      error: undefined,
      accountError: undefined,
      isUploading: false
    }
  },
  components: {
    SlidePanelHeader
  },
  computed: {
    profilePicture() {
      if (this.userPicture) {
        return `background-image: url('${this.userPicture}')`
      }
      return ''
    }
  },
  methods: {
    savePassword() {
      this.$ga.event('Profile Settings', 'Change password')

      const userPassword = {
        password: this.currentPassword,
        newPassword: this.newPassword
      }

      this.accountError = ''
      this.accountIsSubmitting = true

      if (this.newPassword !== this.confirmPassword) {
        this.accountIsSubmitting = false
        this.accountError = 'The passwords don\'t match. Please make sure you enter the same password.'
        return
      }

      this.$store.dispatch('users/userUpdate', userPassword)
        .then(() => {
          this.accountIsSubmitting = false
          this.onClose(userData)
        })
        .catch((error) => {
          this.accountIsSubmitting = false
          this.accountError = error
        })
    },
    saveSettings() {
      this.$ga.event('Profile Settings', 'Save settings')

      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userTitle: this.userTitle,
        userBio: this.userBio,
        userCity: this.userCity,
        userCountry: this.userCountry,
        userResponsabilities: this.userResponsabilities,
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
    uploadPhoto(event) {
      this.isUploading = true
      this.$ga.event('Profile Settings', 'Upload photo')

      const file = event.target.files[0]
      let formData = new FormData()
      
      formData.append('photo', file);

      this.$store.dispatch('media/uploadProfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.userPicture = response.url
        this.isUploading = false
      })
    },
    clearPhoto() {
      const userData = {
        profilePicture: ''
      }

      this.$store.dispatch('users/userUpdate', userData)
      this.userPicture = ''
      this.$ga.event('Profile Settings', 'Clear photo')
    },
    onClose(options) {
      this.$emit('closePanel', options);
    }
  }
}
</script>