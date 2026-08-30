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
    text: "Учитываем адреса отправления и назначения и расстояние между ними.",
  },
  {
    icon: Boxes,
    title: "Объём вещей",
    text: "Количество и размер вещей влияют на машину и состав команды.",
  },
  {
    icon: Building,
    title: "Этажи и лифт",
    text: "Важно, откуда выносим вещи и куда их нужно поднять.",
  },
  {
    icon: Sofa,
    title: "Мебель и техника",
    text: "Крупные и тяжёлые предметы могут потребовать дополнительной подготовки.",
  },
  {
    icon: PackageOpen,
    title: "Упаковка",
    text: "При необходимости подготовим коробки, найлон, плёнки и защитные материалы.",
  },
  {
    icon: Truck,
    title: "Условия доступа",
    text: "Учитываем возможность подъезда, расстояние до входа и особенности погрузки.",
  },
];

export default function PriceFactorsSection() {
  return (
    <section
      id="price-factors"
      className="relative overflow-hidden bg-[#F4EFE7] px-5 py-10 text-[#101827]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              Стоимость переезда
            </p>

            <h2 className="mt-3 max-w-lg text-[34px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#10213F] md:text-[46px]">
              Почему цену нельзя определить только по количеству комнат
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-6 text-[#5B6573]">
              Две одинаковые по размеру квартиры могут требовать совершенно
              разной организации переезда. Поэтому перед расчётом мы уточняем
              несколько важных деталей.
            </p>

            <div className="mt-6 rounded-[24px] border border-[#E7CDAE]/65 bg-[#FFF9F0]/72 p-5">
              <p className="text-[14px] leading-6 text-[#6F6256]">
                После первого сообщения в WhatsApp мы попросим фото или короткое
                видео вещей — так проще оценить объём переезда.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {factors.map((factor, index) => {
              const Icon = factor.icon;

              return (
                <article
                  key={factor.title}
                  className="group rounded-[28px] border border-white/75 bg-white/62 p-5 shadow-[0_16px_38px_rgba(16,33,63,0.055)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_20px_44px_rgba(16,33,63,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#EAF3FB] text-[#2B5D8C]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#B6A18A]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em] text-[#10213F]">
                    {factor.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-5 text-[#5B6573]">
                    {factor.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
