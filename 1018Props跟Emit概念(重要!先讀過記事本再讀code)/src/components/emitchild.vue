<script>
    export default{
        data(){
            return{
                text:'我是子元件回傳',
            }
        },
        porps:{
        },
        methods:{
            emitgo(){
                //傳給父元件的值
                this.$emit('apple',this.text)
                // emit回傳給apple執行 參數是this.text(orange)
                // $emit('要執行的動作' , 發送的參數 )
            }
        }   
    }
</script>
<template>
    <div class="emitchild" @click="emitgo">
        <!-- 也可以寫成 @click="$emit('apple',this.text)" 測試過把method內方法去除可以直接使用    -->
        EMITCHILD
        <!-- {{ wtf }} -->
    </div>
</template>
<style>
</style>