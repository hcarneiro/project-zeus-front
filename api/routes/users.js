import axios from '~/plugins/axios'

export default {
  getUsers() {
    return axios.get('/v1/users')
  },
  getUserById(id) {
    return axios.get(`/v1/users/${id}`)
  }
}