import { useCasesdt } from "../../assects/data";

const UseCasePage = () => {
  return (
    <section
      id="use-cases"
      className="reveal-section scroll-mt-20 relative w-full max-w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
    >
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-orange-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =====================================================
              LEFT — STICKY IMAGE
          ===================================================== */}
          <div className="usecase-header reveal-left self-start lg:sticky lg:top-28">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="group overflow-hidden rounded-3xl border border-orange-100/90 bg-gradient-to-b from-orange-50/60 via-white to-orange-50/30 p-6 sm:p-7 shadow-sm">

                {/* Top Badge */}
                <div className="mb-3 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-100/70 px-3 py-1 text-[11px] font-bold text-[var(--color-primary)]">
                    <i className="fa-solid fa-map-location-dot text-[10px]" />
                    <span>Global Intelligence</span>
                  </span>
                </div>

                <div className="my-auto flex w-full items-center justify-center py-2 sm:py-3">
                  <img
                    src="/usecase.svg"
                    alt="BMO Extract Location Intelligence and Prospecting Illustration"
                    className="h-auto max-h-[220px] sm:max-h-[260px] lg:max-h-none w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Image Card Description */}
                <p className="mt-4 text-center text-xs leading-relaxed text-gray-600 sm:text-sm">
                  Discover high-quality business opportunities from local
                  markets and turn location data into actionable prospects.
                </p>

                {/* Image Card Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">
                    Multi-Channel Prospecting
                  </span>

                  <span className="font-bold text-[var(--color-primary)]">
                    60+ Countries
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — USE CASE CONTENT
          ===================================================== */}
          <div className="space-y-3">

            {/* Header */}
            <div className="usecase-header reveal-header mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <i className="fa-solid fa-crosshairs text-[10px]" />
                <span>Use Cases</span>
              </div>

              <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
                Built for real-world
                <br />
                <span className="text-gradient-orange">
                  business needs.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
                Find local businesses, discover opportunities, and get the
                data you need to make faster business decisions.
              </p>
            </div>

            {/* Use Case Cards */}
            {useCasesdt.map((useCase, idx) => (
              <div
                key={useCase.number}
                className={`usecase-card reveal-right stagger-${idx + 1} group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-orange-300 hover:shadow-md`}
              >
                {/* Left Accent Border */}
                <div className="absolute left-0 top-0 h-full w-1 rounded-2xl bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-[var(--color-primary)] transition-colors duration-300 group-hover:border-orange-200 group-hover:bg-orange-100">
                  <i className={`fa-solid ${useCase.icon} text-sm`} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-base font-bold text-[var(--color-dark)]">
                      {useCase.title}
                    </h3>

                    <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 font-mono text-[10px] font-bold text-gray-400">
                      {useCase.number}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {useCase.description}
                  </p>
                  {/* Tag */}
                  {/* <span className="mt-3 inline-block rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-500">
                    {useCase.tag}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasePage;
