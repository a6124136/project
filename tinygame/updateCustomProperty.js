export function getCustomProperty(elem,prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
    //取得當前--left變量的值
}
export function setCustomProperty(elem,prop,value){
    elem.style.setProperty(prop,value);
}
export function incrementCustomProperty(elem,prop,inc){//增量
    setCustomProperty(elem,prop,getCustomProperty(elem,prop) + inc)
}