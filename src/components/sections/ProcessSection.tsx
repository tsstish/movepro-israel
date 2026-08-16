import {
  Boxes,
  ClipboardCheck,
  Coffee,
  Home,
  MessageCircle,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Заявка",
    text: "Пишите в WhatsApp или звоните и коротко рассказываете, что нужно перевезти.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Детали",
    text: "Уточняем адреса, объём вещей, этажи, упаковку и удобное время.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Упаковка",
    text: "При необходимости упаковываем вещи в коробки, найлон и защитные материалы.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Переезд",
    text: "Аккуратно выносим, грузим, перевозим и заносим вещи.",
  },
  {
    number: "05",
    icon: Coffee,
    title: "Вы отдыхаете",
    text: "Работаем по плану, чтобы вам не приходилось держать процесс в голове.",
  },
  {
    number: "06",
    icon: Home,
    title: "Новоселье",
    text: "Помогаем поставить вещи так, чтобы новый дом встретил вас без хаоса.",
  },
];

export default function ProcessSection() {
  return (
    <section
  id="how-it-works"
  className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827]"
>
      <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[#2B5D8C]/7 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#E7CDAE]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              Как проходит переезд
            </p>

            <h2 className="max-w-xl text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[42px]">
              Спокойный маршрут от заявки до новоселья
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-6 text-[#5B6573]">
            Заранее проговариваем детали, берём на себя организацию и ведём
            переезд по понятному плану.
          </p>
        </div>

        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-r from-[#F8FBFF]/88 via-white/76 to-[#F4E8D9]/84 p-6 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#2B5D8C]/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E7CDAE]/26 blur-3xl" />

          {/* Desktop route */}
          <div className="relative mb-5 hidden h-[56px] lg:block">
            <svg
              className="absolute left-[6%] top-2 h-[42px] w-[88%]"
              viewBox="0 0 1000 70"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                id="processTruckPath"
                d="M20 42C135 12 230 16 340 42C455 70 545 68 660 34C780 0 890 14 980 38"
                stroke="#9EB6C9"
                strokeWidth="1.8"
                strokeDasharray="7 10"
                strokeLinecap="round"
                opacity="0.32"
              />

              <path
                className="process-route-line-soft"
                d="M20 42C135 12 230 16 340 42C455 70 545 68 660 34C780 0 890 14 980 38"
                stroke="url(#processLineGradient)"
                strokeWidth="2.2"
                strokeDasharray="80 920"
                strokeLinecap="round"
              />

              <g className="process-truck">
                <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#processTruckPath" />
                </animateMotion>

                <rect
                  x="-13"
                  y="-7"
                  width="21"
                  height="12"
                  rx="3"
                  fill="#2B5D8C"
                  opacity="0.86"
                />

                <rect
                  x="6"
                  y="-4.5"
                  width="8"
                  height="9"
                  rx="2"
                  fill="#2B5D8C"
                  opacity="0.8"
                />

                <circle cx="-8" cy="7" r="2.2" fill="#F4EFE7" />
                <circle cx="8" cy="7" r="2.2" fill="#F4EFE7" />
              </g>

              <defs>
                <linearGradient
                  id="processLineGradient"
                  x1="20"
                  y1="35"
                  x2="980"
                  y2="35"
                >
                  <stop stopColor="#2B5D8C" stopOpacity="0.08" />
                  <stop offset="0.5" stopColor="#2B5D8C" stopOpacity="0.46" />
                  <stop offset="1" stopColor="#B7925A" stopOpacity="0.32" />
                </linearGradient>
              </defs>
            </svg>

            <div className="process-finish-badge absolute right-[2%] top-0 rounded-full border border-[#E7CDAE]/75 bg-gradient-to-r from-white/84 via-[#FFF7E8]/92 to-[#F2D9AD]/74 px-4 py-2 text-[13px] font-semibold text-[#8A5F2E] shadow-[0_12px_30px_rgba(183,146,90,0.13)] backdrop-blur-xl">
              Новый дом без хаоса
            </div>
          </div>

          {/* Desktop steps */}
          <div className="relative hidden grid-cols-6 gap-3 lg:grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-[24px] px-2 py-3 text-center transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/34"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#BFD2EA]/75 bg-gradient-to-br from-white via-[#F8FBFF] to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_24px_rgba(43,93,140,0.1)] transition duration-300 ease-out group-hover:shadow-[0_14px_30px_rgba(43,93,140,0.14)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="font-serif text-[25px] italic leading-none text-[#2B5D8C]/46">
                    {step.number}
                  </div>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-[#10213F]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[142px] text-[12px] leading-[1.55] text-[#5B6573]">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Mobile timeline */}
          <div className="relative grid gap-3 lg:hidden">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="flex gap-3 rounded-[24px] border border-white/70 bg-white/62 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl transition duration-300 ease-out active:scale-[0.99]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] border border-[#BFD2EA]/70 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-[21px] italic leading-none text-[#2B5D8C]/46">
                        {step.number}
                      </span>

                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#10213F]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1.5 text-[13px] leading-5 text-[#5B6573]">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}

            <div className="mt-1 rounded-full border border-[#E7CDAE]/75 bg-gradient-to-r from-white/84 via-[#FFF7E8]/92 to-[#F2D9AD]/74 px-4 py-2.5 text-center text-[13px] font-semibold text-[#8A5F2E] shadow-[0_12px_30px_rgba(183,146,90,0.12)]">
              Новый дом без хаоса
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}