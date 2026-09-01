const HomeContent = () => {
  return (
    <section className="w-full px-6 py-12 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--color-primary)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            BMO EXTRACT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
            Find places.
            <br />
            Get details.
            <br />
            <span className="text-[var(--color-primary)]">Export easily.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg lg:mx-0">
            Discover businesses, restaurants, hotels, shops, and more. Collect
            useful information and export your results to Excel in just a few
            clicks.
          </p>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            <a href="https://bmoextract.com/" target="_blank">
              <button className="group inline-flex cursor-pointer items-center rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1">
                Get started
                <i className="fa-solid fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1" />
              </button>
            </a>

            <a
              href="#feature"
              className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-gray-50"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-10 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />

          <div className="animate-float relative z-10 overflow-hidden rounded-xl border border-gray-200 bg-[#f3f4f6] shadow-2xl">
            <img
              src="/result.png"
              alt="BMO Extract dashboard"
              className="block h-[300px] w-auto"
            />
          </div>

          {/* Search */}
          <div className="animate-float-slow absolute -left-6 top-20 z-20 hidden items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[var(--color-primary)]">
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[var(--color-dark)]">
                Search complete
              </p>
              <p className="text-[10px] text-gray-400">1,284 places found</p>
            </div>
          </div>

          {/* Excel */}
          <div className="animate-float absolute -right-5 bottom-20 z-20 flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-500">
              <i className="fa-solid fa-file-excel text-sm" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[var(--color-dark)]">
                Export ready
              </p>
              <p className="text-[10px] text-gray-400">places.xlsx</p>
            </div>

            <i className="fa-solid fa-circle-check text-xs text-green-500" />
          </div>

          {/* Location */}
          <div className="animate-float-slow absolute -bottom-4 left-8 z-20 flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2.5 shadow-lg">
            <i className="fa-solid fa-location-dot text-xs text-[var(--color-primary)]" />
            <span className="text-xs font-semibold text-[var(--color-dark)]">
              846 places collected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
