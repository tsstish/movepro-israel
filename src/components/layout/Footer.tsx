import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+972546745954";
const WHATSAPP_NUMBER = "972546745954";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу обсудить переезд и получить расчёт."
);

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#10213F] px-5 pb-5 pt-6 text-white lg:pb-7 lg:pt-7">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.42fr_0.62fr] lg:items-start">
          <div>
            <div className="relative h-[60px] w-[210px] overflow-visible lg:h-[68px] lg:w-[250px]">
              <Image
                src="/images/logo-primary.png"
                alt="MovePro Israel"
                fill
                sizes="(max-width: 1023px) 210px, 250px"
                className="origin-left scale-[2.15] object-contain object-left brightness-0 invert lg:scale-[2.05]"
              />
            </div>

            <p className="mt-3 max-w-md text-[12.5px] leading-[1.4] text-white/62 lg:text-[13px]">
              Квартирные, офисные и междугородние переезды из Хайфы по всему
              Израилю.
            </p>

            <div className="mt-2.5 flex items-center gap-2 text-[12px] leading-none text-white/48">
              <MapPin
                size={16}
                strokeWidth={1.8}
                className="shrink-0"
              />
              <span>Хайфа · Север · Центр · весь Израиль</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:contents">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8B98C]">
                Связаться
              </p>

              <div className="mt-3 space-y-2.5">
                <a
  href="/whatsapp"
  className="flex items-center gap-2 text-[12.5px] leading-none text-white/68 transition duration-300 ease-out hover:translate-x-0.5 hover:text-white lg:text-[13px]"
>
                  <MessageCircle
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />
                  WhatsApp
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-[12.5px] leading-none text-white/68 transition duration-300 ease-out hover:translate-x-0.5 hover:text-white lg:text-[13px]"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />
                  054-674-5954
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D8B98C]">
                Информация
              </p>

              <div className="mt-3 space-y-2.5 text-[11.5px] leading-[1.25] lg:text-[12.5px]">
                <Link
                  href="/privacy"
                  className="block text-white/50 transition duration-300 ease-out hover:translate-x-0.5 hover:text-white"
                >
                  Политика конфиденциальности
                </Link>

                <Link
                  href="/accessibility"
                  className="block text-white/50 transition duration-300 ease-out hover:translate-x-0.5 hover:text-white"
                >
                  Заявление о доступности
                </Link>

                <Link
                  href="/terms"
                  className="block text-white/50 transition duration-300 ease-out hover:translate-x-0.5 hover:text-white"
                >
                  Условия использования
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] leading-none text-white/32">
          <p>© 2026 MovePro Israel</p>
          <p>Переезд без стресса</p>
        </div>
      </div>
    </footer>
  );
}