
const Openlist = document.getElementById('aboutUs');
Openlist.addEventListener('click',toggleList);



var listItem = Openlist.getElementsByTagName('li');
let isOpen = false;
//下拉選單，判斷清單是否打開狀態(我一開始耍白癡放function裡面一直刷新false打不開)
function toggleList(){
        if(isOpen === false){
            for(i=0;i<listItem.length;i++){
                listItem[i].classList.add('OpenList')
                //如果沒打開  每個li添加class打開
            }
            return isOpen = true
             //回傳賦值isOpen = true表示清單已展開的狀態
        }
        else if(isOpen === true){
            for(i=0;i<listItem.length;i++){
                listItem[i].classList.remove('OpenList')
                //如果已打開  每個li去除開啟的class
            }
            return isOpen = false
            //回傳賦值isOpen = false表示清單沒展開的狀態
        }
};

// 以下為模擬註冊與登入Js code

//註冊本地
function reg(){
    let userName =document.getElementById('name').value,
        passWord=document.getElementById('pwd').value;
        //以id鎖定input將DOM物件傳入值存為變數
        if(userName===""|| pwd===""){
            alert("沒輸入帳號或密碼")
            //if判別式，若值為空跳出警告沒輸入帳密
        }else{
            if((userName&&passWord)in localStorage){
                //localStorage裡若有相同帳號&&(和)密碼就跳出警告
                //然後將input內輸入的值清空
                alert("用戶或密碼重複，請重來");
                document.getElementById('name').value="";
                document.getElementById('pwd').value="";
            }
            else{
                localStorage.setItem(userName,passWord);
                alert('註冊成功')
                //排除上述條件後彈出註冊成功
                //並且用localStorage.setItem(key,value)語法
                //將帳號變數與密碼變數作為參數傳入
                //帳號與密碼形成鍵值對封存(每個帳號對應一個密碼)
            }
        }
}


    //登入
    function log(){
        let logUn = document.getElementById('logName').value;
        let logPw = document.getElementById('logPwd').value;
        //一樣取得值(用戶輸入的帳號、密碼)存為變數
        if(logUn===""||logPw===""){
            alert('請輸入用戶或密碼')
            //沒輸入帳號或密碼跳警告
        }else{
            if (logUn in localStorage){
                //↑ 如果輸入的logUn帳號(key)有在裡面
                //localstorage儲存為Key:Value 鍵值對 
                //↓ 設passWord=logUn對應的帳號(Value)
                let passWord=localStorage[logUn]
                if(logPw===passWord){
                    //儲存帳號的密碼若與輸入密碼相符
                    alert('登入成功')
                    document.getElementById('logName').value="";
                    document.getElementById('logPwd').value="";
                }
            }
            else{
                alert('登入失敗'); 
            }
        }
    }
    
    const signAcc = document.getElementById('signAccount');
    const logAcc = document.getElementById('logAccount');
    // ↑取得狀態列上的註冊與登入按鈕
    const logForm=document.getElementById('logIn');
    const signForm=document.getElementById('signIn');
    //↑取得註冊與登入表單


    signAcc.addEventListener('click',callSign);
    logAcc.addEventListener('click',callLog);
    // ↑按鍵觸發呼叫表單
    // ↓呼叫註冊表單
    function callSign(){
        signForm.classList.add('signInShow');
        logForm.classList.remove('logInShow');
        // 註冊表單加入呼叫class，同時移除登入表單的呼叫class
    }
    // ↓呼叫登入表單
    function callLog(){
        logForm.classList.add('logInShow');
        signForm.classList.remove('signInShow');
        // 註冊表單加入呼叫class，同時移除登入表單的呼叫class
    }
    // ↓離開表單 移除秀出的class名
    function exitLog(){
        logForm.classList.remove('logInShow');
    }
    function exitSign(){
        signForm.classList.remove('signInShow');
    }


// 以下為側邊的對話阿羅娜相關Code
    const sentQues = document.getElementById('sentQues');
    // 取得對話送出的按鈕
    let theReply = document.getElementById('replyAria');
    let Arona = document.getElementById('Arona');
    // 取得回話區域跟阿羅娜的立繪
    const BATest = /檔案|蔚藍/;
    const AlbumTest = /畫廊|圖片|CG/;
    const SignLogTest= /註冊|登入|帳號|密碼/;
    const ThreesizeTest=/三圍|[(?i)size]|色色/;
    // 正則判定輸入的內容，反斜號包起來 [(?i)查找內容]表示忽略大小寫

    sentQues.addEventListener('click',reply);
    // 觸發回話(reply涵式)


    
    function resetArona(){
        theReply.innerHTML="用關鍵字來問點問題吧!<br>關於蔚藍檔案、<br>註冊登入、<br>CG畫廊都可以喔!";
        Arona.style.backgroundImage ="url(/cheatArona/static.png)";
    };
    //還原預設阿羅娜，要傳給Debounce當參數用
    
    //↓debounce寫法
    const debounce = (fc,delay)=>{
        let timer;
        return (...args)=>{
            clearTimeout(timer);
            console.log("有取得return");
            timer = setTimeout(()=>fc(...args),delay);
        }
    };
            //預設好處理的debounce函式
    
    sentQues.addEventListener('click',debounce(resetArona,5000));
    //console裡面把觸發debounce的代碼放到前面的話發現觸發不了(會跳Error)
    //無論執行哪個回答，都要等回答後5秒才會回復到預設阿羅娜
    //不使用debounce連續輸入會瘋狂執行restArona刷新回預設蓋掉表情變更
    


    function reply(){
        const talkQues = document.getElementById('talkQues').value;
        //觸發涵式才取得輸入值，外部設置的話讀不到值
        let BATestIstrue =BATest.exec(talkQues);
        let AlbumTestIstrue = AlbumTest.exec(talkQues);
        let SignLogTestIstrue = SignLogTest.exec(talkQues);
        let ThreesizeTestIstrue = ThreesizeTest.exec(talkQues);
        // 是否包含字串測試，有包含回傳陣列，沒包含回傳null
        //原本用method的test()回傳true of false判斷，但會觸發非關鍵字所以改用exec()
        //debounce 測試區

        //debounce 測試區
        if ( BATestIstrue != null && AlbumTestIstrue === null && SignLogTestIstrue === null && ThreesizeTestIstrue === null ){
            // 輸入值是否包含關鍵字 有就執行這區域
            //改變內部的HTML寫法
            theReply.innerHTML="蔚藍檔案<br>是一款由Nexon出品的次文化RPG遊戲，主打校園風的青春輕喜劇物語!";
            Arona.style.backgroundImage ="url(/cheatArona/smile.png)";
            // 阿羅娜內部的背景影像更改連結語法
            //debounce還原阿羅娜，參考註解 debounce寫法那行
        }
        else if ( AlbumTestIstrue != null && BATestIstrue === null && SignLogTestIstrue === null && ThreesizeTestIstrue === null ){
            theReply.innerHTML="左邊是畫廊喔!<br>點開可以用燈箱的形式欣賞遊戲內的CG圖片";
            Arona.style.backgroundImage ="url(/cheatArona/smile.png)";
        }
        else if ( ThreesizeTestIstrue != null && BATestIstrue === null && SignLogTestIstrue === null && AlbumTestIstrue === null ){
            theReply.innerHTML="為什麼要問這個呢......?";
            Arona.style.backgroundImage ="url(/cheatArona/angry.png)";
        }
        else if ( SignLogTestIstrue != null && BATestIstrue === null && ThreesizeTestIstrue === null && AlbumTestIstrue === null ){
            theReply.innerHTML="點選右上角的註冊可以加入會員喔!雖然是假的.....";
            Arona.style.backgroundImage ="url(/cheatArona/sad.png)";
        }else{
            theReply.innerHTML="アロナ不懂你的意思?<br>再換個方式問問看吧";
            Arona.style.backgroundImage ="url(/cheatArona/smile.png)";
        }
    };

var navBar= document.getElementsByClassName('navBar')[0]
window.addEventListener('scroll',throttle(navOpenAndClose,50))
function navOpenAndClose(){
    if(window.scrollY>200){
        navBar.style.display="none";
    }else{
        navBar.style.display="flex";
    }
    //可以關閉 但是切換到PAD或MOBILE會出現，另外用resize把他幹掉
}
window.addEventListener('resize',()=>{
    if(window.innerWidth<1080){
        navBar.style.display="none"
    }else{
        navBar.style.display="flex"
    }
})

//節流函數
function throttle(mainFunction, delay) {
let timerFlag = null; // Variable to keep track of the timer

// Returning a throttled version 
return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
    mainFunction(...args); // Execute the main function 
    timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
    }, delay);
    }
};
}