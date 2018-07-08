<template>
  <div class="sidebar-wrapper">
    <div class="sidebar-logo">
      <h1><span>2</span>DO</h1>
    </div>
    <hr>
    <ul class="sidebar-list">
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Today')">
        <i class="far fa-star fa-fw"></i> Today
      </li>
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Upcoming')">
        <i class="far fa-calendar-alt fa-fw"></i> Upcoming
      </li>
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Completed')">
        <i class="fas fa-check fa-fw"></i> Completed
      </li>
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Trash')">
        <i class="far fa-trash-alt fa-fw"></i> Trash
      </li>
    </ul>
    <div class="sidebar-title-separator">Projects</div>
    <ul class="sidebar-list">
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'My first project')">
        <i class="fas fa-map-pin fa-fw"></i> My first project
      </li>
    </ul>
    <div class="sidebar-title-separator">Personal</div>
    <ul class="sidebar-list">
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Shopping')">
        <i class="fas fa-list-ul fa-fw"></i> Shopping
      </li>
      <li class="sidebar-list-item" @click="$store.commit('setTaskTitle', 'Home decor')">
        <i class="fas fa-list-ul fa-fw"></i> Home decor
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>