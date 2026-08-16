"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, FileDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Toast } from "@/components/ui/Toast";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const { dict, language } = useLanguage();

    const email = "devpaulorag@gmail.com";
    const cvFileName = language === "pt" ? "Paulo_Gomes_CV_PT.pdf" : "Paulo_Gomes_CV_EN.pdf";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        const msg = dict.footer.copiedToast || (language === "pt" ? "E-mail copiado para a área de transferência!" : "Email copied to clipboard!");
        setToastMessage(msg);
        setTimeout(() => {
            setCopied(false);
            setToastMessage(null);
        }, 2500);
    };

    return (
        <footer
            id="contato"
            className="bg-[#0a0a0a] text-white py-20 scroll-mt-28 relative overflow-hidden border-t border-white/5"
        >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8 max-w-4xl">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{dict.hero.badge || "Disponível para novas oportunidades"}</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                        {dict.footer.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            {dict.footer.subtitle}
                        </span>
                    </h3>
                    <p className="text-gray-400 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
                        {dict.footer.text}
                    </p>
                </div>

                {/* Direct Actions: Copy Email + Download CV */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                    <button
                        onClick={handleCopyEmail}
                        className="group cursor-pointer select-none flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-200 active:scale-95 w-full sm:w-auto"
                        title={
                            language === "pt"
                                ? "Clique para copiar o e-mail"
                                : "Click to copy email"
                        }
                    >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                            <Mail size={18} />
                        </div>
                        <span className="text-gray-200 font-medium font-mono text-sm">
                            {email}
                        </span>
                        <div className="ml-2 text-gray-400 group-hover:text-white transition-colors">
                            {copied ? (
                                <Check size={16} className="text-green-400" />
                            ) : (
                                <Copy size={16} />
                            )}
                        </div>
                    </button>

                    <a
                        href={`/documents/${cvFileName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={cvFileName}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white text-sm font-medium transition-all duration-200 active:scale-95 w-full sm:w-auto shadow-sm"
                    >
                        <FileDown size={18} className="text-blue-400" />
                        <span>{dict.hero.btnCv || "Baixar CV (PDF)"}</span>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-2">
                    <a
                        href="https://github.com/paulorag"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                        aria-label="GitHub de Paulo Gomes"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/paulorag"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/5 hover:border-blue-500/30 transition-all"
                        aria-label="LinkedIn de Paulo Gomes"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 w-full max-w-2xl text-center">
                    <p className="text-xs sm:text-sm text-gray-500">
                        © {new Date().getFullYear()} Paulo Gomes. {dict.footer.copy}
                    </p>
                </div>
            </div>

            {/* Global floating toast notification */}
            <Toast message={toastMessage} />
        </footer>
    );
}
