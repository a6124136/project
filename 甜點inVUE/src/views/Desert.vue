<script>
    export default{
        data(){
            return{
                lorem:'asfjsj;dmaskdjaomdkksldmasklfvnanvlkajdknadvldkfmqeiekmvldjvkndfsmfldkjvndsmlfnvdslfvndsl,,fjiodsovmfldskjfdsmcisfkjdfi',
                threePoke:['https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png'],//御三家圖片連結，V-for使用 v-bind綁在src屬性上用
                NextThreePoke:['https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/6b55babb3825ef9fa9e5d9ff44a14bdb8406ce97.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/50eba0f85c4e9a039be078e7de0b10acc7323264.png','https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2fd12098f15628cce80d411e090189aeb7d758ff.png']
                // 極巨化御三家圖片連結
            }
        }
    }

</script>
<template>
    <!-- 最上面的導覽列 -->
    <div id="top" class="d-flex justify-content-between">
        <div class="leftTop">
        </div>
        <div class="hambuger">
            <input type="checkbox" id="menu">
    <label for="menu" class="line">
       <div class="menu"></div>
    </label>

    <div class="menu-list">
       <ul>
           <li>選單1</li>
           <li>選單2</li>
           <li>選單3</li>
       </ul>
  </div>
        </div>
    </div>
    <!--最上面的導覽列  -->
    <!-- 左文右圖 -->
    <div id="leftandTop" class="d-flex justify-content-center">
        <div class="article">
            <h1>
                Title
            </h1>
            <p>
                {{ lorem }}
            </p>
        </div>
        <div class="bigPicture">
            <img src="https://tw.portal-pokemon.com/upload/tw/b0f2c8e9400000595809105f380b0401d6cec768.png" alt="樓上大圖">
        </div>
    </div>
    <!-- 左文右圖 -->
    <!-- Onsale -->
    <div id="OnSale">
        <h2>On Sale</h2>
    </div>
    <!-- Onsale -->
    <!-- 御三家 V-for跟v-bind綁src屬性完成-->
    <div id="threePoke" class="d-flex justify-content-around">
        <div class="Pokes" v-for="pic in threePoke">
            <!-- 好神...v-for不能用八字鬍寫法給屬性，但是用bind就可以了爽r -->
            <img v-bind:src= "pic"  alt="哈哈">
        </div>
    </div>
    <!-- 御三家 -->
    <!-- 分隔線 CSS裡面用偽元素解決-->
    <div id="spilt">
    </div>
    <!-- 分隔線 -->
    <!-- NEWS -->
    <div id="news">
        <h2>NEWS</h2>
    </div>
    <!-- NEWS -->
    <!-- 三卡片 -->
    <div id="threeCard" class="d-flex justify-content-around" >
        <div class="card" style="width: 18rem;" v-for="link in NextThreePoke">
            <img  v-bind:src='link' class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-dark">Go somewhere</a>
        </div>
        </div>
    </div>
    <!-- 三卡片 -->
    <!-- MORE -->
    <div id="more">
        <button type="button" class="btn btn-danger">More</button>
    </div>
    <!-- MORE -->
    <!-- 底部左圖右文 -->
    <div id="bottomAria" class="d-flex">
        <div class="picPart">

        </div>
        <div class="articlePart">
            <div class="articleBase">
                <h1>
                    Title
                </h1>
                <p>
                    {{ lorem }}
                </p>  
            </div>
        </div>
    </div>
    <!-- 底部左圖右文 -->
    <!-- 頁尾footer -->
    <div id="footer">
        <span>copyright&copy;2023 by Nintendo</span>
    </div>
    <!-- 頁尾footer -->
</template>
<style lang="scss" scoped>
$baseColor:rgb(248, 255, 157);//背景色
$baseColor2:rgb(255, 138, 138);//淺紅
$baseColor3:rgb(255, 85, 85);//深紅

//這段是幹來用的漢堡選單 
.line {
    width: 24px;
    height: 24px;
    background: #FFF;
    cursor: pointer;
    display: block;
    padding: 16px;
    position: absolute;
    z-index: 2;
}
.line .menu,
.line .menu::before,
.line .menu::after {
    background: #222;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    transition: background ease .3s, top ease .3s .3s, transform ease .3s;
    width: 20px;
}
.line .menu {
    left: 18px;
    top: 27px;
}

.line .menu::before {
    top: -6px;
}

.line .menu::after {
    top: 6px;
}

#menu:checked + .line .menu {
    background: transparent;
}

#menu:checked + .line .menu::before {
    transform: rotate(45deg);
}

#menu:checked + .line .menu::after {
    transform: rotate(-45deg);
}

#menu:checked + .line .menu::before,
#menu:checked + .line .menu::after {
    top: 0;
    transition: top ease .3s, transform ease .3s .3s;
}

#menu:checked ~ .menu-list {
    width: -200px;
}

.menu-list {
    width: 60px;
    height: 60PX;
    background: #FFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    padding-top: 60px;
    position: absolute;
    z-index: 1;
    transition: all .6s;
    overflow: hidden;
}
.menu-list ul {
    list-style: none;
    margin-left:70px;
    padding: 0;
}
.menu-list ul>li{
    display:block;
    width:100px;
}

input#menu {
 display: none;
}
// 這段是幹來用的漢堡選單

// 最上面的橫條
#top{
    position: relative;
    width: 99vw;
    background-color: $baseColor;
    padding: 10px;
    height: 110px;
    .leftTop{
        height: 90px;
        width: 90px;
        background-color:$baseColor2;
        // border: 1px dashed black;
    }
    .hambuger{
        height: 90px;
        width: 90px;
        // background-color: blueviolet;
        // border: 1px dashed black;
        text-align: center;
    }
}
// 最上面的橫條
// 左右圖文排版
#leftandTop{
    background-color: $baseColor;
    width: 99vw;
    box-sizing: border-box;
    .article{
        width: 40%;
        word-wrap: break-word;
        // border: 1px solid black;
        h1{
            font-size: 50pt;
            padding-left:50px;
        }
        p{
            font-size:26pt;
        }
    }
    .bigPicture{
        width: 40%;
        // border: 1px solid black;
        img{width: 100%;
            object-fit: contain;
        }
    }
}
// 左右圖文排版
// onsale
#OnSale{
    text-align: center;
    background-color: $baseColor;
    width: 99vw;
    box-sizing: border-box;
    padding: 30px 0;
    h2{
        font-size: 72pt;
        font-weight: 900;
    }
}
// onsale
// 御三家
#threePoke{
    width: 99vw;
    background-color: $baseColor;
    .Pokes{
        position: relative;
        box-sizing: border-box;
        background-color: rgba(255, 255, 0, 0.447);
        img{
            width: 20vw;
        }
        &::after{
                content:'御三家';
                color: #FFF;
                font-size: 16pt;
                text-align: center;
                font-weight: 900;
                position: absolute;
                width: 10vw;
                height: 30px;
                background-color: $baseColor3;
                top: 250px;
                right: 50%;
                transform: translateX(50%);
        }
    }

}
// 御三家
// 分隔線
#spilt{
    position: relative;
    width: 99vw;
    background-color: $baseColor;
    height: 50px;
    font-weight: 900;
    &::before{
        content: '';
        position: absolute;
        width: 90vw;
        height: 3px;
        background-color: rgb(191, 191, 31);
        top:50%;
        left: 50%;
        transform: translateX(-50%);
    }
}
// 分隔線
// news
#news{//直接copy on sale那邊的css碼 爽r
    text-align: center;
    background-color: $baseColor;
    width: 99vw;
    box-sizing: border-box;
    padding: 30px 0;
    h2{
        font-size: 72pt;
        font-weight: 900;
    }
}
// news
// 三卡片
#threeCard{
    position: relative;
    background-color: $baseColor;
    width: 99vw;
    .card{
        img{
            background-color: rgba(255, 255, 0, 0.666);
        }
    }
}
// 三卡片
// MORE
#more{
    
    text-align: center;
    background-color: $baseColor;
    width: 99vw;
    box-sizing: border-box;
    padding: 30px 0;
    .btn-danger{
        width: 10vw;
    }
}
// MORE
// 底部左圖右文
#bottomAria{
    background-color: $baseColor;
    width: 99vw;
    box-sizing: border-box;
    height: 600px;
    padding-bottom: 80px;
    padding-top: 20px;
    .picPart{//左邊圖用偽元素做
        position: relative;
        width: 50%;
        height: 100%;
        background-color: $baseColor3;
        &::before{
            content:"";
            position: absolute;
            background: url('https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/a42f1e83fdb6809384f2461670a1d81e227df05c.png')  no-repeat;
            background-size: contain;
            width: 500px;
            height: 500px;
            left: 50%;
            top: 0;
        }
    }
    .articlePart{//右邊文章區域
        box-sizing: border-box;
        padding: 3% 15%;
        width: 50vw;
        height: 100%;
        .articleBase{
            width: 100%;
            height: 100%;
            background-color: $baseColor2;
            padding: 5% 20%;
            h1{
                text-align: center;
                margin: 10% 0;
            }
            p{
                overflow-wrap: break-word;
            }
        }
    }
}
// 底部左圖右文
// 頁尾footer
#footer{
    box-sizing: border-box;
    width: 99vw;
    height: 60px;
    background-color: $baseColor3;
    text-align: center;
    padding:  20px;
    font-weight: bolder;
    font-size: larger;
}
// 頁尾footer
</style>