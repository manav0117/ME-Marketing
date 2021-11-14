let navbar=document.querySelector('.navbar');
let menu=document.getElementById('menu');
menu.addEventListener('click',function(){
menu.classList.toggle('fa-times');
navbar.classList.toggle('nav-toggle');
})