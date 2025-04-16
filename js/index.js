function showContent(step) {
    // Cacher tous les contenus
    const contents = document.querySelectorAll(".parcours-content .content");
    contents.forEach((content) => content.classList.remove("active"));

    // Afficher celui sélectionné
    const selected = document.getElementById(`content-${step}`);
    if (selected) selected.classList.add("active");

    // Désactiver tous les steps
    const steps = document.querySelectorAll(".progress-step");
    steps.forEach((s) => s.classList.remove("active"));

    // Activer celui cliqué
    const activeStep = document.querySelector(
        `.progress-step[onclick="showContent(${step})"]`
    );
    if (activeStep) activeStep.classList.add("active");
}

// Facultatif : afficher le 1er par défaut
document.addEventListener("DOMContentLoaded", () => showContent(1));

document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoHeight: true,
    });
});