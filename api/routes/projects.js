import axios from '~/plugins/axios'

export default {
  getProjects() {
    return axios.get('/v1/projects').then((response) => {
      return Promise.resolve(response.data)
    })
  },
  getProjectsById(id) {
    return axios.get(`/v1/projects/${id}`).then((response) => {
      return Promise.resolve(response.data)
    })
  },
  getProjectsTasks(id) {
    return axios.get(`/v1/projects/${id}/tasks`).then((response) => {
      return Promise.resolve(response.data)
    })
  }
}