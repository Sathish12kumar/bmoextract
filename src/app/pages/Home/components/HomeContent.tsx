const HomeContent = () => {
  return (
    <section className="flex min-h-[calc(100dvh-80px)] w-full items-center overflow-hidden px-6 py-12 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="home-content text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--color-primary)] shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-primary)]" />
            BMO EXTRACT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl xl:text-7xl">
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
            <a
              href="https://bmoextract.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-200"
            >
              Get started
              <i className="fa-solid fa-arrow-right ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#feature"
              className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
            >
              Explore
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400 lg:justify-start">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-green-500" />
              Easy to use
            </span>

            <span className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-green-500" />
              Excel export
            </span>

            <span className="flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-green-500" />
              Fast results
            </span>
          </div>
        </div>

        <div className="home-banner relative mx-auto w-full max-w-2xl lg:max-w-3xl">
          <div className="home-banner-float relative">
            <div className="absolute -inset-10 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="absolute -left-8 top-10 h-20 w-20 rotate-12 rounded-2xl border border-orange-200/60 bg-orange-100/50" />

            <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full border border-orange-200/50 bg-orange-100/40" />

            <div className="banner-image relative z-10 overflow-hidden rounded-[24px] border border-white bg-white p-2 shadow-[0_35px_100px_rgba(31,41,55,0.18)]">
              <div className="relative overflow-hidden rounded-[18px] bg-[#f5f5f5]">
                <div className="absolute left-0 right-0 top-0 z-10 flex h-10 items-center gap-2 border-b border-gray-200 bg-white/95 px-4 backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <div className="ml-3 h-5 flex-1 rounded-md bg-gray-50" />
                </div>

                <img
                  src="/result.png"
                  alt="BMO Extract dashboard"
                  className="block  w-full object-cover object-top pt-10 h-[450px]"
                />
              </div>
            </div>

            <div className="banner-search absolute -left-8 top-24 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(31,41,55,0.15)] backdrop-blur-md sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[var(--color-primary)]">
                <i className="fa-solid fa-magnifying-glass text-sm" />
              </div>

              <div>
                <p className="text-xs font-bold text-[var(--color-dark)]">
                  Search complete
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  1,284 places found
                </p>
              </div>
            </div>

            <div className="banner-excel absolute -right-8 bottom-24 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_20px_50px_rgba(31,41,55,0.15)] backdrop-blur-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-500">
                <i className="fa-solid fa-file-excel text-sm" />
              </div>

              <div>
                <p className="text-xs font-bold text-[var(--color-dark)]">
                  Export ready
                </p>

                <p className="mt-1 text-[10px] text-gray-400">places.xlsx</p>
              </div>

              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
                <i className="fa-solid fa-check text-[9px] text-green-500" />
              </div>
            </div>

            <div className="banner-location absolute -bottom-6 left-10 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-5 py-3 shadow-[0_15px_40px_rgba(31,41,55,0.14)] backdrop-blur-md">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50">
                <i className="fa-solid fa-location-dot text-[10px] text-[var(--color-primary)]" />
              </div>

              <span className="text-xs font-bold text-[var(--color-dark)]">
                846 places collected
              </span>
            </div>

            <div className="absolute -right-3 -top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg shadow-orange-200">
              <i className="fa-solid fa-bolt text-xs" />
            </div>

            <div className="absolute -bottom-12 right-24 h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-lg shadow-orange-300" />

            <div className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
