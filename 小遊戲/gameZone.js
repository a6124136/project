//DOM元素載入時執行
document.addEventListener('DOMContentLoaded',()=>{
    
    const brickZone = document.querySelector('.brickZone');
    // 取得方塊掉落的區域，brickZone=教學內的grid
    let bricks = Array.from(document.querySelectorAll('.brickZone div'));
    //將方塊掉落區內的所有div提取成長度=80的陣列方便運用(每4個1個row)[0,1,2,3][4,5,6,7]....以此類推
    const ScoreDisplay = document.querySelector('#score')//顯示分數
    const startBtn = document.querySelector('#startBtn')
    const width = 10;//
    console.log('以仔入')

    //方塊陣列的佔位 36:31開始
    //每個陣列代表的是方塊在200個div中在相對位置上的基本座標，以及旋轉後的座標
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    
    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
//------------方塊的座標組合-----------------------------
const theBricks = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

let currentPosition = 4 //寬度10格，用4起始位置
let currentRotation = 0 //目前為第一型態
//隨機api
let random =Math.floor( Math.random()*theBricks.length)

let current = theBricks[random][currentRotation] //第一個方塊(方塊組內[random]隨機產生方塊[currentRotation]當前型態預設0)

function draw(){
    current.forEach(index => {
        bricks[currentPosition+index].classList.add('tetromino')
    });
    //給當前選中的方塊添加CLASS上色 brick=square
}

draw()

})


// https://www.youtube.com/watch?v=rAUn1Lom6dw&ab_channel=freeCodeCamp.org  影片進度 44:13