<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';

export default{
  components: {
    Todos,
    AddTodo
  }
}
</script>

<template>

  <div>
    <AddTodo />
    <Todos />
  </div>

</template>

