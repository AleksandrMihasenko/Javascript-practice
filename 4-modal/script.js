const modalButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const background = document.querySelector('.container');



modalButton.addEventListener('click', () => {
    
    modal.classList.add('close');
    modalOverlay.classList.add('open');
    background.classList.add('open');
    
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('close');
    modalOverlay.classList.remove('open');
    background.classList.remove('open');
});

background.addEventListener('click', () => { 
    if (event.target.classList.value === 'container open') {
        modal.classList.remove('close');
        modalOverlay.classList.remove('open');
        background.classList.remove('open');
    }       
});

