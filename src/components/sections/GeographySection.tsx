import {
  ArrowRight,
  MapPin,
  Navigation,
  Route,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "972546745954";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу уточнить переезд по моему адресу."
);

const zones = [
  {
    icon: MapPin,
    title: "Хайфа и район",
    text: "Быстрый выезд по Хайфе, Крайот, Нешер, Тират-Кармель и рядом.",
  },
  {
    icon: Navigation,
    title: "Север Израиля",
    text: "Акко, Наария, Кармиэль, Афула и другие города севера.",
  },
  {
    icon: Truck,
    title: "Центр страны",
    text: "Междугородние переезды в центр и обратно — спокойно и по плану.",
  },
  {
    icon: Route,
    title: "По всему Израилю",
    text: "Обсудим маршрут, объём вещей и подберём удобный формат перевозки.",
  },
];

export default function GeographySection() {
  return (
    <section
  id="areas"
  className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827]"
>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF3FB] p-6 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#10213F] text-white shadow-[0_12px_30px_rgba(16,33,63,0.14)]">
                <MapPin size={20} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
                География
              </p>

              <h2 className="max-w-lg text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[42px]">
                Мы в Хайфе — работаем по всему Израилю
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-6 text-[#5B6573]">
                Помогаем с локальными и междугородними переездами: дом, офис,
                мебель, техника и отдельные вещи.
              </p>

              <a
                href="/whatsapp"
                className="mt-6 inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[#10213F] px-6 py-3 text-sm font-medium text-white shadow-[0_18px_42px_rgba(16,33,63,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#17345E] hover:shadow-[0_22px_48px_rgba(16,33,63,0.22)]"
              >
                Уточнить мой адрес
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-[#F8FBFF] via-white to-[#F5E7D6] p-6 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
                    Направления
                  </p>

                  <h3 className="max-w-md text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#10213F]">
                    Выезжаем туда, где вам нужен спокойный переезд
                  </h3>
                </div>

                <div className="hidden rounded-full border border-[#E7CDAE]/75 bg-gradient-to-r from-white via-[#FFF7E8] to-[#F2D9AD] px-4 py-2 text-sm font-semibold text-[#8A5F2E] shadow-[0_12px_30px_rgba(183,146,90,0.12)] lg:block">
                  По Израилю
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {zones.map((zone) => {
                  const Icon = zone.icon;

                  return (
                    <article
                      key={zone.title}
                      className="group rounded-[24px] border border-white/70 bg-white/68 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/84 hover:shadow-[0_16px_38px_rgba(16,33,63,0.09)]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[16px] border border-[#BFD2EA]/70 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_24px_rgba(43,93,140,0.1)]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <h4 className="text-[16px] font-semibold tracking-[-0.02em] text-[#10213F]">
                        {zone.title}
                      </h4>

                      <p className="mt-2 text-[13.5px] leading-5 text-[#5B6573]">
                        {zone.text}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[24px] border border-white/70 bg-white/62 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl">
                <p className="text-[14px] leading-6 text-[#415064]">
                  Не уверены, подойдёт ли ваш маршрут? Просто напишите адреса —
                  мы быстро скажем, как лучше организовать перевозку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}