const Workspage = () => {
  const steps = [
    {
      number: "01",
      icon: "fa-magnifying-glass",
      title: "Choose what you need",
      description:
        "Search for restaurants, hotels, businesses, shops, services, and other places.",
    },
    {
      number: "02",
      icon: "fa-location-dot",
      title: "Set your location",
      description:
        "Choose a city, area, or specific location to find relevant places nearby.",
    },
    {
      number: "03",
      icon: "fa-filter",
      title: "Refine your results",
      description:
        "Review your results and focus on the places and information that matter to you.",
    },
    {
      number: "04",
      icon: "fa-database",
      title: "Collect place details",
      description:
        "Get available names, addresses, websites, phone numbers, ratings, and locations.",
    },
    {
      number: "05",
      icon: "fa-table-list",
      title: "Review your data",
      description:
        "Keep your collected information organized in an easy-to-read format.",
    },
    {
      number: "06",
      icon: "fa-file-excel",
      title: "Export to Excel",
      description:
        "Download your results as an Excel file and use your data anywhere you need.",
    },
  ];

  return (
    <section
      id="workflow"
      className="scroll-mt-[90px] bg-[#FFF7F2] px-6 py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            How It Works
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
            Find it.
            <span className="text-[var(--color-primary)]"> Collect it.</span>
            <br />
            Export it.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Turn your search into structured, useful data with a simple workflow
            designed to save you time.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="feature-animate group relative rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <i className={`fa-solid ${step.icon}`} />
                </div>

                <span className="text-4xl font-black text-orange-100 transition-colors group-hover:text-orange-200">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-7 text-lg font-bold text-[var(--color-dark)]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-[var(--color-primary)] transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* <div className="relative mt-16 overflow-hidden rounded-3xl bg-[var(--color-dark)] px-6 py-12 text-center sm:px-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Less work. More results.
            </span>

            <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Turn local searches into
              <span className="text-[var(--color-primary)]"> useful data.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
              Stop spending hours collecting information manually. Search,
              organize, and export everything from one place.
            </p>

            <button className="group mt-7 inline-flex items-center rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20">
              Start collecting data
              <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Workspage;
