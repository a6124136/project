const getTtt= document.getElementById('getScore');

(function text(sum){
    switch(sum){
        // swith會由上方條件往下比對 沒加break一旦有符合會連帶執行，
        // 加上break碰上第一個符合條件的就會執行再跳出
        case 10:
            
            break;
        case 20:
            ttt="sum="+sum;
            getTtt.innerText=ttt;
            break;
        case 30:
        default:
            ttt="sum=default";
            getTtt.innerText=ttt;
            break;
    }
})(15);


// function salary(hours){
    
//     switch(hours){
        
//         case "小於40小時":
            
//             howMuch.innerText="賺不到0.8倍 可憐窮鬼";
//             break
//         case "等於40小時":
            
            
//             howMuch.innerText="基本薪資。哈!";
//             break
//         case "大於40小時":
            
//             howMuch.innerText="血汗勞工欸大於40小時";
//             break
//         case "大於50小時":
//             howMuch.innerText="奴";
//             break
//     }
// }


const workhours= document.getElementById('workHours');
// salary("大於50小時");
function salary2(hours){
    let x = Math.floor(hours/10);
    // 傳進來的時數除10後取整做判斷
    switch(x){
        case 0:
        case 1:
        case 2:
        case 3:
            howMuch.innerText=0.8*150*hours+"元";
            break
        case 4:
            //額外設立條件，傳來的數=40另外設計
            //等同於if case 4 && hours成立
            if(hours==40){
            howMuch.innerText=150*hours+"元";
            break;
            }    
            howMuch.innerText=1.2*150*hours+"元";
            // 滿足case 4 但>40 <50的區間
            break
        default:
            howMuch.innerText=1.6*150*hours+"元";
            break
            // 剩下的都是超過50小時所以用預設
    }
}



// 遞增遞減
// 變數=變數+1
// 變數+=1
// 變數++
// ++變數(先算數後才應用)
// 反之用減號每次減一
var arr=[]

for(i=0;i<100;i+=4){
    if(i%2 == 0){
        arr.push(i);
    }else if(i%2 == 1){
        arr.push(i)
    }

    // console.log(arr);
    // console.log(arr.length);
}
console.log(arr);
var arr2=[];
let sum2=0;
for(i=0;i<10;i++){
    sum2+=i
};
console.log(arr2);
console.log(sum2)

//測試質數
function test (n) {
    // 判斷一個數是否能被自身小的正整數(除開1和自身)整除.如果能整除則不是質數,否則反之.
    for(var k = 2;k < n;k++) {
        //從2開始每個數都除過一次，一旦能整除就回傳false反之則true
        if(n % k === 0) {
            return false;    
        }           
    }
    return true;         
};

var 質數 = [];
for(i=3;i<100;i+=2){
//偶數都非質數，一開始就以奇數為目標
    if(test(i)){
        質數.push(i);
    }
}

console.log(質數)


