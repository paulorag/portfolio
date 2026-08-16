"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, FileDown, ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/context/LanguageContext";
import { Toast } from "@/components/ui/Toast";

export function Footer() {
    const [copied, setCopied] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const { dict, language } = useLanguage();
    const lenis = useLenis();

    const email = "devpaulorag@gmail.com";
    const cvFileName = language === "pt" ? "Paulo_Gomes_CV_PT.pdf" : "Paulo_Gomes_CV_EN.pdf";
    const whatsappMessage =
        language === "pt"
            ? "Olá, Paulo! Acessei seu portfólio e gostaria de conversar com você."
            : "Hello Paulo! I came across your portfolio and would like to connect.";
    const whatsappUrl = `https://wa.me/5561992240386?text=${encodeURIComponent(whatsappMessage)}`;

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        const msg =
            dict.footer.copiedToast ||
            (language === "pt"
                ? "E-mail copiado para a área de transferência!"
                : "Email copied to clipboard!");
        setToastMessage(msg);
        setTimeout(() => {
            setCopied(false);
            setToastMessage(null);
        }, 2500);
    };

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer
            id="contato"
            className="text-white pt-6 pb-12 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Engineering Action Dock */}
                <div className="relative rounded-3xl bg-[#0e1017]/90 border border-white/10 p-7 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
                    {/* Subtle Ambient Glow Inside Dock */}
                    <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column: Identity & Direct Statement */}
                        <div className="lg:col-span-6 space-y-3.5">
                            <div className="space-y-1">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                    {dict.footer.name}
                                </h3>
                                <p className="text-sm font-mono font-medium text-blue-400">
                                    {dict.footer.role}
                                </p>
                            </div>

                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                                {dict.footer.tagline}
                            </p>
                        </div>

                        {/* Right Column: Balanced 2-Level Action Hub */}
                        <div className="lg:col-span-6 flex flex-col gap-2.5">
                            {/* Row 1: Copy Email Button (Full Width of Right Column) */}
                            <button
                                onClick={handleCopyEmail}
                                className="group cursor-pointer select-none flex items-center justify-between gap-3 px-4 sm:px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 transition-all duration-200 active:scale-[0.99] shadow-sm w-full"
                                title={
                                    language === "pt"
                                        ? "Clique para copiar o e-mail"
                                        : "Click to copy email address"
                                }
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                                        <Mail size={15} />
                                    </div>
                                    <span className="text-gray-200 font-mono text-xs sm:text-sm font-medium truncate">
                                        {email}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition-colors shrink-0 pl-2">
                                    {copied ? (
                                        <>
                                            <Check size={14} className="text-emerald-400" />
                                            <span className="text-emerald-400 font-semibold text-[11px]">
                                                {dict.footer.copiedEmail}
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={13} />
                                            <span className="text-[11px] font-medium hidden sm:inline text-gray-400">
                                                {dict.footer.copyEmail}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </button>

                            {/* Row 2: Primary Actions (WhatsApp + Download CV in Balanced 2-Column Grid) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {/* WhatsApp Direct Action */}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 text-gray-200 hover:text-emerald-300 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.99]"
                                    aria-label="WhatsApp de Paulo Gomes"
                                >
                                    <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                        <MessageCircle size={14} />
                                    </div>
                                    <span>WhatsApp</span>
                                    <ArrowUpRight size={13} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
                                </a>

                                {/* Download Resume Action */}
                                <a
                                    href={`/documents/${cvFileName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={cvFileName}
                                    className="group flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 text-gray-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.99]"
                                >
                                    <div className="p-1 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        <FileDown size={14} />
                                    </div>
                                    <span>{dict.footer.btnCv}</span>
                                </a>
                            </div>

                            {/* Row 3: Social Proof Links (GitHub + LinkedIn in Balanced 2-Column Grid) */}
                            <div className="grid grid-cols-2 gap-2.5">
                                <a
                                    href="https://github.com/paulorag"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-xs font-medium transition-all"
                                    aria-label="GitHub de Paulo Gomes"
                                >
                                    <Github size={14} />
                                    <span>GitHub</span>
                                    <ArrowUpRight size={12} className="text-gray-500 group-hover:text-white transition-colors" />
                                </a>

                                <a
                                    href="https://linkedin.com/in/paulorag"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 text-gray-300 hover:text-blue-400 text-xs font-medium transition-all"
                                    aria-label="LinkedIn de Paulo Gomes"
                                >
                                    <Linkedin size={14} />
                                    <span>LinkedIn</span>
                                    <ArrowUpRight size={12} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer: Copyright & Smooth Back to Top */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Paulo Gomes. {dict.footer.copy}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <span>{dict.footer.backToTop}</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>

            {/* Global Floating Toast Notification */}
            <Toast message={toastMessage} />
        </footer>
    );
}
