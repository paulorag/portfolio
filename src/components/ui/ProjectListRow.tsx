"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectDetail } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectListRowProps {
    project: ProjectDetail;
    index: number;
}

export function ProjectListRow({ project, index }: ProjectListRowProps) {
    const { dict } = useLanguage();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 hover:bg-[#1f2230] transition-all duration-200 gap-4 cursor-pointer"
        >
            <Link
                href={`/projetos/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Ver detalhes e estudo de caso de ${project.title}`}
            />

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-grow">
                {project.releaseYear && (
                    <span className="text-xs font-mono text-zinc-500 min-w-[45px]">
                        {project.releaseYear}
                    </span>
                )}

                <div className="min-w-[200px]">
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                        {project.tagline || project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:ml-4">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span className="text-xs text-zinc-500 self-center">
                            +{project.tags.length - 4}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors self-end md:self-center">
                <span>{dict.projects.viewCaseStudy || "Ver Estudo de Caso"}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
        </motion.div>
    );
}
