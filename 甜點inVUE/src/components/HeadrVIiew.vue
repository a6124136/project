<script>
import {RouterLink,RouterView} from 'vue-router';
export default{
    components:{
        RouterLink
    }
}

</script>
<template>
    <header>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/desert">點心</RouterLink>
        <RouterLink class="link" to="/Vbind">V綁定練習</RouterLink>
        <RouterLink class="link" to="/WaterFall">瀑布流</RouterLink>
        <RouterLink class="link" to="/watchandcomputed">watch跟computed</RouterLink>
        <RouterLink class="link" to="/VbindPokemon">V-if跟v-show寶可夢(原本是綁定寶可夢我懶得創新分頁了)</RouterLink>
    </header>
</template>

<style lang="scss" scoped>
    header{
        box-sizing: border-box;
        background-color: aquamarine;
        width: 100vw;
        .link{
            margin-left: 5px;
            text-decoration: none;
            color: darkblue;
            border: 2px solid black;
        }
    }
</style>