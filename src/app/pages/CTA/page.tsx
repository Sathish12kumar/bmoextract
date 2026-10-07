const CTABanner = () => {
  return (
    <section id="cta" className="reveal-section bg-[#FAF9F6] px-4 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* CTA Layout */}
        <div className="reveal-scale grid overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[36px]">

          {/* =====================================================
              LEFT — BRAND PANEL
          ====================================================== */}
          <div className="relative overflow-hidden bg-[#171717] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">

            {/* Decorative Lines */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-400/30 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-orange-500/10" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-orange-500/10" />

            {/* Content */}
            <div className="relative">

              {/* Small Label */}
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400 sm:text-xs">
                <span className="h-px w-6 bg-orange-400" />
                Start extracting
              </div>

              {/* Heading */}
              <h2 className="font-display mt-5 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[46px] xl:text-[52px]">
                Your next dataset<br />is only a <span className="text-orange-400">search away.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
                Find businesses, collect verified place information, and export clean data to Excel without spending hours copying information manually.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="https://bmoextract.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_12px_30px_rgba(249,115,22,0.25)] sm:px-7 sm:py-4 sm:text-base"
                >
                  <span>Get Started Free</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                    <i className="fa-solid fa-arrow-right text-[10px]" />
                  </span>
                </a>
              </div>

              {/* Features */}
              <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-5">
                <div>
                  <p className="text-lg font-bold text-white">1-click</p>
                  <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">Excel export</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-white">Fast</p>
                  <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">Data collection</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-white">No-code</p>
                  <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">Workflow</p>
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT — ACTION PANEL
          ====================================================== */}
          <div className="relative flex items-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14">

            {/* Background Number */}
            <span className="pointer-events-none absolute right-5 top-0 select-none text-[150px] font-black leading-none text-gray-50 sm:text-[190px]">
              01
            </span>

            <div className="relative w-full">

              {/* Top Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 ring-1 ring-orange-100">
                <i className="fa-solid fa-location-dot text-xl" />
              </div>

              <h3 className="font-display mt-6 text-xl font-bold text-[var(--color-dark)] sm:text-2xl">
                Start with a location
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                Enter a city, area, category, or keyword and let BMO Extract handle the collection for you.
              </p>

              {/* Simple Steps */}
              <div className="mt-7 space-y-4">

                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                    1
                  </span>

                  <div>
                    <p className="text-xs font-bold text-gray-800 sm:text-sm">Search your target</p>
                    <p className="text-[10px] text-gray-400 sm:text-xs">City, category or keyword</p>
                  </div>
                </div>

                {/* Connector */}
                <div className="ml-4 h-4 border-l border-dashed border-orange-200" />

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
                    2
                  </span>

                  <div>
                    <p className="text-xs font-bold text-gray-800 sm:text-sm">Collect place data</p>
                    <p className="text-[10px] text-gray-400 sm:text-xs">Profiles, contacts & locations</p>
                  </div>
                </div>

                {/* Connector */}
                <div className="ml-4 h-4 border-l border-dashed border-orange-200" />

                {/* Step 3 */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                    <i className="fa-solid fa-check text-[9px]" />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-gray-800 sm:text-sm">Export your spreadsheet</p>
                    <p className="text-[10px] text-gray-400 sm:text-xs">Clean, organized & ready to use</p>
                  </div>
                </div>

              </div>

              {/* Demo Link */}
              <a
                href="#demo"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-orange-500 transition-colors duration-200 hover:text-orange-600 sm:text-sm"
              >
                <span>See it in action</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
