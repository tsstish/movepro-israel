import { PackageCheck, ShieldCheck, Truck, UsersRound, MapPin } from "lucide-react";

const stats = [
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
    text: "Хайфа, север, центр",
  },
];

const careItems = [
  {
    icon: ShieldCheck,
    text: "План переезда заранее",
  },
  {
    icon: PackageCheck,
    text: "Коробки, найлон, плёнки",
  },
  {
    icon: Truck,
    text: "Бережная перевозка мебели",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-5 py-7 text-[#101827]">
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] border border-white/70 bg-gradient-to-r from-[#F8FBFF] via-white to-[#F5E7D6] p-5 shadow-[0_18px_48px_rgba(16,33,63,0.06)] backdrop-blur-2xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/62 p-6 shadow-[0_14px_34px_rgba(16,33,63,0.045)] backdrop-blur-xl">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#2B5D8C]/8 blur-3xl" />

              <div className="relative">
                <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#2B5D8C]">
                  Почему спокойно
                </p>

                <h2 className="max-w-xl text-[31px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#10213F] md:text-[39px]">
                  Переезд по Израилю без хаоса и сюрпризов
                </h2>

                <p className="mt-3 max-w-xl text-[15px] leading-6 text-[#5B6573]">
                  Заранее обсуждаем маршрут, объём вещей, упаковку и условия на месте —
                  чтобы всё прошло понятно и аккуратно.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.value}
                      className="rounded-[26px] border border-white/72 bg-white/68 p-4 text-center shadow-[0_12px_30px_rgba(16,33,63,0.05)] backdrop-blur-xl"
                    >
                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#BFD2EA]/75 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_22px_rgba(43,93,140,0.12)]">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div className="text-[18px] font-semibold leading-tight tracking-[-0.025em] text-[#10213F]">
                        {item.value}
                      </div>

                      <p className="mt-1 text-[12.5px] leading-5 text-[#6B7280]">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="rounded-[28px] border border-white/72 bg-white/58 p-4 shadow-[0_12px_30px_rgba(16,33,63,0.045)] backdrop-blur-xl">
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {careItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-2.5 rounded-full border border-white/70 bg-white/62 px-3 py-2.5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E4F0FB] text-[#2B5D8C]">
                          <Icon size={15} strokeWidth={1.8} />
                        </span>

                        <span className="text-[13px] font-medium leading-4 text-[#415064]">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-full border border-[#E7CDAE]/75 bg-gradient-to-r from-white via-[#FFF7E8] to-[#F2D9AD] px-5 py-3 text-center text-[14px] font-semibold text-[#8A5F2E] shadow-[0_14px_35px_rgba(183,146,90,0.13)]">
                Можно доверить и бабушкино кресло, и дорогую итальянскую мебель
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}