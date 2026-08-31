import {
  Box,
  CheckCircle2,
  ClipboardList,
  Home,
  MessageCircle,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Заявка",
    text: "Рассказываете, что и куда нужно перевезти.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Детали",
    text: "Уточняем объём, этажи, лифт и условия доступа.",
  },
  {
    number: "03",
    icon: Box,
    title: "Упаковка",
    text: "При необходимости защищаем мебель, технику и вещи.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Переезд",
    text: "Загружаем и перевозим вещи по согласованному маршруту.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Разгрузка",
    text: "Заносим вещи и размещаем их на новом месте.",
  },
  {
    number: "06",
    icon: Home,
    title: "Новоселье",
    text: "Переезд завершён — можно обживаться.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[#F4EFE7] px-5 py-10 text-[#101827] lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
            Как проходит переезд
          </p>

          <h2 className="mt-3 text-[32px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#10213F] md:text-[46px]">
            От первого сообщения до нового адреса
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#5B6573]">
            Заранее проговариваем детали и ведём переезд по понятному плану.
          </p>
        </div>

        {/* MOBILE */}
        <div className="relative mt-7 lg:hidden">
          <div className="absolute bottom-6 left-[19px] top-5 w-px bg-gradient-to-b from-[#2B5D8C]/35 via-[#9EB6C9]/45 to-[#D8B98C]/50" />

          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[40px_1fr] gap-4 pb-6 last:pb-0"
                >
                  <div
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ${
                      index === steps.length - 1
                        ? "border-[#D8B98C]/60 bg-[#FFF6E8] text-[#8A5F2E]"
                        : "border-[#BFD2EA] bg-[#F8FBFF] text-[#2B5D8C]"
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <div className="pt-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#2B5D8C]/55">
                        {step.number}
                      </span>

                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#10213F]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-[13px] leading-5 text-[#657080]">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative mt-10 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-[#2B5D8C]/15" />

          <div className="relative grid grid-cols-6 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#BFD2EA] bg-[#F8FBFF] text-[#2B5D8C]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-[#2B5D8C]/55">
                    {step.number}
                  </div>

                  <h3 className="mt-1 text-[16px] font-semibold text-[#10213F]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#657080]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}