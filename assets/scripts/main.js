import { initSmoothScroll } from "./smoothScroll.js";
import { initMobileMenu } from "./menuMobile.js";
import { initBackToTop } from "./backToTopButton.js";
import { initThemeToggle } from "./themeToggle.js";

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initSmoothScroll();
    initMobileMenu();
    initBackToTop();
});
