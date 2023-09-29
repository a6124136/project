class RolePlayer{
    constructor(args){
        this.name=args.name;
        this.speed=args.speed;
        // 構造函數
    }
};


//DOM元素載入時執行
document.addEventListener('DOMContentLoaded',()=>{
    
    const brickZone = document.querySelector('.brickZone');
    // 取得方塊掉落的區域
    let bricks = Array.from(document.querySelectorAll('.grid div'));
    //將方塊掉落區內的所有div提取成長度=80的陣列方便運用(每4個1個row)[0,1,2,3][4,5,6,7]....以此類推
    const width = 4;
    //遊戲方塊下落只有4個位置
})

// https://www.youtube.com/watch?v=rAUn1Lom6dw&ab_channel=freeCodeCamp.org  影片進度26:55