const HomeContent = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-[#FFF7F2] px-6 py-20 text-center">
      <div className="absolute -left-24 top-20 h-72 w-72 animate-pulse rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 animate-pulse rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-5 animate-[fadeIn_0.6s_ease-out] rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
          {/* <i className="fa-solid fa-sparkles mr-2" /> */}
          <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>
          Discover. Collect. Export.
        </span>

        <h1 className="max-w-4xl animate-[fadeInUp_0.7s_ease-out] text-4xl font-bold leading-tight tracking-tight text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
          Find Places.
          <span className="text-[var(--color-primary)]"> Get Details.</span>
          <br />
          Export to Excel.
        </h1>

        <p className="mt-6 max-w-2xl animate-[fadeInUp_0.9s_ease-out] text-base leading-7 text-gray-500 sm:text-lg">
          Discover hotels, restaurants, businesses, shops, and more in just one
          click. Get names, websites, phone numbers, locations, and other
          available details all in one place.
        </p>

        <div className="mt-8 flex animate-[fadeInUp_1.1s_ease-out] flex-col items-center gap-4 sm:flex-row">
          <button className="group inline-flex cursor-pointer items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--color-primary)]/30 active:scale-95">
            Get started
            <i className="fa-solid fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* <span className="text-sm text-gray-400">
            <i className="fa-solid fa-file-excel mr-1 text-green-500" />
            Export your results as Excel
          </span> */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <i className="fa-solid fa-bolt text-[var(--color-primary)]" />
            <span>Find places in seconds</span>
          </div>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["fa-building", "Businesses"],
            ["fa-utensils", "Restaurants"],
            ["fa-hotel", "Hotels"],
            ["fa-location-dot", "Locations"],
          ].map(([icon, title], index) => (
            <div
              key={title}
              className="group animate-[fadeInUp_0.8s_ease-out] rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-orange-100"
              style={{
                animationDelay: `${1.2 + index * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)]">
                <i
                  className={`fa-solid ${icon} text-xl text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white`}
                />
              </div>

              <p className="mt-3 text-sm font-medium text-[var(--color-dark)]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
