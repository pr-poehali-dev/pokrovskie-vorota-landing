import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const NEW_PHOTO  = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/d74f84f9-3053-4845-be90-87ef8e698def.jpg";
const POSTER     = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/398e2db5-5380-40c1-93ef-3a4afe8fc79a.jpg";

const shows = [
  { date: "13 февраля", day: "пятница",     time: "19:00", hall: "ДК Солдатова",   city: "Пермь",        price: "от 600 ₽", status: "few" },
  { date: "14 февраля", day: "суббота",     time: "19:00", hall: "ДК Солдатова",   city: "Пермь",        price: "от 600 ₽", status: "available" },
  { date: "21 февраля", day: "пятница",     time: "19:00", hall: "Концертный зал", city: "Екатеринбург", price: "от 800 ₽", status: "available" },
  { date: "22 февраля", day: "суббота",     time: "18:00", hall: "Дом культуры",   city: "Тюмень",       price: "от 700 ₽", status: "available" },
  { date: "28 февраля", day: "пятница",     time: "19:00", hall: "Театр оперы",    city: "Казань",       price: "от 900 ₽", status: "sold" },
  { date: "1 марта",    day: "суббота",     time: "19:00", hall: "Концертный зал", city: "Уфа",          price: "от 700 ₽", status: "available" },
];

const marquee = ["Покровские ворота","✦","Леонид Зорин","✦","Музыкальная комедия","✦","Буфф-Парадиз","✦","Заслуженный артист России","✦","12+","✦"];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── NAV ── */
function Nav() {
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

/* ── HERO ── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* === FULL BG: новое фото === */}
      <div className="absolute inset-0">
        <img
          src={NEW_PHOTO}
          alt="Покровские ворота — труппа"
          className="w-full h-full object-cover object-top ken-burns"
        />
        {/* тёмный градиент снизу — чтобы текст читался */}
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(15,5,5,0.55) 0%, rgba(15,5,5,0.15) 40%, rgba(15,5,5,0.75) 75%, rgba(15,5,5,0.96) 100%)"
          }}
        />
        {/* боковые затемнения */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(15,5,5,0.55) 0%, transparent 30%, transparent 70%, rgba(15,5,5,0.55) 100%)" }}
        />
      </div>

      {/* контент прижат к низу */}
      <div className="relative z-10 flex-1 flex items-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">

            {/* Theatre breadcrumb */}
            <div className="opacity-0" style={{ animation: "fadeUp .6s ease-out .1s forwards" }}>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-7 h-px bg-[#C8102E]" />
                <span className="font-montserrat text-[0.58rem] tracking-[0.28em] uppercase text-[#f5d7a0]/75">
                  Московский театр музыкальной антрепризы
                </span>
              </div>
            </div>

            {/* Author */}
            <div
              className="font-cormorant text-[clamp(1rem,2.2vw,1.35rem)] italic text-[#f5d7a0]/75 mb-1 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .25s forwards" }}
            >
              Леонид Зорин
            </div>

            {/* TITLE */}
            <h1
              className="font-cormorant font-bold italic text-white leading-[0.88] mb-5 opacity-0"
              style={{
                fontSize: "clamp(3.8rem, 10.5vw, 9rem)",
                animation: "fadeUp .85s ease-out .4s forwards",
                textShadow: "0 3px 32px rgba(200,16,46,0.45)",
              }}
            >
              Покров&shy;ские<br />
              <span className="text-[#C8102E]">ворота</span>
            </h1>

            {/* Genre */}
            <div
              className="inline-block font-montserrat text-[0.63rem] tracking-[0.24em] uppercase text-white bg-[#C8102E] px-4 py-1.5 mb-8 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .55s forwards" }}
            >
              Музыкальная комедия
            </div>

            {/* Info pills */}
            <div
              className="flex flex-wrap gap-5 mb-9 opacity-0"
              style={{ animation: "fadeUp .8s ease-out .65s forwards" }}
            >
              {[
                { icon: "MapPin",    label: "Город",    val: "Пермь" },
                { icon: "Calendar",  label: "Дата",     val: "13 февраля" },
                { icon: "Clock",     label: "Начало",   val: "19:00" },
                { icon: "Building2", label: "Площадка", val: "ДК Солдатова" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#C8102E]/20 border border-[#C8102E]/45 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={12} className="text-[#f5d7a0]" />
                  </div>
                  <div>
                    <div className="font-montserrat text-[0.48rem] uppercase tracking-widest text-white/38">{item.label}</div>
                    <div className="font-montserrat text-[0.78rem] font-semibold text-white">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 opacity-0" style={{ animation: "fadeUp .8s ease-out .8s forwards" }}>
              <a href="#tickets" className="btn-red">Купить билет</a>
              <a href="#about"   className="btn-cream">О спектакле</a>
            </div>
          </div>
        </div>
      </div>

      {/* age badge */}
      <div
        className="absolute top-24 right-8 w-13 h-13 rounded-full bg-[#C8102E] flex items-center justify-center shadow-xl opacity-0"
        style={{ animation: "fadeUp .5s ease-out 1s forwards", width: 52, height: 52 }}
      >
        <span className="font-montserrat text-white font-bold text-sm">12+</span>
      </div>

      {/* scroll line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-35">
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ── MARQUEE ── */
function MarqueeBar() {
  return (
    <div className="bg-[#C8102E] py-3 overflow-hidden">
      <div className="animate-marquee">
        {[...marquee, ...marquee, ...marquee].map((t, i) => (
          <span key={i} className="font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/90 px-6">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── ABOUT ── */
function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* blurred bg */}
      <div className="absolute inset-0">
        <img src={NEW_PHOTO} alt="" className="w-full h-full object-cover object-top scale-110" style={{ filter: "blur(2px)" }} />
        <div className="absolute inset-0 bg-[#0f0505]/88" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal section-label mb-4" style={{ color: "#f5d7a0" }}>О спектакле</div>
        <h2 className="reveal font-cormorant text-[clamp(2rem,5vw,3.6rem)] font-bold italic text-white text-center mb-16 leading-tight">
          Культовая пьеса,<br />
          <span className="text-[#C8102E]">ожившая на сцене</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* video */}
          <div className="reveal order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden border border-[#C8102E]/40 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Трейлер"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8102E] pointer-events-none" />
            </div>
            <div className="font-montserrat text-[0.52rem] tracking-widest uppercase text-white/28 text-center mt-3">
              Официальный трейлер спектакля
            </div>
          </div>

          {/* text */}
          <div className="order-1 md:order-2">
            <p className="reveal font-montserrat text-sm leading-loose text-white/68 mb-5">
              Москва, коммунальная квартира у Покровских ворот. Хозяйка Маргарита Павловна
              железной рукой управляет бывшим мужем Львом Евгеньевичем. Молодой студент Костик
              наблюдает за этим карнавалом жизни — с иронией и неизменным оптимизмом.
            </p>
            <p className="reveal font-montserrat text-sm leading-loose text-white/68 mb-10">
              Блистательная пьеса Леонида Зорина о любви, свободе и невозможности изменить другого.
              Живой оркестр, яркие костюмы эпохи и звёзды московской антрепризы.
            </p>

            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { label: "Автор пьесы",      value: "Леонид Зорин" },
                { label: "Режиссёр",          value: "Вячеслав Иванов" },
                { label: "Театр",             value: "«Буфф-Парадиз»" },
                { label: "Продолжительность", value: "2 ч 30 мин" },
              ].map((c) => (
                <div key={c.label} className="border-l-2 border-[#C8102E] pl-3">
                  <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-white/33">{c.label}</div>
                  <div className="font-montserrat text-xs font-semibold text-[#f5d7a0] mt-0.5">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TICKETS ── */
function Tickets() {
  return (
    <section id="tickets" className="py-28 px-6 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal section-label mb-4">Расписание</div>
        <h2 className="reveal font-cormorant text-[clamp(2rem,5vw,3.6rem)] font-bold italic text-[#1a0505] text-center mb-4 leading-tight">
          Даты спектаклей
        </h2>
        <p className="reveal font-montserrat text-xs text-[#1a0505]/42 text-center mb-14 tracking-widest uppercase">
          Гастрольный тур по городам России · Скидки студентам и пенсионерам
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show, i) => (
            <div
              key={i}
              className={`reveal border p-6 relative group transition-all duration-300 ${
                show.status === "sold"
                  ? "border-[#d0c8be] bg-[#ede5d8] opacity-55"
                  : "border-[#ddd5c8] bg-white hover:border-[#C8102E]/55 hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-all duration-400" />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-montserrat text-[0.54rem] uppercase tracking-widest text-[#C8102E] mb-0.5 font-bold">{show.city}</div>
                  <div className="font-cormorant text-3xl font-bold text-[#1a0505]">{show.date}</div>
                  <div className="font-montserrat text-[0.52rem] uppercase tracking-widest text-[#1a0505]/38">{show.day}</div>
                </div>
                <span className={`font-montserrat text-[0.5rem] uppercase tracking-wider px-2 py-1 border ${
                  show.status === "available" ? "text-emerald-700 border-emerald-400/45 bg-emerald-50" :
                  show.status === "few"       ? "text-amber-700 border-amber-400/45 bg-amber-50" :
                                               "text-[#1a0505]/28 border-[#ccc] bg-[#f0ebe2]"
                }`}>
                  {show.status === "available" ? "Есть билеты" : show.status === "few" ? "Мало мест" : "Sold out"}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock"  size={11} className="text-[#C8102E]" />
                <span className="font-montserrat text-xs text-[#1a0505]/58">{show.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="MapPin" size={11} className="text-[#C8102E]" />
                <span className="font-montserrat text-xs text-[#1a0505]/58">{show.hall}</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Ticket" size={11} className="text-[#C8102E]" />
                <span className="font-montserrat text-xs font-bold text-[#C8102E]">{show.price}</span>
              </div>

              {show.status !== "sold" ? (
                <button className="btn-red w-full text-center">Купить билет</button>
              ) : (
                <div className="font-montserrat text-[0.54rem] uppercase tracking-widest text-center text-[#1a0505]/28 border border-[#ccc] py-3">
                  Все билеты проданы
                </div>
              )}
            </div>
          ))}
        </div>

        {/* phone bar */}
        <div className="reveal mt-10 bg-[#1a0505] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C8102E] flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={15} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-white/38">Касса</div>
              <div className="font-cormorant text-xl font-bold text-[#f5d7a0]">+7 (495) 000-00-00</div>
            </div>
          </div>
          <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-white/33 text-center">
            Пн–Пт: 11:00–19:00 · Сб–Вс: 12:00–18:00
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TEAM ── */
function Team() {
  return (
    <section id="team" className="relative py-28 px-6 overflow-hidden">
      {/* новое фото — нижняя полоса (сцены) */}
      <div className="absolute inset-0">
        <img
          src={NEW_PHOTO}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-[#0f0505]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal section-label mb-4" style={{ color: "#f5d7a0" }}>Постановщики</div>
        <h2 className="reveal font-cormorant text-[clamp(2rem,5vw,3.6rem)] font-bold italic text-white text-center mb-16">
          Команда спектакля
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { name: "Вячеслав Иванов",  role: "Художественный руководитель и режиссёр-постановщик" },
            { name: "Леонид Зорин",     role: "Автор пьесы «Покровские ворота»" },
            { name: "Труппа театра",    role: "Московский театр музыкальной антрепризы «Буфф-Парадиз»" },
            { name: "Живой оркестр",    role: "Музыкальное сопровождение спектакля" },
          ].map((a, i) => (
            <div key={i} className="reveal retro-card p-6 group">
              <div className="w-9 h-9 bg-[#C8102E]/18 border border-[#C8102E]/40 flex items-center justify-center mb-4 group-hover:bg-[#C8102E]/38 transition-all duration-300">
                <Icon name="Star" size={14} className="text-[#f5d7a0]" />
              </div>
              <div className="font-cormorant text-[1.1rem] font-bold text-[#f5d7a0] mb-1">{a.name}</div>
              <div className="font-montserrat text-[0.56rem] leading-relaxed text-white/48">{a.role}</div>
            </div>
          ))}
        </div>

        {/* director highlight */}
        <div className="reveal border border-[#C8102E]/40 bg-[#C8102E]/10 p-8 text-center">
          <div className="font-montserrat text-[0.54rem] uppercase tracking-[0.28em] text-[#f5d7a0]/55 mb-3">
            Художественный руководитель и режиссёр-постановщик
          </div>
          <div className="font-cormorant text-[clamp(1.5rem,4vw,2.8rem)] font-bold italic text-white">
            Вячеслав Иванов
          </div>
          <div className="font-montserrat text-[0.62rem] tracking-widest uppercase text-[#C8102E] mt-2">
            Заслуженный артист России
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── GALLERY ── */
function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  // верхняя половина + нижняя половина нового фото + постер
  const images = [NEW_PHOTO, POSTER, NEW_PHOTO, POSTER, NEW_PHOTO, POSTER];

  return (
    <section id="gallery" className="py-28 px-6 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal section-label mb-4">Галерея</div>
        <h2 className="reveal font-cormorant text-[clamp(2rem,5vw,3.6rem)] font-bold italic text-[#1a0505] text-center mb-16">
          Фотографии
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSel(i)}
              className={`reveal overflow-hidden cursor-pointer group relative ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-video" : "aspect-square"}`}>
                <img
                  src={img}
                  alt={`Фото ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-600"
                  style={{ objectPosition: i % 2 === 0 ? "center top" : "center center" }}
                />
                <div className="absolute inset-0 bg-[#C8102E]/0 group-hover:bg-[#C8102E]/18 transition-all duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 p-3 shadow-lg">
                    <Icon name="ZoomIn" size={18} className="text-[#C8102E]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sel !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0f0505]/96 flex items-center justify-center p-6"
          onClick={() => setSel(null)}
        >
          <button className="absolute top-5 right-5 text-white/50 hover:text-white" onClick={() => setSel(null)}>
            <Icon name="X" size={26} />
          </button>
          <img
            src={images[sel]}
            alt=""
            className="max-w-4xl max-h-[82vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSel(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === sel ? "bg-[#C8102E] w-7" : "bg-white/25 w-1.5"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-[#0f0505] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div>
            <div className="font-montserrat text-[0.5rem] uppercase tracking-[0.24em] text-white/32 mb-1">
              Московский театр музыкальной антрепризы
            </div>
            <div className="font-cormorant text-3xl font-bold italic text-[#C8102E] mb-0.5">«Буфф-Парадиз»</div>
            <div className="font-cormorant text-lg italic text-[#f5d7a0]/55">Покровские ворота</div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-[#f5d7a0]/45 mb-4">Разделы</div>
              {[["О спектакле","#about"],["Расписание","#tickets"],["Постановщики","#team"],["Галерея","#gallery"]].map(([l,h]) => (
                <a key={h} href={h} className="block font-montserrat text-xs text-white/28 hover:text-[#C8102E] transition-colors mb-2">{l}</a>
              ))}
            </div>
            <div>
              <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-[#f5d7a0]/45 mb-4">Контакты</div>
              <div className="font-montserrat text-xs text-white/28 mb-2">+7 (495) 000-00-00</div>
              <div className="font-montserrat text-xs text-white/28 mb-2">info@buffparadiz.ru</div>
              <div className="font-montserrat text-xs text-white/28">Москва</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/7 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-montserrat text-[0.5rem] text-white/16">© 2025 Театр «Буфф-Парадиз» · Все права защищены</div>
          <div className="flex gap-5">
            {["ВКонтакте","Telegram","YouTube"].map((s) => (
              <a key={s} href="#" className="font-montserrat text-[0.5rem] uppercase tracking-widest text-white/20 hover:text-[#C8102E] transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT ── */
export default function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <MarqueeBar />
      <About />
      <Tickets />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
}
