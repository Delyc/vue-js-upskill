<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in allTodos" :key="todo.id">
      {{ todo.title }}

      <h1 @click="deleteTodo(todo.id)">delete</h1>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapActions } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo'])
  },
  computed: mapGetters(['allTodos']),
  created(){
    this.fetchTodos()
  }
}
</script>
