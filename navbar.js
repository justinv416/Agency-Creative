//Sets navApp as an empty object. 
const navApp = {};

//Function to close mobile navigation. 
navApp.closeNav = function() {
    document.querySelector('.navigation__mobile').classList.toggle('hideNav');
    document.querySelector('.fa-bars').classList.toggle('fa-times');
};

//Event Listeners
navApp.triggerNav = function(){
    document.querySelector('.fa-bars').addEventListener('click', navApp.closeNav);
};

//Changing the color of navbar if window is scrolled past initial position.
navApp.changeNavColor = function(){
    window.addEventListener('scroll', function(){
        const navigationMain = document.querySelector('.navigation');
        if(this.scrollY > 0) {
            navigationMain.classList.add('navigation__color');
        } else {
            navigationMain.classList.remove('navigation__color');
        };
    });
};

//Function that initializes the app.
navApp.init = function() {
    navApp.changeNavColor();
    navApp.triggerNav();
};

//Initialize the app.
navApp.init();