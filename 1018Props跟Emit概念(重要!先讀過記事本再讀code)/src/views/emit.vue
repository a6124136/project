<script>
import emitchild from '../components/emitchild.vue'
export default{
        data(){
            return{
                childtext:'',
                wtf:'wft is this?',
                omg:"omg it's crazy!",
            }
        },
        components:{
            emitchild
        },
        props:{

        },
        methods:{
            // 接收到子元件apple回傳時執行這個方法，套用子元素的參數
            emitobj(arg){
                this.childtext=arg
            }
        }
    }
</script>
<template>
    <h1 >emit</h1>
    <p>
    text變數
        {{childtext}}
    </p>
    <div class="show">
        <!-- @apple← 接收子元件傳來的值用在emitobj這個方法 -->
        <emitchild @apple="emitobj" >

        </emitchild>

    </div>
</template>
<style>
</style>