import { useEffect, useRef, useState } from "react";

const FooterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    /*
     * Unified Full-Footer Entrance Animation:
     * Triggers when the footer becomes visible in viewport,
     * smoothly revealing the entire footer session as a whole.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className={`relative w-full max-w-full overflow-hidden bg-[#0B1120] text-slate-300 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Subtle top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 sm:pt-16 sm:pb-12 lg:px-12 lg:pt-20">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info (Span 2 cols on lg) */}
          <div className="lg:col-span-2">
            <a href="/#home" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-orange-500/10 p-1.5 ring-1 ring-orange-400/30">
                <img
                  src="/icon-1.png"
                  alt="BMO Extract Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display text-lg sm:text-xl font-extrabold text-white">
                BMO <span className="text-[var(--color-primary)]">EXTRACT</span>
              </span>
            </a>

            <p className="mt-3.5 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400">
              The intelligent place discovery and contact extraction engine. Turn any local search
              into structured, verified data formatted for Microsoft Excel in seconds.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <i className="fa-solid fa-lock text-emerald-400 text-[10px]" />
                SSL Encrypted
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <i className="fa-solid fa-file-excel text-emerald-400 text-[10px]" />
                Excel 2026 Ready
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <i className="fa-solid fa-cloud-arrow-down text-orange-400 text-[10px]" />
                Instant Data Export
              </span>
            </div>
          </div>

          {/* Nav Column 1: Navigation Links */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/#home" className="transition hover:text-[var(--color-primary)]">
                  Home
                </a>
              </li>
              <li>
                <a href="/#feature" className="transition hover:text-[var(--color-primary)]">
                  Core Features
                </a>
              </li>
              <li>
                <a href="/#workflow" className="transition hover:text-[var(--color-primary)]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#use-cases" className="transition hover:text-[var(--color-primary)]">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition hover:text-[var(--color-primary)]">
                  FAQs &amp; Answers
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Quick Action */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Get Started
            </h4>
            <p className="mt-3 sm:mt-4 text-xs leading-relaxed text-slate-400">
              Export your first batch of places in under 2 minutes. Free to try.
            </p>
            <a
              href="https://bmoextract.com/extract"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 sm:mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-[#ff681c] active:scale-98"
            >
              <span>Get Started Free</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 sm:pt-8 sm:flex-row text-xs text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} BMO Extract. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="/#home" className="transition hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="/#home" className="transition hover:text-slate-300">
              Terms of Service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="cursor-pointer flex items-center gap-1.5 text-slate-400 hover:text-[var(--color-primary)] transition"
            >
              <span>Back to top</span>
              <i className="fa-solid fa-arrow-up text-[10px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterPage;
