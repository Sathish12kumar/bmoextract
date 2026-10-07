const AboutPage = () => {
  return (
    <section
      id="about"
      className="reveal-section scroll-mt-20 relative overflow-hidden bg-[#FAF9F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="about-header reveal-header mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            <i className="fa-solid fa-building text-[10px]" />
            <span>About BMO Extract</span>
          </div>

          <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
            Engineered by BMO Software for{" "}
            <br className="hidden sm:inline" />
            <span className="text-gradient-orange">
              Instant Location Intelligence.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base lg:text-lg">
            BMO Extract eliminates the tedious grind of manual Google Maps prospecting.
            We empower sales teams, growth marketing agencies, and data analysts with
            verified business contacts exported directly into Excel spreadsheets in seconds.
          </p>
        </div>

        {/* ================= 4 CORE PILLARS GRID ================= */}
        <div className="reveal-stagger-group mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pillar 1 */}
          <div className="reveal-card stagger-1 group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-200/60 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <i className="fa-solid fa-bolt text-lg" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <span>&lt; 30s Execution</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-gray-900">
                Automated Extraction
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                Runs background extraction routines that query Google Maps and gather hundreds of local places with zero manual copy-pasting.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-100 pt-3 text-[11px] font-semibold text-gray-400">
              Cloud-Powered Engine
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="reveal-card stagger-2 group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-200/60 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <i className="fa-solid fa-shield-check text-lg" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <span>90%+ Accuracy</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-gray-900">
                Verified Contact Data
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                Captures verified phone numbers, official website URLs, star ratings, review counts, and exact physical street addresses.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-100 pt-3 text-[11px] font-semibold text-gray-400">
              Zero Noise &amp; Deduplication
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="reveal-card stagger-3 group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-200/60 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <i className="fa-solid fa-file-excel text-lg" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <span>1-Click Export</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-gray-900">
                Instant Spreadsheet Ready
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                Formats raw data into structured .xlsx workbooks ready to import straight into HubSpot, Salesforce, Zoho CRM, or outreach sequences.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-100 pt-3 text-[11px] font-semibold text-gray-400">
              Formatted .XLSX &amp; CSV
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="reveal-card stagger-4 group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-200/60 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <i className="fa-solid fa-earth-americas text-lg" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <span>60+ Countries</span>
              </div>
              <h3 className="font-display mt-2 text-lg font-bold text-gray-900">
                Global Geo Coverage
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                Target any geographic zone worldwide—from tech parks in Coimbatore to real estate in Miami and medical practices in Chicago.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-100 pt-3 text-[11px] font-semibold text-gray-400">
              Unrestricted Regional Bounds
            </div>
          </div>
        </div>

        {/* ================= LIVE PLATFORM SHOWCASE BANNER ================= */}
        <div className="reveal-fade-up mt-12 overflow-hidden rounded-3xl border border-orange-200/70 bg-gradient-to-br from-white via-orange-50/30 to-white p-6 shadow-md sm:mt-16 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
                <i className="fa-solid fa-code text-[11px]" />
                <span>Live Intelligence Platform</span>
              </div>
              <h3 className="font-display mt-3 text-xl font-extrabold text-gray-900 sm:text-2xl lg:text-3xl">
                Real Data. Zero Guesswork. Powered by BMO Software.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
                Visit <strong className="text-gray-900">bmoextract.com/extract</strong> to see our live search engine in action. Whether you are running queries like <em>&ldquo;Software Companies in Coimbatore&rdquo;</em> or prospecting healthcare providers across Europe, BMO Extract handles the data pipeline end-to-end.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://bmoextract.com/extract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-[var(--color-primary-hover)] active:scale-95"
                >
                  <span>Launch Live Extractor</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[11px]" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const contactBtn = document.getElementById("navbar-contact-btn");
                    if (contactBtn) contactBtn.click();
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-xs font-bold text-gray-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50 hover:text-[var(--color-primary)] cursor-pointer"
                >
                  <i className="fa-solid fa-envelope text-xs" />
                  <span>Contact Data Specialists</span>
                </button>
              </div>
            </div>

            {/* Live Snippet Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs font-bold text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>Live Sample: Coimbatore Tech Hub</span>
                  </div>
                  <span className="rounded bg-orange-50 px-2 py-0.5 text-[10px] font-extrabold text-[var(--color-primary)]">
                    .XLSX READY
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start justify-between rounded-lg bg-gray-50/80 p-2.5">
                    <div>
                      <p className="font-bold text-gray-900">Cognizant Tech Solutions</p>
                      <p className="text-[11px] text-gray-500">Saravanampatti, Coimbatore</p>
                    </div>
                    <span className="font-bold text-emerald-600">4.7 ★ (1.2K)</span>
                  </div>
                  <div className="flex items-start justify-between rounded-lg bg-gray-50/80 p-2.5">
                    <div>
                      <p className="font-bold text-gray-900">Robert Bosch Engineering</p>
                      <p className="text-[11px] text-gray-500">CHIL SEZ IT Park, Coimbatore</p>
                    </div>
                    <span className="font-bold text-emerald-600">4.8 ★ (980)</span>
                  </div>
                  <div className="flex items-start justify-between rounded-lg bg-gray-50/80 p-2.5">
                    <div>
                      <p className="font-bold text-gray-900">ThoughtWorks Coimbatore</p>
                      <p className="text-[11px] text-gray-500">Hanudev Info Park, Nava India</p>
                    </div>
                    <span className="font-bold text-emerald-600">4.9 ★ (420)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
