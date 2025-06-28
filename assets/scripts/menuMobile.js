export function initMobileMenu() {
    const btn = document.querySelector(".material-symbols-outlined");
    const itens = document.getElementById("itens");

    if (!btn || !itens) return;

    btn.addEventListener("click", () => {
        itens.style.display =
            itens.style.display === "block" ? "none" : "block";
    });
}
