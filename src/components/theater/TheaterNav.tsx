import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { href: "#about",   label: "О спектакле" },
  { href: "#cast",    label: "Актёры"      },
  { href: "#tickets", label: "Билеты"      },
  { href: "#reviews", label: "Отзывы"      },
];

export default function TheaterNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
      scrolled
        ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#hero" className="flex-shrink-0 leading-none">
          <div className={`font-montserrat text-[0.48rem] tracking-[0.22em] uppercase mb-0.5 transition-colors ${scrolled ? "text-gray-400" : "text-white/60"}`}>
            Московский театр
          </div>
          <div className={`font-cormorant text-[1.05rem] font-bold italic leading-none transition-colors ${scrolled ? "text-[#C8102E]" : "text-white"}`}>
            «Буфф-Парадиз»
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${scrolled ? "" : "nav-link-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block relative">
          <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-[#1a1a1a] text-[0.75rem] px-2 py-0.5 rounded-sm whitespace-nowrap z-10 rotate-6 shadow-sm" style={{ fontFamily: "'Caveat', cursive" }}>
            без комиссии
          </div>
          <a href="#tickets" className="block btn-red text-sm py-2.5 px-5">
            Купить билет
          </a>
        </div>

        {/* Burger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#1a1a1a]" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#tickets" className="btn-red text-center" onClick={() => setOpen(false)}>
            Купить билет
          </a>
        </div>
      )}
    </header>
  );
}