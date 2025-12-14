"use client";

import { useState } from "react";
import Link from "next/link";
import { TerminalSquare, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { dict, toggleLanguage, language } = useLanguage();

    const languageButtonStyles =
        "group cursor-pointer flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300 active:scale-95 font-medium text-gray-300 hover:text-white";

    return (
        <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#0a0a0a]/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link
                    href="#inicio"
                    className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-80 transition-opacity group z-50 relative"
                    aria-label="Voltar ao topo"
                    onClick={() => setIsOpen(false)}
                >
                    <TerminalSquare
                        className="text-blue-500 group-hover:text-purple-500 transition-colors"
                        size={26}
                        strokeWidth={2}
                    />
                    <span className="text-gray-200">
                        Paulo<span className="text-blue-500">.dev</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {dict.header.items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-[15px] font-medium text-gray-400 hover:text-white transition-colors group py-2"
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className={`${languageButtonStyles} px-3 py-1.5 text-sm`}
                    >
                        <Globe
                            size={16}
                            className="text-gray-400 group-hover:text-blue-400 transition-colors"
                        />
                        <span>{language === "pt" ? "EN" : "PT"}</span>
                    </button>
                </nav>

                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className={`${languageButtonStyles} py-1 px-2.5 text-xs`}
                        aria-label="Alternar idioma"
                    >
                        <Globe
                            size={14}
                            className="text-gray-400 group-hover:text-blue-400 transition-colors"
                        />
                        {language === "pt" ? "EN" : "PT"}
                    </button>

                    <div className="h-6 w-[1px] bg-white/10"></div>

                    <button
                        className="cursor-pointer p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors z-50 relative active:scale-95"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Alternar menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-16 left-0 w-full md:hidden overflow-hidden border-b border-white/10 shadow-xl"
                    >
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl p-4 flex flex-col gap-2">
                            {dict.header.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full p-4 text-center text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5Active:scale-[0.98]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-2 shadow-sm"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
