import {
  MessageCircle,
  ClipboardCheck,
  Boxes,
  Truck,
  Coffee,
  Home,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Заявка",
    text: "Пишите в WhatsApp или звоните — коротко рассказываете, что нужно перевезти.",
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
    text: "Мы работаем по плану, а вы не держите весь процесс в голове.",
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
    <section className="relative overflow-hidden bg-[#F4EFE7] px-5 py-7 text-[#101827]">
      <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[#2B5D8C]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#E7CDAE]/24 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2B5D8C]">
              Как проходит переезд
            </p>

            <h2 className="max-w-xl text-[30px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[40px]">
              Спокойный маршрут от заявки до новоселья
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-6 text-[#5B6573]">
            Мы заранее проговариваем детали, берём на себя организацию и ведём
            переезд по понятному плану.
          </p>
        </div>

        <div className="relative isolate overflow-hidden rounded-[34px] bg-gradient-to-r from-[#F8FBFF]/90 via-white/78 to-[#F4E8D9]/86 px-5 py-5 shadow-[0_20px_55px_rgba(16,33,63,0.065)] ring-1 ring-inset ring-white/65 backdrop-blur-2xl md:px-6 md:py-6">
          <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#2B5D8C]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#E7CDAE]/32 blur-3xl" />

          {/* Desktop route */}
          <div className="relative mb-4 hidden h-[56px] lg:block">
            <svg
              className="absolute left-[6%] top-2 h-[42px] w-[88%]"
              viewBox="0 0 1000 70"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                id="processTruckPath"
                d="M20 42C135 12 230 16 340 42C455 70 545 68 660 34C780 0 890 14 980 38"
                stroke="#9EB6C9"
                strokeWidth="1.8"
                strokeDasharray="7 10"
                strokeLinecap="round"
                opacity="0.38"
              />

              <path
                className="process-route-line-soft"
                d="M20 42C135 12 230 16 340 42C455 70 545 68 660 34C780 0 890 14 980 38"
                stroke="url(#processLineGradient)"
                strokeWidth="2.4"
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
                  opacity="0.88"
                />
                <rect
                  x="6"
                  y="-4.5"
                  width="8"
                  height="9"
                  rx="2"
                  fill="#2B5D8C"
                  opacity="0.82"
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
                  <stop stopColor="#2B5D8C" stopOpacity="0.1" />
                  <stop offset="0.5" stopColor="#2B5D8C" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#B7925A" stopOpacity="0.36" />
                </linearGradient>
              </defs>
            </svg>

            <div className="process-finish-badge absolute right-[2%] top-0 rounded-full border border-[#E7CDAE]/80 bg-gradient-to-r from-white/86 via-[#FFF7E8]/94 to-[#F2D9AD]/78 px-4 py-2 text-[13px] font-semibold text-[#8A5F2E] shadow-[0_14px_35px_rgba(183,146,90,0.16)] backdrop-blur-xl">
              Новый дом без хаоса
            </div>
          </div>

          {/* Desktop steps */}
          <div className="relative hidden grid-cols-6 gap-3 lg:grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative text-center">
                  <div className="mx-auto mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-[#BFD2EA]/80 bg-gradient-to-br from-white via-[#F8FBFF] to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_22px_rgba(43,93,140,0.13)]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div className="font-serif text-[25px] italic leading-none text-[#2B5D8C]/50">
                    {step.number}
                  </div>

                  <h3 className="mt-2 text-[14.5px] font-semibold leading-tight tracking-[-0.02em] text-[#10213F]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-1.5 max-w-[138px] text-[12px] leading-[1.55] text-[#5B6573]">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Mobile compact timeline */}
          <div className="relative grid gap-2.5 lg:hidden">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="flex gap-3 rounded-[22px] border border-white/70 bg-white/62 p-3.5 shadow-[0_12px_28px_rgba(16,33,63,0.055)] backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#BFD2EA]/75 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C]">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-[21px] italic leading-none text-[#2B5D8C]/45">
                        {step.number}
                      </span>
                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#10213F]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-[13px] leading-5 text-[#5B6573]">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}

            <div className="mt-2 rounded-full border border-[#E7CDAE]/80 bg-gradient-to-r from-white/86 via-[#FFF7E8]/94 to-[#F2D9AD]/78 px-4 py-2.5 text-center text-[13px] font-semibold text-[#8A5F2E] shadow-[0_14px_35px_rgba(183,146,90,0.14)]">
              Новый дом без хаоса
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}