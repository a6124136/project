// https://www.youtube.com/watch?v=47eXVRJKdkU&ab_channel=WebDevSimplified
// 40:27 卡在不知道怎麼讓DINO跳
import {updateGround, setGround } from './ground.js'
import { updateDino,setupDino } from './Dino.js';

const WORLD_WIDTH= 100; //寬高比10/3
const WORLD_HEIGHT= 30;
const SPEED_SCALE_INCREASE=0.00001;
const worldElem = document.getElementById('dataworld')//地圖
const scoreElem =document.querySelector('[data-score]')
const startScreenElem =document.querySelector('[data-start-screen]')

setPixelToWorldScale()
//像素世界隨螢幕縮放調整

window.addEventListener('resize',setPixelToWorldScale);
// 每次畫面尺寸調整時觸發
document.addEventListener('keydown',handleStart,{once:true})
//遊戲暫停

//刷新遊戲畫面

setGround()//靠杯 少了括號沒執行導致一開始沒設定起始值，找好久欸幹
let lasttime;//最後一次計時
let speedScale;
let score;
function update(time){
    if(lasttime==null){
        lasttime = time;
        window.requestAnimationFrame(update)
        return
    }
    const delta =time-lasttime; //刷新間距(控制台顯示16)
    
    updateGround(delta,speedScale);
    updateDino(delta,speedScale);
    updateSpeedScale(delta);
    updateScore(delta);

    // console.log(delta)
    lasttime = time //重置time
window.requestAnimationFrame(update)
}
function updateSpeedScale(delta){
    speedScale +=  delta*SPEED_SCALE_INCREASE ;
}

window.requestAnimationFrame(update)

function updateScore(delta){
    score += delta*0.01
    
}

function handleStart(){
    lasttime = null;//空值不能相減
    speedScale = 1;
    score = 0;
    setGround()
    setupDino()
    startScreenElem.classList.add('hide')
    window.requestAnimationFrame(update)

}

//調整遊戲畫面
function setPixelToWorldScale(){
    let worldToPixelScale;
    if(window.innerWidth/window.innerHeight<WORLD_WIDTH/WORLD_HEIGHT){
        //視窗寬/視窗高=預設寬/預設高，正常要相等
        //所以要用兩邊的寬度差=新適應的寬度，高度同樣道理
        worldToPixelScale = window.innerWidth/WORLD_WIDTH;
    }else{
        worldToPixelScale = window.innerHeight/WORLD_HEIGHT;
    }
    worldElem.style.width=`${WORLD_WIDTH*worldToPixelScale}px`
    worldElem.style.height=`${WORLD_HEIGHT*worldToPixelScale}px`
    // 高或寬乘上正確的比例
}
