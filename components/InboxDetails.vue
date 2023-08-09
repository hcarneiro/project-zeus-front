<template>
  <div class="inbox-list-detail">
    <div class="detail-item-heading">
      <div class="detail-item-type">Task in <span>Update login page</span></div>
      <div class="archive-item">Archive this</div>
    </div>
    <div class="detail-item-title">Research axios.js for endpoint requests</div>
    <div class="detail-item-description">
      <div class="action-user">
        <div class="action">
          <div class="title">John Smith assigned to you</div>
          <div class="project-status success"></div>
          <div class="description">This is all on track to meet the deadline</div>
        </div>
      </div>
    </div>
    <div class="detail-item-footer">
      <div class="detail-item-date">
        Project due on
        <div class="item-due-date">Monday, September 3th 2018</div>
      </div>
      <div class="detail-item-assigned">
        Assigned to
        <div class="user-profiles">
          <div class="assigned-profile-holder" style="background-image: url('http://cdn.colabora.io/logo-200.png')"></div>
          <div class="assigned-profile-holder" style="background-image: url('http://cdn.colabora.io/logo-200.png')"></div>
          <div class="assigned-profile-holder" style="background-image: url('http://cdn.colabora.io/logo-200.png')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    inboxItem: {
      type: Object,
      required: true
    }
  }
}
</script>