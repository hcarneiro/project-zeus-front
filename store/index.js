import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      ui: {
        taskTitle: ''
      }
    },
    mutations: {
      setTaskTitle (state, title = '') {
        state.ui.taskTitle = title
      }
    }
  })
}

export default store
