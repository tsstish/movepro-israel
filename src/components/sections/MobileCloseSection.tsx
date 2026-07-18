import {
  MessageCircle,
  Phone,
  CheckCircle2,
  PackageCheck,
  Sofa,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: PackageCheck,
    text: "Упакуем вещи в коробки, найлон, плёнки и защитные материалы",
  },
  {
    icon: Sofa,
    text: "Аккуратно перевезём мебель, технику и личные вещи",
  },
  {
    icon: CheckCircle2,
    text: "Заранее обсудим детали, чтобы не было неприятных сюрпризов",
  },
  {
    icon: MapPin,
    text: "Работаем из Хайфы по всему Израилю",
  },
];

export default function MobileCloseSection() {
  return (
    <section className="bg-[#F4EFE7] px-4 pb-8 pt-2 text-[#101827] lg:hidden">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[30px] border border-white/70 bg-gradient-to-br from-[#F8FBFF]/88 via-white/78 to-[#F4E8D9]/86 p-4 shadow-[0_18px_45px_rgba(16,33,63,0.065)] backdrop-blur-2xl">
          <div className="rounded-[24px] border border-white/70 bg-white/62 p-4 shadow-[0_12px_26px_rgba(16,33,63,0.045)] backdrop-blur-xl">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
              Коротко
            </p>

            <h2 className="text-[25px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#10213F]">
              Можно просто написать — мы подскажем, как лучше перевезти
            </h2>

            <p className="mt-2 text-[13.5px] leading-5 text-[#5B6573]">
              Не нужно заранее знать точный объём, коробки и детали. Опишите
              ситуацию — мы зададим нужные вопросы и сориентируем.
            </p>
          </div>

          <div className="mt-3 space-y-2.5">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex gap-3 rounded-[22px] border border-white/70 bg-white/60 p-3.5 shadow-[0_10px_24px_rgba(16,33,63,0.045)] backdrop-blur-xl"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#BFD2EA]/75 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C]">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <p className="text-[13.5px] leading-5 text-[#415064]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2.5">
            <a
              href="https://wa.me/972000000000?text=Здравствуйте! Хочу обсудить переезд и получить расчёт."
              className="flex items-center justify-center gap-2 rounded-full bg-[#10213F] px-5 py-4 text-[15px] font-medium text-white shadow-[0_16px_34px_rgba(16,33,63,0.18)]"
            >
              <MessageCircle size={18} />
              Написать в WhatsApp
            </a>

            <a
              href="tel:+972000000000"
              className="flex items-center justify-center gap-2 rounded-full border border-white/75 bg-white/66 px-5 py-4 text-[15px] font-medium text-[#10213F] shadow-[0_12px_26px_rgba(16,33,63,0.06)] backdrop-blur-xl"
            >
              <Phone size={18} />
              Позвонить сейчас
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}