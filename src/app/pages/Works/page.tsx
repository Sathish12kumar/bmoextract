import { stepsdt } from "../../assects/data";

const Workspage = () => {
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
          {stepsdt.map((step, index) => (
            <div
              key={index}
              className="workflow-card group relative rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <i className={`fa-solid ${step.icon}`} />
                </div>

                <span className="text-4xl font-black text-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-200">
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
      </div>
    </section>
  );
};

export default Workspage;
