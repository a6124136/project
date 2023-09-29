class animal{
    constructor (arg){
        this.name = arg.name;
        this.age = arg.age;
        this.sex = arg.sex;
        this.behavior = ["散步","吃飯","睡覺"]
    }
}
let dog = new animal({name:"汪財",age:16,sex:"公",behavior:[0,1]});


console.log(dog.name,dog.age,dog.sex);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    // 隨機floor向下取整 random取得0~1隨機數 max參數(隨機數最高=(max-1))
}




let a=2,b=3;
console.log(a!=b);//判斷不等於得到布林值true

window.addEventListener('click',()=>{
    var 養狗 = "你養了一隻狗，他叫"+dog.name + "，今年"+ dog.age+"歲，他是一條"+dog.sex+"狗",
        i =    getRandomInt(3),   
        狗的行為 = "，最喜歡"+dog.behavior[i];
    document.getElementById('dogHere').innerHTML = "<span style=color:red class='bigsize'>"+養狗+狗的行為+"</span>"; 
    // 變數+內部HTML寫法，class包覆必須使用''取代""
});

let c = "6",d =3,e = true;

console.log((c>>>d? "C大":"D大"));
//三元運算子測試  前方放置條件判斷 後面兩項依照判斷回傳答案 答案A:答案B
//若條件回傳true就返還答案A，若回傳false就返還答案B

// let const var  三種宣告方式
// 資料的型態
// ""   字串
// 123  數值 
// null 空值
// NaN  非數值  ex: parseInt("我是字串")===> NaN 
// []   陣列
// {}   物件 

console.log(typeof(e));

const dice = document.getElementById('dice');
const diceNum = document.getElementById('diceNum');

dice.addEventListener('click',()=>{  throwDice = getRandomInt(6)+1;
    diceNum.innerText = "骰出了"+throwDice+"點!";
    if(throwDice>4){
    alert('你丟出'+throwDice+'點，贏了');
    }
});

const youGuest = document.getElementById('youGuest');
const anwserAria = document.getElementById('anwserAria');


// function goRocket(e){
//     console.log(e.keyCode); //查鍵盤代碼
// }
// window.addEventListener('keydown', goRocket ,false) //偵測按下按鍵的行為



// 猜數字↓
window.addEventListener('keypress',Guest);

var theFinale = getRandomInt(100)+1;//亂數給出猜數字的答案



let time = 5;//猜數字用的上限
let limitMax,limitMin;//最大數跟最小數限制

function Guest(e){
    if (e.keyCode==13){
        time--;//每猜一次就改寫剩餘次數
        console.log('答案='+theFinale);//目前的答案
        console.log('最大數'+limitMax+"最小數"+limitMin);
        if(youGuest.value == theFinale){
            // anwserAria.innerText="猜中了";
            alert('猜對了');
            theFinale = getRandomInt(100)+1;
            time = 5;
            limitMax,limitMin="";
            //猜對後要清空最大最小值
            return theFinale;
            // 答對後改寫答案 重置次數
        }
        else{
            if (youGuest.value > theFinale){
                if(youGuest.value >= limitMax){
                    anwserAria.innerText='不能猜相同或比'+limitMax+"還大!";
                    return time++
                }
                anwserAria.innerText="猜大了";
                limitMax=youGuest.value; 
                alert('還剩下'+time+'次'); 
                // youGuest.value=""//清空輸入值方便下次輸入
            }
            else if (youGuest.value < theFinale){
                if(youGuest.value <= limitMin){
                    anwserAria.innerText='不能猜相同或比'+limitMin+"還小!";
                    return time++
                }
                anwserAria.innerText="猜小了";
                limitMin=youGuest.value;
                alert('還剩下'+time+'次');
                // youGuest.value=""//清空輸入值方便下次輸入
            }
        }
        if(time==0){
            alert('次數耗盡')
            theFinale = getRandomInt(100)+1;
            time = 5;
            limitMax,limitMin = "";
            // 清空最大值最小值
            return theFinale;
            //次數耗盡後改寫答案 重置次數
            // 不能放判斷對錯的前面，如果最後一次答對的話會報錯
        }
    }
}


// 限制輸入1~100觸發條件為輸入時發生，超過就會被清空
youGuest.addEventListener('input',()=>{
    if(youGuest.value>100||youGuest.value<1){
        youGuest.value="";
    }
});
// 限制輸入1~100↑觸發條件為輸入時發生，超過就會被清空

let aa = "55", bb = 10;
console.log(bb+(+aa));

console.log(toString(bb));
//數字轉字串↑

console.log(parseInt(aa));
console.log(Number(aa));
// 字串轉數字↑


// 各種資料型態轉數字，parseInt  Number
// let cc = '';//空值=> NaN跟0  Number會把空值存成0!?
// let cc = "0123";//字串的數值 前面的0被去除，轉換成123
// let cc = true;//布林值 true = 1 false = 0
// let cc = "非數字"//非數字轉數值 NaN  (Not a Number)
let cc ="42";
console.log(parseInt(cc));
console.log(Number(cc));

// 無條件捨去 Meth.floor(e)
// 無條件進位 Meth.ceil(e)
// 四捨五入  Meth.round(e)

