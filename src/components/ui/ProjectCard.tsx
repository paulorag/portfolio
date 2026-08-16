"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectDetail } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
    project: ProjectDetail;
    index: number;
    isFeatured?: boolean;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { dict } = useLanguage();
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col cursor-pointer"
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Glow Effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 40%)`,
                }}
            />

            {/* Clickable Area navigating to /projetos/[slug] */}
            <Link
                href={`/projetos/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Ver estudo de caso do projeto ${project.title}`}
            />

            {/* Compact Project Image Thumbnail */}
            <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#0d0d0d]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/20 z-[1]" />

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                />
            </div>

            {/* Content Section: Focus on Stack & Direct Access */}
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow relative z-[2] gap-4">
                <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors tracking-tight">
                            {project.title}
                        </h3>
                        <span className="text-[11px] font-mono text-gray-500">
                            {project.releaseYear}
                        </span>
                    </div>

                    {project.tagline && (
                        <p className="text-xs text-gray-400 font-medium line-clamp-2">
                            {project.tagline}
                        </p>
                    )}
                </div>

                <div className="space-y-3 pt-1">
                    {/* Full Stack Badges */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5 group-hover:border-blue-500/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* View Case Study CTA Link */}
                    <div className="flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors gap-1 pt-2.5 border-t border-white/5">
                        <span>{dict.projects.viewCaseStudy || "Ver Estudo de Caso"}</span>
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
