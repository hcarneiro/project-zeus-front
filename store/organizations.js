export const state = () => ({
  userOrganizations: []
})

export const mutations = {
  setUserOrganizations(state, organizations) {
    state.userOrganizations = organizations
  }
}

export const actions = {
  get({commit}) {
    return this.$axios.get('v1/organizations').then((response) => {
      commit('setUserOrganizations', response.data.organizations)
      return Promise.resolve()
    })
  }
}