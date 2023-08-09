<template>
  <div class="user-profile-container">
    <div class="user-profile-sidebar">
      <user-side-bar/>
    </div>
    <div class="profile-view-holder">
      <top-menu/>
      <div class="profile-view">
        <div class="user-profile-dashboard">
          <div class="profile-card">
            <div class="card-title">{{ userFirstName }} spends most of their time on...</div>
            <div>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div>
          </div>
          <div class="profile-card">
            <div class="card-title">Works most with...</div>
            <div class="card-profiles-holder">
              <div class="card-profiles-user">
                <div class="card-profiles-picture-holder">
                  <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture-holder">
                  <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture-holder">
                  <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture-holder">
                  <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture-holder">
                  <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <p>John Smith</p>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="card-title">In these teams...</div>
            <div class="card-teams-holder">
              <div class="card-team">
                <div class="card-team-picture-holder">
                  <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="team-info">
                  <p>Product</p>
                  <p>12 members</p>
                </div>
                <div class="team-owner">Owner</div>
              </div>
              <div class="card-team owner">
                <div class="card-team-picture-holder">
                  <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="team-info">
                  <p>Product</p>
                  <p>12 members</p>
                </div>
                <div class="team-owner">Owner</div>
              </div>
              <div class="card-team">
                <div class="card-team-picture-holder">
                  <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="team-info">
                  <p>Product</p>
                  <p>12 members</p>
                </div>
                <div class="team-owner">Owner</div>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="card-title">Recent activities</div>
            <div>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
          </div>
        </div>
        <div class="user-details-holder">
          <template v-if="userBio">
            <div class="profile-category">Biography</div>
            <div class="profile-category-content" v-html="userBio"></div>
          </template>
          <template v-if="userLocation">
            <div class="profile-category">Location</div>
            <div class="profile-category-content">
              <p>{{ userLocation }}</p>
            </div>
          </template>
          <div class="profile-category">Key Responsabilities</div>
          <div class="profile-category-content">
            <span v-for="(responsability, index) in userResponsabilities" class="label" v-bind:class="getRandomColor()" v-bind:key="index">{{ responsability.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSideBar from '~/components/UserSideBar.vue'
import TopMenu from '~/components/TopMenu.vue'
import { mapState } from 'vuex';

const labelColors = [
  'label-success',
  'label-warning',
  'label-primary',
  'label-yellow',
  'label-danger'
]

export default {
  layout: 'profile',
  data() {
    return {
    }
  },
  head () {
    return {
      title: 'My profile'
    }
  },
  components: {
    UserSideBar,
    TopMenu
  },
  computed: {
    ...mapState({
      userFirstName: state => {
        return state.auth.currentUser.firstName
      },
      userBio: state => {
        if (state.auth.currentUser.userBio) {
          return state.auth.currentUser.userBio.html
        }
      },
      userLocation: state => {
        let city;
        let country;

        if (state.auth.currentUser.userCity) {
          city = state.auth.currentUser.userCity
        }

        if (state.auth.currentUser.userCountry) {
          country = state.auth.currentUser.userCountry
        }

        if (city && country) {
          return `${city}, ${country}`
        }
      },
      userResponsabilities: state => {
        if (state.auth.currentUser.userResponsabilities) {
          return state.auth.currentUser.userResponsabilities
        }
      }
    })
  },
  methods: {
    getRandomColor() {
      return labelColors[Math.floor(Math.random() * labelColors.length)]
    }
  }
}
</script>