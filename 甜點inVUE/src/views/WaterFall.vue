<script>
export default{
    data(){
        return{
            Pic:['https://media.tenor.com/CgS9K9RrPhIAAAAC/cute-animal-shiba-ken.gif','https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-cats-cats-pets-animals-image_838485.jpg','https://www.chaohsin.com/eip/webfile/3f5e0aee104547950052194a90b0bcc8.jpg','https://i.imgur.com/kSEkBrv.gif','https://images.twgreatdaily.com/images/image/iVb/iVbEhGwBvvf6VcSZKOoK.jpg','https://img.lovepik.com/photo/48004/1789.jpg_wh860.jpg','https://5b0988e595225.cdn.sohucs.com/images/20181106/ce216d87e5324f1dad1d302d9471c3ca.gif','https://i.ytimg.com/vi/lJ2JmmEpDsk/maxresdefault.jpg','https://img.ltn.com.tw/Upload/news/600/2022/01/14/3801089_3_1.jpg','https://zoo.kcg.gov.tw/content/images/index/img-link-05.jpg','https://uc.udn.com.tw/photo/2023/06/20/0/22743375.jpg','https://thumb.photo-ac.com/71/71a4e49751c54576e35d93d85213bc23_t.jpeg','https://static.wixstatic.com/media/5ace09_d67a7c406bb14b13bdfcb1057cbd8c3e~mv2.jpg/v1/fill/w_640,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5ace09_d67a7c406bb14b13bdfcb1057cbd8c3e~mv2.jpg','https://i.imgur.com/hsmUv7Q.gif','https://media.giphy.com/media/d2Z4rTi11c9LRita/giphy.gif','https://i.pinimg.com/originals/04/7b/26/047b26f290b11e570d373c682e9aac38.gif','https://i.pinimg.com/originals/e4/1a/69/e41a690a6885ce8ffba30c7ead9f03c3.gif','https://i.gifer.com/AIWQ.gif','https://media.self.com/photos/57d8b7d446d0cb351c8c5e73/master/w_1600%2Cc_limit/pikachu-crying.gif','https://gifdb.com/images/high/animal-hug-shiba-inu-cat-dog-sleeping-92d8zmrxvc49dg20.gif','https://media.giphy.com/media/UovmX0Trw7Wu8B6kQ0/giphy.gif','https://s3.scoopwhoop.com/dan/officeanimals/3.gif'],
            OnSwitch:false,
            // https://blog.typeart.cc/Vue%E5%8B%95%E6%85%8B%E5%8F%96%E5%BE%97%E7%B6%B2%E9%A0%81%E9%AB%98%E5%AF%AC%E5%BA%A6/
            // fullwidth:0,//視窗寬度變數   失敗的嘗試
            width:document.documentElement.clientWidth,//使用者視窗寬度
            column:0,//預計更改的列數
            columnClasses:['col1','col2','col3','col4','col5','col6','col7'],//存class名稱 判斷column要擠多少個
            changecolumn:''//隨視窗尺寸變化的class名稱存到這裡給v-bind使用
        }
    // },
    // mounted() { 失敗的嘗試
    // const vm = this;// vue的問題 this都指向vue
    // vm.fullwidth = window.innerWidth;
    // window.onresize = () => {
    //     vm.fullwidth = window.innerWidth;
    //     console.log((vm.fullwidth)/200)//測試成功，可以動態偵測視窗寬度
    //     };
    },
    // https://blog.csdn.net/xuaner8786/article/details/81565219  監聽視窗寬高 參考做法
    mounted() {
        window.addEventListener('resize', this.getDimensions);//生命週期渲染元素時觸發監聽
        console.log('監聽觸發')
        // 載入頁面的同時就針對全域掛上這個事件監聽器
    },
    unmounted() {
        window.removeEventListener('resize', this.getDimensions);//脫離時解除監聽
        console.log('監聽停止')
        // 離開頁面時銷毀這個事件監聽器避免污染其他頁面
    },
    methods: {//確認兩個生命週期狀態能觸發getDimensions，而且return可以回傳給data內的column
        getDimensions() {
        this.width = document.documentElement.clientWidth;
        this.column = parseInt((this.width/200))//視窗變化在12XX~4XX左右  自己抓除個200大概在6~2之間的整數 當陣列索引值
        // console.log(this.column)
        return this.changecolumn = this.columnClasses[this.column]
        //好爽阿 changecolumn讀取寫在columnClasses裡面的class名稱去調整列數 隨視窗尺寸變化的column轉存成整數當index索引值
        }
    }
}
</script>

<template>
    <!-- TOP -->
    <div class="top">
        <!-- LOGO -->
        <div id="logo">
        </div>
        <!-- LOGO -->
        <!-- TOGGLE -->
        <input type="checkbox" id="switch" value="true" v-model="OnSwitch"/>
        <label for="switch" :class="{switch:OnSwitch}">
        </label>
        <!-- TOGGLE -->
        <!-- 中間搜尋 -->
        <input type="search" name="" id="find" placeholder="&#9758;Please key in here">
        <!-- 中間搜尋 -->
        <!-- 訂閱小鈴鐺 -->
        <div class="icons">
            <img src="https://png.pngtree.com/png-clipart/20220124/original/pngtree-flat-bell-png-image_7182331.png" alt="">
        </div>
        <div class="icons">
            <img src="https://static.wikia.nocookie.net/1e9f89fa-ff22-4dad-abef-2073b4a23ebe/scale-to-width/755" alt="">
        </div>
        <div class="icons">
            <img src="https://cdn-icons-png.flaticon.com/512/129/129255.png" alt="">
        </div>
        <!-- 訂閱小鈴鐺 -->

    </div>
    <!-- TOP -->

    <!-- https://www.tpisoftware.com/tpu/articleDetails/2604  參考瀑布流  純CSS -->
    <div class="waterfall"  :class="changecolumn">
        <div class="item" v-for="cute in Pic" data-column="column">
            <!-- data-自定義屬性，屬性column=vue內部變數的column -->
            <img :src="cute" alt="">
        </div>
    </div>
    <!-- <P>{{ changecolumn }}</P>  23:51 用回傳class名稱去調整列數的方式成功啦! -->
</template>

<style lang="scss" scoped>

// top內部
.top{
    position: relative;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    background-color: yellowgreen;
    #logo{
        // box-sizing: border-box;
        background:no-repeat url('https://www.adobe.com/content/dam/cc/icons/creativecloud.svg');
        width: 3vw;
        height: 100%;
        margin: 2px 10px;
    }
    input[type=checkbox]{
        visibility: hidden;
    }
    // toggle原始型態
    label{
        position: relative;
        cursor: pointer;
        padding-top: 2px;
        width: 100px;
        &::before{
            content: "";
            position: absolute;
            width: 80px;
            height: 40px;
            background-color: #fff;
            border-radius: 20px;
            left:-10px ;
            transition: .4s;
        }
        &::after{
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: #fff;
            border-radius: 20px;
            box-shadow: 0 0 5px black;
            left:-10px ;
            top: 2px;
            transition: .4s;
        }
    }
    // toggle觸發後的型態
    .switch{
        position: relative;
        cursor: pointer;
        &::before{
            content: "";
            position: absolute;
            width: 80px;
            height: 40px;
            background-color: rgb(0, 0, 0);
            border-radius: 20px;
            left:-10px ;
        }
        &::after{
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: rgb(149, 255, 255);
            border-radius: 20px;
            left: 30px ;
            top: 2px;
            box-shadow: 0 0 20px #fff;
        }
    }
    // 搜尋欄
    input[type=search]{
        width: 60vw;
        margin: 0 auto;
        height: 80%;
        padding-left: 50px;//打字的內容往右邊推
        font-size: large;
        margin-top: 5px;
        border-radius: 25px;
        &:focus{
            border-style: hidden;
        }
    }
    // icon們
    .icons{
        box-sizing: border-box;
        max-width: 100px;
        img{
            width: 100%;
            max-height: 50px;
        }
    }
}
// top內部
.waterfall{
    width: 100%;
    margin: 0 auto;
    column-gap: 10px;//限制列之間的GAP
    column-count: 7;//每列元素上限=7
    // 瀑布流在容器裡面設置這兩個屬性完成 一個是每列的上限，一個是每個元素之間的間隔
    .item{
        padding: 5px;
        box-sizing: border-box;
        margin: 0 auto 5px; //上  左右  下
        break-inside: acoid;
        /*定義頁面、列或是區域發生中斷時的元素表現方式。 auto->元素中斷、acoid->元素不中斷*/
        img {
        width: 100%;
        object-fit: cover;//自適應容器大小
        object-position: 50% 50%;//以中心點填滿容器(沒設這個預設是從左上角塞滿)
        }
    }
}

.col1{
    column-count: 1;
}
.col2{
    column-count: 2;
}
.col3{
    column-count: 3;
}
.col4{
    column-count: 4;
}
.col5{
    column-count: 5;
}
.col6{
    column-count: 6;
}
.col7{
    column-count: 7;
}
</style>