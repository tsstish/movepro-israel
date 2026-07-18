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
    text: "Работаем спокойно: мебель, техника и личные вещи не летят в кузов как попало.",
  },
  {
    icon: Clock3,
    title: "Всегда на связи",
    text: "До, во время и после переезда — отвечаем, объясняем и держим вас в курсе.",
  },
  {
    icon: PackageCheck,
    title: "Упаковка вещей",
    text: "Коробки, найлон, плёнки и защитные материалы для мебели и хрупких вещей.",
  },
  {
    icon: Sparkles,
    title: "Без сюрпризов",
    text: "Заранее обсуждаем детали, чтобы переезд прошёл понятно и без лишнего стресса.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-4 py-5 text-[#101827] md:px-5 md:py-7">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-gradient-to-r from-[#EAF4FF]/74 via-white/72 to-[#F4E4CF]/72 p-4 shadow-[0_20px_55px_rgba(16,33,63,0.065)] backdrop-blur-2xl md:rounded-[38px] md:p-5">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#2B5D8C]/16 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#E7CDAE]/42 blur-3xl" />

          <div className="relative grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-[24px] border border-white/65 bg-white/55 p-4 shadow-[0_14px_34px_rgba(16,33,63,0.045)] backdrop-blur-xl md:p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#10213F] text-white shadow-[0_12px_26px_rgba(16,33,63,0.16)]">
                <Truck size={20} strokeWidth={1.8} />
              </div>

              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
                MovePro Israel
              </p>

              <h2 className="text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#10213F] md:text-[30px]">
                Переезд без ощущения, что всё разваливается
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-[#5B6573]">
                Мы берём на себя организацию, упаковку и аккуратную перевозку —
                чтобы вам не пришлось контролировать каждую мелочь.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-[22px] border border-white/68 bg-white/66 p-3.5 shadow-[0_12px_30px_rgba(16,33,63,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/82 md:rounded-[24px] md:p-4"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl border border-[#BFD2EA]/70 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_20px_rgba(43,93,140,0.12)]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <h3 className="text-[14.5px] font-semibold leading-tight tracking-[-0.02em] text-[#10213F] md:text-[15px]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-5 text-[#5B6573] md:text-[13px]">
                      {benefit.text}
                    </p>

                    <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2B5D8C]/30 to-transparent opacity-0 transition group-hover:opacity-100" />
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