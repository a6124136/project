<!-- 這邊被徵用來玩父傳子子傳父了 -->

<script >
import {RouterLink,RouterView} from 'vue-router'
import emitchild from '../components/toFatherChild.vue'
import propschild from '../components/fromFather.vue'
    export default{
        data(){
            return{
                page:true,//切換頁開關
                // 這邊接收toFather這個子元件emit傳來的資料，然後再傳給fromFather這個子元件的props應用
                father:{
                    acc:'',
                    pwd:'',
                    mail:'',
                    gender:'',
                    age:0,
                }
            }
        },
        components:{
            emitchild,
            propschild
        },
        methods:{
            changeState(arg){
                this.father.acc=arg.acc
                this.father.pwd=arg.pwd
                this.father.mail=arg.mail
                this.father.gender=arg.gender
                this.father.age=arg.age

                // console.log('123')確認收到了，@方法要寫在子組件的標籤上，不然不能作用
            }
        }

    }

</script>

<template>
    
    <input type="button" value="換頁囉寶貝" @click="page=!page" >


    <span >測試是否有傳值過來帳號:{{father.acc}} 密碼:{{ father.pwd }} 信箱:{{ father.mail }} 性別:{{ father.gender }} 年齡:{{ father.age }}</span>

    <!-- 原本用v-if v-else-if做切換，但切換會生成新的子元件導致輸入資料丟失，所以改用show -->
    <emitchild v-show="page" @turnState="changeState">
        <!-- 這邊是emit 子傳父 -->
    </emitchild>
    
    <propschild v-show="!page" :fatherGift="father"> 
        <!-- 這邊是props 父傳子 綁定的名字fatherGift是在子元件props內的命名  father是父元件要傳過去的資料 -->
    </propschild>
</template>

<style lang="scss" scoped>

</style>