<template>
  <h1>This is the app page</h1>
  <TestComp msg="working "/>
</template>

<script>

import TestComp from './components/TestComp.vue';
export default {
  name: 'App',
  components: {
    TestComp
  }
}
</script>