/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { NavBardt } from "../../assects/data";
import useViewPort from "../../core/hooks/useViewPort";

const Navpage = () => {
  const [toggle, settoggle] = useState<boolean>(false);
  const { screen } = useViewPort();

  useEffect(() => {
    settoggle(false);
  }, [screen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-0 right-0 z-50 p-5 flex h-20 items-center justify-between bg-white shadow-sm ">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--color-dark)] sm:text-2xl">
          <a href="#Home" onClick={() => settoggle(false)}>
            <span className="text-[var(--color-primary)]">BMO</span> EXTRACT
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NavBardt.map((v, idx) => (
            <li key={idx}>
              <a
                href={v.path}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-dark)]/70 transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] lg:px-4"
              >
                {v.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Get Started */}
          <a
            href="https://bmoextract.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 active:scale-95 sm:px-5 sm:py-3"
          >
            Get started
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => settoggle(true)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[var(--color-dark)] transition hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars text-lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        onClick={() => settoggle(false)}
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
          toggle
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Offcanvas */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[280px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <div className="text-lg font-bold text-[var(--color-dark)]">
            <span className="text-[var(--color-primary)]">BMO</span> EXTRACT
          </div>

          <button
            type="button"
            onClick={() => settoggle(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-[var(--color-dark)]"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            Navigation
          </p> */}

          <ul className="space-y-1">
            {NavBardt.map((v, idx) => (
              <li key={idx}>
                <a
                  href={v.path}
                  onClick={() => settoggle(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[var(--color-dark)]/75 transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
                >
                  {v.title}

                  <i className="fa-solid fa-arrow-right text-[10px] opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Drawer Bottom */}
        <div className="border-t border-gray-100 p-5">
          <a
            href="https://bmoextract.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
          >
            Get started
            <i className="fa-solid fa-arrow-right ml-2 text-xs" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navpage;
