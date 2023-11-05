<!-- 這邊是要接收老爸的子元件 -->


<script >
        // import {RouterLink,RouterView} from 'vue-router';
export default{
    data(){
        return{
        }
    },
    // props從子組件接收父組件傳的資料
    // 註冊名稱JOJO(陣列的寫法 也能用物件)
    props:{
        fatherGift:{
            type:Object,
            default:'沒接到老爸的禮物欸?'
            // 爽阿 接到囉
        }

    }
}
</script>



<!-- 借一下這個VUE檔測試PROP -->



<template>
    <div class="childbox">  
        <!-- →詳細資料:{{fatherGift}} -->
        接收父元件(props)來的資料↓
        <p>帳號:{{ fatherGift.acc }}</p>
        <p>密碼:{{ fatherGift.pwd }}</p>
        <p>信箱:{{ fatherGift.mail }}</p>
        <p>性別:{{ fatherGift.gender }}</p>
        <p>年齡:{{ fatherGift.age }}</p>
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