<script>
    import {RouterLink,RouterView} from 'vue-router';
    export default{
        components:{
            RouterLink
        }
    }
    
</script>
<template>
    <header class="d-flex">
        <div id="leftBox">
            <!-- 左邊那個正方形 -->
            <RouterLink class="Routers" to="/">按我</RouterLink>
        </div>
        <div id="middlePart">
            <!-- 中間區域 -->
            <h3>會社案內|アクセス</h3>
        </div>
        
        <div id="thePhone">
            <!-- 電話logo -->
            <span style='font-size:60px;'>&#9742;</span>
            <span>010-3456789</span>
        </div>
        <div id="linkDiv">
            <RouterLink class="Routers" to="/login">ログイン</RouterLink>
            <span>｜</span>
            <RouterLink class="Routers" to="/askboard">お問い合わせ</RouterLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    height: 100px;
    align-items: center;
    #leftBox{
        width: 50px;
        height: 50px;
        margin-left: 50px;
        background-color:rgb(82, 70, 152);
        .Routers{
            color: transparent;
            font-size: 24pt;
            // height: 100%;
        }
    }
    #middlePart{
        margin: 0 auto;
    }
    #thePhone{
        box-sizing: border-box;
        width: auto;
        text-align: center;
        align-items: baseline;
        // background-color: green;
        font-size: 24pt;
        margin-right: 20px;
        span{
            margin: 10px;
        }
    }
    #linkDiv{
        background-color:rgb(82, 70, 152);
        padding: 5px;
        border-radius: 5px;
        margin-right:50px ;
        color: #fff;
        .Routers{
            margin: 5px;
            font-size: 14pt;
            color: #fff;
            text-decoration: none;
            font-weight: 900;
        }
    }
}
    
</style>