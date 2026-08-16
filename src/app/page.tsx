import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Timeline />
            <Projects />
        </main>
    );
}
