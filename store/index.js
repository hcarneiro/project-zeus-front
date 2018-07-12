import Vuex from 'vuex'
import axios from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: []
    },
    mutations: {
      setUsers: (state, users) => {
        state.users = users
      }
    },
    actions: {
      async getUsers ({commit}) {
        let {data} = await axios.get('/api/users')
        commit('setUsers', data)
      }
    }
  })
}

export default createStore
