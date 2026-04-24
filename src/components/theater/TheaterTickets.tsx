import { useState } from "react";
import Icon from "@/components/ui/icon";
import { shows, reviews, faq, NEW_PHOTO } from "./constants";

/* ─── Tickets ─── */
function Tickets() {
  return (
    <section id="tickets" className="py-24 px-5 md:px-8 bg-[#1a1a1a] relative overflow-hidden">
      {/* dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <div className="section-eyebrow mb-3" style={{ color: "#D4A843" }}>Купить билет</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-white leading-tight">
            Ближайшие показы
          </h2>
          <span className="divider-red mt-4 block mx-auto" style={{ width: "3rem", height: "3px", background: "#C8102E" }} />
          <p className="font-montserrat text-[0.75rem] text-white/40 mt-4 uppercase tracking-widest">
            Гастрольный тур по городам России
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {shows.map((show, i) => (
            <div
              key={i}
              className={`reveal relative border p-6 group transition-all duration-300 ${
                show.status === "sold"
                  ? "border-white/8 bg-white/3 opacity-50"
                  : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-[#C8102E]/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(200,16,46,0.2)]"
              }`}
            >
              {/* top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="font-montserrat text-[0.55rem] font-bold uppercase tracking-widest text-[#C8102E] mb-0.5">{show.city}</div>
                  <div className="font-cormorant text-[2rem] font-bold text-white leading-none">{show.date}</div>
                  <div className="font-montserrat text-[0.52rem] uppercase tracking-widest text-white/35 mt-0.5">{show.day}</div>
                </div>
                <span className={`font-montserrat text-[0.5rem] uppercase tracking-wider px-2.5 py-1 border ${
                  show.status === "available" ? "text-emerald-400 border-emerald-400/35 bg-emerald-400/8" :
                  show.status === "few"       ? "text-amber-400 border-amber-400/35 bg-amber-400/8" :
                                               "text-white/25 border-white/10"
                }`}>
                  {show.status === "available" ? "Есть билеты" : show.status === "few" ? "Мало мест" : "Sold out"}
                </span>
              </div>

              <div className="space-y-1.5 mb-5">
                <div className="flex items-center gap-2">
                  <Icon name="Clock"  size={11} className="text-[#C8102E] flex-shrink-0" />
                  <span className="font-montserrat text-[0.72rem] text-white/55">{show.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={11} className="text-[#C8102E] flex-shrink-0" />
                  <span className="font-montserrat text-[0.72rem] text-white/55">{show.hall}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Ticket" size={11} className="text-[#C8102E] flex-shrink-0" />
                  <span className="font-montserrat text-[0.72rem] font-bold text-[#D4A843]">
                    {show.price} — {show.priceVip}
                  </span>
                </div>
              </div>

              {show.status !== "sold" ? (
                <button className="btn-red w-full justify-center">
                  <Icon name="ShoppingCart" size={14} />
                  Купить билет
                </button>
              ) : (
                <div className="font-montserrat text-[0.55rem] uppercase tracking-widest text-center text-white/20 border border-white/8 py-3">
                  Все места проданы
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="reveal border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-[#C8102E] flex items-center justify-center flex-shrink-0">
              <Icon name="Phone" size={16} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-white/35">Касса театра</div>
              <div className="font-cormorant text-xl font-bold text-[#D4A843]">+7 (495) 000-00-00</div>
            </div>
          </div>
          <div className="text-center">
            <div className="font-montserrat text-[0.52rem] uppercase tracking-widest text-white/30">Режим работы</div>
            <div className="font-montserrat text-[0.72rem] text-white/55 mt-0.5">Пн–Пт: 11:00–19:00 · Сб–Вс: 12:00–18:00</div>
          </div>
          <a href="mailto:info@buffparadiz.ru" className="btn-outline-white flex-shrink-0">
            <Icon name="Mail" size={14} />
            Написать нам
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ─── */
function Reviews() {
  return (
    <section id="reviews" className="py-24 px-5 md:px-8 bg-[#FDF6EE]">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center mb-14">
          <div className="section-eyebrow mb-3">Отзывы зрителей</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-[#1a1a1a] leading-tight">
            Что говорят зрители
          </h2>
          <span className="divider-red" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="reveal card-lift bg-white p-6 border border-gray-100 shadow-sm flex flex-col">
              {/* Stars */}
              <div className="stars text-base mb-3">{"★".repeat(r.stars)}</div>

              {/* Quote icon */}
              <div className="font-cormorant text-4xl text-[#C8102E]/20 leading-none mb-1">"</div>

              <p className="font-montserrat text-[0.8rem] leading-relaxed text-gray-600 flex-1 mb-5">
                {r.text}
              </p>

              <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C8102E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={14} className="text-[#C8102E]" />
                </div>
                <div>
                  <div className="font-montserrat text-[0.72rem] font-bold text-[#1a1a1a]">{r.author}</div>
                  <div className="font-montserrat text-[0.58rem] text-gray-400">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-5 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="reveal text-center mb-14">
          <div className="section-eyebrow mb-3">Вопросы и ответы</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-[#1a1a1a] leading-tight">
            Часто спрашивают
          </h2>
          <span className="divider-red" />
        </div>

        <div className="reveal space-y-0">
          {faq.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-montserrat text-[0.88rem] font-semibold text-[#1a1a1a] leading-snug pr-2">
                  {item.q}
                </span>
                <div className={`w-7 h-7 flex-shrink-0 border flex items-center justify-center transition-all duration-300 ${
                  open === i ? "border-[#C8102E] bg-[#C8102E]" : "border-gray-200"
                }`}>
                  <Icon
                    name={open === i ? "Minus" : "Plus"}
                    size={14}
                    className={open === i ? "text-white" : "text-gray-400"}
                  />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                <p className="font-montserrat text-[0.82rem] leading-relaxed text-gray-500">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery strip ─── */
function GalleryStrip() {
  const [sel, setSel] = useState<number | null>(null);
  const images = [
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/aa8705ca-f10c-4744-85eb-979e23f33ff8.jpg",
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/cf7539a3-dcef-4a6a-a973-8134ee3a2bc2.jpg",
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/1cd71fa5-3ffb-4606-a9e9-adc659b44094.jpg",
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/95202608-18b4-49d5-b299-a155e306482b.jpg",
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/86dab72c-2379-49e1-b235-6f23f50ff66c.jpg",
    "https://cdn.poehali.dev/projects/10c6b133-4f18-439f-bddd-1f29ea1e9f85/bucket/215f1b4e-6205-48c5-965b-f316479538e0.jpg",
  ];

  return (
    <section id="gallery" className="py-24 px-5 md:px-8 bg-[#FDF6EE]">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center mb-12">
          <div className="section-eyebrow mb-3">Галерея</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-[#1a1a1a] leading-tight">
            Фотографии со спектакля
          </h2>
          <span className="divider-red" />
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSel(i)}
              className={`overflow-hidden cursor-pointer group relative ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-video md:h-full md:aspect-auto" : "aspect-square"}`}
                style={i === 0 ? { minHeight: 240 } : {}}>
                <img
                  src={img}
                  alt={`Фото ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-all duration-600"
                  style={{
                    objectPosition: i % 2 === 0 ? "center top" : "center 40%",
                    "--tw-scale-x": "1.08",
                    "--tw-scale-y": "1.08",
                  } as React.CSSProperties}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#C8102E]/20 transition-all duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 p-3">
                    <Icon name="ZoomIn" size={18} className="text-[#C8102E]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {sel !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSel(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/50 hover:text-white"
            onClick={() => setSel(null)}
          >
            <Icon name="X" size={26} />
          </button>
          <img
            src={images[sel]}
            alt=""
            className="max-w-5xl max-h-[85vh] object-contain shadow-2xl"
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

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#111] pt-16 pb-8 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Top CTA band */}
        <div className="bg-[#C8102E] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <div className="font-cormorant text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold italic text-white leading-tight">
              Не упустите возможность побывать<br className="hidden md:block" /> на лучшем спектакле сезона!
            </div>
            <div className="font-montserrat text-[0.7rem] text-white/65 mt-2">
              Осталось ограниченное количество мест · Покровские ворота
            </div>
          </div>
          <a href="#tickets" className="btn-outline-white flex-shrink-0 text-base py-4 px-8">
            Купить билет
          </a>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-montserrat text-[0.48rem] uppercase tracking-[0.22em] text-white/30 mb-1">Московский театр</div>
            <div className="font-cormorant text-2xl font-bold italic text-[#C8102E] mb-0.5">«Буфф-Парадиз»</div>
            <div className="font-cormorant text-base italic text-white/45 mb-4">Покровские ворота</div>
            <p className="font-montserrat text-[0.72rem] text-white/35 leading-relaxed">
              Московский театр музыкальной антрепризы. Более 9 лет на сцене, 500 000+ зрителей по всей России.
            </p>
          </div>

          <div>
            <div className="font-montserrat text-[0.52rem] uppercase tracking-widest text-white/35 mb-5">Разделы</div>
            <div className="space-y-2.5">
              {[["О спектакле","#about"],["Актёры","#cast"],["Билеты","#tickets"],["Отзывы","#reviews"],["Галерея","#gallery"]].map(([l,h]) => (
                <a key={h} href={h} className="block font-montserrat text-[0.78rem] text-white/35 hover:text-[#C8102E] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-montserrat text-[0.52rem] uppercase tracking-widest text-white/35 mb-5">Контакты</div>
            <div className="space-y-3">
              {[
                { icon: "Phone", val: "+7 (495) 000-00-00" },
                { icon: "Mail",  val: "info@buffparadiz.ru" },
                { icon: "MapPin",val: "Москва, Россия" },
              ].map((c) => (
                <div key={c.val} className="flex items-center gap-2.5">
                  <Icon name={c.icon} size={13} className="text-[#C8102E] flex-shrink-0" />
                  <span className="font-montserrat text-[0.75rem] text-white/40">{c.val}</span>
                </div>
              ))}
              <div className="flex gap-3 mt-4">
                {[
                  { icon: "MessageCircle", label: "ВК" },
                  { icon: "Send",          label: "TG" },
                  { icon: "Youtube",       label: "YT" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/35 hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-250"
                  >
                    <Icon name={s.icon} size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="font-montserrat text-[0.5rem] text-white/18">
            © 2025 Театр «Буфф-Парадиз» · Все права защищены
          </div>
          <div className="font-montserrat text-[0.5rem] text-white/18">
            Покровские ворота · Леонид Зорин · 12+
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TheaterTickets() {
  return (
    <>
      <Tickets />
      <Reviews />
      <FAQ />
      <GalleryStrip />
      <Footer />
    </>
  );
}