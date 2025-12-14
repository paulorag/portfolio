"use client";

import { useState } from "react";
import Link from "next/link";
import { TerminalSquare, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { dict, toggleLanguage, language } = useLanguage();

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
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition-colors text-sm font-medium border border-white/5"
                    >
                        <Globe size={16} />
                        <span>{language === "pt" ? "EN" : "PT"}</span>
                    </button>
                </nav>

                {/* Área Mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 text-gray-300 hover:text-white font-bold text-sm"
                    >
                        {language === "pt" ? "EN" : "PT"}
                    </button>

                    <button
                        className="p-2 text-gray-400 hover:text-white transition-colors z-50 relative"
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
                        className="absolute top-16 left-0 w-full md:hidden overflow-hidden border-b border-white/10"
                    >
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl p-4 flex flex-col gap-2">
                            {dict.header.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full p-4 text-center text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-2"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
