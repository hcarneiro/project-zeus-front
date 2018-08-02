<template>
  <div class="page-holder">
    <top-menu :title="'My Tasks'"/>
    <div class="tasks-view-holder">
      <div class="tasks-container">
        <button class="btn btn-primary" v-on:click.prevent="sendTask">New task</button>
        <ul>
          <div v-for="project in projects" :key="project.id" class="project-holder">
            <h4 class="task-project-title">{{ project.name }}</h4>
            <li v-for="task in project.tasks" class="task-card" :key="task.id">
              <div class="task-controls">
                <div class="task-status-date" v-bind:class="task.status | convertToClass">
                  <div class="task-status">{{ task.status }}</div>
                  <div class="task-date">{{ task.dueAt | formatDate }}</div>
                </div>
                <div class="task-options">
                  <div class="btn complete-toggle">Mark as completed</div>
                  <div class="task-more">
                    <i class="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
              <p class="task-title">{{ task.title }}</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from '~/components/TopMenu.vue'
import { orderBy } from 'lodash'
import {mapState} from 'vuex';
import io from 'socket.io-client'

const socket = io(`http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`)

export default {
  async fetch({store}) {
    await store.dispatch('projects/getProjects', {id: 2})
  },
  head () {
    return {
      title: 'My Tasks'
    }
  },
  computed: {
    ...mapState({
      projects: state => {
        return state.projects.list
      }
    })
  },
  components: {
    TopMenu
  },
  methods: {
    sendTask() {
      const data = {
        "title": "Hello",
        "status": "In progress",
        "projectId": 2
      }

      this.$store.dispatch('tasks/addTask', data)
        .then((task) => {
          socket.emit('NEW TASK', task)
        })
    }
  },
  mounted() {
    socket.on('TASK', (task) => {
      this.$store.commit('projects/addTask', task)
    })
  }
}
</script>
