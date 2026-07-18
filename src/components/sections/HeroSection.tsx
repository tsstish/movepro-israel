import Image from "next/image";
import type React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-5 pt-0 pb-6 text-[#101827]">
      <div className="relative mx-auto max-w-7xl">
        <header className="flex items-center justify-between -ml-6 pr-2 py-0">
          <div className="flex items-center gap-0 -ml-6">
            <div className="relative -my-10 h-44 w-44 shrink-0">
              <Image
                src="/images/logo-heart.png"
                alt="MovePro Israel"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="-ml-7">
              <div className="text-[20px] font-semibold leading-none">
                MovePro Israel
              </div>

              <div className="mt-1 text-sm text-gray-500">
                Переезд без стресса
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <GlassButton href="tel:+972000000000" light icon={<Phone size={16} />}>
              Позвонить
            </GlassButton>

            <GlassButton href="https://wa.me/972000000000" icon={<MessageCircle size={16} />}>
              WhatsApp
            </GlassButton>
          </div>
        </header>

        <div className="grid items-center gap-10 -mt-2 lg:grid-cols-[0.92fr_1.08fr] lg:pt-5">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[13px] font-medium text-[#8A735F]">
              <MapPin size={16} />
              Команда из Хайфы. Переезды — по всему Израилю.
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-6xl lg:text-[76px]">
              Ваш новый переезд
              <br />
              начинается{" "}
              <span className="relative inline-block -rotate-2 font-serif italic text-[#2B5D8C]">
                спокойно
                <svg className="absolute -bottom-4 left-0 h-5 w-full" viewBox="0 0 260 30" fill="none">
                  <path d="M5 20C70 4 175 4 255 18" stroke="#9EB6C9" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-[18px] leading-8 text-[#4B5563]">
              Берём на себя организацию, аккуратную перевозку и сопровождение
              на каждом этапе — чтобы вы могли не волноваться о деталях.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlassButton href="https://wa.me/972000000000" large icon={<MessageCircle size={18} />}>
                <span>
                  Получить расчёт
                  <span className="block text-xs font-normal text-white/65">
                    в WhatsApp
                  </span>
                </span>
              </GlassButton>

              <GlassButton href="tel:+972000000000" large light icon={<Phone size={18} />}>
                <span>
                  Позвонить сейчас
                  <span className="block text-xs font-normal text-[#6B7280]">
                    обсудим детали
                  </span>
                </span>
              </GlassButton>
            </div>
          </div>

          <div className="relative h-[430px] overflow-hidden rounded-[46px] border border-white/70 bg-white/25 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl">
            <div className="relative h-full overflow-hidden rounded-[38px]">
              <Image
                src="/images/hero-moving.webp"
                alt="Переезд без стресса с MovePro Israel"
                fill
                className="object-cover scale-105 blur-[1.5px]"
                priority
              />

              <div className="absolute inset-0 bg-[#F4EFE7]/42" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/38 to-[#2B5D8C]/18" />
              <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-l from-white/30 via-white/10 to-transparent" />

              <div className="absolute right-4 top-1 z-[9] h-[425px] w-[320px] rounded-full bg-[#2B5D8C]/18 blur-3xl" />

              <div className="absolute right-2 top-0 z-10 h-[430px] w-[330px]">
                <Image
                  src="/images/israel-map-network.svg"
                  alt="Карта переездов по Израилю"
                  fill
                 className="
object-contain
opacity-100
drop-shadow-[0_20px_40px_rgba(43,93,140,0.45)]
"
                />

                <div className="absolute left-[36%] top-[18%] h-20 w-20 rounded-full border border-[#2B5D8C]/30 bg-[#2B5D8C]/22 blur-[1px] animate-[haifaPulse_4.8s_ease-in-out_infinite]" />
              </div>

              <div className="absolute bottom-7 left-7 z-10 max-w-[300px] rounded-[28px] border border-white/60 bg-[#F4EFE7]/72 p-5 text-[#10213F] shadow-2xl backdrop-blur-2xl">
                <p className="text-xl font-semibold leading-tight">
                  Высокий стандарт.
                  <br />
                  Спокойный процесс.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#415064]">
                  Дом, офис или отдельные вещи — аккуратно довезём до нового места.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassButton({
  href,
  children,
  icon,
  light = false,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  light?: boolean;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5",
        large ? "px-7 py-4 font-medium" : "px-5 py-3 text-sm",
        light
          ? "border-white/75 bg-white/50 text-[#10213F] shadow-xl shadow-slate-900/5 hover:bg-white/70"
          : "border-white/25 bg-[#10213F]/88 text-white shadow-2xl shadow-slate-900/18 hover:bg-[#10213F]",
      ].join(" ")}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/28 via-transparent to-transparent" />
      <span className="absolute -left-12 top-0 h-full w-16 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative flex items-center gap-3">
        {icon}
        {children}
      </span>
    </a>
  );
}