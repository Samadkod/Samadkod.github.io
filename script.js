// Script pour la fonctionnalité de bascule du menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const aside = document.querySelector('aside');

    // Écouteur d'événements pour le bouton de bascule du menu
    menuToggle.addEventListener('click', () => {
        aside.classList.toggle('active');
    });

    // Code pour les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Vous avez cliqué sur un projet !');
        });
    });
});
