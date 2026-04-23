import Icon from "@/components/ui/icon";
import { NEW_PHOTO, marquee } from "./constants";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      <div className="absolute inset-0">
        <img
          src={NEW_PHOTO}
          alt="Покровские ворота — труппа"
          className="w-full h-full object-cover object-top ken-burns"
        />
        <div className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(15,5,5,0.55) 0%, rgba(15,5,5,0.15) 40%, rgba(15,5,5,0.75) 75%, rgba(15,5,5,0.96) 100%)"
          }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(15,5,5,0.55) 0%, transparent 30%, transparent 70%, rgba(15,5,5,0.55) 100%)" }}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">

            <div className="opacity-0" style={{ animation: "fadeUp .6s ease-out .1s forwards" }}>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-7 h-px bg-[#C8102E]" />
                <span className="font-montserrat text-[0.58rem] tracking-[0.28em] uppercase text-[#f5d7a0]/75">
                  Московский театр музыкальной антрепризы
                </span>
              </div>
            </div>

            <div
              className="font-cormorant text-[clamp(1rem,2.2vw,1.35rem)] italic text-[#f5d7a0]/75 mb-1 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .25s forwards" }}
            >
              Леонид Зорин
            </div>

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

            <div
              className="inline-block font-montserrat text-[0.63rem] tracking-[0.24em] uppercase text-white bg-[#C8102E] px-4 py-1.5 mb-8 opacity-0"
              style={{ animation: "fadeUp .7s ease-out .55s forwards" }}
            >
              Музыкальная комедия
            </div>

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

            <div className="flex flex-wrap gap-4 opacity-0" style={{ animation: "fadeUp .8s ease-out .8s forwards" }}>
              <a href="#tickets" className="btn-red">Купить билет</a>
              <a href="#about"   className="btn-cream">О спектакле</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-24 right-8 rounded-full bg-[#C8102E] flex items-center justify-center shadow-xl opacity-0"
        style={{ animation: "fadeUp .5s ease-out 1s forwards", width: 52, height: 52 }}
      >
        <span className="font-montserrat text-white font-bold text-sm">12+</span>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-35">
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}

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

export default function TheaterHero() {
  return (
    <>
      <Hero />
      <MarqueeBar />
    </>
  );
}
