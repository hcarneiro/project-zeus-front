<template>
  <div class="sidebar-wrapper">
    <div class="user-profile-picture-holder">
      <nuxt-link class="go-back" tag="div" :to="'/'">
        <i class="fas fa-arrow-left"></i>
      </nuxt-link>
      <div class="user-profile-picture" style="background-image: url('https://images.pexels.com/photos/160426/lead-man-sun-sunglasses-160426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"></div>
      <div class="edit-profile">
        <i class="fas fa-pen"></i>
      </div>
    </div>
    <div class="user-profile-info">
      <div class="user-name">Hugo Carneiro</div>
      <div class="user-title">Frontend Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>