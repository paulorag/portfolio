import { smoothScrollTo } from "./smoothScroll.js";

export function initBackToTop() {
    const btnTop = document.getElementById("btnTop");

    if (!btnTop) return;

    window.addEventListener("scroll", () => {
        btnTop.classList.toggle("show", window.scrollY > 300);
    });

    btnTop.addEventListener("click", () => {
        smoothScrollTo(0, 0);
    });
}
