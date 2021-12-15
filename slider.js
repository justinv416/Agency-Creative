//Sets sliderApp as an empty object. 
sliderApp = {};

//An array that will hold the sources of images. 
sliderApp.arrayOfImages = [
    './assets/home-3.jpeg',
    './assets/slider/james-mckinven-cauCwvTkHLM-unsplash.jpg',
    './assets/slider/true-agency-Q8otix2SVko-unsplash.jpg'
];

//Function to change image in slider section. 
sliderApp.imageCount = 0;
sliderApp.setImage = function() {
    document.querySelector('.slider__container--image').src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

//Function that will change to the next image in the array.
sliderApp.nextImage = function() {
    sliderApp.imageCount++;
    if(sliderApp.imageCount >= sliderApp.arrayOfImages.length) {
        sliderApp.imageCount = 0;
    }
    document.querySelector('.slider__container--image').src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

//Function that will change to the previous image in the array. 
sliderApp.prevImage = function() {
    sliderApp.imageCount--;
    if(sliderApp.imageCount < 0) {
        sliderApp.imageCount = sliderApp.arrayOfImages.length - 1;
    }
    document.querySelector('.slider__container--image').src = sliderApp.arrayOfImages[sliderApp.imageCount];
};

//Function fot the arrow icons. 
sliderApp.controls = function(){
    document.querySelector('.fa-angle-right').addEventListener('click', sliderApp.nextImage);
    document.querySelector('.fa-angle-left').addEventListener('click', sliderApp.prevImage);
};

//Function that initializes the app.
sliderApp.init = function() {
    sliderApp.setImage();
    sliderApp.prevImage();
    sliderApp.nextImage();
    sliderApp.controls();
};

//Initialize the app.
sliderApp.init();