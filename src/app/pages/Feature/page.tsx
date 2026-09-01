const Featurepage = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-12" id="feature">
      <div className="mx-auto max-w-7xl">
        {/* <div className="mx-auto max-w-2xl text-center"> */}
        <div className="feature-animate mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Features
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="text-[var(--color-primary)]">
              {" "}
              find places faster.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Discover places, collect useful information, organize your results,
            and export everything with just a few clicks.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "fa-magnifying-glass",
              title: "Search Smarter",
              description:
                "Find hotels, restaurants, shops, businesses, and more using simple search queries.",
            },
            {
              icon: "fa-location-dot",
              title: "Get Complete Details",
              description:
                "Collect names, addresses, phone numbers, websites, ratings, and locations in one place.",
            },
            {
              icon: "fa-file-excel",
              title: "Export to Excel",
              description:
                "Download your results as an Excel file for research, analysis, marketing, or planning.",
            },
            {
              icon: "fa-bolt",
              title: "Save Time",
              description:
                "Skip repetitive manual work and collect multiple place details in just a few clicks.",
            },
            {
              icon: "fa-table-list",
              title: "Stay Organized",
              description:
                "Keep your collected data clean, structured, and easy to review and manage.",
            },
            {
              icon: "fa-rocket",
              title: "Built for Everyone",
              description:
                "Perfect for research, marketing, business planning, travel, and discovering new opportunities.",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              //   className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-orange-100/60"
              className="feature-animate group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-orange-100/60"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--color-primary)]/5 transition-transform duration-500 group-hover:scale-[2.5]" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:shadow-lg group-hover:shadow-[var(--color-primary)]/20">
                <i
                  className={`fa-solid ${feature.icon} text-lg text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white`}
                />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold text-[var(--color-dark)]">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

              <div className="relative mt-5 flex items-center text-sm font-medium text-[var(--color-primary)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                Learn more
                <i className="fa-solid fa-arrow-right ml-2 text-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurepage;
