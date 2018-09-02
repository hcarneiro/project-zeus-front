import { forEach } from 'lodash'

export const state = () => ({
  userOrganizations: []
})

export const mutations = {
  setUserOrganizations(state, organizations) {
    state.userOrganizations = organizations
  },
  setOrganizationUsers(state, data) {
    forEach(state.userOrganizations, (organization) => {
      if (organization.id === data.organizationId) {
        organization.currentUsers = data.users
      }
    })
  }
}

export const actions = {
  get({commit}) {
    return this.$axios.get('v1/organizations').then((response) => {
      const promises = []
      commit('setUserOrganizations', response.data.organizations)
      response.data.organizations.forEach((organization) => {
        promises.push(
          this.$axios.get(`v1/organizations/${organization.id}/users`).then((response) => {
            commit('setOrganizationUsers', {
              users: response.data.users,
              organizationId: organization.id
            })
          })
        )
      })
      return Promise.all(promises)
    })
  }
}