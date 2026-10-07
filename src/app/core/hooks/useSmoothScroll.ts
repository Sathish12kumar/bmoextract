import { useEffect } from "react";

interface LenisScrollToOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
}

interface LenisInstance {
  raf: (time: number) => void;
  resize: () => void;
  scrollTo: (
    target: number | string | HTMLElement | Element,
    options?: LenisScrollToOptions
  ) => void;
  start: () => void;
  stop: () => void;
  destroy: () => void;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  off: (event: string, callback: (...args: unknown[]) => void) => void;
}

interface LenisConstructor {
  new (options?: LenisOptions): LenisInstance;
}

declare global {
  interface Window {
    Lenis?: LenisConstructor;
    lenisInstance?: LenisInstance;
  }
}

export const useSmoothScroll = () => {
  useEffect(() => {
    let lenis: LenisInstance | null = null;
    let rafId: number;

    const initLenis = () => {
      if (typeof window !== "undefined" && window.Lenis) {
        lenis = new window.Lenis({
          duration: 1.25,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.1,
          touchMultiplier: 1.5,
        });

        window.lenisInstance = lenis;
        lenis.scrollTo(0, { immediate: true });

        const activeLenis = lenis;
        const raf = (time: number) => {
          if (activeLenis) {
            activeLenis.raf(time);
          }
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Recalculate dimensions once layout settles
        setTimeout(() => {
          lenis?.resize();
          lenis?.scrollTo(0, { immediate: true });
        }, 400);
        setTimeout(() => lenis?.resize(), 1500);
      }
    };

    // If Lenis script is already loaded
    if (window.Lenis) {
      initLenis();
    } else {
      const interval = setInterval(() => {
        if (window.Lenis) {
          clearInterval(interval);
          initLenis();
        }
      }, 50);

      setTimeout(() => clearInterval(interval), 3000);
    }

    // Global anchor click listener for fluid navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      let sectionId = "";
      if (href.startsWith("/#") && href.length > 2) {
        sectionId = href.slice(2).trim();
      } else if (href.startsWith("#") && href.length > 1) {
        sectionId = href.slice(1).trim();
      }

      if (sectionId) {
        const cleanId = sectionId.toLowerCase();
        const targetElement =
          document.getElementById(cleanId) ||
          document.getElementById(sectionId) ||
          document.querySelector(`[id="${sectionId}" i]`);

        if (targetElement) {
          e.preventDefault();

          // Update URL in browser address bar to /#${cleanId}
          const targetUrl = `/#${cleanId}`;
          if (window.location.hash.toLowerCase() !== `#${cleanId}`) {
            window.history.pushState(null, "", targetUrl);
          }

          targetElement.classList.add("is-revealed");

          if (window.lenisInstance) {
            window.lenisInstance.scrollTo(targetElement, {
              offset: -84,
              duration: 1.1,
            });
          } else {
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - 84,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Check if initial URL has a hash like /#workflow or #faq
    const initialHash = window.location.hash.replace(/^#/, "").toLowerCase();
    if (initialHash) {
      setTimeout(() => {
        const initialEl =
          document.getElementById(initialHash) ||
          document.querySelector(`[id="${initialHash}" i]`);
        if (initialEl) {
          if (window.lenisInstance) {
            window.lenisInstance.scrollTo(initialEl, { offset: -84, duration: 1.1 });
          } else {
            const elPos = initialEl.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elPos - 84, behavior: "smooth" });
          }
        }
      }, 600);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
};

export default useSmoothScroll;
