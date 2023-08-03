<template>
  <h1>{{ bound }}</h1>

  <input type="text" v-model="bound"/>
  <input type="text" placeholder="enter email" v-model="userEmail"/>
  <br />
  <br />
  <input type="password" placeholder="enter password" v-model="userPassword" />
  <br />
  <br />
<button type="button" v-on:click="getDetails">Get data</button>
  <h1>This is the app page {{email}} {{msg}}  {{getName()}}  {{getAge(5)}}</h1>
  <TestComp msg="working "/>

  <h1>{{getData().class}}</h1>
  <h1>{{getData().email}}</h1>

  <button v-on:click="handleClick()">Click me</button>
  <h2>{{ count}} </h2>

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
      userEmail: null,
      userPassword: null,
      bound: "hello",
      count: 0,
      email: 'delyce@gmail.com',
      msg: "tetdsajfjdfn",
      getName(){
        return "delyce"
      }
    }
  },
  methods : {
    getDetails(){
      console.log("function called", this.userEmail, this.userPassword)
    },
    handleClick(){
      this.count = this.count + 1
    },
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