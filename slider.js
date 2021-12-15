sliderApp = {};

sliderApp.leftArrow = document.querySelector('.fa-angle-left');
sliderApp.rightArrow = document.querySelector('.fa-angle-right');
sliderApp.sliderImage = document.querySelector('.slider__container--image');
sliderApp.arrayOfImages = [
    './assets/home-3.jpeg',
    './assets/slider/james-mckinven-cauCwvTkHLM-unsplash.jpg',
    './assets/slider/true-agency-Q8otix2SVko-unsplash.jpg'
];

//Function to change image in slider section. 
sliderApp.imageCount = 0;
sliderApp.setImage = function() {
    sliderApp.sliderImage.src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

sliderApp.nextImage = function() {
    sliderApp.imageCount++;
    if(sliderApp.imageCount >= sliderApp.arrayOfImages.length) {
        sliderApp.imageCount = 0;
    }
    sliderApp.sliderImage.src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

sliderApp.prevImage = function() {
    sliderApp.imageCount--;
    if(sliderApp.imageCount < 0) {
        sliderApp.imageCount = sliderApp.arrayOfImages.length - 1;
    }
    sliderApp.sliderImage.src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

sliderApp.rightArrow.addEventListener('click', sliderApp.nextImage);
sliderApp.leftArrow.addEventListener('click', sliderApp.prevImage);

sliderApp.init = function() {
    sliderApp.setImage();
    sliderApp.prevImage();
    sliderApp.nextImage();
};

sliderApp.init();