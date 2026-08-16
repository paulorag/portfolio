"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, autoRaf: true }}>
            <RouteScrollHandler />
            <AnchorHandler />
            {children}
        </ReactLenis>
    );
}

function RouteScrollHandler() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        // When navigating between pages (e.g. from Home to a project page),
        // reset the scroll position immediately to the top if there is no anchor hash
        if (!window.location.hash) {
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            }
            window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }
    }, [pathname, lenis]);

    return null;
}

function AnchorHandler() {
    const lenis = useLenis();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");

            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            const isDirectHash = href.startsWith("#");
            const isRootHash = href.startsWith("/#") && window.location.pathname === "/";

            if (isDirectHash || isRootHash) {
                const targetId = isRootHash ? href.substring(1) : href;
                const element = document.querySelector(targetId) as HTMLElement;

                if (element && lenis) {
                    e.preventDefault();
                    window.history.pushState({}, "", href);
                    lenis.scrollTo(element, {
                        offset: -80,
                        duration: 1.5,
                        easing: (t) =>
                            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                }
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [lenis]);

    return null;
}
