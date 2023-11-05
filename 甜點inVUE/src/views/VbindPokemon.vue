<script>
export default{
    data(){
        return{
            pokemonTarget:'',
            open:true,
            BigPoke:['https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/6b55babb3825ef9fa9e5d9ff44a14bdb8406ce97.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/50eba0f85c4e9a039be078e7de0b10acc7323264.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2fd12098f15628cce80d411e090189aeb7d758ff.png'],
            vShowTest:false,
        }
    },
    mounted(){
        const defaultImg = document.getElementById('defaultImg')
        defaultImg.src='https://memeprod.ap-south-1.linodeobjects.com/user-template-thumbnail/1c871bfd7c8a574968e3341575ad71f7.jpg'
        // mounted....真的好強
    }
}
</script>
<template>

    <label for="width">點我切換</label>
    <input type="button" name="change" id="width" value="點我" @click="open=!open" >

    <label for="flame">小火龍</label>
    <input type="radio" name="poke" id="flame" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png" v-model="pokemonTarget">
    <label for="water">傑尼龜</label>
    <input type="radio" name="poke" id="water" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" v-model="pokemonTarget">
    <label for="gross">破音種子</label>
    <input type="radio" name="poke" id="gross" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png" v-model="pokemonTarget">
    <!-- 記得加同一組NAME -->

    <img :src="pokemonTarget" alt="" v-if="open"  id="defaultImg" >
                                                    <!--這邊的id是要給mounted鉤子用的，一載入就先幫預設圖片+個預設的src，不然原本的綁定是空值會死圖  -->
    <img :src="BigPoke[0]" alt="急遽畫" v-else-if="pokemonTarget=='https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png'&&!open" >
    <img :src="BigPoke[1]" alt="急遽畫" v-else-if="pokemonTarget=='https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png'&&!open" >
    <img :src="BigPoke[2]" alt="急遽畫" v-else-if="pokemonTarget=='https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png'&&!open" >
    <!-- <img src="../img/WhoIam.jpg" alt="點選選項啟動" v-else> -->


    <h4 @click="vShowTest=!vShowTest">v-show part，v-if跟v-show的差異在於v-show是display:none，v-if則是生成跟註銷，點我測試v-show功能</h4>
    <p v-show="vShowTest">我是V-SHOW出來的，可以看開發者工具內切換顯示display:none</p>

    <div class="backdropTest">
        backdrop-filter 測試
    </div>

</template>
<style lang="scss" scoped>
    img{
        width: 500px;
        height: 500px;
        position: relative;
    }
    // backdropTest測試 好酷 https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
    .backdropTest{
        background-color: rgb(160, 74, 74);
        width: 500px;
        height: 500px;
        text-align: center;
        color: #fff;
        font-size: xx-large;
        position: relative;
        &:hover{
            position: absolute;
            &::after{
                content: '';
                width: 250px;
                height: 250px;
                position: absolute;
                left: 400px;
                top:-40px;
                background-color: rgba($color: #1ab424, $alpha: .25);
                backdrop-filter: invert(80%);
            }
            &::before{
                content: '';
                width: 350px;
                height: 450px;
                position: absolute;
                left: 200px;
                bottom:-40px;
                background-color: rgba($color: #d62bc2, $alpha: .25);
                backdrop-filter: blur(10px);
            }
        }
    }
</style>