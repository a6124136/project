<script >
        import {RouterLink,RouterView} from 'vue-router';
export default{
    data(){
        return{
        }
    },
    // props從子組件接收父組件傳的資料
    // 註冊名稱cool(陣列的寫法 也能用物件)
    props:{
        cool:Array,
        //陣列嘗試
        title:String,
        // titlle字串來源Album組件(看login)
        signinfo:Object,
        
        stands:{
            type:String,
            default:'no stand',
            // 預設值，沒接受到父組件給的值就輸出這個

        },
        RAWdate:{
            tyoe:Date
            // 也可以傳時間資料(原始版，生肉)
        },

    },
    computed:{
        formalDate(){
            // 這邊重新計算把原始時間資料改成人看得懂的
            return new Date(this.RAWdate).toLocaleString('en-US',{
                month:'long',
                day:'numeric',
                year:'numeric'
            })
        }
    }
}
</script>



<!-- 借一下這個VUE檔測試PROP -->



<template>
    <div class="childbox">
        
        我是子容器 
        我是子件自有的屬性
        <p>
            {{ title }} 
        </p>
        <p>{{ stands }}</p> 
        <P> {{RAWdate}} </P>
        <!-- 這是還未經過計算的時間資料 -->
        <P>{{formalDate}}</P>
        <!-- 這是經過計算的時間資料 -->
        <P>帳號{{cool[0]}}</P>
        <P>密碼{{cool[1]}}</P>
        <P>性別{{cool[2]}}</P>
        <P>年齡{{cool[3]}}</P>
        <P>住址{{cool[4]}}</P>
        <!-- <input type="button" value="按我回去" @click="changePage"> -->
        <!-- <p>陣列測試{{ cool }}</p> -->
        <p>電話 {{cool[5]}}</p>
    </div>

    
</template>

<style scoped>
    .childbox{
        margin: 0 auto;
        width: 500px;
        height: 500px;
        background-color: chocolate;
    }
</style>