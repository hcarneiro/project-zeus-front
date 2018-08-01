import axios from '~/plugins/axios'

export default {
  getTasks() {
    return axios.get('/v1/tasks').then((response) => {
      return Promise.resolve(response.data)
    })
  },
  getTasksById(id) {
    return axios.get(`/v1/tasks/${id}`).then((response) => {
      return Promise.resolve(response.data)
    })
  }
}