//Initializes blogApp as an empty object. 
const blogApp = {};

//Sets initial number of comments to two;
blogApp.commentCount = 02;
//Function that updates the number of comments. 
blogApp.updateNumber = function() {
    blogApp.commentCount++;
    document.querySelector('.comments__number').textContent = blogApp.commentCount;
    return blogApp.commentCount;
};

//Function that will get the current date.
blogApp.getDate = function() {
    const newDate = new Date();
    //Converts numeric date to a string. 
    let date = newDate.toDateString();
    return date;
};


//Function that create a comment, EXTREMELY ugly and inefficient need to find a better way to do this at some point without innerHTML.
blogApp.createComment = function() {
    const commentContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const commenterText = document.createElement('div');
    const profileImage = document.createElement('img');
    const commenterName = document.createElement('h3');
    const commentParagraph = document.createElement('p');
    const commentDate = document.createElement('p');

    blogApp.printDate = blogApp.getDate();
    profileImage.src = './assets/generic-profile.png';
    commentParagraph.textContent = document.querySelector('#comment__textarea').value;
    commenterName.textContent = document.querySelector('#comment__form--name').value;
    commentDate.textContent = blogApp.printDate;

    imageContainer.classList.add('comment__image');
    commenterName.classList.add('comment__name');
    commentParagraph.classList.add('comment__text');
    commenterText.classList.add('comment__container');
    commentDate.classList.add('comment__date');
    commentContainer.classList.add('comment');

    imageContainer.appendChild(profileImage);
    commentContainer.append(imageContainer, commenterText);
    commenterText.append(commenterName, commentParagraph, commentDate);
    document.querySelector('.comments__wrapper').appendChild(commentContainer);
}

//Function that holds the event listener for form submission.
blogApp.formControls = function() {
    const form = document.querySelector('#blog__form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        blogApp.createComment();
        blogApp.updateNumber();
    });
};

//function that will initialize the app.
blogApp.init = function() {
    blogApp.formControls();
}

//Initialize the app. 
blogApp.init();