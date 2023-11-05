<script>
export default{
    data(){
        return{
            number:['A','B','C','D']
        }
    }
}
</script>
<template>
    <div class="searchblock d-flex" >
        <div class="leftDiv">
            </div>
        <p>
            都心區 A物件
        </p>
        <hr>
    </div>
    <div class="fffDiv">

    </div>

</template>
<style scoped>

.searchblock{
    width: 50vw;
    padding: 10px;
    margin: 0 auto;
    /* background-color: blue; */
    .leftDiv{
        position: relative;
        width:200px;
        height:200px;
        background-color: rgb(82, 70, 152);
        border-radius: 20px;
        margin-right: 50px;
        &::before{
            position: absolute;
            top: 40%;
            left: -20%;
            content:'';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 15px 30px 15px 0;
            border-color: transparent #fff transparent transparent;
        }
        &::after{
            position: absolute;
            top: 40%;
            right: -35%;
            content:'';
            width: 0;
            height: 0;
            border-style: solid;
            border-width:  15px 30px 15px ;
            border-color:  transparent  transparent  transparent  #fff;
        }
    }

}
.fffDiv{
    background-color: #fff;
    width: 55vw;
    height: 25vw;
    margin:  0 auto;
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