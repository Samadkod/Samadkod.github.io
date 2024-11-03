const menuToggle = document.querySelector('.menu-toggle');
const aside = document.querySelector('aside');

menuToggle.addEventListener('click', () => {
    aside.classList.toggle('active');
});
