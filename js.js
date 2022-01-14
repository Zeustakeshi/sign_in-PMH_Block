var userName 
var userNametrue
var passtrue
var pass
var pass2
var eron2 = document.getElementById("eron2")
var eron1 = document.getElementById("eron1")
function chuyenkhung_name (dieukien) {
    if(dieukien == 0){
        document.getElementById ("name").style.borderColor = "red";
    }else if(dieukien == 1){
        document.getElementById ("name").style.borderColor = "green";
    }
    else {
        document.getElementById ("name").style.borderColor = "black";

    }
}
function chuyenkhung_pass_1 (dieukien) {
    if(dieukien == 0){
        document.getElementById ("pass").style.borderColor = "red";
    }else if(dieukien == 1){
        document.getElementById ("pass").style.borderColor = "green";
    }else {
        document.getElementById ("pass").style.borderColor = "black";
    }
}
function chuyenkhung_pass_2 (dieukien) {
    if(dieukien == 0){
        document.getElementById ("pass2").style.borderColor = "red";
    }else if(dieukien == 1){
        document.getElementById ("pass2").style.borderColor = "green";
    }else {
        document.getElementById ("pass2").style.borderColor = "black";

    }
}



//main
function check_username (){ 
    userName = document.getElementById("username").value
    if(isNaN(userName[0]) == false){
        chuyenkhung_name(0)
        eron1.innerText = "*tên đăng nhập không bắt đầu bằng kí tự số"
        return false
    }else if (userName.length <= 4 ) {
        eron1.innerText = "*tên đăng nhập phải có ít nhất 5 kí tự"
        chuyenkhung_name(0)
        return false
    }else {
        eron1.innerText =""
        chuyenkhung_name(1)
        return userName
    }
    
    
}

function check_pass(){
    pass = document.getElementById("password").value
    if (pass.length <= 4){
        eron2.innerText = "*Mật khẩu phải có ít nhất 5 kí tự"
        chuyenkhung_pass_1 (0)
        return false
    }else{
        eron2.innerText = ''
        chuyenkhung_pass_1 (1)
        return pass
    }
}
////// xử lí đăng nhập
function checklogin(){
    if(check_username() == false){
        alert ("vui lòng nhập tên đăng nhập")
    } 
    if (check_pass() == false){
        alert('vui lòng nhập mật khẩu')
    }
    else if (userName === userNametrue && pass === passtrue) {
        return true
    } else if ( userName !== userNametrue || pass !== passtrue) {
        chuyenkhung_pass_1(0)
        chuyenkhung_name(0)
        alert('Thông tin tài khoản không chính xác !')
        // alert("đăng nhập thất bại!")
        return false
    }  
    
}
///// xử lí đăng kí
var dk_button = document.getElementById("dk1")
function sign_up (){
    
    
    if (dk_button.innerText == "Đăng kí 1"){
        document.getElementById('sign_up').innerHTML = '<div id="pass2"> <img src="lock.png" id="anh1"> <input type="password" id="password2" placeholder="Nhập lại mật khẩu" onchange="check_sing_up ()"> </div>'
        dk_button.innerText = "Đăng Kí 2"
        document.getElementById("dn").innerHTML = ''
        document.getElementById("username").value  = "" 
        eron1.innerText = ""
        chuyenkhung_name(3)
        document.getElementById("password").value = ""
        eron2.innerText = ""
        chuyenkhung_pass_1(3)
    }
    else {
        if(check_sing_up() == true){

            document.getElementById('sign_up').innerHTML = ""
            document.getElementById("dn").innerHTML = '<button class="button-30" onclick=" checklogin(), load1()">Đăng nhập</button>'
            
            dk_button.innerText = "Đăng kí 1"
            check_pass()
            check_username()
            saveIfo()
            document.getElementById("username").value = ""
            document.getElementById ("password").value  = ""
        }
    }
    
}
function check_sing_up (){
    pass2 = document.getElementById("password2").value
    if (pass != pass2 ){
        chuyenkhung_pass_2 (0)
        chuyenkhung_pass_1 (0)
        eron2.innerText = "*Mật khẩu không trùng khớp"
        return false
    }else{
        chuyenkhung_pass_2(3)
        return true
    }
}

function saveIfo(){
    userNametrue = document.getElementById("username").value
    passtrue = document.getElementById ("password").value  

       
    console.log(userNametrue)
    console.log (passtrue)
    console.log (userName)
    console.log(pass)
}
function load1(){
    if (checklogin() == true){
        window.location.replace("https://zeustakeshi.github.io/P_M_H/")
    }
    
}
