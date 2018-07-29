<template>
  <div class="page-holder">
    <top-menu :title="'My Tasks'"/>
    <div class="tasks-view-holder">
      <div class="tasks-container">
        <ul>
          <div v-for="project in projects" :key="project.id" class="project-holder">
            <h4 class="task-project-title">{{ project.name }}</h4>
            <li v-for="task in project.tasks" class="task-card" :key="task.id">
              <div class="task-controls">
                <div class="task-status-date" v-bind:class="task.status | convertToClass">
                  <div class="task-status">{{ task.status }}</div>
                  <div class="task-date">{{ task.dueDate | dueDate }}</div>
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
import users from '~/api/routes/users'

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'My new project',
          tasks: [
            {
              id: 10,
              title: 'Aenean Ultricies Quam',
              status: 'In progress',
              dueDate: '2018-08-10'
            }
          ]
        },
        {
          id: 2,
          name: 'My other project',
          tasks: [
            {
              id: 11,
              title: 'Elit Cras Tellus Ipsum',
              status: 'In progress',
              dueDate: '2018-08-09'
            },
            {
              id: 12,
              title: 'Vestibulum Tristique Elit',
              status: 'Overdue',
              dueDate: '2018-08-01'
            },
            {
              id: 13,
              title: 'Nibh Consectetur',
              status: 'On hold',
              dueDate: '2018-08-09'
            }
          ]
        }
      ]
    }
  },
  head () {
    return {
      title: 'My Tasks'
    }
  },
  components: {
    TopMenu
  }
}
</script>
