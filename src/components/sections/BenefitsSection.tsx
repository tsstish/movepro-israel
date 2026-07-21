import {
  Clock3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Аккуратная команда",
    text: "Мебель, техника и личные вещи не отправляются в кузов как попало.",
  },
  {
    icon: Clock3,
    title: "Всегда на связи",
    text: "До, во время и после переезда отвечаем и держим вас в курсе.",
  },
  {
    icon: PackageCheck,
    title: "Упаковка вещей",
    text: "Коробки, найлон, плёнки и защита для мебели и хрупких вещей.",
  },
  {
    icon: Sparkles,
    title: "Без сюрпризов",
    text: "Заранее обсуждаем детали, маршрут и условия на месте.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-5 py-7 text-[#101827]">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-r from-[#EAF4FF]/72 via-white/72 to-[#F4E4CF]/72 p-5 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#2B5D8C]/12 blur-3xl" />

          <div className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#E7CDAE]/34 blur-3xl" />

          <div className="relative grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="rounded-[24px] border border-white/70 bg-white/58 p-5 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#10213F] text-white shadow-[0_12px_30px_rgba(16,33,63,0.14)]">
                <Truck size={20} strokeWidth={1.8} />
              </div>

              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
                MovePro Israel
              </p>

              <h2 className="max-w-md text-[30px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#10213F]">
                Переезд без ощущения, что всё разваливается
              </h2>

              <p className="mt-4 max-w-md text-[14px] leading-6 text-[#5B6573]">
                Берём на себя организацию, упаковку и аккуратную перевозку,
                чтобы вам не пришлось контролировать каждую мелочь.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-[24px] border border-white/70 bg-white/66 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/82 hover:shadow-[0_16px_38px_rgba(16,33,63,0.09)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[16px] border border-[#BFD2EA]/70 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_24px_rgba(43,93,140,0.1)]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.02em] text-[#10213F]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 text-[#5B6573]">
                      {benefit.text}
                    </p>

                    <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2B5D8C]/28 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}