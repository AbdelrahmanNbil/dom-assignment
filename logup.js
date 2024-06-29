
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const success = document.getElementById('success');
const currect = document.getElementById('currect');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const emailExists = users.some(user => user.email === email);
    const usernameExists = users.some(user => user.username === username);

    if (emailExists) {
        currect.style.cssText= 'display:block'
   
    } else {
        
        const newUser = {
            username: username,
            email: email,
            password: password
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        success.style.cssText= 'display:block';
        currect.style.cssText= 'display:none'

    }


})

link.addEventListener('click' , function(){
    window.location='./index.html';
})




;
