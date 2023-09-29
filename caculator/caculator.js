const everyBtn = document.getElementsByClassName('item');
//class取得html colection
const outPut = document.getElementById('screen');
const outPut2 = document.getElementById('screen2');
const btnClear = document.getElementsByClassName('item-click'); 
var loadded =[];//輸出


for(i=0;i<btnClear.length;i++){
    btnClear[i].addEventListener('click',acde);
    }

//AC跟 Delete 這邊只針對全清除還有退回一鍵
function acde(){
    if(this.value=="AC"){
        outPut.innerText="";
        outPut2.innerText="";
        // 一次清空上下兩排
    }else if (this.value=="Delete"){
        outPut.innerText = outPut.innerText.substring(0,outPut.innerText.length-1);
        // 重新獲取新字串 substring(起始值,結束值)
        // 這邊設定0到字串長度-1，意思就是只保留第一個字到倒數第二字
        // Ex:4897>>489   刪除最後一個字
        if(outPut.innerText==""){
            // 如果第一輸出列已經被刪到空了，就把第二列拉到第一列刪除
            outPut.innerText = outPut2.innerText;
            outPut2.innerText ="";
            outPut.innerText = outPut.innerText.slice(0,-1);
        }
    }
}
//AC跟 Delete 這邊只針對全清除還有退回一鍵



for(i=0;i<everyBtn.length;i++){
    everyBtn[i].addEventListener('click',inputValue);
    // 每個按鍵都添加監聽滑鼠點擊
    }

// 滑鼠點擊輸入
function inputValue(){

    if(!isNaN(this.value) == true){
        // !isNaN判斷是否為數值再進行
        if(outPut.innerText=== '0'){
            outPut.innerText = this.value
            //如果只有單一個0在顯示上，直接用當前按鍵的值取代
            // 不會有0982....0512...等0開頭的數字
        }
        else{
            outPut.innerText+=this.value
            // 非0開頭就直接往後添加數字
        }
    }else if(!isNaN(this.value)==false && this.value !=='='){
        //條件，除了 = 以外的所有運算元(+-*/.)
        
        if(outPut.innerText==""){
            return
            //不能單獨填寫一個運算符號進去當前的運算中
        }
        else if(outPut2.innerText.includes("*"||"/"||"+"||"-")){
            return
            //這邊是如果偵測到OP2有包含運算符號
            //已經有運算符號過去了就直接返還
            //不准輸入運算符號 
        }
        else if(this.value=="."){
            outPut.innerText+=this.value;
            // . 可以直接推進去不會跑運算
        }
        else{
            outPut2.innerText = outPut.innerText+this.value;
            outPut.innerText = "";
            //如果還沒有運算過去才會把當下寫的數字跟運算符號推過去
        }
    }else if(this.value=="="){
        // console.log(outPut2.innerText);//可以完整打印出來前一個值(含運算符號)
        // console.log(outPut.innerText);//可以完整打印出當前值
        let prvious = outPut2.innerText.substring(0,outPut2.innerText.length-1);
        let current = outPut.innerText;
        let oprend =outPut2.innerText.substring(outPut2.innerText.length-1,outPut2.innerText.length) ;
        switch (oprend){
        case "+":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prvious)+parseFloat(current);
            break
        
        case "-":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prvious)-parseFloat(current);
            break
        
        case "*":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prvious)*parseFloat(current);
            break
        
        case "/":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prvious)/parseFloat(current);
            break
        
        }
    }
}
// 滑鼠點擊輸入

// outPut2是上面那欄
// outPut是下面那欄


// 鍵盤點擊輸入
document.addEventListener('keypress',(e)=>{
    //規定包含加減乘除的正則表達式....自己照規則打出來還是覺得第一眼很難看的出來
    const Oprations = ["+","-","*","/"];
    //運算條件的限制常數
    console.log(Oprations.some(i=>outPut2.innerText.includes(i)))
    // 判斷是否包含條件陣列內的值
    //這邊可以求出OP2裡若有運算元的話  回傳true
    if(e.key ==="x"){

        outPut.innerText = "";
        outPut2.innerText = "";
        // 一次清空上下兩排
    }
    else if (e.key==" "){
        outPut.innerText = outPut.innerText.slice(0,-1);
        // 9/28 slice(0,-1)刪最後一個字更方便 
        
        // 原本用outPut.innerText = outPut.innerText.substring(0,outPut.innerText.length-1);
        // 重新獲取新字串 substring(起始值,結束值)
        // 這邊設定0到字串長度-1，意思就是只保留第一個字到倒數第二字
        // Ex:4897>>489   刪除最後一個字
        if(outPut.innerText==""){
            // 如果第一輸出列已經被刪到空了，就改把第二列拿下來到第一列繼續刪除
            outPut.innerText = outPut2.innerText;
            outPut2.innerText ="";
            outPut.innerText = outPut.innerText.slice(0,-1);
        }
    }
    else if(!isNaN(e.key) == true){
    // !isNaN判斷是否為數值再進行
        if(outPut.innerText === '0'){
            outPut.innerText = e.key;
            //如果只有單一個0在顯示上，直接用當前按鍵的值取代
            // 不會有0982....0512...等0開頭的數字
        }
        if(outPut2.innerText!==""&&Oprations.some(i=>outPut2.innerText.includes(i))==false){
            outPut2.innerText += e.key
            // 如果outPut2有數值但沒有運算符號就能繼續添加數值
        }
        else{
            outPut.innerText += e.key;
            // 非0開頭就直接往後添加數字
        }
    }
    if(!isNaN(e.key)==false && e.key !=='Enter'){
        //條件，除了 enter 以外的所有非數值
        
        if(outPut.innerText==""||Oprations.some(i=>outPut2.innerText.includes(i))){
            return 
            //不能單獨填寫一個運算符號進去當前的運算中或已有運算符號在OP2中
            
            //如果偵測到OP2有包含運算符號
            //已經有運算符號過去了就直接返還
            //不准輸入運算符號 
        }
        if(Oprations.some(i=>e.key.includes(i))){
            // 限制輸入條件在+-*/這四個運算符號
                if(outPut2.innerText!==""&&Oprations.some(i=>outPut2.innerText.includes(i))){
                    // outPut2不為空，而且有運算符號
                    if(Oprations.some(i=>outPut2.innerText.includes(i))){
                        return 
                        // 有運算符號就不准輸入
                    }else{
                        outPut2.innerText +=e.key;
                    }
                    //如果output2有值但沒運算符就可以填運算符在後面
                }else{
                    outPut2.innerText = outPut.innerText+e.key;
                    outPut.innerText = "";
                // 把當下寫的數字跟運算符號推到output2
                }
            // 這邊原本還包含字母等....其他按鍵，把條件限制在運算符內  測試OK)
        }
        
        else if(e.key=="."){
            outPut.innerText+=e.key;
            // . 可以直接推進去當前數值不會跑運算
        }
    }else if(e.key=="Enter"&&outPut.innerText!==""){
        // console.log(outPut2.innerText);//可以完整打印出來前一個值(含運算符號)
        // console.log(outPut.innerText);//可以完整打印出當前值
        let prviousValue = outPut2.innerText.substring(0,outPut2.innerText.length-1);
        let currentValue = outPut.innerText;
        let oprend =outPut2.innerText.substring(outPut2.innerText.length-1,outPut2.innerText.length) ;
        
        switch (oprend){
        case "+":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prviousValue)+parseFloat(currentValue);
            break
        
        case "-":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prviousValue)-parseFloat(currentValue);
            break
        
        case "*":
            outPut2.innerText="";
            outPut.innerText = parseFloat(prviousValue)*parseFloat(currentValue);
            break
        
        case "/":
            outPut2.innerText="";   
            outPut.innerText = parseFloat(prviousValue)/parseFloat(currentValue);
            break
        
        }
    }
});
// 鍵盤點擊輸入