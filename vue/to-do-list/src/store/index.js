import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    add_new_todo (state, todo) {
      state.todos.push(todo)
    },
    remove_todo (state, index) {
      state.todos.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
