import { MapPin } from "lucide-react";

const places = [
  "Хайфа",
  "Крайот",
  "Нешер",
  "Тират-Кармель",
  "Акко",
  "Наария",
  "Кармиэль",
  "Афула",
  "Тель-Авив",
  "Иерусалим",
];

export default function GeographySection() {
  return (
    <section
      id="areas"
      className="scroll-mt-20 bg-[#F4EFE7] px-5 py-7 text-[#101827] lg:py-11"
    >
      <div className="mx-auto max-w-7xl border-y border-[#10213F]/10 py-7 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-12 lg:py-9">
        <div>
          <div className="flex items-center gap-2 text-[#2B5D8C]">
            <MapPin size={16} strokeWidth={1.8} />

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              География
            </p>
          </div>

          <h2 className="mt-3 max-w-xl text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#10213F] md:text-[40px]">
            Переезды из Хайфы и по всему Израилю
          </h2>

          <p className="mt-3 max-w-xl text-[13.5px] leading-5 text-[#657080]">
            MovePro Israel выполняет местные и междугородние переезды квартир,
            домов и офисов, а также перевозку мебели, техники и отдельных вещей.
          </p>
        </div>

        <div className="mt-5 lg:mt-0">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#8A735F]">
            Работаем по всему Израилю
          </p>

          <div className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2">
            {places.map((place, index) => (
              <span
                key={place}
                className="inline-flex items-center text-[13px] font-medium leading-5 text-[#415064]"
              >
                {place}

                {index !== places.length - 1 && (
                  <span className="ml-1.5 text-[#D8B98C]">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-3 max-w-2xl text-[12.5px] leading-5 text-[#7A8390]">
            И другие города страны — маршрут переезда обсуждаем индивидуально.
          </p>
        </div>
      </div>
    </section>
  );
}
