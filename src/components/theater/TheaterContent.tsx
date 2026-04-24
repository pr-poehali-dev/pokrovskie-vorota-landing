import Icon from "@/components/ui/icon";
import { NEW_PHOTO, POSTER, cast } from "./constants";

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center mb-14">
          <div className="section-eyebrow mb-3">О спектакле</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-[#1a1a1a] leading-tight">
            Культовая пьеса —<br />
            <span className="text-[#C8102E]">живой и искренний театр</span>
          </h2>
          <span className="divider-red" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div className="reveal font-montserrat text-[0.9rem] leading-[1.9] text-gray-600 mb-5 space-y-4">
              <p>Музыкальная комедия <span className="font-semibold text-gray-800">«Покровские ворота»</span> — это всем известная история, телебестселлер не одного поколения.</p>
              <p>В нашей версии этой пьесы будет много музыки и движения, но при этом сюжет останется хрестоматийным.</p>
              <p>Для нас главным является сохранение атмосферы <span className="font-semibold text-gray-800">Москвы 50–60-х годов</span>. Пусть мы все моложе или значительно моложе, но у нас есть генная ностальгия и любовь к этому времени, в котором были счастливы наши отцы и деды, мамы и бабушки.</p>
              <p>У нас есть тяга к этому счастливому времени, в котором рождалась любовь наших родителей, а потом рождались и мы сами!</p>
            </div>
            <div className="reveal font-montserrat text-[0.9rem] leading-[1.9] text-gray-600 mb-8 space-y-4">
              <p>Вас ждут <span className="font-semibold text-gray-800">яркие костюмы эпохи 50–60-х</span> и звёзды московской антрепризы — всё это создаёт атмосферу настоящего праздника.</p>
              <p>Лучший антистресс — <span className="font-semibold text-gray-800">живой театр</span>, искренний юмор и герои, похожие на нас. Идеальная комедия для лёгкости и хорошего настроения.</p>
            </div>

            {/* Credits grid */}
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { label: "Автор",             value: "Леонид Зорин" },
                { label: "Режиссёр",          value: "Вячеслав Иванов" },
                { label: "Театр",             value: "«Буфф-Парадиз»" },
                { label: "Продолжительность", value: "2 ч 40 мин" },
              ].map((c) => (
                <div key={c.label} className="bg-[#FDF6EE] p-4 border-l-[3px] border-[#C8102E]">
                  <div className="font-montserrat text-[0.5rem] uppercase tracking-widest text-gray-400 mb-1">{c.label}</div>
                  <div className="font-montserrat text-sm font-bold text-[#1a1a1a]">{c.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Poster image */}
          <div className="reveal card-lift">
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#C8102E]/25" />
              <img
                src={POSTER}
                alt="Афиша спектакля"
                className="relative w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* What to expect — 3 pillars */}
        <div className="reveal grid sm:grid-cols-3 gap-6">
          {[
            { icon: "Music",      title: "Живой звук",   text: "Легендарные мелодии эпохи 50–60-х в живом исполнении на каждом спектакле." },
            { icon: "Laugh",      title: "Искренний юмор",  text: "Лёгкая, добрая комедия без пошлости — смех, который объединяет весь зал." },
            { icon: "Star",       title: "Звёзды сцены",    text: "Звезды музыкальной антрепризы в каждой роли — профессионализм высшей пробы." },
          ].map((p) => (
            <div key={p.title} className="text-center p-6 border border-gray-100 bg-[#FDF6EE] card-lift">
              <div className="w-12 h-12 bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center mx-auto mb-4">
                <Icon name={p.icon} size={20} className="text-[#C8102E]" />
              </div>
              <div className="font-cormorant text-xl font-bold text-[#1a1a1a] mb-2">{p.title}</div>
              <div className="font-montserrat text-[0.78rem] leading-relaxed text-gray-500">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Video ─── */
function Video() {
  return (
    <section className="py-20 px-5 md:px-8 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-10">
          <div className="section-eyebrow mb-3" style={{ color: "#D4A843" }}>Трейлер</div>
          <h2 className="font-cormorant text-[clamp(1.8rem,4vw,3rem)] font-bold italic text-white leading-tight">
            Посмотрите фрагмент спектакля
          </h2>
        </div>

        <div className="reveal relative aspect-video border border-white/10 shadow-2xl">
          <iframe
            src="https://vkvideo.ru/video_ext.php?oid=1107808138&id=456239017&hd=2"
            title="Трейлер Покровские ворота"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8102E] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ─── Cast ─── */
function Cast() {
  return (
    <section id="cast" className="py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="reveal text-center mb-14">
          <div className="section-eyebrow mb-3">Постановщики и труппа</div>
          <h2 className="font-cormorant text-[clamp(2rem,5vw,3.5rem)] font-bold italic text-[#1a1a1a] leading-tight">
            Актёры и команда
          </h2>
          <span className="divider-red" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cast.map((person, i) => (
            <div key={i} className="reveal card-lift group text-center">
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8102E] scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              </div>
              <div className="font-cormorant text-[1.05rem] font-bold text-[#1a1a1a] group-hover:text-[#C8102E] transition-colors duration-300">
                {person.name}
              </div>
              <div className="font-montserrat text-[0.62rem] font-semibold uppercase tracking-wider text-[#C8102E] mt-0.5">
                {person.role}
              </div>
              <div className="font-montserrat text-[0.6rem] text-gray-400 mt-1">{person.note}</div>
            </div>
          ))}
        </div>

        {/* Director highlight */}
        <div className="reveal bg-[#FDF6EE] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#C8102E] flex items-center justify-center">
              <Icon name="Award" size={32} className="text-white" />
            </div>
          </div>
          <div>
            <div className="font-montserrat text-[0.56rem] uppercase tracking-[0.3em] text-gray-400 mb-1">
              Художественный руководитель и режиссёр-постановщик
            </div>
            <div className="font-cormorant text-[clamp(1.4rem,3.5vw,2.4rem)] font-bold italic text-[#1a1a1a] mb-1">
              Вячеслав Иванов
            </div>
            <div className="font-montserrat text-[0.65rem] tracking-widest uppercase text-[#C8102E] font-bold mb-3">
              Заслуженный артист России
            </div>
            <p className="font-montserrat text-[0.82rem] leading-relaxed text-gray-500 max-w-xl">
              Один из самых востребованных режиссёров музыкального театра России.
              Более 30 постановок на ведущих сценах страны. Под его руководством
              театр «Буфф-Парадиз» объехал более 100 городов с неизменным аншлагом.
            </p>
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
      <Video />
      <Cast />
    </>
  );
}