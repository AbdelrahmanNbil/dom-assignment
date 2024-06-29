const btn = document.getElementById('btn');
const userName = document.getElementById('name');

btn.addEventListener('click', function() {
    
    window.location = './index.html';
});

const storedName = localStorage.getItem('username');

document.getElementById('name').innerHTML =storedName;