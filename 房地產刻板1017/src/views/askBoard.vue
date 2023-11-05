<script>
</script>
<template>
    <div class="backdropFilter">

    </div>
</template>
<style lang="scss" scoped>
    .backdropFilter{
        position: relative;
        width: 50vw;
        height: 500px;
        margin: 20px auto;
        background-color: aquamarine;
        &::before{
            position: absolute;
            content: '我是負片';
            color: #fff;
            width: 350px;
            height: 300px;
            top:-10%;
            left:-15%;
            backdrop-filter:invert(80%);
            transform: rotate(12deg);
            clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
        }
        // 使用backdrop-filter不要使用任何背景圖或背景色
        &::after{
            position: absolute;
            content: '我是毛玻璃';
            border: 1px dashed black;
            width: 250px;
            height: 200px;
            top:5%;
            left:-10%;
            backdrop-filter:blur(10px);
            transform: rotate(-15deg);
        }
    }
</style>