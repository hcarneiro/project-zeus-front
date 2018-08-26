<template>
  <div class="content-view-holder">
    <div class="view-heading">
      <div class="heading-title-holder inbox-page">
        <h1>Inbox</h1>
        <div class="archive-activity">Archive all</div>
      </div>
      <div class="heading-filters">
        <div class="task-filter">
          <i class="fas fa-filter"></i>
        </div>
        <div class="project-type-toogle">
          <label for="projects-filters">
            <input type="checkbox" id="projects-filters" v-model="filterInbox"/>
            <span class="filter-slider"></span>
            <span class="filter-label">Activity</span>
            <span class="filter-label">Archive</span>
          </label>
        </div>
      </div>
    </div>

    <div class="inbox-view-holder">
      <div class="inbox-list">
        <ul>
          <li class="inbox-item new">
            <div class="inbox-item-heading">
              <div class="inbox-item-type">Task in <span>Website launch</span></div>
              <div class="inbox-item-date">Monday at 13:32</div>
            </div>
            <div class="inbox-item-title">Redesign icons</div>
            <div class="inbox-item-description">
              <div class="action-user">
                <div class="profile-holder">
                  <div class="profile-picture" style="background-image: url('http://cdn.colabora.io/logo-200.png');"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="action">
                  <div class="title">John Smith assigned to you</div>
                </div>
              </div>
            </div>
          </li>

          <li class="inbox-item">
            <div class="inbox-item-heading">
              <div class="inbox-item-type">Project in <span>Product</span></div>
              <div class="inbox-item-date">2018-08-13 . 13:32</div>
            </div>
            <div class="inbox-item-title">Update developer tools</div>
            <div class="inbox-item-description">
              <div class="action-user">
                <div class="profile-holder">
                  <div class="profile-picture" style="background-image: url('http://cdn.colabora.io/logo-200.png');"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="action">
                  <div class="title">John Smith added new task</div>
                  <div class="description">Go over research of possible frameworks</div>
                </div>
              </div>
            </div>
          </li>

          <li class="inbox-item">
            <div class="inbox-item-heading">
              <div class="inbox-item-type">Project in <span>Marketing</span></div>
              <div class="inbox-item-date">Monday at 13:32</div>
            </div>
            <div class="inbox-item-title">Website launch</div>
            <div class="inbox-item-description">
              <div class="action-user">
                <div class="profile-holder">
                  <div class="profile-picture" style="background-image: url('http://cdn.colabora.io/logo-200.png');"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="action">
                  <div class="title">John Smith updated project status <div class="project-status success"></div></div>
                  <div class="description">This is all on track to meet the deadline</div>
                </div>
              </div>
            </div>
          </li>

          <li class="inbox-item">
            <div class="inbox-item-heading">
              <div class="inbox-item-type">Task in <span>Update login page</span></div>
              <div class="inbox-item-date">Monday at 13:32</div>
            </div>
            <div class="inbox-item-title">Research axios.js for endpoint requests</div>
            <div class="inbox-item-description">
              <div class="action-user">
                <div class="profile-holder">
                  <div class="profile-picture" style="background-image: url('http://cdn.colabora.io/logo-200.png');"></div>
                  <i class="far fa-user"></i>
                </div>
                <div class="action">John Smith assigned to you</div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <Inbox-Details :inboxItem="inboxItem"></Inbox-Details>
    </div>

  </div>
</template>

<script>
import InboxDetails from '~/components/InboxDetails.vue'
import io from 'socket.io-client'

const socket = io(`http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`)

export default {
  data() {
    return {
      filterInbox: false,
      inboxItem: {
        headingType: 'Project',
        headingContent: 'Marketing',
        itemTitle: 'Website launch',
        action: {
          user: {
            picture: 'http://cdn.colabora.io/logo-200.png',
            name: 'John Smith updated project status',
          },
          status: 'success',
          description: 'This is all on track to meet the deadline'
        }
      }
    }
  },
  head () {
    return {
      title: 'Inbox'
    }
  },
  components: {
    InboxDetails
  },
  methods: {
  }
}
</script>
