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
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    <RouterLink class="Routers" to="/search/searchblock">{{ ariaName[0] }}</RouterLink>
                </div>
            </div>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[1] }}
                </div>
            </div>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[2] }}
                </div>
            </div>
        </div>
        
    </div>
    <div class="allAria">
        <div class="aria">
            <p>
                {{corename[1]}}
            </p>
            <hr>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[3] }}
                </div>
            </div>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[2] }}
                </div>
            </div>
        </div>
        
    </div>
    <div class="allAria">
        <div class="aria">
            <p>
                {{corename[2]}}
            </p>
            <hr>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[0] }}
                </div>
            </div>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[1] }}
                </div>
            </div>
            <div class="columnDiv d-flex justify-content-around">
                <div class="block d-flex" v-for=" in 4">
                    <div class="leftDiv">
                    </div>
                    {{ ariaName[2] }}
                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
hr{
    border: 2px solid black;
    margin-top: 0;
}
.allAria{
    width: 50vw;
    height: 13.5vw;
    margin: 0 auto;
    // background-color: pink;
    padding-top:5px ;
    &:nth-child(3){
        height: 12vw;
    }
}
    .aria{
        box-sizing: border-box;
        height: 20vh;
        p{
            font-weight: 800;
            color:black;
            align-items: center;
            vertical-align: middle;
            font-size: 14pt;
        }
        .columnDiv{
            margin: 10px 0;
            .block{
                height: 6vh;
                width: 10vw;
                background-color: rgb(82, 70, 152);
                border-radius: 5px;
                color: #fff;
                align-items: center;
                .Routers{
                    text-decoration: none;
                    color: #fff;
                }
                
                .leftDiv{
                    margin: 4px 20px;
                    width: 2vw;
                    height: 2vw;
                    background-color: #fff;
                    border-radius: 5px;
                }
            }
        }
    }
</style>