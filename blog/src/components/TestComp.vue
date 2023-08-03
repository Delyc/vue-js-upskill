<template>
  <h1>Hello, I am a component {{msg}}</h1>
</template>

<script>
export default {
  name: "TestComp",
  props: {
    msg: String,
  },
};
</script>
