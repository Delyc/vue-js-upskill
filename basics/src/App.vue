<template>
  <h1>This is the app page {{email}} {{msg}}  {{getName()}}  {{getAge(5)}}</h1>
  <TestComp msg="working "/>

  <h1>{{getData().class}}</h1>
  <h1>{{getData().email}}</h1>
</template>

<script>

import TestComp from './components/TestComp.vue';
export default {
  name: 'App',
  components: {
    TestComp
  },
  data() {
    return {
      email: 'delyce@gmail.com',
      msg: "tetdsajfjdfn",
      getName(){
        return "delyce"
      }
    }
  },
  methods : {
    getAge(age){
      return age
    },
    getData(){
      return {
        name: "Umuhire",
        class: "year 3",
        email: this.email
      }
    }
  }
}
</script>