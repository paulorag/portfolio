"use client";

import React, {
    createContext,
    useContext,
    useCallback,
    useSyncExternalStore,
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

function subscribe(callback: () => void) {
    if (typeof window === "undefined") return () => {};
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
    if (typeof window === "undefined") return "pt";
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "pt" || saved === "en") return saved;
        const browserLang = navigator.language?.toLowerCase() || "";
        return browserLang.startsWith("pt") ? "pt" : "en";
    } catch {
        return "pt";
    }
}

function getServerSnapshot(): Language {
    return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const setLanguage = useCallback((lang: Language) => {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
            document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
            window.dispatchEvent(new Event("storage"));
        } catch {
            // Ignore storage errors
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        const nextLang: Language = language === "pt" ? "en" : "pt";
        setLanguage(nextLang);
    }, [language, setLanguage]);

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                dict: dictionary[language] || dictionary.pt,
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
