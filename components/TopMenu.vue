<template>
  <div class="main-top-header">
    <div class="top-header-controls">
      <div class="header-search-holder">
        <i class="fas fa-search search-icon"></i>
        <input type="search" class="form-control header-search">
        <i class="fas fa-times clear-icon"></i>
      </div>
    </div>
    <div class="top-header-controls">
      <div class="btn invite-holder">
        <i class="fas fa-plus-circle"></i> Invite team members
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
    }
  }
}
</script>