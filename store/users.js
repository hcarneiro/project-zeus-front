export const state = () => ({
  users: [],
  currentUser: {},
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async getUsers({commit}) {
    await this.$axios.get(`/v1/users`)
      .then((res) => {
        if (res.status === 200) {
          commit('setUsers', res.data)
        }
      })
  },
  async getUserById({commit}, params) {
    await this.$axios.get(`/v1/users/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
  }
}