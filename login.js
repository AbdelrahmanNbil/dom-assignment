const mail = document.getElementById('mail-input');
const pass = document.getElementById('pass-input');
const hint = document.getElementById('hint');
const btn = document.getElementById('btn') ;
const link = document.getElementById('link');
const hint2 = document.getElementById('hint2')


btn.addEventListener('click' , function(){

    if(mail.value == "" || pass.value==""){
        hint.style.cssText='display:block'
    }
    else{
        hint.style.cssText='display:none'
    }


const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');

const email = mail.value.trim();
const password = pass.value;

const users = JSON.parse(localStorage.getItem('users')) || [];

const user = users.find(user => user.email == email && user.password == password);

    if (user)
     {
        window.location = './home.html';
    } 
    else {
        hint2.style.cssText='display:block'

    }



    
});

link.addEventListener('click' , function(){
    window.location = './logup.html';
})

