<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{
            number:['A','B','C','D']
        }
    },
    methods:{
        // 用點的去下一頁
        gotonext(){
		this.$router.push('/search/searchblock/searchfin')
	}
    }
    

}
</script>
<template>
    <div class="searchblock d-flex" v-for="i in number">
        <RouterLink class="Routers" to="/search/searchfin">
            <div class="leftDiv">
            </div>
        </RouterLink>
        
        <p>
            都心區 {{ i }} 物件
        </p>
        <hr>
    </div>
</template>
<style scoped>

.searchblock{
    width: 50vw;
    padding: 10px;
    margin: 0 auto;
    /* background-color: blue; */
    .leftDiv{
        width:131px;
        height:131px;
        background-color: rgb(82, 70, 152);
        border-radius: 20px;
        margin-right: 50px;
    }

}
p{
    position: relative;
        text-align: start;
        font-size: 24pt;
        color: black;
        &::after{
            position: absolute;
            content: '';
            border-bottom: 2px solid black;
            width: 30vw;
            left: 0;
            top:50px;
        }
    }
</style>