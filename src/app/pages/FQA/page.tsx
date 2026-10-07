import { useState } from "react";
import { faqsdt } from "../../assects/data";

const FAQPage = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="reveal-section scroll-mt-20 relative bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND AMBIENT ACCENTS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-amber-50/60 blur-3xl sm:h-80 sm:w-80" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =================================================
              LEFT — STICKY IMAGE (Scroll reveal animation)
          ================================================= */}
          <div className="faq-header reveal-fade-up self-start lg:sticky lg:top-28">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="group overflow-hidden rounded-3xl border border-orange-100/90 bg-gradient-to-b from-orange-50/70 via-white to-orange-50/40 p-5 sm:p-7 lg:p-8 text-center shadow-sm">

                {/* Top Badge */}
                <div className="mb-3 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-100/70 px-3 py-1 text-[11px] font-bold text-[var(--color-primary)]">
                    <i className="fa-solid fa-headset text-[10px]" />
                    <span>Instant Assistance</span>
                  </span>
                </div>

                {/* Top Text */}
                <div className="relative z-10 mx-auto max-w-xs">
                  <p className="font-display text-sm sm:text-base lg:text-lg font-bold leading-relaxed text-gray-900">
                    Have questions? Let us help you turn location data into useful, ready-to-use Excel spreadsheets in no time.
                  </p>
                </div>

                {/* Illustration */}
                <div className="my-auto mx-auto flex w-full max-w-[220px] sm:max-w-[260px] items-center justify-center py-3 sm:py-5">
                  <img
                    src="/faq.svg"
                    alt="FAQ and Support Illustration"
                    className="h-auto max-h-[170px] sm:max-h-[220px] lg:max-h-none w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Footer */}
                <div className="flex items-center justify-center gap-1.5 border-t border-gray-100 pt-3.5 text-xs font-semibold text-gray-500">
                  <i className="fa-solid fa-circle-question text-[var(--color-primary)]" />
                  <span>24/7 Documentation &amp; Instant Answers</span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FAQ CONTENT
          ================================================= */}
          <div className="flex-1">

            {/* Header */}
            <div className="reveal-header mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <i className="fa-solid fa-circle-question text-[10px]" />
                <span>Got Questions?</span>
              </div>

              <h2 className="font-display mt-3 text-2xl font-extrabold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
                Frequently Asked{" "}
                <span className="text-gradient-orange">
                  Questions.
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
                Everything you need to know about extracting place data, exporting to Excel, data accuracy, Coimbatore extraction examples, and getting started.
              </p>
            </div>

            {/* FAQ List with unified scroll reveal animation & safe accordion structure */}
            <div className="space-y-4">
              {faqsdt.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={faq.question}
                    data-keep-revealed="true"
                    className={`reveal-card reveal-fade-up stagger-${(index % 5) + 1}`}
                  >
                    <article
                      className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                        isOpen
                          ? "border-orange-200 shadow-md ring-1 ring-orange-200/40"
                          : "border-gray-200 shadow-sm hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
                      }`}
                    >
                      {/* Question Button */}
                      <button
                        type="button"
                        onClick={() => setActive(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                      >
                        <div className="flex min-w-0 items-center gap-3.5">
                          {/* Number */}
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                              isOpen
                                ? "bg-[var(--color-primary)] text-white shadow-sm"
                                : "bg-orange-50 text-[var(--color-primary)] group-hover:bg-orange-100"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Question Text */}
                          <span className="font-display text-sm font-bold text-gray-900 sm:text-base">
                            {faq.question}
                          </span>
                        </div>

                        {/* Chevron Arrow */}
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-orange-100 text-[var(--color-primary)]"
                              : "bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500"
                          }`}
                        >
                          <i className="fa-solid fa-chevron-down text-[10px]" />
                        </span>
                      </button>

                      {/* Answer Dropdown */}
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="border-t border-orange-100/70 px-5 pb-5 pt-4 text-xs leading-6 text-gray-600 sm:px-6 sm:pb-6 sm:text-sm">
                            <div className="pl-[3.15rem]">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
