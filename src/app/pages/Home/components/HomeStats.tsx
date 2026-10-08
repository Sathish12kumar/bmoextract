import { PartnerCompanies } from "../../../assects/data";

const HomePartners = () => {
  // Duplicate the companies so the marquee can loop seamlessly
  const companies = [...PartnerCompanies, ...PartnerCompanies];

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

        {/* Section heading */}
        <div className="reveal-header mb-6 text-center sm:mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-xs">
            Trusted by Growing Businesses
          </p>

          <h3 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            Powering smarter decisions with reliable location data
          </h3>
        </div>

        {/* Marquee wrapper */}
        <div className="reveal-fade-up relative w-full max-w-full overflow-hidden">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          {/* Scrolling track */}
          <div className="partner-marquee flex h-[80px] w-max items-center">
            {companies.map((company, index) => (
              <div key={`${company.name}-${index}`} className="mx-2 sm:mx-3">
                <div className="group flex h-16 min-w-[150px] items-center justify-center gap-2.5 rounded-xl border border-gray-100 bg-white px-5 shadow-[0_5px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_10px_30px_rgba(249,115,22,0.10)] sm:h-[72px] sm:min-w-[180px]">

                  {/* Company icon */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <i className={`${company.icon} text-xs sm:text-sm`} />
                  </div>

                  {/* Company name */}
                  <span className="whitespace-nowrap text-sm font-extrabold tracking-tight text-gray-700 transition-colors duration-300 group-hover:text-orange-600 sm:text-base">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
