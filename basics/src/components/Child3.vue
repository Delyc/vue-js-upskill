<template>
    <h1>Ima child {{age}}</h1>
    <button>Send age to parent</button>
</template>

<script>

export default{
    name: 'Child3',
    date(){
        return {
                age: 5
        }
    }

}
</script>