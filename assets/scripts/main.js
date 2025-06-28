import { initSmoothScroll } from "./smoothScroll.js";
import { initMobileMenu } from "./menuMobile.js";
import { initBackToTop } from "./backToTopButton.js";

document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initMobileMenu();
    initBackToTop();
});
