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
          <ul>
            <div v-if="!projects.length" class="btn btn-secondary">Create a project</div>
            <nuxt-link v-for="project in projects" :key="project.id" class="sidebar-list-subitem" active-class="active" tag="li" :to="`/project/${project.id}`">{{ project.name }}</nuxt-link>
          </ul>
        </div>
      </div>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapsePersonal" v-bind:class="{ 'is-open': personalIsActive }" v-on:click="personalIsActive = !personalIsActive">
        <i class="fas fa-edit fa-fw"></i> Personal <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapsePersonal">
        <div class="collapse-body">
          <div v-if="!personal.length" class="btn btn-secondary">Create a task</div>
        </div>
      </div>
      <li class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapseTeams" v-bind:class="{ 'is-open': teamsIsActive }" v-on:click="teamsIsActive = !teamsIsActive">
        <i class="fas fa-users fa-fw"></i> Teams <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapseTeams">
        <div class="collapse-body">
          <div v-if="!teams.length" class="btn btn-secondary">Create a team</div>
          <ul>
            <nuxt-link v-for="team in teams" :key="team.id" class="sidebar-list-subitem" active-class="active" tag="li" :to="`/team/${team.id}`">{{ team.name }}</nuxt-link>
          </ul>
        </div>
      </div>
    </ul>
    <div class="sidebar-bottom-holder">
      <div class="organizations-m-title">Manage organizations</div>
      <li v-if="organizations.length < 2" class="sidebar-list-item">{{ organizationName }}</li>
      <li v-else class="sidebar-list-item collapsed" data-toggle="collapse" data-target="#collapseOrganizations" v-bind:class="{ 'is-open': organizationsIsActive }" v-on:click="organizationsIsActive = !organizationsIsActive">
        {{ organizations[0].name }} <i class="sidebar-chevron fas fa-chevron-down"></i>
      </li>
      <div class="sidebar-collapse collapse" id="collapseOrganizations">
        <div class="collapse-body">
          <li v-for="(organization, index) in organizations" v-if="index > 0" v-bind:key="organization.id">{{ organization.name }}</li>
        </div>
      </div>
      <div class="copyright">Colabora &copy; {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { orderBy } from 'lodash';

export default {
  data() {
    return {
      personal: [],
      projectsIsActive: false,
      personalIsActive: false,
      teamsIsActive: false,
      organizationsIsActive: false
    }
  },
  computed: {
    ...mapState({
      organizations: state => {
        return state.organizations.userOrganizations
      },
      projects: state => {
        const projects = orderBy(state.projects.list, ['name'], ['asc'])
        return projects
      },
      teams: state => {
        return state.teams.list
      }
    }),
    organizationName() {
      if (this.organizations.length) {
        return this.organizations[0].name
      }
    }
  }
}
</script>