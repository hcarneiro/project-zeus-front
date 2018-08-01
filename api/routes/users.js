import axios from '~/plugins/axios'

export default {
  getUsers() {
    return axios.get('/v1/users').then((response) => {
      return Promise.resolve(response.data)
    })
  },
  getUserById(id) {
    return axios.get(`/v1/users/${id}`).then((response) => {
      return Promise.resolve(response.data)
    })
  }
}