const blogApp = {};

blogApp.commentCount = 02;

blogApp.updateNumber = function() {
    blogApp.commentCount++;
    document.querySelector('.comments__number').textContent = blogApp.commentCount;
    return blogApp.commentCount;
};

blogApp.getDate = function() {
    const newDate = new Date();
    let date = newDate.toDateString();
    return date;
};

blogApp.printDate = blogApp.getDate();
//Function that create a comment, EXTREMELY ugly and inefficient need to find a better way to do this at some point without innerHTML.
blogApp.createComment = function() {
    const commentName = document.querySelector('#comment__form--name');
    const commentText = document.querySelector('#comment__textarea');

    const commentContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const commenterText = document.createElement('div');
    const profileImage = document.createElement('img');
    const commenterName = document.createElement('h3');
    const commentParagraph = document.createElement('p');
    const commentDate = document.createElement('p');

    profileImage.src = './assets/generic-profile.png';
    commentParagraph.textContent = commentText.value;
    commenterName.textContent = commentName.value;
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

blogApp.formsControls = function() {
    const form = document.querySelector('#blog__form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        blogApp.createComment();
        blogApp.updateNumber();
    });
};


blogApp.init = function() {
    blogApp.formsControls();
}

blogApp.init();