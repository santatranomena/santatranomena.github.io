function toggleMenu() {
    const navRight = document.querySelector(".nav-right");
    const navLeft = document.querySelector(".nav-left");

    if (navRight) {
        navRight.classList.toggle("show"); // Ajoute ou retire la classe 'show' pour afficher/masquer le menu
    }
    if (navLeft) {
        navLeft.classList.toggle("show");
    }
}
