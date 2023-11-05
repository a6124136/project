import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js";

const groundElems = document.querySelectorAll('[data-ground]');
const SPEED = .05;
export function setGround(){
    setCustomProperty(groundElems[0],'--left',0);
    setCustomProperty(groundElems[1],'--left',300);
    //參考updateCustom那篇JS 第一張圖給css變量起始值0，第二張300
}


export function updateGround(delta,speeScale){
    groundElems.forEach(ground=>{
        incrementCustomProperty(ground,'--left',delta * speeScale*SPEED * -1);
        if(getCustomProperty(ground,'--left')<= -300){
            incrementCustomProperty(ground,'--left',600)
            //無限接圖 第一張圖從起始值0跑到-300時補+600(回到正300)
            //此時第二張圖剛好跑到0的位置
            //等第二張圖跑到-300時，第一張圖在300的位置可以接力循環
        }
    })
}