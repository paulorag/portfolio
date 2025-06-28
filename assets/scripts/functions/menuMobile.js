export function initMobileMenu() {
    const btn = document.querySelector(".material-symbols-outlined");
    const itens = document.getElementById("itens");

    if (!btn || !itens) return;

    const updateMenuVisibility = () => {
        if (window.innerWidth > 768) {
            itens.style.display = "block";
        } else {
            itens.style.display = "none";
        }
    };

    updateMenuVisibility();

    window.addEventListener("resize", updateMenuVisibility);

    btn.addEventListener("click", () => {
        itens.style.display =
            itens.style.display === "block" ? "none" : "block";
    });
}
