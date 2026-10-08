import { stepsdt } from "../../assects/data";

const Workspage = () => {
  return (
    <section
      id="workflow"
      className="reveal-section scroll-mt-20 relative w-full max-w-full overflow-hidden bg-[#FAF9F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER (With scroll reveal animation)
        ====================================================== */}
        <div className="workflow-header reveal-header mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[11px] font-semibold text-orange-600">
            <i className="fa-solid fa-diagram-project text-[9px]" />
            <span>How It Works</span>
          </div>

          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Find it. Collect it.
            <br className="hidden sm:inline" />
            <span className="text-gradient-orange">
              {" "}Export it in {stepsdt.length} simple steps.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:mt-4 sm:text-base">
            From your search query to a ready-to-use Excel file, BMO Extract
            keeps the entire process simple and automated.
          </p>
        </div>

        {/* =====================================================
            DESKTOP - SINGLE ROW
            - No scroll-tracking background shifts (clean white cards)
            - No tickmarks (always displays step icon)
            - Scroll reveal animations with staggered entrances
        ====================================================== */}
        <div className="relative mt-16 hidden lg:block xl:mt-20">

          {/* Background Timeline Connector Line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 z-0 h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200"
          />

          <div className="relative grid grid-cols-4 gap-6">
            {stepsdt.map((step, index) => (
              <div
                key={index}
                className={`reveal-card reveal-fade-up stagger-${index + 1} group relative text-center`}
              >
                {/* Step Icon (Step icon preserved, NO tickmark) */}
                <div className="relative z-20 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FAF9F6] bg-white shadow-sm ring-1 ring-orange-200/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:ring-orange-300">
                  <i
                    className={`fa-solid ${step.icon} text-sm text-orange-500 transition-colors duration-300 group-hover:text-white`}
                  />
                </div>

                {/* Card Body (Consistent clean white card, NO changing background) */}
                <div className="mt-5 flex h-[230px] flex-col rounded-2xl border border-gray-200/90 bg-white p-5 text-left shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-500/10">
                  {/* Step Label */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-display mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            TABLET
        ====================================================== */}
        <div className="mt-12 hidden grid-cols-2 gap-5 md:grid lg:hidden">
          {stepsdt.map((step, index) => (
            <div
              key={index}
              className={`reveal-card reveal-fade-up stagger-${index + 1}`}
            >
              <WorkflowCard step={step} />
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE
        ====================================================== */}
        <div className="relative mt-12 md:hidden">

          {/* Background Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-6 w-px -translate-x-1/2 bg-orange-200/80"
          />

          <div className="space-y-6">
            {stepsdt.map((step, index) => (
              <div
                key={index}
                className={`reveal-card reveal-fade-up stagger-${index + 1} relative pl-11`}
              >
                {/* Mobile Step Icon (No tickmark, displays step icon) */}
                <div className="absolute left-5 top-6 z-20 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#FAF9F6] bg-white text-orange-500 shadow-sm ring-1 ring-orange-200">
                  <i className={`fa-solid ${step.icon} text-[8px] text-orange-500`} />
                </div>

                <WorkflowCard step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            TRUST INFO
        ====================================================== */}
        <div className="reveal-fade-up mt-10 flex flex-col items-center justify-center gap-3 border-t border-orange-100 pt-6 text-center text-xs font-medium text-gray-500 sm:mt-12 sm:flex-row sm:gap-6 sm:text-sm">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-cloud text-orange-500" />
            <span>No Complex Installation</span>
          </div>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-orange-500" />
            <span>Average query time: &lt; 30 seconds</span>
          </div>

          <span className="hidden text-orange-200 sm:inline">•</span>

          <div className="flex items-center gap-2">
            <i className="fa-solid fa-file-excel text-emerald-600" />
            <span>Microsoft Excel compatible</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   WORKFLOW CARD (Tablet & Mobile)
========================================================= */

const WorkflowCard = ({
  step,
}: {
  step: (typeof stepsdt)[number];
}) => {
  return (
    <div className="relative z-10 h-full">
      <div className="group flex h-[250px] flex-col rounded-2xl border border-gray-200/90 bg-white p-5 text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10">
        {/* Top Row */}
        <div className="flex items-center">
          {/* Icon (Always step icon, NO tickmark) */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-200/70 transition-all duration-300 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white">
            <i className={`fa-solid ${step.icon} text-sm`} />
          </div>

          {/* Step Number */}
          <span className="ml-auto rounded-full bg-orange-50/80 border border-orange-100 px-2.5 py-1 text-[10px] font-bold text-orange-600">
            Step {step.number}
          </span>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="font-display text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
            {step.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workspage;
