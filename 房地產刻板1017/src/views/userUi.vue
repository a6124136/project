<script >
    export default{
        data(){
            return{
                sixDiv:['お気に入り物件','お気に入りタッグ','ユーザー設定','XXXXXX','OOOOOO','お問い合わせ履歴']
            }
        }
    }

</script>

<template>
    <div class="sixDivDad d-flex flex-wrap justify-content-around">
        <div class="sixDiv" v-for="item in sixDiv">  
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sixDivDad{
    box-sizing: border-box;
    padding: 10% 25%;
    width: 100%;
    height: 85vh;
    justify-content: center;
    // background-color: red;
    .sixDiv{
        border-radius: 10px;
        width: 220px;
        height:130px;
        background-color:  rgb(82, 70, 152);
        color: #FFF;
        text-align: center;
        box-sizing: border-box;
        padding-top: 7%;
        font-size: large;
        font-weight: 900;
    }
}
</style>