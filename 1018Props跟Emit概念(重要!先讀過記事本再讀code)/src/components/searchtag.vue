<script>
import {RouterLink,RouterView} from 'vue-router';
    export default{
        data(){
            return{
                corename:['都心区','23区東部','23区西部'],
                ariaName:['千代田区','六本木区','秋葉原区','台場区']
            }
        },
        components:{
            RouterLink
        }
    }
</script>
<template>
    <div class="allAria">
        <div class="aria">
            <p>
                {{corename[0]}}
            </p>
            <hr>
            <div class="block">
                <div class="leftDiv">
    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.allAria{
    width: 50vw;
    margin: 20px auto;
    background-color: pink;
}
    .aria{
        height: 20vh;
        .block{
            height: 6vh;
            width: 12vw;
            background-color: brown;
        }
    }
</style>