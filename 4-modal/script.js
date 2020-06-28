const modalButton = document.querySelector('.modal');
const closeButton = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');



modalButton.addEventListener('click', () => {
    modal.classList.add('close');
    modalOverlay.classList.add('open');
    document.body.style.backgroundColor = 'rgba(91, 241, 241, 0.664)';
    document.body.style.backgroundBlendMode = 'overlay';    
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('close');
    modalOverlay.classList.remove('open');
    document.body.style.backgroundColor = 'none';
    document.body.style.backgroundBlendMode = 'normal';
});