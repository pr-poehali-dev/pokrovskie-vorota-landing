import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const MAIN_PHOTO = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/05d177ea-ff55-429b-931a-88345a1bee46.jpg";
const STAGE_IMG  = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/files/cd5b3561-a192-4cda-9714-543cfe58e90d.jpg";
const POSTER_IMG = "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/files/fa661ca9-78e1-48a7-b199-a5369789c747.jpg";

const shows = [
  { date: "15 мая", day: "пятница",     time: "19:00", hall: "Большой зал",    price: "от 800 ₽", status: "available" },
  { date: "16 мая", day: "суббота",     time: "19:00", hall: "Большой зал",    price: "от 800 ₽", status: "few" },
  { date: "17 мая", day: "воскресенье", time: "18:00", hall: "Большой зал",    price: "от 800 ₽", status: "available" },
  { date: "23 мая", day: "суббота",     time: "19:00", hall: "Камерная сцена", price: "от 600 ₽", status: "available" },
  { date: "24 мая", day: "воскресенье", time: "18:00", hall: "Камерная сцена", price: "от 600 ₽", status: "sold" },
  { date: "30 мая", day: "суббота",     time: "19:00", hall: "Большой зал",    price: "от 800 ₽", status: "available" },
];

const actors = [
  { name: "Анна Белова",     role: "Главная роль",     img: MAIN_PHOTO },
  { name: "Дмитрий Ковалёв", role: "Ведущий актёр",    img: MAIN_PHOTO },
  { name: "Светлана Орлова", role: "Характерная роль", img: MAIN_PHOTO },
  { name: "Игорь Степанов",  role: "Комедийная роль",  img: MAIN_PHOTO },
];

const galleryImgs = [MAIN_PHOTO, STAGE_IMG, POSTER_IMG, MAIN_PHOTO, STAGE_IMG, POSTER_IMG];

const marqueeItems = ["Музыкальная комедия","★","Живой оркестр","★","Хиты советской эстрады","★","Премьера сезона","★","16+","★"];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about",   label: "О спектакле" },
    { href: "#tickets", label: "Касса" },
    { href: "#actors",  label: "Актёры" },
    { href: "#gallery", label: "Галерея" },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#FBF5E6]/96 backdrop-blur shadow-sm border-b border-[#e8d8c0]" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-cormorant text-2xl font-bold italic text-[#E8613A] tracking-wide leading-none">
          Весёлые<br /><span className="text-[#2a1a0e] not-italic text-base tracking-[0.2em] font-light">РЕБЯТА</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
        </div>
        <a href="#tickets" className="hidden md:block btn-primary">Купить билет</a>
        <button className="md:hidden text-[#E8613A]" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#FBF5E6] border-t border-[#e8d8c0] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#tickets" className="btn-primary text-center" onClick={() => setOpen(false)}>Купить билет</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#FBF5E6]">
      {/* diagonal bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(158deg, #FBF5E6 46%, #E8613A 46%)" }}
      />
      {/* decorative dots */}
      <div className="absolute top-28 left-12 w-3 h-3 rounded-full bg-[#E8B84B]" />
      <div className="absolute top-44 left-28 w-2 h-2 rounded-full bg-[#3A8B8B] opacity-70" />
      <div className="absolute bottom-44 right-20 w-4 h-4 rounded-full bg-[#E8B84B] opacity-60" />
      <div className="absolute bottom-28 right-44 w-2 h-2 rounded-full bg-[#D94F7A] opacity-70" />

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-10 gap-10">
        {/* left text */}
        <div className="flex-1 min-w-0">
          <div
            className="theater-label mb-6 opacity-0"
            style={{ animation: "fadeUp .7s ease-out .1s forwards" }}
          >
            Музыкальная комедия
          </div>
          <h1
            className="font-cormorant text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] font-bold italic text-[#2a1a0e] mb-6 opacity-0"
            style={{ animation: "fadeUp .8s ease-out .25s forwards" }}
          >
            Весёлые<br /><span className="text-[#E8613A]">ребята</span>
          </h1>
          <p
            className="font-montserrat text-sm text-[#2a1a0e]/60 leading-relaxed max-w-sm mb-10 opacity-0"
            style={{ animation: "fadeUp .8s ease-out .4s forwards" }}
          >
            Солнечная музыкальная комедия по мотивам советской классики.
            Живой оркестр, хиты эстрады 50–60-х и искромётный юмор.
          </p>
          <div
            className="flex flex-wrap gap-4 mb-12 opacity-0"
            style={{ animation: "fadeUp .8s ease-out .55s forwards" }}
          >
            <a href="#tickets" className="btn-primary">Купить билет</a>
            <a href="#about"   className="btn-outline">О спектакле</a>
          </div>
          <div
            className="flex flex-wrap gap-8 opacity-0"
            style={{ animation: "fadeUp .8s ease-out .7s forwards" }}
          >
            {[
              { v: "2 ч 15 м", l: "Продолжительность" },
              { v: "1",        l: "Антракт" },
              { v: "16+",      l: "Возраст" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-cormorant text-3xl font-bold text-[#E8613A]">{s.v}</div>
                <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#2a1a0e]/40 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right photo */}
        <div
          className="hidden lg:block flex-shrink-0 w-[500px] opacity-0"
          style={{ animation: "fadeUp 1s ease-out .3s forwards" }}
        >
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#E8B84B]/60" />
            <img
              src={MAIN_PHOTO}
              alt="Весёлые ребята"
              className="relative w-full object-cover"
              style={{ animation: "float 10s ease-in-out infinite" }}
            />
            <div className="absolute -bottom-5 -left-5 bg-[#E8613A] text-white px-5 py-3 font-cormorant text-xl italic font-bold shadow-lg">
              Премьера!
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative z-10 bg-[#E8613A] py-3 overflow-hidden">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-montserrat text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 px-6">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#FBF5E6] relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B84B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-label mb-3 justify-center">О спектакле</div>
        <h2 className="reveal font-cormorant text-[clamp(2.2rem,5vw,3.8rem)] italic font-bold text-center text-[#2a1a0e] mb-16 leading-tight">
          Советская эстрада,<br />
          <span className="text-[#E8613A]">живой оркестр и безудержный смех</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="reveal card-hover order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden border-2 border-[#e8d8c0] shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Трейлер спектакля"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="font-montserrat text-[0.56rem] tracking-widest uppercase text-[#2a1a0e]/35 text-center mt-3">
              Трейлер · 2 мин 30 сек
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="reveal font-montserrat text-sm leading-loose text-[#2a1a0e]/65 mb-5">
              «Весёлые ребята» — это праздник, который начинается с первой ноты. Молодой джазмен
              Костя влюбляется в певицу Анюту и вместе с друзьями отправляется покорять столичную
              сцену. Путаница, смех, музыка — и всё это в ярких костюмах эпохи!
            </p>
            <p className="reveal font-montserrat text-sm leading-loose text-[#2a1a0e]/65 mb-10">
              Спектакль создан с любовью к советскому кино. Живой оркестр исполняет легендарные
              мелодии, которые невозможно слушать не улыбаясь.
            </p>

            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { label: "Режиссёр",    value: "Михаил Воронов" },
                { label: "Дирижёр",     value: "Павел Архипов" },
                { label: "Сценография", value: "Елена Соловьёва" },
                { label: "Хореография", value: "Наталья Цветкова" },
              ].map((c) => (
                <div key={c.label} className="border-l-2 border-[#E8B84B] pl-3">
                  <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#2a1a0e]/40">{c.label}</div>
                  <div className="font-montserrat text-xs font-semibold text-[#2a1a0e] mt-0.5">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section id="tickets" className="py-28 px-6 bg-[#2a1a0e] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: "radial-gradient(#E8B84B 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="reveal theater-label mb-3 justify-center" style={{ color: "#E8B84B" }}>
          Касса
        </div>
        <h2 className="reveal font-cormorant text-[clamp(2.2rem,5vw,3.8rem)] italic font-bold text-center text-[#FBF5E6] mb-4">
          Расписание спектаклей
        </h2>
        <p className="reveal font-montserrat text-xs text-[#FBF5E6]/40 text-center mb-14 tracking-widest uppercase">
          Скидки студентам и пенсионерам · Групповые заявки от 10 человек
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show, i) => (
            <div
              key={i}
              className={`reveal card-hover border p-6 relative group ${
                show.status === "sold"
                  ? "bg-white/3 border-white/8 opacity-50"
                  : "bg-white/5 border-[#E8B84B]/20 hover:border-[#E8B84B]/60"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8613A] opacity-0 group-hover:opacity-100 transition-all duration-400" />

              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-cormorant text-3xl font-bold text-[#FBF5E6]">{show.date}</div>
                  <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#FBF5E6]/35">{show.day}</div>
                </div>
                <span className={`font-montserrat text-[0.53rem] uppercase tracking-wider px-2 py-1 border ${
                  show.status === "available" ? "text-emerald-400 border-emerald-400/30" :
                  show.status === "few"       ? "text-[#E8B84B] border-[#E8B84B]/40" :
                                               "text-white/25 border-white/10"
                }`}>
                  {show.status === "available" ? "Есть билеты" : show.status === "few" ? "Мало мест" : "Sold out"}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock"  size={11} className="text-[#E8B84B]" />
                <span className="font-montserrat text-xs text-[#FBF5E6]/55">{show.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="MapPin" size={11} className="text-[#E8B84B]" />
                <span className="font-montserrat text-xs text-[#FBF5E6]/55">{show.hall}</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Ticket" size={11} className="text-[#E8B84B]" />
                <span className="font-montserrat text-xs font-semibold text-[#E8B84B]">{show.price}</span>
              </div>

              {show.status !== "sold" ? (
                <button className="btn-primary w-full text-center">Выбрать места</button>
              ) : (
                <div className="font-montserrat text-[0.58rem] uppercase tracking-widest text-center text-white/20 border border-white/10 py-3">
                  Все места проданы
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-10 bg-[#E8613A]/10 border border-[#E8613A]/25 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8613A] flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={16} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#FBF5E6]/40">Касса театра</div>
              <div className="font-cormorant text-xl font-bold text-[#E8B84B]">+7 (495) 000-00-00</div>
            </div>
          </div>
          <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#FBF5E6]/35 text-center">
            Пн–Пт: 11:00–19:00 · Сб–Вс: 12:00–18:00
          </div>
        </div>
      </div>
    </section>
  );
}

function Actors() {
  return (
    <section id="actors" className="py-28 px-6 bg-[#FBF5E6]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-label mb-3 justify-center">Состав</div>
        <h2 className="reveal font-cormorant text-[clamp(2.2rem,5vw,3.8rem)] italic font-bold text-center text-[#2a1a0e] mb-16">
          Актёры
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {actors.map((a, i) => (
            <div key={i} className="reveal card-hover group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0e]/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-6 h-6 bg-[#E8613A] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="font-cormorant text-lg font-bold text-[#2a1a0e] group-hover:text-[#E8613A] transition-colors duration-300">{a.name}</div>
              <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#2a1a0e]/40 mt-1">{a.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 bg-[#f3ead6]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal theater-label mb-3 justify-center">Галерея</div>
        <h2 className="reveal font-cormorant text-[clamp(2.2rem,5vw,3.8rem)] italic font-bold text-center text-[#2a1a0e] mb-16">
          Фотографии
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImgs.map((img, i) => (
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
                />
                <div className="absolute inset-0 bg-[#E8613A]/0 group-hover:bg-[#E8613A]/15 transition-all duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 p-3">
                    <Icon name="ZoomIn" size={18} className="text-[#E8613A]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sel !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#2a1a0e]/96 flex items-center justify-center p-6"
          onClick={() => setSel(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
            onClick={() => setSel(null)}
          >
            <Icon name="X" size={26} />
          </button>
          <img
            src={galleryImgs[sel]}
            alt=""
            className="max-w-4xl max-h-[80vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSel(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === sel ? "bg-[#E8613A] w-7" : "bg-white/25 w-1.5"}`}
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
    <footer className="bg-[#1a0f06] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div>
            <div className="font-cormorant text-3xl font-bold italic text-[#E8613A] mb-1">Весёлые ребята</div>
            <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-white/30">Государственный академический театр</div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#E8B84B] mb-4">Разделы</div>
              {[["О спектакле","#about"],["Касса","#tickets"],["Актёры","#actors"],["Галерея","#gallery"]].map(([l,h]) => (
                <a key={h} href={h} className="block font-montserrat text-xs text-white/35 hover:text-[#E8613A] transition-colors mb-2">{l}</a>
              ))}
            </div>
            <div>
              <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-[#E8B84B] mb-4">Контакты</div>
              <div className="font-montserrat text-xs text-white/35 mb-2">+7 (495) 000-00-00</div>
              <div className="font-montserrat text-xs text-white/35 mb-2">info@theater.ru</div>
              <div className="font-montserrat text-xs text-white/35">Москва, Театральная пл., 1</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-montserrat text-[0.56rem] text-white/20">© 2024 Государственный академический театр</div>
          <div className="flex gap-5">
            {["ВКонтакте","Telegram","YouTube"].map((s) => (
              <a key={s} href="#" className="font-montserrat text-[0.56rem] uppercase tracking-widest text-white/25 hover:text-[#E8613A] transition-colors">{s}</a>
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
    <div className="min-h-screen">
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
