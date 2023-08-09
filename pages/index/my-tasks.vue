<template>
  <div class="content-view-holder">
    <div class="view-heading">
      <div class="heading-title-holder">
        <h1>My Tasks</h1>
        <div class="task-add" v-bind:class="{ 'active': isOpen }" v-on:click="showPanel">
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

        <div class="list" v-for="project in projects" :key="project.id">
          <div class="list-inner">
            <header>{{ project.name }}</header>
            <div class="project-progress-bar progress progress-info">
              <div class="progress-bar" role="progressbar" :style="`width: ${project.progress}%`" :aria-valuenow="`${project.progress}`" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul>
              <draggable v-model="project.tasks" class="task-drag-area" :options="{ group: { name: 'app-dependencies', pull: true, put: true } }"  @end="onEnd">
                <transition-group name="task">
                  <li v-for="task in project.tasks" :key="task.id" class="task-item">
                    <p class="task-due">{{ task.dueAt | remainingTime }} remaining</p>
                    <h3 class="task-title">{{ task.title }}</h3>
                    <div class="task-bottom-holder">
                      <div class="task-assigned">
                        <p>Assigned to</p>
                        <div class="task-profiles">
                          <div v-for="user in task.assignedTo" :key="user.id" class="assigned-profile-holder" :style="`background-image: url('${user.profilePicture}')`"></div>
                        </div>
                      </div>
                      <div class="task-progress" :class="{ 'info': task.status === 'in progress', 'hold': task.status === 'on hold', 'danger': task.status === 'overdue', 'success': task.status === 'completed' }">
                        <p>In progress</p>
                        <span>{{ task.progress }}%</span>
                      </div>
                    </div>
                  </li>
                </transition-group>
              </draggable>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <slideout-panel></slideout-panel>
  </div>
</template>

<script>
import { vueSlideoutPanelService } from 'vue2-slideout-panel'
import AddTask from '~/components/AddTask.vue'
import { orderBy } from 'lodash'
import { mapState } from 'vuex';
import io from 'socket.io-client'
import draggable from 'vuedraggable'

const socket = io(`http://${process.env.API_URL || 'localhost'}:${process.env.API_PORT || 5000}`)

export default {
  head () {
    return {
      title: 'My Tasks'
    }
  },
  data() {
    return {
      isOpen: false,
      filterProjects: false,
      projects: [
        {
          id: 1,
          name: 'Project name',
          progress: '25',
          tasks: [
            {
              id: 1,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 2,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 3,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'Project name',
          progress: '25',
          tasks: [
            {
              id: 4,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-02 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 5,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-07 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 6,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-08-30 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: 'Project name',
          progress: '25',
          tasks: [
            {
              id: 7,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 8,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            },
            {
              id: 9,
              title: 'Lorem ipsum dolor',
              dueAt: '2018-09-23 21:16:56.053519+01',
              status: 'in progress',
              progress: '25',
              assignedTo: [
                {
                  id: 1,
                  name: 'Hugo Carneiro',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                },
                {
                  id: 2,
                  name: 'Miguel Maia',
                  profilePicture: 'http://cdn.colabora.io/logo-tgd.png'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    draggable,
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
    },
    onEnd(e) {
      console.log(e);
      console.log(this.projects)
    },
    showPanel() {
      this.isOpen = true
      vueSlideoutPanelService.show({
          component: AddTask,
          cssClass: 'add-task-overlay',
          props: {
            title: 'Add a task'
          }
        })
      .then(() => {
        this.isOpen = false
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
