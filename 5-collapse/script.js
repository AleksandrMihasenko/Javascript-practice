//first variant
const openButtons = document.querySelectorAll('.image-open');
const closeButtons = document.querySelectorAll('.image-close');


openButtons.forEach(item => {
    item.addEventListener('click', (event) => {
        const showText = event.currentTarget.parentElement.parentElement.nextElementSibling;
        const showButton = event.currentTarget.nextElementSibling;
        const closeButton = event.currentTarget;        

        showText.classList.toggle('hidden');        
        showButton.classList.toggle('hidden');        
        closeButton.classList.toggle('hidden');
    });
});

closeButtons.forEach(item => {
    item.addEventListener('click', (event) => {
        const closeText = event.currentTarget.parentElement.parentElement.nextElementSibling;
        const showButton = event.currentTarget.previousElementSibling;
        const closeButton = event.currentTarget;        

        closeText.classList.toggle('hidden');        
        showButton.classList.toggle('hidden');        
        closeButton.classList.toggle('hidden'); 
    });
});




// //second variant
// const articles = document.querySelectorAll('.collapse');


// articles.forEach(item => {    
//     const openButton = item.querySelector('.image-open');
//     const closeButton = item.querySelector('.image-close');

//     openButton.addEventListener('click', () => {
//         item.lastElementChild.classList.toggle('hidden');
//         item.firstElementChild.lastElementChild.firstElementChild.classList.toggle('hidden');
//         item.firstElementChild.lastElementChild.lastElementChild.classList.toggle('hidden');
//     });

//     closeButton.addEventListener('click', () => {
//         item.lastElementChild.classList.toggle('hidden');
//         item.firstElementChild.lastElementChild.firstElementChild.classList.toggle('hidden');
//         item.firstElementChild.lastElementChild.lastElementChild.classList.toggle('hidden');
//     });
// });