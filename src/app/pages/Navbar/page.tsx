import { NavBardt } from "../../assects/data";

const Navpage = () => {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-gray-100 bg-white px-6 lg:px-12">
      <div className="text-2xl font-bold text-[var(--color-dark)]">
        <span className="text-[var(--color-primary)]">BMO</span> EXTRACT
      </div>

      <ul className="hidden items-center gap-1 md:flex">
        {NavBardt.map((v, idx) => (
          <li key={idx}>
            <a
              href={v.path}
              className="relative block rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-dark)]/70 transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
            >
              {v.title}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="group inline-flex cursor-pointer items-center justify-center rounded-xl bg-[var(--color-primary)] 
      px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 
      "
      >
        Get started
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          <i className="fa-solid fa-arrow-right-long" />
        </span>
      </button>
    </nav>
  );
};

export default Navpage;
