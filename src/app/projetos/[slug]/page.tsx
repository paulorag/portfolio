import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/data";
import { ProjectDetailView } from "@/components/sections/ProjectDetailView";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug, "pt");

    if (!project) {
        return {
            title: "Projeto não encontrado | Paulo Gomes",
        };
    }

    return {
        title: `${project.title} - Estudo de Caso`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Paulo Gomes Portfolio`,
            description: project.description,
            type: "article",
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug, "pt");

    if (!project) {
        notFound();
    }

    return <ProjectDetailView slug={slug} />;
}
