const showButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-btn');
const aside = document.querySelector('.aside');

showButton.addEventListener('click', () => {
    if (aside.classList.contains('disactive')) {
        aside.classList.toggle('disactive');
    } else {
        aside.classList.toggle('disactive');
    }    
});

closeButton.addEventListener('click', () => {
    aside.classList.add('disactive');    
});