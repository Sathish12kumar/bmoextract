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
    <nav className="fixed right-0 left-0  z-50 flex h-20 rounded-2xl items-center justify-between bg-white px-4 m-3 sm:px-6 lg:px-12">
      <div className="text-xl font-bold text-[var(--color-dark)] sm:text-2xl">
        <a href="#Home">
          <span className="text-[var(--color-primary)]">BMO</span> EXTRACT
        </a>
      </div>

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

      <div className="flex items-center gap-2">
        <button className="group inline-flex cursor-pointer items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 active:scale-95 sm:px-5 sm:py-3">
          <a href="https://bmoextract.com/" target="_blank">
            <span className=" sm:inline">Get started</span>
          </a>
          {/* <span className="sm:hidden">
            <i className="fa-solid fa-arrow-right" />
          </span> */}

          {/* <span className="ml-2 hidden transition-transform duration-200 group-hover:translate-x-1 sm:inline">
            <i className="fa-solid fa-arrow-right-long" />
          </span> */}
        </button>

        <button
          onClick={() => settoggle((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[var(--color-dark)] transition hover:bg-gray-100 md:hidden"
        >
          {!toggle ? (
            <i className="fa-solid fa-bars text-lg" />
          ) : (
            <i className="fa-solid fa-x text-lg"></i>
          )}
        </button>
      </div>

      {toggle && (
        <ul className=" items-center gap-1 absolute right-[10px] top-[90px] bg-white rounded-2xl p-3 z-100">
          {NavBardt.map((v, idx) => (
            <li
              key={idx}
              className="w-[200px]"
              onClick={() => settoggle(false)}
            >
              <a
                href={v.path}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-dark)]/70 transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] lg:px-4"
              >
                {v.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navpage;
