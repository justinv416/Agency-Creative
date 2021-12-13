// //query selectors
const navigationMobile = document.querySelector('.navigation__mobile');
const hamburgerNav = document.querySelector('.fa-bars');

// //Function to close mobile navigation. 
const closeNav = function() {
    navigationMobile.classList.toggle('hideNav');
};

// //Event Listeners
hamburgerNav.addEventListener('click', closeNav);


