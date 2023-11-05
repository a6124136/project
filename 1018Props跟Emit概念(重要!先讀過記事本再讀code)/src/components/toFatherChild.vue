<!-- 這邊是要EMIT回傳給老爸的子元件 -->


<script>
    export default{
        data(){
            return{
                state:[{
                    acc:'',
                    pwd:'',
                    mail:'',
                    gender:'',
                    age:0,
                }],
            }
        },
        methods:{
            emitgo(){
                //傳給父元件的值
                // console.log('emit執行')
                // this.$emit('turnAcc','123')測試過，觸發的@turnAcc要寫在父元件的子組件標籤上
                // emit回傳給apple執行 參數是this.text(orange)
                // $emit('要執行的動作' , 發送的參數 )
            }
        }   
    }
</script>
<template>
    <div class="emitchild">
        <!-- 也可以寫成 @click="$emit('apple',this.text)" 測試過把method內方法去除可以直接使用    -->
        傳給父元件(Emit)
        <!-- {{ wtf }} -->
        <br>
        <label for="">
            帳號
        </label>
        <input type="text" v-model="state[0].acc" @input="$emit('turnState',state[0])">
        <br>
        <label for="">
            密碼
        </label>
        <input type="password" v-model="state[0].pwd" @input="$emit('turnState',state[0])">
        <br>
        <label for="">
            信箱
        </label>
        <input type="mail" v-model="state[0].mail" @input="$emit('turnState',state[0])">
        <br>
        <span>
            性別
        </span>
        <label for="">
            公
        </label>
        <input type="radio" name="gender" v-model="state[0].gender" value="公" @change="$emit('turnState',state[0])">
        <label for="">
            母
        </label>
        <input type="radio" name="gender" v-model="state[0].gender" value="母" @change="$emit('turnState',state[0])">
        <br>
        <label for="">
            年齡
        </label>
        <input type="number" v-model="state[0].age" @input="$emit('turnState',state[0])">
    </div>
</template>
<style>
    .emitchild{
        margin: 0 auto;
        width: 500px;
        height: 500px;
        background-color: cadetblue;
    }
</style>