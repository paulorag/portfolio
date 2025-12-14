"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const { dict, language } = useLanguage();

    const email = "devpaulorag@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer
            id="contato"
            className="bg-[#0a0a0a] text-white py-16 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8">
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">
                        {dict.footer.title}{" "}
                        <span className="text-blue-500">
                            {dict.footer.subtitle}
                        </span>
                    </h3>
                    <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
                        {dict.footer.text}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                    <button
                        onClick={handleCopyEmail}
                        className="group cursor-pointer select-none flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all active:scale-95"
                        title={
                            language === "pt"
                                ? "Clique para copiar o e-mail"
                                : "Click to copy email"
                        }
                    >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                            <Mail size={20} />
                        </div>
                        <span className="text-gray-200 font-medium font-mono">
                            {email}
                        </span>
                        <div className="ml-2 text-gray-500 group-hover:text-white transition-colors">
                            {copied ? (
                                <Check size={18} className="text-green-500" />
                            ) : (
                                <Copy size={18} />
                            )}
                        </div>
                    </button>
                </div>

                <div className="flex gap-4 mt-4">
                    <a
                        href="https://github.com/paulorag"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>
                    <a
                        href="https://linkedin.com/in/paulorag"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-lg border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/5 hover:border-blue-500/30 transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 w-full max-w-2xl text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Paulo Gomes.{" "}
                        {dict.footer.copy}
                    </p>
                </div>
            </div>
        </footer>
    );
}
