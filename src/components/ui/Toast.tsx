"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
    message: string | null;
    onClose?: () => void;
}

export function Toast({ message }: ToastProps) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#161616]/95 backdrop-blur-xl border border-blue-500/30 text-white shadow-2xl shadow-black/80 pointer-events-auto"
                >
                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400">
                        <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
