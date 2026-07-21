import Image from "next/image";
import {
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  UsersRound,
} from "lucide-react";

const facts = [
  {
    icon: Truck,
    value: "4 грузовика",
    text: "под разные объёмы",
  },
  {
    icon: UsersRound,
    value: "до 15 грузчиков",
    text: "аккуратная команда",
  },
  {
    icon: MapPin,
    value: "по Израилю",
    text: "Хайфа, север и центр",
  },
];

const details = [
  {
    icon: ShieldCheck,
    text: "Маршрут, этажи, лифт и объём обсуждаем заранее",
  },
  {
    icon: PackageCheck,
    text: "Коробки, найлон, плёнки и защита мебели",
  },
  {
    icon: Truck,
    text: "Квартирные, офисные и междугородние переезды",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F4EFE7] px-5 py-8 text-[#101827]">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[32px] border border-white/70 bg-white/55 shadow-[0_24px_60px_rgba(16,33,63,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="group relative min-h-[460px] overflow-hidden">
            <Image
              src="/images/service-furniture.webp"
              alt="Бережная перевозка мебели MovePro Israel"
              fill
              sizes="45vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10213F]/90 via-[#10213F]/36 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#E7CDAE]">
                Бережная перевозка
              </p>

              <h2 className="mt-3 max-w-lg text-[40px] font-semibold leading-[1.02] tracking-[-0.045em]">
                Можно доверить и обычные вещи, и дорогую мебель
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-6 text-white/78">
                Защищаем, упаковываем и заранее обсуждаем детали переезда.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F8FBFF] via-white to-[#F5E7D6] p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              Почему спокойно
            </p>

            <h3 className="mt-3 max-w-xl text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#10213F]">
              Переезд по плану, а не «как получится»
            </h3>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <article
                    key={fact.value}
                    className="rounded-[24px] border border-white/70 bg-white/66 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.06)] transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/82 hover:shadow-[0_16px_38px_rgba(16,33,63,0.09)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#E4F0FB] text-[#2B5D8C]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div className="mt-4 text-[18px] font-semibold text-[#10213F]">
                      {fact.value}
                    </div>

                    <div className="mt-1 text-[12.5px] leading-5 text-[#6B7280]">
                      {fact.text}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 space-y-3">
              {details.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-[24px] border border-white/65 bg-white/60 px-4 py-3.5 shadow-[0_12px_30px_rgba(16,33,63,0.05)] transition duration-300 ease-out hover:bg-white/78"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#2B5D8C]"
                    />

                    <span className="text-[14px] leading-5 text-[#415064]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}