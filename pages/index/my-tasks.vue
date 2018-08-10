<template>
  <div class="tasks-view-holder">
    <div class="tasks-heading">
      <div class="heading-title-holder">
        <h1>My Tasks</h1>
        <div class="task-add" v-on:click.prevent="sendTask">
          <i class="fas fa-plus"></i>
        </div>
      </div>
      <div class="heading-filters">
        <div class="task-filter">
          <i class="fas fa-filter"></i>
        </div>
        <div class="project-type-toogle">
          <label for="projects-filters">
            <input type="checkbox" id="projects-filters" v-model="filterProjects"/>
            <span class="filter-slider"></span>
            <span class="filter-label">Projects</span>
            <span class="filter-label">Personal</span>
          </label>
        </div>
      </div>
    </div>
    <div class="tasks-container">
      <div class="lists">
        <div class="list">
          <div class="list-inner">
            <header>Project name</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Header</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Another List</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Just some text</li>
              <li>Just some text</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Header</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Another List</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Just some text</li>
              <li>Yet another card</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Header</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list-inner">
            <header>Another List</header>
            <div class="project-progress-bar progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <li>Just some text</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
              <li>Some more text</li>
              <li>Some more text</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash'
import { mapState } from 'vuex';
import io from 'socket.io-client'

const socket = io(`http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`)

export default {
  async fetch({store}) {
    await store.dispatch('projects/getProjects', {id: 2})
  },
  data() {
    return {
      filterProjects: false
    }
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
  methods: {
    sendTask() {
      const data = {
        "title": "Hello",
        "status": "In progress",
        "projectId": 1,
        "dueAt": "2018-08-07 00:00:00+01"
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
