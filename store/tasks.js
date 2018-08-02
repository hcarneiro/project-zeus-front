export const state = () => ({
  list: [],
  task: {}
})

export const mutations = {
  setTasks(state, tasks) {
    state.list = tasks
  },
  setTask(state, task) {
    state.task = task
  }
}

export const actions = {
  async getTasks({commit}) {
    await this.$axios.get(`/v1/tasks`)
      .then((res) => {
        if (res.status === 200) {
          commit('setTasks', res.data)
        }
      })
  },
  async getTasksById({commit}, params) {
    await this.$axios.get(`/v1/tasks/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setTask', res.data)
        }
      })
  },
  addTask({commit}, data) {
    return this.$axios.post(`/v1/tasks`, data)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
  }
}