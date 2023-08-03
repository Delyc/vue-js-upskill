<template>
  <h1>this is a child component created by {{ age }} {{name}} {{bound}} {{userDetails.age}}</h1>
  <button v-on:click="getData()">click me </button>
</template>

<script>
export default {
  name: "Child",
  props: {
    name: String,
    bound: String,
    userDetails: Object,
    getData: Function,
    age: Number
  },
};
</script>
