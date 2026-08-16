"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TerminalSquare, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("inicio");
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { dict, toggleLanguage, language } = useLanguage();

    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Se o usuário rolou até o fim da página, destaca o Contato (Footer)
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 80;

            if (isBottom) {
                setActiveSection("contato");
                return;
            }

            const sections = ["inicio", "sobre", "projetos", "trajetoria", "contato"];
            const scrollPosition = window.scrollY + 180;

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    const languageButtonStyles =
        "group cursor-pointer flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300 active:scale-95 font-medium text-gray-300 hover:text-white";

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
                    : "bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white/5"
            }`}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link
                    href="/#inicio"
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
                    {dict.header.items.map((item) => {
                        const targetId = item.href.replace("/#", "").replace("#", "");
                        const isActive = isHomePage && activeSection === targetId;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative text-[15px] font-medium transition-colors group py-2 ${
                                    isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                                        isActive
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        );
                    })}

                    <button
                        onClick={toggleLanguage}
                        className={`${languageButtonStyles} px-3 py-1.5 text-sm`}
                        aria-label="Alternar idioma"
                        title={language === "pt" ? "Mudar para Inglês" : "Change to Portuguese"}
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

                    <div className="h-6 w-[1px] bg-white/10" />

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
                                    className="block w-full p-4 text-center text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5 active:scale-[0.98]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mt-2 shadow-sm" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
