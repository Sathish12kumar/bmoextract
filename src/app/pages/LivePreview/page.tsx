import { useState } from "react";
import { interactiveIndustries } from "../../assects/data";

const LivePreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const currentIndustry = interactiveIndustries[activeTab];

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  // const handleCopyPhone = (phone: string, index: number) => {
  //   navigator.clipboard?.writeText(phone);
  //   setCopiedIndex(index);
  //   setTimeout(() => setCopiedIndex(null), 2000);
  // };

  return (
    <section id="demo" className="reveal-section relative scroll-mt-20 overflow-hidden bg-[#FAF9F7] px-4 sm:px-6 py-16 sm:py-20 lg:px-12 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-80 sm:h-96 w-[90%] max-w-[900px] rounded-full bg-orange-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="reveal-header mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-sm">
            <i className="fa-solid fa-bolt text-[10px]" />
            <span>Interactive Playground</span>
          </div>

          <h2 className="font-display mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-dark)]">
            See the extracted data <br className="hidden sm:inline" />
            <span className="text-gradient-orange">before you even sign up.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-500">
            Choose an industry below to preview sample extracted records with phone numbers,
            websites, verified ratings, and addresses.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="reveal-fade-up stagger-1 mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {interactiveIndustries.map((ind, idx) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`group flex cursor-pointer touch-manipulation items-center gap-2 rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === idx ? "bg-[var(--color-primary)] text-white shadow-md shadow-orange-500/25 -translate-y-0.5" : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50/40"}`}
            >
              <i className={`fa-solid ${ind.icon} ${activeTab === idx ? "text-white" : "text-[var(--color-primary)]"}`} />
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Data Table Card */}
        <div className="reveal-scale stagger-2 mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white shadow-xl shadow-slate-900/5">
          {/* Table Header Bar */}
          <div className="flex flex-col gap-3.5 border-b border-gray-200/80 bg-gray-50/70 p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-100/70 text-[var(--color-primary)] shrink-0">
                <i className={`fa-solid ${currentIndustry.icon} text-sm sm:text-base`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-sm sm:text-base font-bold text-gray-900">
                    {currentIndustry.name} in {currentIndustry.location}
                  </h4>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-emerald-700">
                    Verified
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  {currentIndustry.count} • Complete contact enrichment
                </p>
              </div>
            </div>

            {/* Simulated Export Action */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleSimulateDownload}
                className="group flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-95"
              >
                <i className={`fa-solid ${downloadSuccess ? "fa-circle-check" : "fa-file-excel"} text-xs`} />
                <span>
                  {downloadSuccess ? "Excel File Ready!" : "Download Sample .xlsx"}
                </span>
              </button>

              <a
                href="https://bmoextract.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-2 text-xs font-bold text-[var(--color-primary)] transition hover:bg-orange-100"
              >
                <span>Extract Full List</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
              </a>
            </div>
          </div>

          {/* Table Container with Smooth Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
              <thead className="border-b border-gray-200 bg-gray-50/40 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Business Name</th>
                  <th className="py-3 px-4 sm:px-6">Category</th>
                  <th className="py-3 px-4 sm:px-6">Phone Number</th>
                  <th className="py-3 px-4 sm:px-6">Website</th>
                  <th className="py-3 px-4 sm:px-6">Google Rating</th>
                  <th className="py-3 px-4 sm:px-6">Address</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {currentIndustry.places.map((place, idx) => (
                  <tr
                    key={idx}
                    className="group transition-colors duration-150 hover:bg-orange-50/25"
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-orange-50 text-[11px] sm:text-xs font-extrabold text-[var(--color-primary)] ring-1 ring-orange-200/50">
                          {idx + 1}
                        </span>
                        <span>{place.name}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6">
                      <span className="rounded-lg bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                        {place.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6 font-mono text-xs font-medium text-gray-800">
                      <div className="flex items-center gap-2">
                        <span>{place.phone}</span>
                        <button
                          type="button"
                          onClick={() => setCopiedIndex(idx)}
                          title="Copy phone"
                          className="cursor-pointer text-gray-400 opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:text-[var(--color-primary)]"
                        >
                          <i className={`fa-solid ${copiedIndex === idx ? "fa-check text-emerald-500" : "fa-copy"} text-xs`} />
                        </button>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6">
                      <a
                        href={`https://${place.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline"
                      >
                        <span>{place.website}</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                      </a>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400 text-xs">
                          <i className="fa-solid fa-star" />
                        </div>
                        <span className="font-bold text-gray-900">{place.rating}</span>
                        <span className="text-xs text-gray-400">({place.reviews})</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6 text-xs text-gray-500 max-w-[200px] truncate">
                      <span title={place.address}>{place.address}</span>
                    </td>

                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-emerald-700">
                        Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer info banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 bg-gray-50/60 px-4 sm:px-6 py-3.5 sm:py-4 text-xs text-gray-500 gap-2 sm:gap-0 text-center sm:text-left">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-[var(--color-primary)]" />
              Showing 3 of {currentIndustry.count}. Full datasets include verified coordinates and business hours.
            </span>
            <a
              href="https://bmoextract.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--color-primary)] hover:underline"
            >
              Start full query in BMO Extract →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
