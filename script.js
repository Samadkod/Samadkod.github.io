// Script pour la fonctionnalité de bascule du menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const aside = document.querySelector('aside');

    // Écouteur d'événements pour le bouton de bascule du menu
    menuToggle.addEventListener('click', () => {
        aside.classList.toggle('active');
    });
