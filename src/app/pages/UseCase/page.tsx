const UseCasePage = () => {
  const useCases = [
    {
      number: "01",
      title: "Lead Generation",
      description:
        "Discover businesses and potential customers in specific locations and build targeted prospect lists.",
      icon: "fa-bullseye",
    },
    {
      number: "02",
      title: "Market Research",
      description:
        "Explore local businesses, competitors, and services to understand a market before making decisions.",
      icon: "fa-chart-pie",
    },
    {
      number: "03",
      title: "Sales Prospecting",
      description:
        "Find companies and businesses that match your target audience and collect their available details.",
      icon: "fa-handshake",
    },
    {
      number: "04",
      title: "Travel & Discovery",
      description:
        "Find hotels, restaurants, attractions, and interesting places when exploring a new location.",
      icon: "fa-map-location-dot",
    },
  ];

  return (
    <section
      id="use-cases"
      className="scroll-mt-[90px] bg-white  px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              Use Cases
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--color-dark)] sm:text-5xl">
              One tool.
              <br />
              <span className="text-[var(--color-primary)]">
                Many possibilities.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
              From finding new customers to researching an entire market, turn
              location-based searches into useful information.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["B", "M", "O"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-[var(--color-primary)] text-xs font-bold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Built for businesses,
                <br />
                researchers & creators.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-px bg-gray-200" />

            <div className="space-y-3">
              {useCases.map((useCase) => (
                <div
                  key={useCase.number}
                  className="feature-animate group relative flex gap-6 rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-gray-200/60"
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-4 border-[#F8FAFC] bg-white text-[var(--color-primary)] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <i className={`fa-solid ${useCase.icon}`} />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-gray-300">
                        {useCase.number}
                      </span>

                      <i className="fa-solid fa-arrow-up-right-from-square text-xs text-gray-300 transition group-hover:text-[var(--color-primary)]" />
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-[var(--color-dark)]">
                      {useCase.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasePage;
