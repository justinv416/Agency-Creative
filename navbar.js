const navApp = {};

// //Function to close mobile navigation. 
navApp.closeNav = function() {
    document.querySelector('.navigation__mobile').classList.toggle('hideNav');
    document.querySelector('.fa-bars').classList.toggle('fa-times');
};

// //Event Listeners
navApp.hamburger = document.querySelector('.fa-bars');
navApp.hamburger.addEventListener('click', navApp.closeNav);

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


navApp.init = function() {
    navApp.changeNavColor();
    navApp.closeNav();
};

navApp.init();