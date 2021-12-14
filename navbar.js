// //query selectors
const navigationMobile = document.querySelector('.navigation__mobile');
const hamburgerNav = document.querySelector('.fa-bars');
const navigationMain = document.querySelector('.navigation');

// //Function to close mobile navigation. 
const closeNav = function() {
    navigationMobile.classList.toggle('hideNav');
};

// //Event Listeners
hamburgerNav.addEventListener('click', closeNav);

//Changing the color of navbar if window is scrolled past initial position.
window.addEventListener('scroll', function(){
    if(this.scrollY > 0) {
        navigationMain.classList.add('navigation__color');
    } else {
        navigationMain.classList.remove('navigation__color');
    }
})