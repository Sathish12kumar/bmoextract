/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { NavBardt } from "../../assects/data";
import useViewPort from "../../core/hooks/useViewPort";
import ContactModal from "./components/ContactModal";

const Navpage = () => {
  const [toggle, settoggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const { screen } = useViewPort();

  /* =========================================================
     CLOSE MOBILE MENU WHEN BREAKPOINT CHANGES
  ========================================================= */
  useEffect(() => {
    settoggle(false);
  }, [screen]);

  /* =========================================================
     NAVBAR SCROLL EFFECT
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */
  useEffect(() => {
    const sectionIds = [
      "home",
      "feature",
      "workflow",
      "use-cases",
      "reviews",
      "faq",
    ];

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);

        if (element) {
          const top = element.offsetTop;

          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  /* =========================================================
     MOBILE MENU SCROLL LOCK + ESCAPE
  ========================================================= */
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      if (window.lenisInstance) {
        window.lenisInstance.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && toggle) {
        settoggle(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenisInstance) {
        window.lenisInstance.start();
      }

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggle]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "h-[68px] border-b border-orange-100 bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:h-[76px]"
          : "h-[76px] border-b border-gray-100 bg-white/90 backdrop-blur-xl sm:h-[84px]"
          }`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10">

          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="/#home"
            onClick={() => settoggle(false)}
            className="group flex min-w-0 shrink-0 items-center gap-2 transition-transform active:scale-95 sm:gap-2.5"
          >
            {/* Logo Icon */}
            <div
              className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 via-white to-orange-100 p-1.5 ring-1 ring-orange-200/80 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 ${scrolled
                ? "h-9 w-9 sm:h-10 sm:w-10"
                : "h-10 w-10 sm:h-11 sm:w-11"
                }`}
            >
              <img
                src="/icon-1.png"
                alt="BMO Extract Logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Logo Text */}
            <div className="font-display select-none whitespace-nowrap text-base font-black tracking-tight text-[var(--color-dark)] sm:text-lg md:text-xl">
              <span className="text-[var(--color-primary)]">
                BMO
              </span>{" "}
              <span>EXTRACT</span>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
              1024px+
          ================================================= */}
          <nav
            aria-label="Main Navigation"
            className="ml-auto hidden items-center gap-0.5 lg:flex xl:gap-1.5"
          >
            {NavBardt.map((v, idx) => {
              const sectionId = v.path
                .replace("/#", "")
                .replace("#", "");

              const isActive = activeSection === sectionId;

              return (
                <a
                  key={idx}
                  href={v.path}
                  className={`group relative rounded-lg px-2.5 py-2 text-xs font-bold transition-all duration-200 xl:px-3 xl:text-sm ${isActive
                    ? "text-[var(--color-primary)]"
                    : "text-gray-600 hover:text-[var(--color-primary)]"
                    }`}
                >
                  <span className="relative z-10">
                    {v.title}
                  </span>

                  {isActive ? (
                    <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 rounded-full bg-[var(--color-primary)] xl:left-3 xl:right-3" />
                  ) : (
                    <span className="absolute inset-0 rounded-lg bg-orange-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}
          <div className="ml-2 flex shrink-0 items-center gap-1.5 sm:ml-3 sm:gap-2.5 lg:ml-5">

            {/* Contact */}
            <button
              id="navbar-contact-btn"
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="hidden cursor-pointer items-center gap-1.5 rounded-lg border border-orange-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-[var(--color-primary)] active:scale-95 sm:inline-flex md:px-3.5 lg:px-3.5 xl:px-4 xl:py-2.5 xl:text-sm"
            >
              <i className="fa-solid fa-envelope text-[10px] text-[var(--color-primary)] xl:text-xs" />
              <span>Contact Us</span>
            </button>

            {/* Desktop CTA */}
            <a
              href="https://bmoextract.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center justify-center rounded-lg bg-gradient-to-r from-[#ff7c36] via-[#ff6822] to-[#ff5216] px-3.5 py-2 text-xs font-bold text-white shadow-sm shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-500/30 active:scale-95 md:inline-flex lg:px-4 xl:px-5 xl:py-2.5 xl:text-sm"
            >
              <span className="flex items-center gap-1.5 xl:gap-2">
                <span>Get Started Free</span>

                <i className="fa-solid fa-arrow-right text-[9px] transition-transform group-hover:translate-x-0.5 xl:text-[10px]" />
              </span>
            </a>

            {/* Mobile / Tablet Menu */}
            <button
              type="button"
              onClick={() => settoggle(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-95 sm:h-10 sm:w-10 lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={toggle}
            >
              <i className="fa-solid fa-bars text-sm sm:text-base" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          BACKDROP
      ====================================================== */}
      <div
        onClick={() => settoggle(false)}
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${toggle
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE / TABLET DRAWER (Wrapped in overflow-hidden container to guarantee zero page overflow)
      ====================================================== */}
      <div
        className={`fixed inset-0 z-[70] overflow-hidden lg:hidden ${
          toggle ? "pointer-events-auto block" : "pointer-events-none invisible hidden"
        }`}
        aria-hidden={!toggle}
      >
        <aside
          data-lenis-prevent
          className={`absolute right-0 top-0 flex h-dvh w-[88vw] max-w-[360px] flex-col bg-white shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            toggle
              ? "translate-x-0 visible opacity-100"
              : "translate-x-full invisible opacity-0"
          }`}
          role="dialog"
          aria-label="Mobile Navigation"
        >
        {/* =================================================
            DRAWER HEADER
        ================================================= */}
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-gray-100 px-4 sm:h-[76px] sm:px-5">
          <a
            href="/#home"
            onClick={() => settoggle(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 p-1.5 ring-1 ring-orange-200">
              <img
                src="/icon-1.png"
                alt="BMO Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="font-display text-base font-extrabold text-[var(--color-dark)] sm:text-lg">
              <span className="text-[var(--color-primary)]">
                BMO
              </span>{" "}
              EXTRACT
            </div>
          </a>

          <button
            type="button"
            onClick={() => settoggle(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-800 sm:h-10 sm:w-10"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        {/* =================================================
            DRAWER CONTENT
        ================================================= */}
        <div
          className="flex-1 overflow-y-auto px-4 py-5 sm:px-5"
          data-lenis-prevent
        >
          {/* CTA Buttons */}
          {/* <div className="mb-6 space-y-2.5">
            <a
              href="https://bmoextract.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => settoggle(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7c36] via-[#ff6822] to-[#ff5216] px-4 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:shadow-lg active:scale-[0.98]"
            >
              <span>Get Started Free</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </a>

            <button
              type="button"
              onClick={() => {
                settoggle(false);
                setIsContactOpen(true);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-orange-100 active:scale-[0.98]"
            >
              <i className="fa-solid fa-envelope text-xs" />
              <span>Contact Us</span>
            </button>
          </div> */}

          {/* Navigation Label */}
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 sm:text-[11px]">
            Navigation
          </p>

          {/* Navigation Links */}
          <ul className="space-y-1">
            {NavBardt.map((v, idx) => {
              const sectionId = v.path
                .replace("/#", "")
                .replace("#", "");

              const isActive = activeSection === sectionId;

              return (
                <li key={idx}>
                  <a
                    href={v.path}
                    onClick={() => settoggle(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all ${isActive
                      ? "bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-100"
                      : "text-gray-700 hover:bg-orange-50/70 hover:text-[var(--color-primary)]"
                      }`}
                  >
                    <span>{v.title}</span>

                    <i
                      className={`fa-solid fa-chevron-right text-[9px] transition-transform ${isActive
                        ? "translate-x-0 text-[var(--color-primary)]"
                        : "translate-x-0 text-gray-300"
                        }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* =================================================
            DRAWER FOOTER
        ================================================= */}
        <div className="shrink-0 border-t border-gray-100 bg-gray-50/70 p-4 sm:p-5">
          <button
            type="button"
            onClick={() => {
              settoggle(false);
              setIsContactOpen(true);
            }}
            className="mb-2.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm font-bold text-orange-600 shadow-sm transition hover:bg-orange-50 active:scale-[0.98]"
          >
            <i className="fa-solid fa-envelope text-xs" />
            <span>Contact Us</span>
          </button>

          <a
            href="https://bmoextract.com/extract"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => settoggle(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7c36] to-[#ff5c1c] px-4 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:shadow-lg active:scale-[0.98]"
          >
            <span>Start Extracting Free</span>
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </a>
        </div>
      </aside>
    </div>

      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navpage;
