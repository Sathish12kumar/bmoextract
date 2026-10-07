import { FeatureDt } from "../../assects/data";

const Featurepage = () => {
  const features = FeatureDt.filter((f) => f.id !== "export");
  const positions = [
    // Card 1 — Middle Left
    "lg:left-[1%] xl:left-[3%] lg:top-[47%] xl:top-[47%] lg:-translate-y-1/2",

    // Card 2 — Middle Right
    "lg:right-[1%] xl:right-[3%] lg:top-[47%] xl:top-[47%] lg:-translate-y-1/2",

    // Card 3 — Lower Left
    "lg:left-[4%] xl:left-[6%] lg:top-[64%] xl:top-[64%]",

    // Card 4 — Lower Right
    "lg:right-[4%] xl:right-[6%] lg:top-[64%] xl:top-[64%]",

    // Card 5 — Bottom Center
    "lg:left-1/2 lg:top-[73%] xl:top-[73%] lg:-translate-x-1/2",
  ];

  return (
    <section
      className="feature-section reveal-section scroll-mt-20 relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      id="feature"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-amber-50/60 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="feature-header reveal-header mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
            <i className="fa-solid fa-wand-magic-sparkles text-[10px]" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="font-display mt-4 text-2xl font-extrabold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <br className="hidden sm:inline" />
            <span className="text-gradient-orange">extract place data effortlessly.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-4 sm:text-base lg:text-lg">
            Say goodbye to manual copy-pasting. BMO Extract gathers complete
            place profiles, enriches verified contacts, cleans duplicate rows,
            and prepares export-ready sheets.
          </p>
        </div>

        {/* Main Circular Area */}
        <div className="relative mx-auto mt-8 sm:mt-12 max-w-[1240px] lg:-mt-8 lg:h-[800px] xl:-mt-10 xl:h-[820px]">

          {/* Outer Orbit */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 xl:h-[660px] xl:w-[660px]" />

          {/* Inner Orbit */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:block xl:h-[540px] xl:w-[540px]" />

          {/* Center Image Hub */}
          <div className="relative z-20 mx-auto mb-10 sm:mb-14 h-[270px] w-[270px] sm:h-[340px] sm:w-[340px] md:h-[370px] md:w-[370px] lg:mb-0 lg:absolute lg:left-1/2 lg:top-[42%] lg:h-[380px] lg:w-[380px] lg:-translate-x-1/2 lg:-translate-y-1/2 xl:h-[400px] xl:w-[400px]">
            <div className="reveal-scale relative h-full w-full flex items-center justify-center">

              {/* Image Glow */}
              <div className="absolute -inset-6 rounded-full bg-orange-100/70 blur-3xl" />

              {/* Outer Accent Ring */}
              <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-dashed border-orange-300/60 pointer-events-none" />

              {/* Outer Orange Circle Accent */}
              <div className="absolute inset-0 rounded-full border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100/50 shadow-inner" />

              {/* Floating Top Badge */}
              {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[var(--color-primary)] shadow-md whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Extraction Engine</span>
              </div> */}

              {/* Image Wrapper */}
              <div className="absolute inset-2 sm:inset-2.5 overflow-hidden rounded-full border-[6px] sm:border-[8px] border-white bg-white shadow-2xl shadow-orange-200/40">
                <img
                  src="/feature.svg"
                  alt="BMO Extract Core Capabilities Graphic"
                  className="h-full w-full object-contain object-center transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-950/10 via-transparent to-transparent" />
              </div>

              {/* Floating Bottom Chip */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-white/95 px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-gray-700 shadow-md backdrop-blur-xs">
                  <i className="fa-solid fa-file-excel text-emerald-600 text-[10px]" />
                  Instant Excel
                </span>
              </div>

            </div>
          </div>

          {/* Feature Cards Grid (Responsive 1/2 col, Desktop absolute orbit) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:block">
            {features.map((feature, idx) => {
              const animDirection =
                idx === 0 || idx === 2
                  ? "reveal-left"
                  : idx === 1 || idx === 3
                    ? "reveal-right"
                    : "reveal-fade-up";

              const floatVariant =
                idx % 3 === 0
                  ? "feature-float-1"
                  : idx % 3 === 1
                    ? "feature-float-2"
                    : "feature-float-3";

              return (
                <div
                  key={feature.id}
                  className={`w-full lg:absolute lg:w-[310px] xl:w-[340px] ${idx === features.length - 1 ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""} ${positions[idx % positions.length]}`}
                >
                  <div
                    className={`feature-card ${floatVariant} reveal-card ${animDirection} stagger-${idx + 1} group relative z-30 cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-lg shadow-orange-100/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 sm:p-6`}
                  >

                    {/* Decorative Circle */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--color-primary)]/5 transition-transform duration-500 ease-out group-hover:scale-125" />

                    <div className="relative">

                      {/* Icon + Tag */}
                      <div className="flex items-center justify-between">

                        {/* Icon */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-primary)] ring-1 ring-orange-200/50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/25 sm:h-12 sm:w-12">
                          <i className={`fa-solid ${feature.icon} text-base transition-colors duration-300 ease-out group-hover:text-white sm:text-lg`} />
                        </div>

                        {/* Tag */}
                        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-[var(--color-primary)] transition-all duration-300 ease-out group-hover:bg-orange-100/90 group-hover:text-orange-700 sm:text-[11px]">
                          {feature.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display mt-4 text-lg font-bold text-[var(--color-dark)] transition-colors duration-300 ease-out group-hover:text-[var(--color-primary)] sm:mt-5 sm:text-xl">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                        {feature.description}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurepage;
