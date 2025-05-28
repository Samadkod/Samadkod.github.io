// Mode sombre
const modeSwitch = document.querySelector('.mode-switch');
if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = modeSwitch.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Filtrage des projets
function filterProjects(tech) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (tech === 'all' || project.dataset.tech.includes(tech)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});

// Appel initial pour afficher les sections déjà dans la vue
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});



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

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('ligue1Chart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fans occasionnels', 'Fans réguliers', 'Ultra fans'],
                datasets: [{
                    label: 'Nombre d’abonnés',
                    data: [120, 300, 180],
                    backgroundColor: ['#0073e6', '#28a745', '#ffc107'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Répartition des abonnés Ligue 1'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});


