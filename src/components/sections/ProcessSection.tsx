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

        <div className="relative mt-7 lg:mt-10">
          <div className="absolute bottom-6 left-[19px] top-5 w-px bg-gradient-to-b from-[#2B5D8C]/35 via-[#9EB6C9]/45 to-[#D8B98C]/50 lg:hidden" />

          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#2B5D8C]/15 lg:block" />

          <div className="relative lg:grid lg:grid-cols-6 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[40px_1fr] gap-4 pb-6 last:pb-0 lg:block lg:pb-0"
                >
                  <div
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border lg:h-12 lg:w-12 ${
                      index === steps.length - 1
                        ? "border-[#D8B98C]/60 bg-[#FFF6E8] text-[#8A5F2E] lg:border-[#BFD2EA] lg:bg-[#F8FBFF] lg:text-[#2B5D8C]"
                        : "border-[#BFD2EA] bg-[#F8FBFF] text-[#2B5D8C]"
                    }`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="lg:h-[19px] lg:w-[19px]"
                    />
                  </div>

                  <div className="pt-0.5 lg:pt-0">
                    <div className="flex items-baseline gap-2 lg:mt-5 lg:block">
                      <span className="text-[10px] font-semibold tracking-[0.15em] text-[#2B5D8C]/55 lg:block lg:text-[11px] lg:tracking-[0.14em]">
                        {step.number}
                      </span>

                      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-[#10213F] lg:mt-1 lg:tracking-normal">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-[13px] leading-5 text-[#657080] lg:mt-2">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
