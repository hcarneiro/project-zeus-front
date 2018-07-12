<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo">
      <h1><span>2</span>DO</h1>
    </div>
    <hr>
    <ul class="sidebar-list">
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/today'">
        <i class="far fa-star fa-fw"></i> Today
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/upcoming'">
        <i class="far fa-calendar-alt fa-fw"></i> Upcoming
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/completed'">
        <i class="fas fa-check fa-fw"></i> Completed
      </nuxt-link>
      <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/trash'">
        <i class="far fa-trash-alt fa-fw"></i> Trash
      </nuxt-link>
    </ul>
    <template v-if="projects.length">
      <div class="sidebar-title-separator">Projects</div>
      <ul class="sidebar-list">
        <template v-for="project in projects">
          <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/projects/' + project.slug" :key="project.id">
            <i class="fas fa-map-pin fa-fw"></i>{{ project.name }}
          </nuxt-link>
        </template>
      </ul>
    </template>
    <template v-if="projects.length">
      <div class="sidebar-title-separator">Personal</div>
      <ul class="sidebar-list">
        <template v-for="personalTaskList in personalTasksLists">
          <nuxt-link class="sidebar-list-item" active-class="active" tag="li" :to="'/personal/' + personalTaskList.slug" :key="personalTaskList.id">
            <i class="fas fa-list-ul fa-fw"></i>{{ personalTaskList.name }}
          </nuxt-link>
        </template>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      personalTasksLists: []
    }
  }
}
</script>