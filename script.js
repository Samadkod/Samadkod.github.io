document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("aside nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("visible");
    });
});
