import { useEffect } from "react";

export const useScrollReveal = (isLoading: boolean = false) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isLoading) return;

    // Selector targeting each individual animatable component
    const selector =
      ".reveal-header, .reveal-card, .reveal-fade-up, .reveal-left, .reveal-right, .reveal-scale";

    /**
     * Checks if a component has reached the middle of the viewport.
     * - For initial page load at the top (scrollY < 100), elements in the upper viewport reveal immediately.
     * - As user scrolls, each component triggers its animation independently when its top
     *   reaches the middle region of the screen (~58% of viewport height).
     */
    const isElementInMiddleView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Initial viewport check at top of page (for Hero / navbar elements)
      if (window.scrollY < 100 && rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
        return true;
      }

      // Check if user is scrolled near bottom of page: reveal all visible elements
      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 180;
      if (isNearPageBottom && rect.top <= windowHeight && rect.bottom >= 0) {
        return true;
      }

      // Reveal when element enters the middle region of the viewport (~68% of viewport height)
      const middleThreshold = windowHeight * 0.68;
      return rect.top <= middleThreshold && rect.bottom >= 20;
    };

    const isElementOutOfView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Completely above or completely below viewport
      return rect.bottom < -20 || rect.top > windowHeight + 20;
    };

    const revealEl = (el: Element) => {
      el.classList.add("is-revealed");
      el.setAttribute("data-revealed", "true");
    };

    const unrevealEl = (el: Element) => {
      // Don't unreveal Hero components if user is near top of page
      if (window.scrollY < 100 && el.closest("#home")) return;
      // Don't unreveal if element has data-keep-revealed
      if (el.getAttribute("data-keep-revealed") === "true") return;
      el.classList.remove("is-revealed");
      el.removeAttribute("data-revealed");
    };

    // If IntersectionObserver is not supported, reveal all immediately
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(selector).forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // Observer with rootMargin aligned to the middle region of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isElementInMiddleView(entry.target)) {
            revealEl(entry.target);
          } else if (isElementOutOfView(entry.target)) {
            unrevealEl(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -25% 0px", // Trigger when top enters within 75% of viewport (middle zone)
      }
    );

    const checkAndObserve = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (isElementInMiddleView(el)) {
          revealEl(el);
        } else if (isElementOutOfView(el)) {
          unrevealEl(el);
        }
        observer.observe(el);
      });
    };

    // Initial check
    checkAndObserve();

    const t1 = setTimeout(checkAndObserve, 150);
    const t2 = setTimeout(checkAndObserve, 500);

    // Continuous scroll check for instant reactivity during scrolling (including Lenis)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el) => {
            if (isElementInMiddleView(el)) {
              if (!el.classList.contains("is-revealed")) {
                revealEl(el);
              }
            } else if (isElementOutOfView(el)) {
              if (el.classList.contains("is-revealed")) {
                unrevealEl(el);
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (window.lenisInstance) {
      window.lenisInstance.on("scroll", handleScroll);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", handleScroll);
      if (window.lenisInstance) {
        window.lenisInstance.off("scroll", handleScroll);
      }
      observer.disconnect();
    };
  }, [isLoading]);
};

export default useScrollReveal;
