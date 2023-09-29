const weekDays = document.getElementById('ans');
const ansAria = document.getElementById('haha');
console.log(weekDays,ansAria);

function caculateWeek(e){
    let ans = Math.ceil(e%7);
    const dayDate = ["一","二","三","四","五","六",];
    let ansTalk = ansAria.innerText= e+"天後是星期"+dayDate[ans-1];
    switch(ans){
        case 0:
                ansTalk =ansAria.innerText= e+"天後是星期日" ;
            break
        default:
            if(ans<0){
                ansTalk = ansAria.innerText= "沒有負數天的好嗎?";
            }
            ansTalk;
            break
    }
}