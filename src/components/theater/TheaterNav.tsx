import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export default function TheaterNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about",   label: "О спектакле" },
    { href: "#tickets", label: "Расписание"  },
    { href: "#team",    label: "Постановщики"},
    { href: "#gallery", label: "Галерея"     },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#1a0505]/92 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="leading-none">
          <div className="font-montserrat text-[0.5rem] tracking-[0.22em] uppercase text-white/45 mb-0.5">Московский театр</div>
          <div className="font-cormorant text-lg font-bold italic text-[#f5d7a0]">«Буфф-Парадиз»</div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
        </div>
        <a href="#tickets" className="hidden md:block btn-red">Купить билет</a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1a0505]/97 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#tickets" className="btn-red text-center" onClick={() => setOpen(false)}>Купить билет</a>
        </div>
      )}
    </nav>
  );
}
