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
            <div class="card-title">Hugo spends most of their time on...</div>
            <div>Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div>
          </div>
          <div class="profile-card">
            <div class="card-title">Works most with...</div>
            <div class="card-profiles-holder">
              <div class="card-profiles-user">
                <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                <p>John Smith</p>
              </div>
              <div class="card-profiles-user">
                <div class="card-profiles-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
                <p>John Smith</p>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="card-title">In these teams...</div>
            <div class="card-teams-holder">
              <div class="card-team">
                <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
                  <div class="team-info">
                    <p>Product</p>
                    <p>12 members</p>
                  </div>
                </div>
              </div>
              <div class="card-team owner">
                <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
                  <div class="team-info">
                    <p>Growth</p>
                    <p>4 members</p>
                  </div>
                </div>
                <div class="team-owner">Owner</div>
              </div>
              <div class="card-team">
                <div class="card-team-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
                  <div class="team-info">
                    <p>Marketing</p>
                    <p>9 members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-card">
            <div class="card-title">Recent activities</div>
            <div>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
          </div>
        </div>
        <div class="user-details-holder">
          <div class="profile-category">Biography</div>
          <div class="profile-category-content">
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod.</p>
          </div>
          <div class="profile-category">Location</div>
          <div class="profile-category-content">
            <p>London, United Kingdom</p>
          </div>
          <div class="profile-category">Key Responsabilities</div>
          <div class="profile-category-content">
            <span class="label label-success">Design</span><span class="label label-primary">Development</span><span class="label label-yellow">Marketing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSideBar from '~/components/UserSideBar.vue'
import TopMenu from '~/components/TopMenu.vue'

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
  }
}
</script>