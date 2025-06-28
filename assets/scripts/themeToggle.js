export function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) return;

    // Função para atualizar o tema com base nas preferências do usuário ou do sistema
    const updateTheme = () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            // Aplica o tema salvo pelo usuário
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            // Caso não tenha tema salvo, verifica as preferências do sistema
            const prefersDarkScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            // Define o tema de acordo com as preferências do sistema
            const theme = prefersDarkScheme ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", theme);
        }
    };

    // Aplica o tema ao carregar
    updateTheme();

    // Verifica alterações nas preferências do sistema
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
            // Verifica se o tema não foi definido manualmente pelo usuário
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
        localStorage.setItem("theme", newTheme); // Salva o tema selecionado pelo usuário
    });
}
