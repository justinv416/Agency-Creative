// //query selectors
const navigationMain = document.querySelector('.navigation');

// //Function to close mobile navigation. 
const closeNav = function() {
    document.querySelector('.navigation__mobile').classList.toggle('hideNav');
    document.querySelector('.fa-bars').classList.add('fa-times')
    document.querySelector('.fa-times').classList.add('fa-bars')
};

// //Event Listeners
document.querySelector('.fa-bars').addEventListener('click', closeNav);
// document.querySelector('.fa-times').addEventListener('click', closeNav);

//Changing the color of navbar if window is scrolled past initial position.
window.addEventListener('scroll', function(){
    if(this.scrollY > 0) {
        navigationMain.classList.add('navigation__color');
    } else {
        navigationMain.classList.remove('navigation__color');
    }
});

{/* <i class="fas fa-times"></i> */}

// function updateToDo(iElement) {
//   iElement.classList.remove('fa-square');
//   iElement.classList.add('fa-check-square');
// }

// ulElement.addEventListener("click", function(event) {

//   if (event.target.tagName === 'I') {
//     // tasks to perform
//     updateToDo(event.target);
//   }
  
// });