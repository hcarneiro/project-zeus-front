export const state = () => ({})

export const mutations = {}

export const actions = {
  async userUpdate({commit, rootState}, data) {
    await this.$axios.put(`/v1/users`, data)
      .then((res) => {
        if (res.status === 200) {
          commit('auth/setUser', res.data.user, { root: true })
          return res.data
        }
      })
  }
}