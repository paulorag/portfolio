export function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");

    if (!toggleBtn) return;

    const updateTheme = () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDarkScheme = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            const theme = prefersDarkScheme ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", theme);
        }
    };

    updateTheme();

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
            const savedTheme = localStorage.getItem("theme");
            if (!savedTheme) {
                updateTheme();
            }
        });

    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}
