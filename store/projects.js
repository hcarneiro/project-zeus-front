import { orderBy } from 'lodash'

export const state = () => ({
  list: [],
  project: {},
  projectTasks: []
})

export const mutations = {
  setProjects(state, projects) {
    projects.forEach((project, i) => {
      const orderedTasks = orderBy(project.tasks, (task) => {
        return new Date(task.createdAt).getTime()
      }, ['desc'])
      project.tasks = orderedTasks
    })

    state.list = projects
  },
  setProject(state, project) {
    state.project = project
  },
  setTasks(state, tasks) {
    state.projectTasks = tasks
  },
  addTask(state, task) {
    state.list.forEach((project, i) => {
      if (project.id === task.projectId) {
        state.list[i].tasks.push(task)
        const orderedTasks = orderBy(state.list[i].tasks, (task) => {
          return new Date(task.createdAt).getTime()
        }, ['desc'])
        state.list[i].tasks = orderedTasks
      }
    })
  }
}

export const actions = {
  async getProjects({commit}) {
    await this.$axios.get(`/v1/projects`)
      .then((res) => {
        if (res.status === 200) {
          commit('setProjects', res.data)
        }
      })
  },
  async getProjectsById({commit}, params) {
    await this.$axios.get(`/v1/projects/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('setProject', res.data)
        }
      })
  },
  async getProjectsTasks({commit}, params) {
    await this.$axios.get(`/v1/projects/${params.id}/tasks`)
      .then((res) => {
        if (res.status === 200) {
          commit('setTasks', res.data)
        }
      })
  }
}