<script>
export default{
    data(){
        return{
            title:'cool',
            isRed:false,
            isLarge:false,
            styleAria:[],
            styleAria2:[],
            threePoke:['https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png'],//御三家的圖片連結
        }
    }
}
</script>

<template>
    
    <h1 class="cool1">cool1</h1>
    <h1 :class="title">cool2</h1>
    <h2 :id="title">不夠cool</h2>
    <!-- V綁定=>class or id -->
    <h3>class{}</h3>
    <label for="">isRed</label>
    <input type="checkbox" name="" value="true" v-model="isRed" id="">
    <label for="">isLarge</label>
    <input type="checkbox" name="" value="true" v-model="isLarge" id="">

    <h2 :class="{red:isRed,large:isLarge}">變化目標</h2>
    <!-- Vbind綁布林值控制class 預設的值是false 核取方塊會改成true V-bind綁class可以使用判別式{class名稱:布林值} 被改變成true後就會套用 -->
    
    <!-- 陣列塞入class測試 -->
    <h2>class []</h2>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleAria">
    <label for="">font-size</label>
    <input type="checkbox" value="large" v-model="styleAria">
    <label for="">font-weight</label>
    <input type="checkbox" value="bold" v-model="styleAria">

    <select v-model="styleAria2" multiple>
        <option value="red">red</option>
        <option value="large">large</option>
        <option value="bold">bold</option>
    </select>

    <h2 :class="styleAria" @click="styleAria=[]">陣列內的值都會轉成class</h2>
    <h2 :class="styleAria2" @click="styleAria2=[]">陣列內的值都會轉成class</h2>
    <!-- 綁定陣列，內部有的值都會轉成class名稱 -->

    <!-- v-bind綁屬性(從點心那邊幹過來用) -->
    <div class="Pokes" v-for="pic in threePoke" >
            <!-- 好神...v-for不能用八字鬍寫法給屬性，但是用bind就可以了爽r Bind綁變數 -->
            <img v-bind:src= "pic"  alt="哈哈">
        </div>
</template>

<style lang="scss" scoped>
.cool{
    color: #f31;
    font-size: 72pt;
}
#cool{
    color: brown;
    font-size: 36pt;
}
// ↓綁布林值 可以從checkbox控制布林值
.red{
    color: #f31;
}
.large{
    font-size: 56pt;
}
.bold{
    font-weight:900 ;
}
</style>