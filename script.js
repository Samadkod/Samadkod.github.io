const menuToggle = document.querySelector('.menu-toggle');
const aside = document.querySelector('aside');

console.log(menuToggle); // Vérifiez si le bouton est bien sélectionné
console.log(aside); // Vérifiez si la barre latérale est bien sélectionnée

menuToggle.addEventListener('click', () => {
    aside.classList.toggle('active');
    console.log('Menu toggled'); // Vérifiez si l'événement se déclenche
});
