import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen relative overflow-hidden bg-[#12131a] text-white">
            {/* Continuous Depth Lighting Canvas */}
            <div className="absolute top-[18%] -left-32 w-137.5 h-137.5 bg-white/2 rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-[42%] -right-32 w-150 h-150 bg-white/2 rounded-full blur-[170px] pointer-events-none -z-10" />
            <div className="absolute top-[72%] left-1/4 w-125 h-125 bg-white/2 rounded-full blur-[160px] pointer-events-none -z-10" />

            <Hero />

            {/* Seamless Soft Section Divider */}
            <div className="w-full max-w-4xl mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <About />

            {/* Seamless Soft Section Divider */}
            <div className="w-full max-w-4xl mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <Projects />

            {/* Seamless Soft Section Divider */}
            <div className="w-full max-w-4xl mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <Timeline />
        </main>
    );
}
