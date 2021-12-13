const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');
const sliderImage = document.querySelector('.slider__container--image');
const arrayOfImages = [
    './assets/home-3.jpeg',
    './assets/slider/james-mckinven-cauCwvTkHLM-unsplash.jpg',
    './assets/slider/true-agency-Q8otix2SVko-unsplash.jpg'
];

//Function to change image in slider section. 
let count = 0;
const setImage = function() {
    sliderImage.src = arrayOfImages[count];
};

setImage();

const nextImage = function() {
    count++;
    if(count >= arrayOfImages.length) {
        count = 0;
    }
    sliderImage.src = arrayOfImages[count];
    console.log(count);
};

const prevImage = function() {
    count--;
    if(count < 0) {
        count = arrayOfImages.length - 1;
    }
    sliderImage.src = arrayOfImages[count];
    console.log(count);
};

rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', prevImage);