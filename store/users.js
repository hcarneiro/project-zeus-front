export const state = () => ({
  users: [],
  user: {},
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setUser(state, user) {
    state.user = user
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
          commit('setUser', res.data)
        }
      })
  }
}