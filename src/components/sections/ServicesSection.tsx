import Image from "next/image";
import {
  Building2,
  Home,
  PackageCheck,
  Sofa,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Квартиры и дома",
    text: "Переезды квартир, домов и семейных пространств — бережно и без хаоса.",
    image: "/images/service-apartment.webp",
  },
  {
    icon: Building2,
    title: "Офисы и бизнес",
    text: "Переезд офиса, кабинета или рабочего пространства с понятным планом.",
    image: "/images/service-office.webp",
  },
  {
    icon: Sofa,
    title: "Мебель и техника",
    text: "Диваны, шкафы, техника и ценные предметы — с аккуратной защитой.",
    image: "/images/service-furniture.webp",
  },
  {
    icon: PackageCheck,
    title: "Упаковка и сборка",
    text: "Коробки, найлон, плёнки и современные материалы для спокойного переезда.",
    image: "/images/service-packing.webp",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827]"
    >
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-[#2B5D8C]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E7CDAE]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              Услуги MovePro Israel
            </p>

            <h2 className="max-w-xl text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[42px]">
              Переезды для дома, офиса и важных вещей
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-6 text-[#5B6573]">
            Упаковка, перенос, перевозка и аккуратная расстановка на новом
            месте — без хаоса и лишних вопросов.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative isolate overflow-hidden rounded-[32px] [clip-path:inset(0_round_32px)] border border-white/70 bg-gradient-to-br from-white/82 via-[#F8FBFF]/78 to-[#EEF3F6]/72 p-6 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#9EB6C9]/18 blur-[55px]" />

            <div className="relative">
              <p className="mb-3 text-sm font-medium text-[#8A735F]">
                Не просто грузчики
              </p>

              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#10213F]">
                Продумываем переезд так, чтобы вам не пришлось держать всё в
                голове.
              </h3>

              <p className="mt-4 text-[15px] leading-6 text-[#4B5563]">
                Подскажем, как подготовить вещи, что лучше упаковать отдельно и
                какие материалы понадобятся. Нам можно доверить и бабушкино
                кресло, и дорогую итальянскую мебель.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group grid grid-cols-[96px_1fr] overflow-hidden rounded-[24px] border border-white/70 bg-white/66 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl transition duration-300 ease-out active:scale-[0.99] sm:block sm:bg-white/60 sm:hover:-translate-y-1 sm:hover:bg-white/78 sm:hover:shadow-[0_16px_38px_rgba(16,33,63,0.09)]"
                >
                  <div className="relative min-h-[112px] overflow-hidden sm:h-28 sm:min-h-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 96px"
                      className="object-cover transition duration-700 ease-out sm:group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#10213F]/8 sm:bg-gradient-to-t sm:from-[#10213F]/26 sm:via-transparent sm:to-white/8" />
                  </div>

                  <div className="p-3.5 sm:p-4">
                    <div className="mb-2 flex items-center gap-2.5 sm:mb-3 sm:gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[14px] border border-[#BFD2EA]/70 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C] sm:h-10 sm:w-10 sm:rounded-[16px] sm:shadow-[0_10px_24px_rgba(43,93,140,0.1)]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.02em] text-[#10213F] sm:text-[16px]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[12.5px] leading-5 text-[#5B6573] sm:text-[13.5px]">
                      {service.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
