// main.js
import { initSmoothScroll } from "./functions/smoothScroll.js";
import { initMobileMenu } from "./functions/menuMobile.js";
import { initBackToTop } from "./functions/backToTopButton.js";
import { initThemeToggle } from "./functions/themeToggle.js"; // Importando o tema

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initSmoothScroll();
    initMobileMenu();
    initBackToTop();
});
