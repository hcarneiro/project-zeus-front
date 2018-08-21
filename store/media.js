export const state = () => ({})

export const mutations = {}

export const actions = {
  uploadProfile({commit, dispatch, rootState}, file) {
    const userData = {
      profilePicture: ''
    }

    return this.$axios.post(`/v1/upload/profile`, file)
      .then((res) => {
        if (res.status === 200) {
          userData.profilePicture = res.data.url
          commit('auth/setUserPhoto', res.data.url, { root: true })
          dispatch('users/userUpdate', userData, { root: true })
          return res.data
        }
      })
  }
}