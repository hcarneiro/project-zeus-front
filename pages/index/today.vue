<template>
  <div class="tasks-view-holder">
    <div class="tasks-header">
      <h3 class="tasks-title">Today</h3>
      <div class="tasks-controls">
        <div class="btn btn-primary custom-btn">Add task</div>
      </div>
    </div>
    <div class="tasks-container">
      <ul>
        <template v-for="users in users">
          <nuxt-link class="task-item" tag="li" :key="users.id" :to="'/users/'+users.id">
            <i class="fas fa-grip-vertical fa-fw rearrange"></i>
            <i class="far fa-check-circle markable"></i>
            <p>{{ users.name }}</p>
          </nuxt-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: '2DO - Today'
    }
  }
}
</script>
