const FooterPage = () => {
  return (
    <footer className="bg-[#111827] px-6 py-8 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#Home" className="inline-flex items-center gap-3">
            <img src="/icon-1.png" alt="BMO" className="h-10 w-10" />

            <span className="text-lg font-bold">
              BMO <span className="text-[var(--color-primary)]">EXTRACT</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#Home"
              className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
            >
              Home
            </a>

            <a
              href="#feature"
              className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
            >
              Features
            </a>

            <a
              href="#use-cases"
              className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
            >
              Use Cases
            </a>

            <a
              href="#workflow"
              className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="text-sm text-gray-400 transition hover:text-[var(--color-primary)]"
            >
              FAQ
            </a>
          </nav>

          <a
            href="https://bmoextract.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Get Started
          </a>
        </div>

        <div className="mt-7 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BMO Extract. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
