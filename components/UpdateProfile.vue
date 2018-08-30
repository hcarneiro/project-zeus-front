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
              <label>About me</label>
              <div id="editor"></div>
              <div id="toolbar" v-click-outside="vcoConfig">
                <button class="quill-button ql-bold" data-toggle="tooltip" data-placement="top" :title="`Bold ${OSKey} + B`"></button>
                <button class="quill-button ql-italic" data-toggle="tooltip" data-placement="top" :title="`Italics ${OSKey} + I`"></button>
                <button class="quill-button ql-underline" data-toggle="tooltip" data-placement="top" :title="`Underline ${OSKey} + U`"></button>
                <button class="quill-button ql-clean" data-toggle="tooltip" data-placement="top" title="Clear formatting"></button>
                <div class="quill-button emoji-trigger" :class="{ 'triggered': showEmojiPicker }" @mousedown.prevent="toggleEmojiPicker" data-toggle="tooltip" data-placement="top" title="Emojis">
                  <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                    <path fill="#888888" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                  </svg>
                </div>
                <picker v-show="showEmojiPicker" color="#03A9F4" title="Pick an emoji" emoji="point_up" @select="addEmoji" />
              </div>
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
import 'quill-emoji/dist/quill-emoji'
import { Picker } from 'emoji-mart-vue'

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
      isUploading: false,
      OSKey: navigator.platform.indexOf('Mac') > -1 ? '⌘' : 'ctrl',
      showEmojiPicker: false,
      quillEditor: undefined,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'align': [] }],
            ['clean'],
            ['link']
          ]
        },
        theme: 'bubble'
      },
      vcoConfig: {
        handler: this.closeEmojis,
        middleware: this.middleware,
        events: ['dblclick']
      }
    }
  },
  components: {
    SlidePanelHeader,
    Picker
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
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker
    },
    closeEmojis() {
      this.showEmojiPicker = false
    },
    middleware () {
      return true
    },
    addEmoji(emoji) {
      this.quillEditor.focus();
      const range = this.quillEditor.getSelection()

      this.quillEditor.insertText(range.index, emoji.native)
      this.toggleEmojiPicker()
    },
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
      
      // Get user bio data
      const delta = this.quillEditor.getContents()
      const userBio = {
        delta: delta,
        html: this.quillEditor.root.innerHTML
      }

      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userTitle: this.userTitle,
        userBio: userBio,
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
    },
    setupQuill() {
      this.quillEditor = new Quill('#editor', {
        modules: {
          toolbar: {
            container: '#toolbar'
          },
          magicUrl: true,
          markdownShortcuts: {},
          short_name_emoji: true
        },
        theme: 'snow'
      })

      this.quillEditor.on('text-change', () => {
        this.showEmojiPicker = false
      });

      this.quillEditor.setContents(this.userBio.delta)
    }
  },
  mounted() {
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' })

    this.setupQuill()
  }
}
</script>