import Image from "next/image";
import { MapPin, Truck, UsersRound } from "lucide-react";

const facts = [
  {
    icon: Truck,
    value: "4",
    label: "грузовика",
  },
  {
    icon: UsersRound,
    value: "до 15",
    label: "грузчиков",
  },
  {
    icon: MapPin,
    value: "Израиль",
    label: "география работы",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F4EFE7] px-5 py-8 text-[#101827] lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[30px] bg-[#10213F] shadow-[0_22px_55px_rgba(16,33,63,0.13)] lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[430px] lg:min-h-[520px]">
            <Image
              src="/images/service-furniture.webp"
              alt="Бережная перевозка мебели MovePro Israel"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10213F]/95 via-[#10213F]/28 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#10213F]/30" />
          </div>

          <div className="relative z-10 -mt-[165px] px-6 pb-7 text-white lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:p-9">
            <div className="flex min-h-[165px] flex-col justify-end pb-6 lg:min-h-0 lg:justify-start lg:pb-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E7CDAE] lg:text-[11px]">
                Бережная перевозка
              </p>

              <h2 className="mt-2 max-w-md text-[29px] font-semibold leading-[1.03] tracking-[-0.04em] lg:mt-3 lg:max-w-none lg:text-[38px] lg:tracking-[-0.045em]">
                Можно доверить и обычные вещи, и дорогую мебель
              </h2>

              <p className="mt-3 max-w-sm text-[13px] leading-5 text-white/72 lg:mt-4 lg:max-w-none lg:text-[14px] lg:leading-6 lg:text-white/68">
                Защищаем, упаковываем и заранее обсуждаем детали переезда.
              </p>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/15 border-y border-white/15">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="min-w-0 px-2 py-5 first:pl-0 last:pr-0 sm:px-4"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className="mb-3 text-[#E7CDAE]"
                    />

                    <div className="text-[19px] font-semibold leading-none tracking-[-0.03em] sm:text-[24px]">
                      {fact.value}
                    </div>

                    <div className="mt-1.5 text-[10.5px] leading-4 text-white/55 sm:text-[12px]">
                      {fact.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-[12.5px] leading-5 text-white/58">
              Квартирные, офисные и междугородние переезды. При необходимости —
              упаковка, защита, разборка и сборка мебели.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
