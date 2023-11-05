class family{
    constructor (title,Myname,age,sex) {
        this.title = title
        this.name = Myname;
        this.age = age;
        this.sex = sex;
    }
    howOld(){
        console.log(this.title+this.name+"目前"+this.age+"歲")
    }
}

class father extends family{
    constructor(Myname,title,power,height){
        super(title,Myname)
        this.power = power;
        this.height = height
    }
    secrete(third){
            let theTruth = document.getElementById('theTruth');
            theTruth.innerText = this.title+this.name+"有個名叫"+third+"的外遇對象";
            
    }
};

let dad = new family("父親","david",36,"男"),
    mom = new family("母親","lucy",32,"女"),
    dauther = new family("女兒","rebeca",12,"女");
console.log(dad.pet)

let inputName = document.getElementById('family');

function badFatherName(){

    let newName = inputName.value;
    
    let badFather = new father("爸爸",newName);
    let theTruthContext = badFather.secrete("sophie");
    theTruthContext;
}
// 節流
function throttle(fun,delay){
    let timer;
        return function () {
            const context = this;//this指向函式體內部
            if (timer) return;
            timer = setTimeout(() => {
                fun.call(context);//回調當前的函式執行內容
                timer = null;//清空計時器重來
            }, delay);
        };
}
// 節流 每過一秒才會偵測一次觸發
inputName.addEventListener('input',throttle(badFatherName,1000));

console.log(dad.howOld())

const cat={
    name:'lily',
    age:7,
    sex:'female',
    child:['bob','alisa',{grandChild:'tom',grandChild2:'jelly'}]
}


console.log("貓的名字叫做"+cat.name+"他的第三個孩子生的孫子叫做"+cat.child[2].grandChild2);

const legend=[[1,2,3],[4,5]]
console.log(legend[0][2]);

legend.forEach(e => {
    console.log(e.forEach(e =>{
        console.log(e);//雙重迴圈用foreach求個別值計算，為啥會有個undefined    
    }));
})

for(i=0;i<legend.length;i++){
    for(j=0;j<legend[i].length;j++){
        console.log(legend[i][j]);//個別取出雙重回圈內的每一個值 可以單獨計算
    }
}

console.log(`在字串內加入變數${dad.name}`);//反引號`字串內`可以用${}包住變數輸出




// 建立三個空陣列 放0~50的整數、偶數、奇數
let arr1=[];
let arr2=[];
let arr3=[];

console.log(arr1,arr2,arr3)
for(i=0;i<=50;i++){
    arr1.push(i+1);
    if(i%2==0&&i!==0){
    arr2.push(i);
    }else{
    arr3.push(i);
    }
}
// console.log(arr1,arr2,arr3)

//陣列加總
var sum=0;
for(i=0;i<arr2.length;i++){
    sum =sum+arr2[i];
}
console.log("偶數總和"+sum)

const NINE= document.getElementById('NINE');;
let TimeSheet=false;
function timeSheet(){

if(TimeSheet==false){
    for(i=1;i<=9;i++){
        NINE.innerHTML+=`</br>  目前為第${[i]}行的九九乘法表`
        for(j=1;j<=9;j++){
            NINE.innerHTML+=` ${i}*${j}=${[i]*[j]}  `;    //個別取出雙重回圈內的每一個值 可以單獨計算
        }
    }
}
TimeSheet=!TimeSheet;
}

for(i=3;i<=100;i+=2){
    for(j=2;j<=i;j++){
        if(i%j==0){
            if(i==j){
                console.log(j);
            }
            else{
                break;//break跳到上一層 
            }
        }
    }
}
