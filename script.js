// Bouton "Retour en haut"
window.onscroll = function() { 
    toggleScrollButton();
    revealSections();
};

function toggleScrollButton() {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animation de défilement pour révéler les sections
function revealSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add("section-visible");
        }
    });
}

// Appel initial pour afficher les sections déjà dans la vue
revealSections();
