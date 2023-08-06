import axios from 'axios'

/* eslint-disable no-unused-vars */

const state = {
  todos: [

  ]
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos ({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit ('setTodos', res.data)
    },

    async addTodo ({ commit}, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('newTodo', res.data)

    },

    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit ('removeTodo', id)
    }
}

// in the mutation, todos is res.data and then we assign it to the state

const mutations = {
    setTodos : (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !==id)
}

export default {
  state,
  getters,
  actions,
  mutations
}
