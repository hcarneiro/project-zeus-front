<template>
  <div class="tasks-view-holder">
    <div class="tasks-header">
      <h3 class="tasks-title">Completed</h3>
      <div class="tasks-controls">
        <div class="btn btn-primary custom-btn">Add task</div>
      </div>
    </div>
    <div class="tasks-container">
      <ul>
        <li class="task-item">
          <i class="fas fa-grip-vertical fa-fw rearrange"></i>
          <i class="far fa-check-circle markable"></i>
          <p>My new task for today</p>
        </li>
        <li class="task-item">
          <i class="fas fa-grip-vertical fa-fw rearrange"></i>
          <i class="far fa-check-circle markable"></i>
          <p>My new task for today</p>
        </li>
        <li class="task-item">
          <i class="fas fa-grip-vertical fa-fw rearrange"></i>
          <i class="fas fa-check-circle markable"></i>
          <p>My new task for today</p>
        </li>
        <li class="task-item">
          <i class="fas fa-grip-vertical fa-fw rearrange"></i>
          <i class="far fa-check-circle markable"></i>
          <p>My new task for today</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  head () {
    return {
      title: '2DO - Completed'
    }
  }
}
</script>
