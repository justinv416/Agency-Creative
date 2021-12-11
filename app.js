//query selectors
const navigationMain = document.querySelector('.navigation__container');
const navigationMobile = document.querySelector('.navigation__mobile');
const hamburgerNav = document.querySelector('.fa-bars');
const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');
const sliderImage = document.querySelector('.slider__container--image')
const arrayOfImages = [
    './assets/home-3.jpeg',
    './assets/slider/james-mckinven-cauCwvTkHLM-unsplash.jpg',
    './assets/slider/true-agency-Q8otix2SVko-unsplash.jpg'
];
//Sets app to an empty obj.
const app = {};

//Function to close mobile navigation. 
app.closeNav = function() {
    navigationMobile.classList.toggle('hideNav');
};

//Function to change image in slider section. 
let count = 0;
app.setImage = function() {
    sliderImage.src = arrayOfImages[count];
};

app.setImage()

app.nextImage = function() {
    count++;
    if(count >= arrayOfImages.length) {
        count = 0;
    }
    sliderImage.src = arrayOfImages[count];
    console.log(count)
}

app.prevImage = function() {
    count--;
    if(count <= 0) {
        count = arrayOfImages.length - 1;
    }
    sliderImage.src = arrayOfImages[count];
    console.log(count)
}

//Event Listeners
hamburgerNav.addEventListener('click', app.closeNav);
rightArrow.addEventListener('click', app.nextImage);
leftArrow.addEventListener('click', app.prevImage);

const timeline1 = gsap.timeline();
timeline1.from('.navigation__logo--link', {
    duration: 1,
    opacity: 0,
    y: 200
}).from('.navigation__list--right', {
    duration: 1,
    opacity: 0,
    x: -300
}, "<").from('.navigation__list--left', {
    duration: 1,
    opacity: 0,
    x: 300
}, "<")