import { useEffect, useState } from "react";

const HomeContent = () => {
  const [activeTab] = useState<"results" | "search">("results");
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.lenisInstance) window.lenisInstance.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.lenisInstance) window.lenisInstance.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.lenisInstance) window.lenisInstance.start();
    };
  }, [showLightbox]);

  const image = activeTab === "results" ? "/result.png" : "/extract.png";

  return (
    <div className="relative w-full overflow-hidden">

      {/* ================= HOME CONTENT ================= */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Top Header Badge */}
        <div className="reveal-header flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-orange-100/60 backdrop-blur-xl">
            {/* Live indicator */}
            <div className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.55)]" />
            </div>

            {/* Label */}
            <span className="text-[11px] font-bold tracking-[0.12em] text-slate-700">
              INTELLIGENCE SYSTEM
            </span>

            {/* Divider */}
            <span className="h-5 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

            {/* Status */}
            <span className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-[0.08em] text-orange-600">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11.3 1.7 4 11h4.7l-.8 7.3L16 9h-4.7l0-7.3Z" />
              </svg>
              FAST &amp; ACCURATE
            </span>
          </div>


        </div>

        {/* Main Title */}
        <div className="reveal-header mt-6 text-center">
          <h1 className="font-display mx-auto max-w-4xl text-3xl font-black leading-[1.12] tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
            Extract Google Maps Data <br className="hidden sm:inline" />
            <span className="text-gradient-orange">Directly to Excel</span>
          </h1>

          {/* <p className="mx-auto mt-4 max-w-2xl text-sm font-normal leading-relaxed text-gray-500 sm:text-base lg:text-lg">
            Scrape Google search results &amp; Google Maps for business data. Collect verified phone numbers, websites, and complete addresses directly into Excel.
          </p> */}

          {/* Button */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://bmoextract.com/extract"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7c36] via-[#ff6822] to-[#ff5216] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/35 active:scale-95"
            >
              <span>Start Extraction Free</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </a>
          </div>
        </div>

        {/* ================= PRODUCT PREVIEW ================= */}
        <div className="reveal-scale stagger-2 relative mx-auto mt-10 w-full max-w-5xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-3xl">

            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3">
              {/* Window dots */}
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Expand */}
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                title="Expand image preview"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-orange-400 hover:text-orange-600"
              >
                <i className="fa-solid fa-expand text-xs" />
              </button>
            </div>

            {/* Screenshot */}
            <div
              onClick={() => setShowLightbox(true)}
              className="group relative cursor-zoom-in bg-white"
            >
              <img
                src={image}
                alt="BMO Extract interface preview"
                className="block h-auto max-h-[380px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.008]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          FULL HOME PAGE BOTTOM WHITE FADE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-28 w-full bg-gradient-to-t from-white via-white/80 to-transparent sm:h-36 lg:h-48"
      />

      {/* Lightbox */}
      {showLightbox && (
        <div
          data-lenis-prevent
          onClick={() => setShowLightbox(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overscroll-contain"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-3">
              <span className="font-display text-sm font-bold text-gray-900">
                BMO Extract — Results Dashboard
              </span>

              <button
                type="button"
                onClick={() => setShowLightbox(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-200 hover:text-gray-800"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
            </div>

            <div className="max-h-[calc(92vh-60px)] overflow-auto bg-gray-100 p-2">
              <img
                src={image}
                alt="Enlarged BMO Extract interface"
                className="mx-auto block h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
