<script>
    import { RouterLink,RouterView } from 'vue-router';
    export default {
        components:{
            RouterLink
        }
    }
</script>


<template>
        <RouterLink class="Routers" to="/">回家囉</RouterLink>
        <RouterLink class="Routers" to="/Test">前往測試</RouterLink>

</template>

<style lang="scss" scoped>
    .Routers{
        background-color: aquamarine;
        margin: 50px;
    }
</style>