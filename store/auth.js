import Cookies from 'js-cookie'
import moment from 'moment'

const COOKIE_EXPIRE_DAYS = 30

export const state = () => ({
  currentUser: {},
  verified: false,
  authenticated: false,
  auth_token: ''
})

export const mutations = {
  setUser(state, user) {
    state.currentUser = user
  },
  setVerified(state, status) {
    state.verified = status
  },
  setAuthenticated(state, status) {
    state.authenticated = status
  },
  setAuthToken(state, token) {
    state.auth_token = token
  }
}

export const actions = {
  login({commit, dispatch}, credentials) {
    credentials = credentials || {}

    return this.$axios.post(`/v1/auth/login`, credentials)
      .then((res) => {
        return res
      })
      .then((response) => {
        dispatch('onLogin', response.data.auth_token, credentials)
        return response.data
      })
  },
  onLogin({commit}, authToken, options) {
    if (!authToken) {
      throw new Error('Cannot login with no authToken')
    }

    commit('setVerified', true)
    commit('setAuthenticated', true)
    commit('setAuthToken', authToken)

    const remember = options ? options.remember : Cookies.get('_remember')

    if (Cookies.get('_remember') || remember) {
      Cookies.set('_remember', remember ? 'true' : '', {
        expires: remember ? COOKIE_EXPIRE_DAYS : undefined
      })
    }

    Cookies.set('_auth_token', authToken, {
      expires: Cookies.get('_remember') ? COOKIE_EXPIRE_DAYS : undefined
    })
  },
  verifyUser({state, commit, dispatch}, forceCheck, setCookie) {
    if (!state.authenticated) {
      commit('setAuthToken', Cookies.get('_auth_token'))
      commit('setAuthenticated', !!state.auth_token)
    }

    if (!state.authenticated && !forceCheck) {
      return 'You are not signed in. Please sign in.'
    }

    const params = { _: moment().unix() }

    if (setCookie) {
      params.auth_token = state.auth_token
      params.setCookie = true
    }

    return this.$axios.get(`v1/users`, { params }).then((response) => {
      return response
    })
      .then((response) => {
        const user = response.data.user
        const session = response.data.session

        commit('setUser', user)
        dispatch('onLogin', session && session.auth_token || user.auth_token)
        return
      })
      .catch((err) => {
        if (!forceCheck) {
          // @TODO dispatch logout
          console.log('Dispatch Logout')
        }
        return err
      })
  }
}