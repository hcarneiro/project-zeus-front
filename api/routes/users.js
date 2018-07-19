import axios from '~/plugins/axios'

export default {
  getUsers() {
    return axios.get('/users')
  }
}