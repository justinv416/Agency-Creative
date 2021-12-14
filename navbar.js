// //Function to close mobile navigation. 
const closeNav = function() {
    document.querySelector('.navigation__mobile').classList.toggle('hideNav');
    document.querySelector('.fa-bars').classList.toggle('fa-times')
};

// //Event Listeners
document.querySelector('.fa-bars').addEventListener('click', closeNav);

//Changing the color of navbar if window is scrolled past initial position.
window.addEventListener('scroll', function(){
    const navigationMain = document.querySelector('.navigation');
    if(this.scrollY > 0) {
        navigationMain.classList.add('navigation__color');
    } else {
        navigationMain.classList.remove('navigation__color');
    }
});
