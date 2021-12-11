const navigationMain = document.querySelector('.navigation__container');
const navigationMobile = document.querySelector('.navigation__mobile');
const hamburgerNav = document.querySelector('.fa-bars');

hamburgerNav.addEventListener('click', function() {
    navigationMobile.classList.toggle('hideNav')
})