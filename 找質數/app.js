const max=document.getElementById('max')
const min=document.getElementById('min')
const range=document.getElementById('range')
const anser=document.getElementById('anser')
const reply=document.getElementById('reply')


anser.addEventListener('click',caculate);

function caculate(){
let limitMax = max.value;//最大值
let limitMin = min.value;//最小值
let limitRange = range.value;//範圍
let theMax = parseInt(limitMax);
let theMin = parseInt(limitMin);
let theRange = parseInt(limitRange);

console.log(theMax,theMin,theRange);
let anserArray=[]
    for(theMin;theMin<=theMax;theMin++){
        for(j=2;j<=theMax;j++){
            if(theMin%j==0){
                if(theMin==j){
                    anserArray.push(j);//  
                }
                else{
                    break
                }
            }
        }   
    }
    anserArray.splice(theRange,anserArray.length)//Splice(起始點,要進行更改的數量,要插進去的新數值)
    // array的splice方法可以導入三個參數，從起始點後決定要更改多少數量(0就是不刪除，其他數字就填多少刪除多少，最後的參數從起始點後開始插入)
    let InputMin = min.value;//因為上面迴圈迭代過所以要重新呼叫一次當前值給回答使用
    let anserArray2 = Array.from(anserArray).join('-')//原來anserArray是類陣列....要轉陣才能用join插入中間的分隔方式
    reply.innerText=`在${InputMin}到${theMax}的範圍中，前${theRange}個質數為${anserArray2}`;
    anserArray2=[];//清空陣列
}


// 找質數參考
// for(i=3;i<=100;i+=2){
//     for(j=2;j<=i;j++){
//         if(i%j==0){
//             if(i==j){
//                 console.log(j);
//             }
//             else{
//                 break;//break跳到上一層 
//             }
//         }
//     }
// }
