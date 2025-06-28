// themeToggle.js

export function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) return;

    // Função para atualizar o tema com base nas preferências do usuário ou do sistema
    const updateTheme = () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme); // Aplica o tema salvo
        } else {
            // Verifica a preferência do sistema (dark ou light)
            const prefersDarkScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            document.documentElement.setAttribute(
                "data-theme",
                prefersDarkScheme ? "dark" : "light"
            );
        }
    };

    // Aplica o tema ao carregar a página
    updateTheme();

    // Verifica se há alteração nas preferências de tema do sistema
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
            // Se o tema não foi manualmente salvo, atualiza com base nas preferências do sistema
            const savedTheme = localStorage.getItem("theme");
            if (!savedTheme) {
                updateTheme();
            }
        });

    // Alterna o tema quando o botão é clicado
    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}
