<template>

    {{ data.name==="one" ? `this is ${ data.name }` :  data.name  }}
    <!-- {{ data.name }} -->
    {{ data.age }}
    <button v-on:click="handleClick(data.name)">Alert user name</button>
</template>

<script>
export default {
    name: "Child2",
    props: {
        data: Object,
        handleClick: Function
    },

}
</script>