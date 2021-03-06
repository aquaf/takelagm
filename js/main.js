document.addEventListener("DOMContentLoaded", function() {
    let burger = document.querySelector(".header__menu-burger");
    let menu = document.querySelector(".header__menu");
    let body = document.getElementsByTagName("body")[0];
    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("lock");
    });

});