const menuBurger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

menuBurger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuBurger.classList.add('active');
    } else {
        menuBurger.classList.remove('active');
    }    
});