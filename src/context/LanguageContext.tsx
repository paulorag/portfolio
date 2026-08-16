"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { dictionary } from "@/lib/dictionaries";

export type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    dict: typeof dictionary.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

const STORAGE_KEY = "paulorag_portfolio_language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("pt");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        try {
            const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
            if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
                setLanguageState(savedLanguage);
                document.documentElement.lang = savedLanguage === "pt" ? "pt-BR" : "en";
            } else {
                // Auto-detect browser language
                const browserLang = navigator.language.toLowerCase();
                const defaultLang: Language = browserLang.startsWith("pt") ? "pt" : "en";
                setLanguageState(defaultLang);
                document.documentElement.lang = defaultLang === "pt" ? "pt-BR" : "en";
                localStorage.setItem(STORAGE_KEY, defaultLang);
            }
        } catch {
            // LocalStorage might be disabled in private browsing or restricted environments
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        try {
            localStorage.setItem(STORAGE_KEY, lang);
            document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        } catch {
            // Ignore storage errors
        }
    };

    const toggleLanguage = () => {
        const nextLang: Language = language === "pt" ? "en" : "pt";
        setLanguage(nextLang);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                dict: dictionary[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
