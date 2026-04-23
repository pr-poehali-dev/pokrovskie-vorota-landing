import { useState } from "react";
import Icon from "@/components/ui/icon";
import { shows, NEW_PHOTO, POSTER } from "./constants";

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

function Gallery() {
  const [sel, setSel] = useState<number | null>(null);
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

export default function TheaterTickets() {
  return (
    <>
      <Tickets />
      <Gallery />
      <Footer />
    </>
  );
}
