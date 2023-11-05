<script>
    export default{
        data(){
            return{ 
                point: 0,
                ntd: 0
            }
        },
        methods:{
            addpoint(){
                this.point++
            }
        },watch:{
            point(){
                this.ntd=this.point*10
                // 實際產生(ntd會被改變)的值
                const pointbox = document.getElementById('point')
                const ntdbox = document.getElementById('ntd')
                const jypbox = document.getElementById('jyp')
                pointbox.style.width = this.point+'px'
                ntdbox.style.width = this.ntd+'px'
                jypbox.style.width = this.jyp+'px'
                pointbox.style.height = this.point+'px'
                ntdbox.style.height = this.ntd+'px'
                jypbox.style.height = this.jyp+'px'
                // 後來想想這個好像可以直接拿去寫瀑布流的column-count 這樣就不用寫一堆class去陣列內備用了
            }
        },
        computed:{
            jyp(){
          //  ↑  暫時的值    ↓  暫存的值可以計算後使用
                return this.jyp = this.ntd*0.45
                // return this.ntd*0.45  也可以簡寫直接return 名稱會直接使用命名
            }
        },

//========================================生命週期鉤子的概念========================================================================= 
        beforeCreate(){
            console.log('創建前')
            // alert('即將創建這個頁面')
        },
        created(){
            console.log('創建了')
            // alert('頁面已創建')
        },
        beforeMount(){
            console.log('掛載前')
            // const pointbox = document.getElementById('point')
            // const ntdbox = document.getElementById('ntd')
            // const jypbox = document.getElementById('jyp')
            // pointbox.style.height = this.point+'px'
            // ntdbox.style.height = this.ntd+'px'
            // jypbox.style.height = this.jyp+'px'
            // 這行代碼在掛載前的階段，dom元素都還沒生成所以抓取不到，解除注釋可以看到頁面報錯證明這一點
        },
        mounted(){
            console.log('掛載了')

            const pointbox = document.getElementById('point')
            const ntdbox = document.getElementById('ntd')
            const jypbox = document.getElementById('jyp')
            pointbox.style.height = this.point+'px'
            ntdbox.style.height = this.ntd+'px'
            jypbox.style.height = this.jyp+'px'
            // 測試過掛載時可以控制dom  沒控制dom會被文字拉成一整行粉紅色，可以注釋掉看看效果 
        },
        beforeUpdate(){
            console.log('更新前',this.point,this.ntd,this.jyp)

        },
        updated(){
            console.log('更新後',this.point,this.ntd,this.jyp)
        },
        beforeUnmount(){
            console.log('解除掛載前')
            // alert('這是在解除掛載前觸發的警告!')離開頁面觸發           
        },
        unmounted(){
            console.log('解除掛載後')
            // alert('這是在解除掛載之後才觸發的警告!')
        }
        // 可以觀察console看看每個周期發生在什麼時候  創建的時候...掛載的時候.....更新、解除....等等

    }
</script>

<template>

    <div class="circle" @click="addpoint">
        point{{ point }} <br> ntd{{ ntd }} <br>jyp{{ jyp }} <br>
        戳我觀察各單位的變化再去對比代碼
    </div>
    <div class="point" id="point">
        我是point
    </div>
    <div class="ntd" id="ntd">
        我是ntd
    </div>
    <div class="jyp" id="jyp">
        我是jyp
    </div>

</template>
<style lang="scss" scoped >

    .circle{
        width: 200px;
        height: 200px;
        background-color: palevioletred;
        border-radius: 50%;
        text-align: center;
        align-items: center;
    }
    .point{
        background-color: palevioletred;
        border-radius: 50%;
        text-align: center;
        align-items: center;
    }
    .ntd{
        background-color: palevioletred;
        border-radius: 50%;
        text-align: center;
        align-items: center;
    }
    .jyp{
        background-color: palevioletred;
        border-radius: 50%;
        text-align: center;
        align-items: center;
    }
</style>