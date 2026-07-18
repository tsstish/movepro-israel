import { MessageCircle, Phone, ArrowRight, PackageCheck, MapPin } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-5 pb-10 pt-7 text-[#101827]">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-gradient-to-r from-[#10213F] via-[#17365D] to-[#2B5D8C] p-8 text-white shadow-[0_28px_80px_rgba(16,33,63,0.22)]">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#E7CDAE]/30 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#D8B98C]">
                Готовы обсудить переезд?
              </p>

              <h2 className="max-w-3xl text-[36px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[54px]">
                Напишите нам — подскажем, как организовать переезд спокойно
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/72">
                Расскажите, что нужно перевезти, откуда и куда. Мы уточним детали,
                подскажем по упаковке и сориентируем по удобному формату перевозки.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/972000000000?text=Здравствуйте! Хочу обсудить переезд и получить расчёт."
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#10213F] shadow-[0_18px_44px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5"
                >
                  <MessageCircle size={19} />
                  Получить расчёт в WhatsApp
                </a>

                <a
                  href="tel:+972000000000"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/16"
                >
                  <Phone size={19} />
                  Позвонить сейчас
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/18 bg-white/10 p-5 shadow-[0_20px_55px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
              <div className="space-y-3">
                <div className="flex gap-3 rounded-[24px] bg-white/10 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-[#E7CDAE]">
                    <PackageCheck size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Упаковка и защита
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-white/66">
                      Коробки, найлон, плёнки и материалы для мебели, техники и
                      личных вещей.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-[24px] bg-white/10 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/14 text-[#E7CDAE]">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Хайфа и весь Израиль
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-white/66">
                      Локальные и междугородние переезды для дома, офиса и
                      отдельных вещей.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/972000000000?text=Здравствуйте! Хочу уточнить детали переезда."
                  className="group mt-2 flex items-center justify-between rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  Написать и уточнить детали
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
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