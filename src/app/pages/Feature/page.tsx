import { FeatureDt } from "../../assects/data";

const Featurepage = () => {
  return (
    <section
      className="feature-section bg-white px-6 py-20 lg:px-12"
      id="feature"
    >
      <div className="mx-auto max-w-7xl">
        <div className="feature-header mx-auto max-w-2xl text-center">
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
          {FeatureDt.map((feature, index) => (
            <div
              key={feature.title}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
              className="feature-card group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="feature-circle absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--color-primary)]/5" />

              <div className="feature-icon relative flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                <i
                  className={`fa-solid ${feature.icon} text-lg text-[var(--color-primary)]`}
                />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold text-[var(--color-dark)]">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

              <div className="feature-link relative mt-5 flex items-center text-sm font-medium text-[var(--color-primary)]">
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
