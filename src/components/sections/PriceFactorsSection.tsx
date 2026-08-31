import {
  Boxes,
  Building,
  MapPinned,
  PackageOpen,
  Sofa,
  Truck,
} from "lucide-react";

const factors = [
  {
    icon: MapPinned,
    title: "Маршрут",
    text: "Адреса и расстояние",
  },
  {
    icon: Boxes,
    title: "Объём вещей",
    text: "Размер перевозки",
  },
  {
    icon: Building,
    title: "Этажи и лифт",
    text: "Вынос и подъём",
  },
  {
    icon: Sofa,
    title: "Мебель и техника",
    text: "Размер и сложность",
  },
  {
    icon: PackageOpen,
    title: "Упаковка",
    text: "Необходимая защита",
  },
  {
    icon: Truck,
    title: "Доступ",
    text: "Подъезд и погрузка",
  },
];

export default function PriceFactorsSection() {
  return (
    <section
      id="price-factors"
      className="relative overflow-hidden bg-[#10213F] px-5 py-12 text-white lg:py-16"
    >
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#2B5D8C]/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#D8B98C]/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8B98C]">
              Стоимость переезда
            </p>

            <h2 className="mt-3 max-w-xl text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[48px]">
              Почему цену нельзя определить только по количеству комнат
            </h2>

            <p className="mt-4 max-w-lg text-[14px] leading-6 text-white/65 md:text-[15px]">
              Две одинаковые квартиры могут требовать совершенно разной
              организации переезда. На стоимость влияет несколько вещей сразу.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-white/12 sm:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div
                  key={factor.title}
                  className="min-w-0 border-b border-r border-white/12 px-3 py-5 sm:px-5 sm:py-6"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#D8B98C]"
                  />

                  <h3 className="mt-3 text-[14px] font-semibold leading-tight text-white sm:text-[15px]">
                    {factor.title}
                  </h3>

                  <p className="mt-1 text-[11.5px] leading-4 text-white/48 sm:text-[12px]">
                    {factor.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 border-t border-white/12 pt-5">
          <p className="max-w-2xl text-[13px] leading-5 text-white/58">
            После первого сообщения попросим фото или короткое видео вещей —
            так проще оценить объём переезда и условия работы.
          </p>
        </div>
      </div>
    </section>
  );
}