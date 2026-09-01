import { useState } from "react";

const FAQPage = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is BMO Extract?",
      answer:
        "BMO Extract is a place discovery and data extraction platform designed to make finding and organizing place information easier. Instead of manually searching through different pages and copying details one by one, you can search for places and collect the available information in a structured way.",
    },
    {
      question: "What types of places can I search for?",
      answer:
        "You can search for many different types of places, including hotels, restaurants, businesses, shops, services, offices, and other locations. Simply enter what you are looking for along with the location you are interested in.",
    },
    {
      question: "What information can BMO Extract collect?",
      answer:
        "The available information can include place names, addresses, phone numbers, websites, ratings, locations, and other details depending on what is available for each place. The collected information is presented together so it is easier to review and work with.",
    },
    {
      question: "Can I export the results to Excel?",
      answer:
        "Yes. After collecting your results, you can export the available information into an Excel file. This makes it easier to analyze, filter, organize, share, or continue working with your data using your existing workflow.",
    },
    {
      question: "Who is BMO Extract useful for?",
      answer:
        "BMO Extract can be useful for marketers looking for businesses, sales teams researching prospects, researchers collecting location information, business owners exploring markets, travelers finding places, and anyone who needs organized place data.",
    },
    {
      question: "Do I need technical knowledge to use BMO Extract?",
      answer:
        "No. BMO Extract is designed to keep the process simple. You do not need programming or technical knowledge to search for places, review available information, and export your results.",
    },
    {
      question: "How does the search process work?",
      answer:
        "Start by searching for the type of place you need and specify the relevant location. BMO Extract then helps you discover matching places and gather the available information so you can review the results and decide what you want to use.",
    },
    {
      question: "Can I use the exported data for my business?",
      answer:
        "The exported data can be useful for research, planning, prospecting, analysis, and other workflows. Make sure your use of the information follows applicable laws, regulations, and the terms governing the underlying data sources.",
    },
  ];

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
          {faqs.map((faq, index) => {
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
