<template>
    {{ data.name }}
</template>

<script>
export default {
    name: "Child2",
    props: {
        data: Object
    }
}
</script>