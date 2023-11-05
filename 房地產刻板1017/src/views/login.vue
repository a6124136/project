<script setup>
        import {RouterLink,RouterView} from 'vue-router';
</script>

<template>
    <div id="loginDiv">
        <form action="">
            <!-- 信箱BOX -->
            <div class="emailBox d-flex flex-column ">
                <label for="EM">Email</label>
                <input type="email" name="EM" id="EM" placeholder="&#127018;info.haha@kmail.com">
            </div>
            <!-- 密碼BOX -->
            <div class="pwdBox d-flex flex-column">
                <label for="PW">Name/Password</label>
                <input type="pwd" name="PW" id="PW" placeholder="tonguherlen">
            </div>
            <!-- 保持登入、註冊、勾選 -->
            <div class="bottomBox d-flex justify-content-between">
                <div class="checkKeeplogin">
                    <input type="checkbox" name="" id="keepLogin">
                    <label for="keepLogin">ログインを保持する</label>
                </div>
                <span>新規登録</span>
            </div>
            <div class="loginBtn d-flex">
                <RouterLink class="Routers" to="/login/userUi">
                <input type="button" value="ログイン" class="btn" >
                </RouterLink>
            </div>
        </form>
    </div>
    <!-- <RouterView></RouterView> -->
</template>

<style scoped>
    #loginDiv{
        box-sizing: border-box;
        width: 500px;
        height: 500px;
        /* background-color: aqua; */
        margin: 0 auto;
        padding-top: 20vh;
/* 信箱帳號 */
        .emailBox{
            position: relative;
            width: 50%;
            margin: 0 auto;
            margin-bottom:10px ;
            font-weight: 800;
            &::after{
                position: absolute;
                content: "\2754";
                width: 50px;
                height: 50px;
                right:0;
                top:50%;
            }
            #EM{
                border: none;
                position: relative;
            }
        }
/* 密碼 */
        .pwdBox{
            position: relative;
            width: 50%;
            margin: 0 auto;
            font-weight: 800;
            margin-bottom:10px ;
            &::after{
                position: absolute;
                content: "\2754";
                width: 50px;
                height: 50px;
                right:0;
                top:50%;
            }
            #PW{
                border: none;
            }
        }
/* 底下的核取方塊跟註冊 */
        .bottomBox{
            width: 50%;
            margin: 0 auto;
            font-weight: 600;
            margin-bottom:30px ;
            .checkKeeplogin{
                #keepLogin{
                    border: none;
                }
            }
        }
/*登入按鈕  */
        .loginBtn{
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            /* background-color: aqua; */
            .Routers{
                .btn{
                    width: 100%;
                    background-color: rgb(82, 70, 152);
                    color:#fff;
                    font-weight: 800;
                }
            }
        }
    }
</style>