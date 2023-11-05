<script >
import {RouterLink,RouterView} from 'vue-router';
import Album from '../components/child.vue'
// 用login.vue當測試
// login跟child為父子關係
export default{
data(){
    return{
    title:'JOJO',
    page:1,
    rawdate:new Date(1986,2,3),
    cool:[],//原本想用陣列船過去 讀不到
    // change:changePage(),//換頁方程式
    // 以下備用
    signinfo:{
        name:"",
        email:"",
        addres:"",
        tel:"",
        gender:"",
        pwd:0,
    },

    }
    },
    methods:{
    changePage(){
        this.page==1? this.page=2:this.page=1
    },
    propPath(){
        this.$router.push('/child')
    }
    },
    components:{
        Album
    }
}

</script>

<template>
    <!-- <RouterLink class="Routers" to="/login/child">按我下方顯示子組件，上方改URL</RouterLink> -->
    <input type="button" value="按我送出" @click="changePage">
    <div class="fatherinput" v-if="page==1">
        <div class="singleInput">
            <label for="">
                帳號
            </label>
            <input type="email" v-model="cool[0]">
        </div>
        <div class="singleInput">
            <label for="">
                密碼
            </label>
            <input type="password" v-model="cool[1]">
        </div>
        <div class="singleInput">
            <label for="">
                性別
            </label>
            <span>雄</span>
            <input type="radio" value="雄" v-model="cool[2]">
            <span>雌</span>
            <input type="radio" value="雌"  v-model="cool[2]">
        </div>
        <div class="singleInput">
            <label for="">
                年齡
            </label>
            <input type="number" v-model="cool[3]">
        </div>
        <div class="singleInput">
            <label for="">
                住址
            </label>
            <input type="text" v-model="cool[4]">
        </div>
        <div class="singleInput">
            <label for="">
                電話
            </label>
            <input type="number" v-model="cool[5]">
        </div>

        {{ cool }}
    </div>



    <Album :cool="cool" v-else-if="page==2" ></Album>
    <!-- 這邊的cool當成子元件的props的cool -->


    <!-- <RouterView></RouterView> -->
</template>



<style lang="scss" scoped>
    .fatherinput{
        width:500px ;
        height:500px ;
        margin: 0 auto;
        background-color: burlywood;   
    }
</style>