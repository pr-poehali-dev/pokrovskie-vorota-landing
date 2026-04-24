import Icon from "@/components/ui/icon";
import { NEW_PHOTO, marquee } from "./constants";

const stats = [
  { value: "3+",       label: "года на сцене" },
  { value: "50 000+",  label: "зрителей" },
  { value: "30+",      label: "городов России" },
  { value: "12+",      label: "возрастной рейтинг" },
];

const infoItems = [
  { icon: "MapPin",    label: "Город",    val: "Севастополь" },
  { icon: "Calendar",  label: "Дата",     val: "19 августа" },
  { icon: "Clock",     label: "Начало",   val: "19:00" },
  { icon: "Building2", label: "Площадка", val: "ДКР" },
];

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={NEW_PHOTO}
          alt="Покровские ворота"
          className="w-full h-full object-cover object-top ken-burns"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(170deg, rgba(15,5,5,0.72) 0%, rgba(15,5,5,0.35) 45%, rgba(15,5,5,0.85) 100%)" }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-24 pt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
          <div className="max-w-3xl">

            <div className="opacity-0" style={{ animation: "fadeUp .6s ease-out .1s forwards" }}>
              <div className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-6 h-px bg-[#C8102E]" />
                <span className="font-montserrat text-[0.56rem] tracking-[0.28em] uppercase text-white/70 font-semibold">
                  Московский театр музыкальной антрепризы «Буфф-Парадиз»
                </span>
                <div className="w-6 h-px bg-[#C8102E]" />
              </div>
            </div>

            <div
              className="font-cormorant text-[clamp(0.95rem,2vw,1.25rem)] italic text-white/65 mb-1 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .2s forwards" }}
            >
              Леонид Зорин
            </div>

            <h1
              className="leading-[1.05] mb-4 opacity-0"
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "clamp(3.8rem, 11vw, 9rem)",
                color: "#C8102E",
                WebkitTextStroke: "2px #fff",
                paintOrder: "stroke fill",
                textShadow: "3px 3px 0 #fff, -1px -1px 0 #fff, 2px 6px 18px rgba(0,0,0,0.45)",
                animation: "fadeUp .85s ease-out .35s forwards",
              }}
            >
              Покровские<br />ворота
            </h1>

            <div
              className="inline-block mb-8 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .5s forwards" }}
            >
              <span className="font-montserrat text-[0.62rem] tracking-[0.22em] uppercase font-bold bg-[#C8102E] text-white px-4 py-1.5">
                Музыкальная комедия
              </span>
            </div>

            <div
              className="flex flex-wrap gap-3 mb-10 opacity-0"
              style={{ animation: "fadeUp .8s ease-out .6s forwards" }}
            >
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3.5 py-2">
                  <Icon name={item.icon} size={13} className="text-[#C8102E] flex-shrink-0" />
                  <div>
                    <div className="font-montserrat text-[0.44rem] uppercase tracking-widest text-white/45">{item.label}</div>
                    <div className="font-montserrat text-[0.74rem] font-semibold text-white leading-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-4 opacity-0"
              style={{ animation: "fadeUp .8s ease-out .75s forwards" }}
            >
              <div className="relative">
                <div className="absolute -bottom-3.5 -right-3.5 bg-yellow-400 text-[#1a1a1a] text-[0.82rem] px-2.5 py-0.5 rounded-sm whitespace-nowrap z-10 rotate-6 shadow-sm" style={{ fontFamily: "'Caveat', cursive" }}>
                  без комиссии
                </div>
                <a href="#tickets" className="btn-red">
                  <Icon name="Ticket" size={15} />
                  Купить билет
                </a>
              </div>
              <a href="#about" className="btn-outline-white">
                О спектакле
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-20 right-6 md:right-10 rounded-full bg-[#C8102E] flex items-center justify-center shadow-xl opacity-0"
        style={{ animation: "fadeUp .5s ease-out 1s forwards", width: 50, height: 50 }}
      >
        <span className="font-montserrat text-white font-bold text-xs">12+</span>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="font-montserrat text-white text-[0.48rem] tracking-widest uppercase">Листать</span>
        <Icon name="ChevronDown" size={16} className="text-white animate-bounce" />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <div className="bg-[#1a1a1a] py-8 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-cormorant text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#C8102E] leading-none">{s.value}</div>
            <div className="font-montserrat text-[0.56rem] uppercase tracking-widest text-white/45 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MARQUEE_ITEMS = [...marquee, ...marquee, ...marquee, ...marquee, ...marquee, ...marquee, ...marquee, ...marquee];

function MarqueeBar() {
  return (
    <div className="bg-[#C8102E] py-2.5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {MARQUEE_ITEMS.map((t, i) => (
          <span key={i} className="font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/90 px-5 shrink-0">
            {t}
          </span>
        ))}
        {MARQUEE_ITEMS.map((t, i) => (
          <span key={`b-${i}`} className="font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/90 px-5 shrink-0" aria-hidden>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TheaterHero() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <MarqueeBar />
    </>
  );
}