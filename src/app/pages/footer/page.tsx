const FooterPage = () => {
  return (
    <footer className="bg-[#111827] px-6 pt-20 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#Home" className="inline-flex items-center gap-3">
              <img src="/icon-1.png" alt="BMO" className="h-[50px] w-[50px]" />
              {/* <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-black text-white">
                B
              </span> */}

              <span className="text-xl font-bold">
                BMO <span className="text-[var(--color-primary)]">EXTRACT</span>
              </span>
            </a>

            <h2 className="mt-8 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
              Find places.
              <br />
              <span className="text-[var(--color-primary)]">
                Get useful data.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Discover places, collect available information, and export your
              results into a format that works for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>

              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href="#feature"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#usecase"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Use Cases
                  </a>
                </li>

                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    How it works
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>

              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    About BMO
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white">Resources</h3>

              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Guides
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Ready to explore?</p>

            <p className="mt-1 text-sm text-gray-400">
              Start discovering useful place information.
            </p>
          </div>

          <a
            href="https://bmoextract.com/"
            target="_blank"
            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Get started
            <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BMO Extract. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-xs text-gray-500 transition hover:text-white"
            >
              Cookie Policy
            </a>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            <i className="fa-solid fa-arrow-up text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
