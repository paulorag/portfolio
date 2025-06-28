export function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) return;

    // Aplica o tema salvo (se houver)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
        // Se o tema não estiver salvo, verifica a preferência do sistema
        const prefersDarkScheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.setAttribute(
            "data-theme",
            prefersDarkScheme ? "dark" : "light"
        );
    }

    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}
