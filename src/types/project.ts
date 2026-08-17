export type ProjectCategory =
    | "all"
    | "backend"
    | "frontend"
    | "fullstack"
    | "data-devops";

export interface ProjectChallenge {
    title: string;
    description: string;
}

export interface ProjectDetail {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    challenges?: ProjectChallenge[];
    tags: string[];
    category: ProjectCategory;
    featured?: boolean;
    image: string;
    screenshots?: string[];
    github?: string;
    demo?: string;
    isPrivate?: boolean;
    releaseYear?: string;
    coldStartNotice?: string;
    architecture?: {
        frontend?: string;
        backend?: string;
        database?: string;
        devops?: string;
    };
}

export interface ProjectSummary {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    category: ProjectCategory;
    featured?: boolean;
    image: string;
    github?: string;
    demo?: string;
    isPrivate?: boolean;
}
