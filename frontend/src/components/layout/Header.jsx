
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../common/Container.jsx";
import { navLinks, site } from "../../config/siteConfig.js";

const linkBase =
  "flex items-center gap-1 rounded-md px-3 py-2 font-semibold transition-all duration-200";

function Chevron() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.5 7.5 10 12l4.5-4.5-1.4-1.4L10 9.2 6.9 6.1z" />
    </svg>
  );
}

function DesktopItem({ item }) {
  return (
    <li className="group relative">
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          `${linkBase} ${
            isActive
              ? "bg-[#D8B9F0] text-[#3D105F] shadow-md ring-1 ring-[#B98BDD] font-extrabold"
              : "text-[#582184] hover:bg-[#E8D5F7] hover:text-[#3D105F]"
          }`
        }
      >
        {item.label}
        {item.children && <Chevron />}
      </NavLink>

      {item.children && (
        <ul className="invisible absolute left-0 top-full z-30 min-w-48 rounded-lg bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
          {item.children.map((c) => (
            <li key={c.label}>
              <Link
                to={c.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E8D5F7] hover:text-[#3D105F]"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-lg">
      <Container className="flex items-center justify-between py-3 !mx-0 !max-w-none px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo */}
          <img
            src="/vg.jpeg"
            alt="VG Logo"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="font-serif text-3xl font-extrabold tracking-wide text-[#582184]">
            {site.name}
          </span>
        </Link>

        <nav className="hidden xl:block">
          <ul className="flex items-center gap-1 text-[#582184]">
            {navLinks.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}

            <li className="ml-2">
              <Link
                to="/admission"
                className="rounded-md bg-[#582184] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#3D105F]"
              >
                Admission Open
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="rounded-md p-2 text-[#582184] hover:bg-[#E8D5F7] xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav className="border-t border-[#D8B9F0] bg-white xl:hidden">
          <ul className="flex flex-col px-4 py-3 text-[#582184]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 font-semibold transition-colors ${
                      isActive
                        ? "bg-[#D8B9F0] font-extrabold text-[#3D105F] shadow-sm"
                        : "hover:bg-[#E8D5F7] hover:text-[#3D105F]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="mt-2">
              <Link
                to="/admission"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-[#582184] px-3 py-2 text-center font-bold text-white hover:bg-[#3D105F]"
              >
                Admission Open
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}