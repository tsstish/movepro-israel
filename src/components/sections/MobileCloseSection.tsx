import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const PHONE_NUMBER = "+972546745954";
const WHATSAPP_NUMBER = "972546745954";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу обсудить переезд и получить расчёт."
);

export default function MobileCloseSection() {
  return (
    <section className="bg-[#F4EFE7] px-4 pb-7 pt-1 text-[#101827] lg:hidden">
      <div className="mx-auto max-w-md">
        <div className="mobile-touch-image relative overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(16,33,63,0.16)] transition duration-300 ease-out active:scale-[0.992]">
          <div className="relative h-[430px]">
            <Image
              src="/images/service-apartment.webp"
              alt="Аккуратный переезд квартиры с MovePro Israel"
              fill
              sizes="100vw"
              className="object-cover transition duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#10213F]/24 via-[#10213F]/56 to-[#10213F]/98" />

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/22 bg-[#10213F]/26 px-3.5 py-2 text-[12px] font-medium text-white shadow-[0_8px_22px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <MapPin size={16} strokeWidth={1.8} />
              Хайфа · весь Израиль
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <div className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E7CDAE]">
                <ShieldCheck size={16} strokeWidth={1.8} />
                Можно не знать всех деталей
              </div>

              <h2 className="max-w-[330px] text-[31px] font-semibold leading-[1.02] tracking-[-0.045em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.62)]">
                Просто расскажите, что нужно перевезти
              </h2>

              <p className="mt-3 max-w-[330px] text-[14px] leading-6 text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
                Мы уточним объём, этажи, маршрут и упаковку — и подскажем, как
                организовать переезд спокойно.
              </p>

              <a
                href="/whatsapp"
                className="mt-5 flex h-[56px] w-full items-center justify-center gap-3 rounded-[20px] bg-white px-5 text-[15px] font-semibold text-[#10213F] shadow-[0_18px_42px_rgba(0,0,0,0.2)] transition duration-300 ease-out active:scale-[0.98] active:bg-[#F5F8FC]"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Написать в WhatsApp
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[14px] font-medium text-white/82 transition duration-300 ease-out active:bg-white/10"
              >
                <Phone size={16} strokeWidth={1.8} />
                Или позвонить
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-[330px] text-center text-[13px] leading-5 text-[#7A6858]">
          Бережно перевезём и обычные вещи, и мебель, которая особенно дорога.
        </p>
      </div>
    </section>
  );
}