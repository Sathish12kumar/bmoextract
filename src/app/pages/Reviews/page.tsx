import { useState } from "react";
import { reviews } from "../../assects/data";

const ReviewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlide = (newIndex: number, dir: "next" | "prev") => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 240);
  };

  const prevReview = () => {
    const nextIdx = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    handleSlide(nextIdx, "prev");
  };

  const nextReview = () => {
    const nextIdx = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    handleSlide(nextIdx, "next");
  };

  // Show two reviews at a time on desktop
  const activeReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section
      id="reviews"
      className="reveal-section relative w-full max-w-full overflow-hidden bg-[#FAF9F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-amber-50/60 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal-left flex flex-col lg:col-span-7 xl:col-span-8">

            {/* Header */}
            <div className="reveal-header">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] sm:text-sm">
                Real Stories. Real Impact.
              </span>

              <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
                What growth teams{" "}
                <span className="text-gradient-orange">
                  say about us.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
                Hear directly from the lead generation directors,
                agency founders, and market analysts who rely on
                BMO Extract daily.
              </p>
            </div>

            {/* =====================================================
                REVIEW CARDS (WITH SMOOTH SLIDE/FADE TRANSITION)
            ====================================================== */}
            <div
              className={`mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isTransitioning
                  ? direction === "next"
                    ? "opacity-0 -translate-x-6 scale-[0.98]"
                    : "opacity-0 translate-x-6 scale-[0.98]"
                  : "opacity-100 translate-x-0 scale-100"
              }`}
            >
              {activeReviews.map((item, idx) => (
                <article
                  key={`${item.name}-${idx}`}
                  className="group flex min-h-[260px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7"
                >
                  {/* Review Content */}
                  <div>
                    {/* Stars */}
                    <div className="mb-4 flex items-center gap-1 text-[var(--color-primary)]">
                      {[...Array(item.rating)].map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star text-[11px]"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm leading-7 text-gray-600">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-orange-100"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[var(--color-primary)]">
                          {item.name}
                        </h3>

                        <p className="mt-0.5 truncate text-[11px] text-gray-400">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* =====================================================
                CAROUSEL CONTROLS & PAGINATION DOTS
            ====================================================== */}
            <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
              {/* Dots / Indicator */}
              <div className="flex items-center gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      handleSlide(
                        idx,
                        idx > currentIndex ? "next" : "prev"
                      )
                    }
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 bg-[var(--color-primary)]"
                        : "w-2 bg-gray-200 hover:bg-orange-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs font-semibold text-gray-400">
                  {currentIndex + 1} / {reviews.length}
                </span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                {/* Previous */}
                <button
                  type="button"
                  onClick={prevReview}
                  disabled={isTransitioning}
                  aria-label="Previous review"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-95 disabled:opacity-50"
                >
                  <i className="fa-solid fa-chevron-left text-xs" />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextReview}
                  disabled={isTransitioning}
                  aria-label="Next review"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 active:scale-95 disabled:opacity-50"
                >
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>
            </div>
          </div>


          <div className="reveal-right lg:col-span-5 xl:col-span-4">
            <div className="group relative flex min-h-[440px] w-full flex-col items-center justify-between overflow-hidden rounded-3xl bg-white bg-gradient-to-b from-orange-50/80 via-white to-orange-50/50 p-7 text-center sm:min-h-[460px] lg:min-h-[500px] sm:p-8 lg:p-9">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-100/70 px-3 py-1 text-[11px] font-bold text-[var(--color-primary)]">
                <i className="fa-solid fa-star text-[10px]" />
                <span>Customer Reviews</span>
              </span>

              {/* Quote */}
              <div className="relative z-10 max-w-xs">
                <p className="font-display text-sm sm:text-base lg:text-lg font-bold leading-relaxed text-gray-900">
                  Every review is a testament to our commitment to accurate, fast, and dependable data for every customer.
                </p>
              </div>

              {/* Illustration */}
              <div className="relative my-auto w-full max-w-[240px] sm:max-w-[280px] py-3 sm:py-5">
                <img
                  src="/Review.svg"
                  alt="Customer Reviews and Impact Illustration"
                  className="h-auto max-h-[190px] sm:max-h-[250px] lg:max-h-none w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Verified */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                <i className="fa-solid fa-shield-halved text-[var(--color-primary)]" />
                <span>100% Verified Customer Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
