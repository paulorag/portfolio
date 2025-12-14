"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionary } from "@/lib/dictionaries";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    dict: typeof dictionary.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
    };

    return (
        <LanguageContext.Provider
            value={{ language, toggleLanguage, dict: dictionary[language] }}
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
