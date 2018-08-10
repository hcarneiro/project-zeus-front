<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo-holder">
      <div class="sidebar-logo"></div>
    </div>
    <ul class="sidebar-list">
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/my-tasks'">
        <i class="fas fa-th-list fa-fw"></i> My Tasks
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/inbox'">
        <i class="fas fa-inbox fa-fw"></i> Inbox <span class="inbox-badge badge badge-warning">6</span>
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/dashboard'">
        <i class="fas fa-tachometer-alt fa-fw"></i> Dashboard
      </nuxt-link>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapseProjects" v-bind:class="{ 'is-open': projectsIsActive }" v-on:click="projectsIsActive = !projectsIsActive">
        <i class="fas fa-rocket fa-fw"></i> Projects <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapseProjects">
        <div class="collapse-body">
          Anim pariatur cliche reprehenderit.
        </div>
      </div>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapsePersonal" v-bind:class="{ 'is-open': personalIsActive }" v-on:click="personalIsActive = !personalIsActive">
        <i class="fas fa-edit fa-fw"></i> Personal <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapsePersonal">
        <div class="collapse-body">
          Anim pariatur cliche reprehenderit.
        </div>
      </div>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapseTeams" v-bind:class="{ 'is-open': teamsIsActive }" v-on:click="teamsIsActive = !teamsIsActive">
        <i class="fas fa-users fa-fw"></i> Teams <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapseTeams">
        <div class="collapse-body">
          Anim pariatur cliche reprehenderit.
        </div>
      </div>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/logout'">
        <i class="fas fa-sign-out-alt"></i> Logout
      </nuxt-link>
    </ul>
    <div class="sidebar-bottom-holder">
      <div class="organizations-m-title">Manage organizations</div>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapseOrganizations" v-bind:class="{ 'is-open': organizationsIsActive }" v-on:click="organizationsIsActive = !organizationsIsActive">
        Organization name <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapseOrganizations">
        <div class="collapse-body">
          Anim pariatur cliche reprehenderit.
        </div>
      </div>
      <div class="copyright">Project Zeus &copy; {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      personal: [],
      projectsIsActive: false,
      personalIsActive: false,
      teamsIsActive: false,
      organizationsIsActive: false
    }
  },
  methods: {

  }
}
</script>