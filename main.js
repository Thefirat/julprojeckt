//Storing
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var numbers = /[0-15]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');



    }else if(pw.value.length < 8){
        alert('Min of 8');
        

    
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}



//Login
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Du är inloggad!');
    }else{
        alert('Något gick fel!');
    }
}