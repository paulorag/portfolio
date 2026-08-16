import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://pauloragdev.vercel.app"),
    title: {
        default: "Paulo Gomes | Full-Stack Software Engineer",
        template: "%s | Paulo Gomes",
    },
    description:
        "Desenvolvedor Full Stack com forte foco em arquitetura Back-End (Java 21 e Spring Boot 3) e interfaces dinâmicas e responsivas no Front-End (Next.js 15 e React). Sólida vivência em Oracle SQL e operações de missão crítica.",
    keywords: [
        "Paulo Roberto A. Gomes",
        "Paulo Gomes",
        "Full-Stack Developer",
        "Engenheiro de Software",
        "Java 21",
        "Spring Boot 3",
        "Next.js 15",
        "React",
        "Oracle SQL",
        "PostgreSQL",
        "Docker",
        "Portfolio",
    ],
    authors: [{ name: "Paulo Roberto A. Gomes" }],
    creator: "Paulo Roberto A. Gomes",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://pauloragdev.vercel.app",
        title: "Paulo Gomes | Full-Stack Software Engineer",
        description:
            "Portfólio de Engenharia de Software Full-Stack: Java 21, Spring Boot 3, Next.js 15, Oracle SQL e PostgreSQL.",
        siteName: "Paulo Gomes Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Paulo Gomes | Full-Stack Software Engineer",
        description:
            "Desenvolvedor Full Stack: Java 21, Spring Boot 3, Next.js 15, Oracle SQL e PostgreSQL.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://pauloragdev.vercel.app/#person",
            name: "Paulo Roberto A. Gomes",
            alternateName: "Paulo Gomes",
            jobTitle: "Desenvolvedor de Software Full Stack",
            url: "https://pauloragdev.vercel.app",
            sameAs: [
                "https://github.com/paulorag",
                "https://linkedin.com/in/paulorag",
            ],
            knowsAbout: [
                "Java",
                "Spring Boot",
                "Next.js",
                "React",
                "TypeScript",
                "Oracle SQL",
                "PostgreSQL",
                "Docker",
            ],
            alumniOf: {
                "@type": "EducationalOrganization",
                name: "Estácio",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://pauloragdev.vercel.app/#website",
            url: "https://pauloragdev.vercel.app",
            name: "Paulo Gomes Portfolio",
            publisher: {
                "@id": "https://pauloragdev.vercel.app/#person",
            },
            inLanguage: ["pt-BR", "en-US"],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <LanguageProvider>
                    <SmoothScroll>
                        <Header />
                        {children}
                        <Footer />
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
