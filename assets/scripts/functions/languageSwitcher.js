import { translations } from "../translations.js";

function translatePage(lang) {
    document.documentElement.setAttribute("lang", lang);
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach((element) => {
        const key = element.dataset.key;
        const translation = translations[lang][key];

        if (translation) {
            element.innerHTML = translation;
        }
    });

    const btnPt = document.getElementById("btn-pt");
    const btnEn = document.getElementById("btn-en");

    if (btnPt && btnEn) {
        btnPt.classList.toggle("active", lang === "pt");
        btnEn.classList.toggle("active", lang === "en");
    }
}

function loadLanguage() {
    const savedLang = localStorage.getItem("language") || "pt";
    translatePage(savedLang);
}

export function initLanguageSwitcher() {
    const btnPt = document.getElementById("btn-pt");
    const btnEn = document.getElementById("btn-en");

    btnPt.addEventListener("click", () => {
        translatePage("pt");
        localStorage.setItem("language", "pt");
    });

    btnEn.addEventListener("click", () => {
        translatePage("en");
        localStorage.setItem("language", "en");
    });

    loadLanguage();
}
