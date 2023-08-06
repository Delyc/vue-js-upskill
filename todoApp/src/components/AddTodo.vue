<template>
    <div>

        <h1>Add todo</h1>

        <form @submit="onSubmit">
            <input type="text" placeholder="add todo" v-model="title"/>
            <input value="Submit" type="submit" /> 
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AddTodo",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault()
            this.addTodo(this.title)
        }
    },
    
}
</script>