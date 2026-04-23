import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/files/03c4c002-dcaf-4c77-a605-3ae543b1ae90.jpg";
const ACTOR_IMAGE = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/files/de0638e8-64a0-4cdd-8124-2bf8e0491652.jpg";

const actors = [
  { name: "Александр Громов", role: "Главная роль — Граф", img: ACTOR_IMAGE },
  { name: "Мария Светлова", role: "Возлюбленная", img: ACTOR_IMAGE },
  { name: "Виктор Тёмный", role: "Антагонист", img: ACTOR_IMAGE },
  { name: "Анна Лесная", role: "Служанка", img: ACTOR_IMAGE },
];

const shows = [
  { date: "15 мая", day: "пятница", time: "19:00", hall: "Большой зал", status: "available" },
  { date: "16 мая", day: "суббота", time: "19:00", hall: "Большой зал", status: "few" },
  { date: "17 мая", day: "воскресенье", time: "18:00", hall: "Большой зал", status: "available" },
  { date: "23 мая", day: "суббота", time: "19:00", hall: "Камерная сцена", status: "available" },
  { date: "24 мая", day: "воскресенье", time: "18:00", hall: "Камерная сцена", status: "sold" },
  { date: "30 мая", day: "суббота", time: "19:00", hall: "Большой зал", status: "available" },
];

const galleryImages = [
  HERO_IMAGE, ACTOR_IMAGE, HERO_IMAGE, ACTOR_IMAGE, HERO_IMAGE, ACTOR_IMAGE,
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "О спектакле" },
    { href: "#tickets", label: "Касса" },
    { href: "#actors", label: "Актёры" },
    { href: "#gallery", label: "Галерея" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="font-cormorant text-xl text-[#C9A84C] italic tracking-widest">
          МАСКА
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#tickets" className="hidden md:block ticket-btn">
          <span>Купить билет</span>
        </a>
        <button
          className="md:hidden text-[#C9A84C]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#1a1a1a] px-6 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#tickets" className="ticket-btn text-center" onClick={() => setMenuOpen(false)}>
            <span>Купить билет</span>
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Спектакль"
          className="w-full h-full object-cover object-center"
          style={{ animation: "float 14s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#C9A84C]/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="font-montserrat text-[0.65rem] tracking-[0.4em] text-[#C9A84C] uppercase mb-8 opacity-0"
          style={{ animation: "fadeUp 0.8s ease-out 0.2s forwards" }}
        >
          Государственный академический театр · Премьера сезона
        </div>

        <h1
          className="font-cormorant text-[clamp(4.5rem,13vw,10rem)] leading-none font-light italic opacity-0 mb-4"
          style={{ animation: "fadeUp 0.9s ease-out 0.4s forwards" }}
        >
          <span className="gold-text-gradient">Маска</span>
        </h1>

        <div
          className="font-cormorant text-[clamp(1rem,2.5vw,1.4rem)] text-[#f0ead8]/60 italic mb-14 opacity-0"
          style={{ animation: "fadeUp 0.9s ease-out 0.6s forwards" }}
        >
          Трагедия в двух актах по мотивам А.П. Чехова
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0"
          style={{ animation: "fadeUp 0.9s ease-out 0.8s forwards" }}
        >
          <a href="#tickets" className="ticket-btn">
            <span>Купить билет</span>
          </a>
          <a
            href="#about"
            className="font-montserrat text-[0.7rem] tracking-[0.2em] uppercase text-[#f0ead8]/50 hover:text-[#C9A84C] transition-colors flex items-center gap-2"
          >
            О спектакле <Icon name="ArrowDown" size={14} />
          </a>
        </div>

        <div
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-0"
          style={{ animation: "fadeUp 0.9s ease-out 1s forwards" }}
        >
          {[
            { label: "Продолжительность", value: "2 ч 30 мин" },
            { label: "Антракт", value: "1 антракт" },
            { label: "Возраст", value: "18+" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-cormorant text-2xl text-[#C9A84C]">{item.value}</div>
              <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/40 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent opacity-50 animate-pulse" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C9A84C]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-divider mb-4">
          <span className="font-montserrat text-[0.65rem] tracking-[0.3em] uppercase text-[#C9A84C]">
            О спектакле
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <div>
            <h2 className="reveal font-cormorant text-[clamp(2.5rem,5vw,4rem)] leading-tight font-light italic text-[#f0ead8] mb-8">
              История, которая
              <br />
              <span className="text-[#C9A84C]">разрывает сердце</span>
            </h2>
            <p className="reveal font-montserrat text-sm leading-loose text-[#f0ead8]/60 mb-6">
              Граф Алексей скрывает своё истинное лицо за элегантной маской добропорядочности.
              Но когда в его жизнь врывается молодая художница Наташа, стены притворства начинают
              рушиться. Любовь и ложь, честь и страсть — в этом спектакле нет правых.
            </p>
            <p className="reveal font-montserrat text-sm leading-loose text-[#f0ead8]/60 mb-10">
              Постановка режиссёра Михаила Воронова стала одним из главных событий театрального
              сезона. Живая музыка, авторские декорации и безупречная игра актёров погружают
              зрителя в атмосферу Петербурга XIX века.
            </p>
            <div className="reveal flex flex-wrap gap-3">
              {["Режиссёр: М. Воронов", "Художник: Е. Соловьёва", "Музыка: П. Архипов"].map((tag) => (
                <span
                  key={tag}
                  className="font-montserrat text-[0.6rem] tracking-widest uppercase border border-[#C9A84C]/30 text-[#C9A84C]/70 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal hover-lift">
            <div className="relative aspect-video bg-[#111] overflow-hidden border border-[#1a1a1a]">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
                title="Трейлер спектакля"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent pointer-events-none" />
            </div>
            <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/30 text-center mt-3">
              Официальный трейлер · 2 мин 45 сек
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section id="tickets" className="py-32 px-6 bg-[#080808] relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="reveal theater-divider mb-4">
          <span className="font-montserrat text-[0.65rem] tracking-[0.3em] uppercase text-[#C9A84C]">
            Касса
          </span>
        </div>

        <h2 className="reveal font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light italic text-[#f0ead8] mt-8 mb-4">
          Расписание спектаклей
        </h2>
        <p className="reveal font-montserrat text-sm text-[#f0ead8]/40 mb-16 tracking-wide">
          Билеты от 800 до 3500 рублей · Скидки для студентов и пенсионеров
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show, i) => (
            <div
              key={i}
              className={`reveal hover-lift border p-6 relative overflow-hidden group ${
                show.status === "sold"
                  ? "border-[#1a1a1a] opacity-50"
                  : "border-[#1a1a1a] hover:border-[#C9A84C]/40"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent group-hover:via-[#C9A84C]/60 transition-all duration-500" />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-cormorant text-3xl text-[#f0ead8]">{show.date}</div>
                  <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/40">
                    {show.day}
                  </div>
                </div>
                <div
                  className={`font-montserrat text-[0.55rem] tracking-widest uppercase px-2 py-1 ${
                    show.status === "available"
                      ? "text-emerald-400 border border-emerald-400/30"
                      : show.status === "few"
                      ? "text-amber-400 border border-amber-400/30"
                      : "text-[#f0ead8]/30 border border-[#f0ead8]/10"
                  }`}
                >
                  {show.status === "available"
                    ? "Билеты есть"
                    : show.status === "few"
                    ? "Мало мест"
                    : "Sold out"}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock" size={12} className="text-[#C9A84C]" />
                <span className="font-montserrat text-xs text-[#f0ead8]/60">{show.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="MapPin" size={12} className="text-[#C9A84C]" />
                <span className="font-montserrat text-xs text-[#f0ead8]/60">{show.hall}</span>
              </div>

              {show.status !== "sold" ? (
                <button className="ticket-btn w-full text-center">
                  <span>Выбрать места</span>
                </button>
              ) : (
                <div className="font-montserrat text-[0.65rem] tracking-widest uppercase text-center text-[#f0ead8]/20 border border-[#1a1a1a] py-3">
                  Все места проданы
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-12 p-6 border border-[#C9A84C]/20 bg-[#C9A84C]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Phone" size={16} className="text-[#C9A84C]" />
            <div>
              <div className="font-montserrat text-xs text-[#f0ead8]/70">Касса театра</div>
              <div className="font-cormorant text-lg text-[#C9A84C]">+7 (495) 000-00-00</div>
            </div>
          </div>
          <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/40">
            Пн–Пт: 11:00–19:00 · Сб–Вс: 12:00–18:00
          </div>
        </div>
      </div>
    </section>
  );
}

function Actors() {
  return (
    <section id="actors" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-divider mb-4">
          <span className="font-montserrat text-[0.65rem] tracking-[0.3em] uppercase text-[#C9A84C]">
            Состав
          </span>
        </div>

        <h2 className="reveal font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light italic text-[#f0ead8] mt-8 mb-16">
          Актёры
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {actors.map((actor, i) => (
            <div key={i} className="reveal group cursor-pointer">
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={actor.img}
                  alt={actor.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#C9A84C] transition-all duration-500" />
              </div>
              <div className="font-cormorant text-lg text-[#f0ead8] group-hover:text-[#C9A84C] transition-colors duration-300">
                {actor.name}
              </div>
              <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/40 mt-1">
                {actor.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-divider mb-4">
          <span className="font-montserrat text-[0.65rem] tracking-[0.3em] uppercase text-[#C9A84C]">
            Галерея
          </span>
        </div>

        <h2 className="reveal font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light italic text-[#f0ead8] mt-8 mb-16">
          Фотографии
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal overflow-hidden cursor-pointer group relative ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <div
                className={`relative overflow-hidden ${i === 0 ? "aspect-square" : "aspect-video"}`}
                style={i === 0 ? { minHeight: "300px" } : {}}
              >
                <img
                  src={img}
                  alt={`Фото ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="border border-[#C9A84C] p-3">
                    <Icon name="ZoomIn" size={16} className="text-[#C9A84C]" />
                  </div>
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C9A84C]/20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#f0ead8]/60 hover:text-[#C9A84C] transition-colors"
            onClick={() => setSelected(null)}
          >
            <Icon name="X" size={24} />
          </button>
          <img
            src={galleryImages[selected]}
            alt="Фото"
            className="max-w-4xl max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selected ? "bg-[#C9A84C] w-6" : "bg-[#f0ead8]/30 w-1.5"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="font-cormorant text-3xl text-[#C9A84C] italic mb-2">МАСКА</div>
            <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/30">
              Государственный академический театр
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#C9A84C] mb-4">
                Навигация
              </div>
              {[
                { label: "О спектакле", href: "#about" },
                { label: "Касса", href: "#tickets" },
                { label: "Актёры", href: "#actors" },
                { label: "Галерея", href: "#gallery" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block font-montserrat text-xs text-[#f0ead8]/40 hover:text-[#C9A84C] transition-colors mb-2"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <div className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#C9A84C] mb-4">
                Контакты
              </div>
              <div className="font-montserrat text-xs text-[#f0ead8]/40 mb-2">+7 (495) 000-00-00</div>
              <div className="font-montserrat text-xs text-[#f0ead8]/40 mb-2">info@theater.ru</div>
              <div className="font-montserrat text-xs text-[#f0ead8]/40">Москва, Театральная пл., 1</div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-montserrat text-[0.6rem] text-[#f0ead8]/20 tracking-wide">
            © 2024 Государственный академический театр. Все права защищены.
          </div>
          <div className="flex gap-4">
            {["ВКонтакте", "Telegram", "YouTube"].map((soc) => (
              <a
                key={soc}
                href="#"
                className="font-montserrat text-[0.6rem] tracking-widest uppercase text-[#f0ead8]/30 hover:text-[#C9A84C] transition-colors"
              >
                {soc}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <About />
      <Tickets />
      <Actors />
      <Gallery />
      <Footer />
    </div>
  );
}
