import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

const dinoElem = document.querySelector('[data-Dino]');
const JUMP_SPEED =0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT=2;
const FRAME_TIME = 100;


let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;

export function setupDino(){
    isJumping = false //恐龍預設非跳躍狀態
    dinoFrame = 0;
    currentFrameTime = 0;
    yVelocity=0;
    setCustomProperty(dinoElem,'--bottom',0)//腳踩實地
    document.removeEventListener('keydown',onJump)
    document.addEventListener('keydown',onJump)
}

export function updateDino(delta,speedScale){
    handleRun(delta,speedScale)
    handleJump(delta)
}

function handleRun(delta,speedScale){
    if(isJumping){
        dinoElem.src=`imgs\dino-stationary.png`
        return //切換成跳起來的圖
    }
    if(currentFrameTime>=FRAME_TIME){
        dinoFrame = (dinoFrame+1)%DINO_FRAME_COUNT // 不斷自動+1去除2 餘數=0~1之間
        dinoElem.src = `imgs/dino-run-${dinoFrame}.png`//剛好可以用0~1去切換影格製造跑步動畫
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale;
}
function handleJump(delta){
    if(!isJumping) return
    incrementCustomProperty(dinoElem,'--bottom',yVelocity*delta)

    if(getCustomProperty(dinoElem,'--bottom') <= 0){
        setCustomProperty(dinoElem,'---bottom',0)//不讓恐龍高度低於0
        isJumping = false //回到地面更新布林值表示沒再跳
    }
    yVelocity -= GRAVITY*delta;//隨時間被重力往下拉
}

function onJump(e){
    if(e.code!=='space' || isJumping)return
    yVelocity=JUMP_SPEED;//上升0.45 抵抗重力的0.11
    isJumping=true;
}