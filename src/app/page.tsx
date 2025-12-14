import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Projects />
        </main>
    );
}
