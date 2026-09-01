import { useState } from "react";
import { faqsdt } from "../../assects/data";

const FAQPage = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-[100px] bg-[#FFF7F2] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-[var(--color-primary)]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
            Got questions?
            <span className="text-[var(--color-primary)]">
              {" "}
              We've got answers.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            Learn more about BMO Extract, how it works, and what you can do with
            the information you discover.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto mt-14 max-w-4xl">
          {faqsdt.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className={`border-b border-gray-200 transition-all duration-300 ${
                  isOpen ? "bg-white" : ""
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center gap-5 px-4 py-6 text-left sm:px-6"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${
                      isOpen
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-sm font-semibold transition sm:text-base ${
                      isOpen
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-dark)]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <i
                      className={`fa-solid text-[10px] ${
                        isOpen ? "fa-minus" : "fa-plus"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-7 pl-[68px] pr-8 sm:px-6 sm:pl-[76px]">
                      <p className="max-w-3xl text-sm leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
