const form = document.querySelector('#blog__form');
const commentName = document.querySelector('#comment__form--name');
const commentText = document.querySelector('#comment__textarea')

const submitComment = function() {
    console.log(commentName.value)
    console.log(commentText.value)
};

function getDate() {
    const newDate = new Date();
    let date = newDate.toDateString();
    return date;
};

const printDate = getDate();
console.log(printDate)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const commentContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const commenterText = document.createElement('div');
    const profileImage = document.createElement('img');
    const commenterName = document.createElement('h3');
    const commentParagraph = document.createElement('p');
    // const commentDate = document.createElement('p');
    profileImage.src = './assets/generic-profile.png';
    imageContainer.appendChild(profileImage);
    imageContainer.classList.add('comment__image')
    commenterName.textContent = commentName.value;
    commenterName.classList.add('comment__name');
    commentParagraph.textContent = commentText.value;
    commentParagraph.classList.add('comment__text');
    commenterText.appendChild(commenterName);
    commenterText.appendChild(commentParagraph);
    commenterText.classList.add('comment__container')
    commentContainer.appendChild(imageContainer);
    commentContainer.appendChild(commenterText);
    commentContainer.classList.add('comment')
    document.querySelector('.comments__wrapper').appendChild(commentContainer)
});

{/* <div class="comment">
                <div class="">
                    <img src="./assets/blog-7.jpeg" alt="A profile picture of a smiling man in a white shirt.">
                </div>
                <div class="comment__container">
                    <h3 class="comment__name">Daniel Vandaft <span><a href="#"> - reply</a></span></h3>
                    <p class="comment__text">Pitch agile development business plan stelth channels prototype mass market
                        product management value proposition startup strategy.</p>
                    <p class="comment__date">Jul 17, 2015 at 15 hours ago</p>
                </div>
            </div> */}