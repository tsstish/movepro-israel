import Image from "next/image";
import type React from "react";
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

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-4 pb-6 pt-0 text-[#101827] sm:px-5 lg:pb-8">
      <div className="relative mx-auto max-w-7xl">
        <MobileHeader />
        <DesktopHeader />

        <div className="lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:pt-5">
          <div>
            <div className="mt-2 flex items-center gap-2 text-[12px] font-medium leading-5 text-[#8A735F] lg:mb-5 lg:mt-0 lg:text-[13px]">
              <MapPin size={16} strokeWidth={1.8} className="shrink-0" />

              <span>
                Команда из Хайфы. Переезды — по всему Израилю.
              </span>
            </div>

            <h1 className="mt-5 w-full text-[clamp(43px,8.6vw,64px)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#101827] lg:mt-0 lg:max-w-3xl lg:text-[76px]">
              Ваш новый переезд начинается{" "}
              <span className="relative mt-1 block w-fit font-serif italic text-[#2B5D8C] sm:ml-auto sm:mr-8 lg:ml-0 lg:mr-0 lg:inline-block lg:-rotate-2">
                спокойно

                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full lg:-bottom-4 lg:h-5"
                  viewBox="0 0 260 30"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 20C70 4 175 4 255 18"
                    stroke="#9EB6C9"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 w-full max-w-none text-[17px] leading-7 text-[#4B5563] sm:max-w-[640px] sm:text-[18px] sm:leading-8 lg:mt-8 lg:max-w-xl">
              Организуем переезд, защитим вещи и аккуратно доставим их на новое
              место — без лишнего хаоса.
            </p>

            <MobileHeroActions />
            <DesktopHeroActions />

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 lg:hidden">
              <MobileBenefit text="Детали заранее" />
              <MobileBenefit text="Защита мебели" />
              <MobileBenefit text="По всему Израилю" />
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function MobileHeader() {
  return (
    <header className="flex h-[88px] items-center justify-between lg:hidden">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-[74px] w-[74px] shrink-0 overflow-visible">
          <Image
            src="/images/logo-heart.png"
            alt="MovePro Israel"
            fill
            sizes="74px"
            className="scale-[1.38] object-contain"
            priority
          />
        </div>

        <div className="flex h-[58px] min-w-0 flex-col justify-center">
          <div className="whitespace-nowrap text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#10213F]">
            MovePro Israel
          </div>

          <div className="mt-1.5 whitespace-nowrap text-[13px] leading-none text-[#6B7280]">
            Переезд без стресса
          </div>
        </div>
      </div>

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Позвонить в MovePro Israel"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/75 bg-white/65 text-[#10213F] shadow-[0_12px_30px_rgba(16,33,63,0.08)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/80 active:scale-95"
      >
        <Phone size={18} strokeWidth={1.8} />
      </a>
    </header>
  );
}

function DesktopHeader() {
  return (
    <header className="hidden h-[112px] items-center justify-between lg:flex">
      <div className="flex items-center gap-4">
        <div className="relative h-[104px] w-[104px] shrink-0 overflow-visible">
          <Image
            src="/images/logo-heart.png"
            alt="MovePro Israel"
            fill
            sizes="104px"
            className="scale-[1.42] object-contain"
            priority
          />
        </div>

        <div className="flex h-[76px] flex-col justify-center">
          <div className="whitespace-nowrap text-[34px] font-semibold leading-none tracking-[-0.04em] text-[#10213F]">
            MovePro Israel
          </div>

          <div className="mt-2 whitespace-nowrap text-[18px] leading-none text-[#6B7280]">
            Переезд без стресса
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <GlassButton
          href={`tel:${PHONE_NUMBER}`}
          light
          icon={<Phone size={18} strokeWidth={1.8} />}
        >
          Позвонить
        </GlassButton>

        <GlassButton
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          icon={<MessageCircle size={18} strokeWidth={1.8} />}
        >
          WhatsApp
        </GlassButton>
      </div>
    </header>
  );
}

function MobileHeroActions() {
  return (
    <div className="mt-8 lg:hidden">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        className="flex h-[58px] w-full items-center justify-center gap-3 rounded-[20px] bg-[#10213F] px-5 text-[16px] font-semibold text-white shadow-[0_18px_42px_rgba(16,33,63,0.2)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#17345E] hover:shadow-[0_22px_48px_rgba(16,33,63,0.24)] active:scale-[0.985]"
      >
        <MessageCircle size={20} strokeWidth={1.8} />
        Получить расчёт
        <ArrowRight size={18} strokeWidth={1.8} />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full px-3 py-2 text-[14px] font-semibold text-[#2B5D8C] transition duration-300 ease-out hover:bg-white/45 hover:text-[#10213F]"
      >
        <Phone size={18} strokeWidth={1.8} />
        Позвонить сейчас
      </a>
    </div>
  );
}

function DesktopHeroActions() {
  return (
    <div className="mt-8 hidden gap-3 lg:flex">
      <GlassButton
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        large
        icon={<MessageCircle size={18} strokeWidth={1.8} />}
      >
        <span>
          Получить расчёт

          <span className="block text-xs font-normal text-white/65">
            в WhatsApp
          </span>
        </span>
      </GlassButton>

      <GlassButton
        href={`tel:${PHONE_NUMBER}`}
        large
        light
        icon={<Phone size={18} strokeWidth={1.8} />}
      >
        <span>
          Позвонить сейчас

          <span className="block text-xs font-normal text-[#6B7280]">
            обсудим детали
          </span>
        </span>
      </GlassButton>
    </div>
  );
}

function MobileBenefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#536174]">
      <ShieldCheck size={16} strokeWidth={1.8} className="text-[#2B5D8C]" />
      {text}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mt-8 h-[270px] overflow-hidden rounded-[32px] border border-white/70 bg-white/25 p-1.5 shadow-[0_24px_60px_rgba(16,33,63,0.1)] backdrop-blur-2xl sm:h-[340px] lg:mt-0 lg:h-[430px] lg:rounded-[42px] lg:p-2">
      <div className="relative h-full overflow-hidden rounded-[24px] lg:rounded-[34px]">
        <Image
          src="/images/hero-moving.webp"
          alt="Аккуратный переезд с MovePro Israel"
          fill
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="scale-105 object-cover blur-[1px]"
          priority
        />

        <div className="absolute inset-0 bg-[#F4EFE7]/36" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/58 via-white/18 to-[#2B5D8C]/15" />

        <div className="absolute right-[-16px] top-[-22px] h-[290px] w-[230px] opacity-75 lg:right-2 lg:top-0 lg:h-[430px] lg:w-[330px] lg:opacity-100">
          <Image
            src="/images/israel-map-network.svg"
            alt="Карта переездов MovePro Israel"
            fill
            sizes="(max-width: 1023px) 230px, 330px"
            className="object-contain drop-shadow-[0_18px_34px_rgba(43,93,140,0.28)]"
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/65 bg-[#F8F4ED]/72 p-4 text-[#10213F] shadow-[0_12px_30px_rgba(16,33,63,0.08)] backdrop-blur-xl lg:bottom-7 lg:left-7 lg:right-auto lg:max-w-[300px] lg:rounded-[28px] lg:p-5">
          <p className="text-[17px] font-semibold leading-tight lg:text-xl">
            Высокий стандарт. Спокойный процесс.
          </p>

          <p className="mt-1.5 text-[13px] leading-5 text-[#526073] lg:mt-2 lg:text-sm lg:leading-6">
            Дом, офис или отдельные вещи — аккуратно довезём до нового места.
          </p>
        </div>
      </div>
    </div>
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
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5",
        large ? "px-7 py-4 font-medium" : "px-5 py-3 text-sm",
        light
          ? "border-white/75 bg-white/50 text-[#10213F] shadow-[0_12px_30px_rgba(16,33,63,0.08)] hover:bg-white/75 hover:shadow-[0_16px_38px_rgba(16,33,63,0.1)]"
          : "border-white/25 bg-[#10213F]/90 text-white shadow-[0_18px_42px_rgba(16,33,63,0.2)] hover:bg-[#10213F] hover:shadow-[0_22px_48px_rgba(16,33,63,0.24)]",
      ].join(" ")}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/24 via-transparent to-transparent" />

      <span className="absolute -left-12 top-0 h-full w-16 rotate-12 bg-white/18 blur-xl transition-all duration-700 group-hover:left-[120%]" />

      <span className="relative flex items-center gap-3">
        {icon}
        {children}
      </span>
    </a>
  );
}