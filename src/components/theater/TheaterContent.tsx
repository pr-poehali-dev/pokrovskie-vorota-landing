import Icon from "@/components/ui/icon";
import { NEW_PHOTO } from "./constants";

function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
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

function Team() {
  return (
    <section id="team" className="relative py-28 px-6 overflow-hidden">
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

export default function TheaterContent() {
  return (
    <>
      <About />
      <Team />
    </>
  );
}
