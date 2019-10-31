
//登录
function loginOnClick(){
    var userStr = document.getElementById("login_user_num_val").value;
    var pwdStr = document.getElementById("login_pwd_num_val").value;

    if(userStr != "czx"){
        window.alert("账号错误！");
        clearLoginInputInfo();
        return;
    }
    if(pwdStr != "123456"){
        window.alert("密码错误！");
        clearLoginInputInfo();
        return ;
    }

    var loginBt = document.getElementById("login_bt");
    loginBt.href = "login.html";
    window.alert("登录成功！");
    clearLoginInputInfo();
    return ;
}

//清空登录输入信息
function clearLoginInputInfo(){
    var userStr = document.getElementById("login_user_num_val");
    var pwdStr = document.getElementById("login_pwd_num_val");

    userStr.value = "";
    pwdStr.value = "";
}