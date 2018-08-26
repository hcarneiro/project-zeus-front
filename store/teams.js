export const state = () => ({
  list: []
})

export const mutations = {
  setTeams(state, teams) {
    state.list = teams
  }
}

export const actions = {
  async getTeams({commit}) {
    await this.$axios.get(`/v1/teams`)
      .then((res) => {
        if (res.status === 200) {
          commit('setTeams', res.data)
        }
      })
  }
}