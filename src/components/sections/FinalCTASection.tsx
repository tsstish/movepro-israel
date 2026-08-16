import {
  ArrowRight,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "+972546745954";
const WHATSAPP_NUMBER = "972546745954";

const CALC_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу обсудить переезд и получить расчёт."
);

const DETAILS_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу уточнить детали переезда."
);

const details = [
  {
    icon: PackageCheck,
    title: "Упаковка и защита",
    text: "Коробки, найлон, плёнки и материалы для мебели, техники и личных вещей.",
  },
  {
    icon: MapPin,
    title: "Хайфа и весь Израиль",
    text: "Локальные и междугородние переезды для дома, офиса и отдельных вещей.",
  },
];

export default function FinalCTASection() {
  return (
    <section
  id="estimate"
  className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 pb-10 pt-8 text-[#101827]"
>
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-r from-[#10213F] via-[#17365D] to-[#2B5D8C] p-8 text-white shadow-[0_24px_60px_rgba(16,33,63,0.18)]">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#E7CDAE]/22 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#D8B98C]">
                Готовы обсудить переезд?
              </p>

              <h2 className="max-w-3xl text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[54px]">
                Напишите нам — подскажем, как организовать переезд спокойно
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/76">
                Расскажите, что нужно перевезти, откуда и куда. Уточним детали,
                подскажем по упаковке и сориентируем по удобному формату
                перевозки.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${CALC_MESSAGE}`}
                  className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#10213F] shadow-[0_18px_42px_rgba(0,0,0,0.14)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#F8FBFF] hover:shadow-[0_22px_48px_rgba(0,0,0,0.18)]"
                >
                  <MessageCircle size={18} strokeWidth={1.8} />
                  Получить расчёт в WhatsApp
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border border-white/24 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/16 hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)]"
                >
                  <Phone size={18} strokeWidth={1.8} />
                  Позвонить сейчас
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/18 bg-white/10 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl">
              <div className="space-y-3">
                {details.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="flex gap-3 rounded-[24px] border border-white/10 bg-white/8 p-4 transition duration-300 ease-out hover:bg-white/12"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-white/12 text-[#E7CDAE]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-[15px] font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[14px] leading-5 text-white/68">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  );
                })}

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DETAILS_MESSAGE}`}
                  className="group mt-2 flex min-h-[46px] items-center justify-between rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:bg-white/16"
                >
                  Написать и уточнить детали

                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    className="transition duration-300 ease-out group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}