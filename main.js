var btn_open = document.querySelector(".nav__icon.open");
var btn_close = document.querySelector(".nav__icon.close");
var navbar = document.querySelector(".nav");

console.log(btn_open,btn_close);

function toggleClassActive (){
    btn_open.classList.toggle("active");
    btn_close.classList.toggle("active");
    navbar.classList.toggle("active");
}

btn_open.addEventListener("click", toggleClassActive);
btn_close.addEventListener("click", toggleClassActive);

