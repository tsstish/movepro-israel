"use client";

import {
  ArrowRight,
  Box,
  Building2,
  Check,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  Sofa,
  Truck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "972546745954";

const estimateOptions = [
  {
    id: "Квартира",
    icon: Home,
  },
  {
    id: "Офис",
    icon: Building2,
  },
  {
    id: "Мебель",
    icon: Sofa,
  },
  {
    id: "Несколько вещей",
    icon: Box,
  },
];

const facts = [
  {
    icon: Truck,
    value: "4",
    label: "грузовика",
  },
  {
    icon: UsersRound,
    value: "до 15",
    label: "грузчиков",
  },
  {
    icon: MapPin,
    value: "весь",
    label: "Израиль",
  },
];

const processItems = [
  "Уточняем объём, адреса, этажи и лифт",
  "Подбираем машину, команду и упаковку",
  "Защищаем мебель, технику и личные вещи",
  "Аккуратно перевозим и помогаем на месте",
];

export default function MobileActionSection() {
  const [selected, setSelected] = useState("Квартира");

  const whatsappText = encodeURIComponent(
    `Здравствуйте! Хочу получить расчёт переезда. Тип перевозки: ${selected}.`
  );

  return (
    <section className="relative overflow-hidden bg-[#F4EFE7] px-4 py-7 text-[#101827] lg:hidden">
      <div className="mx-auto max-w-md space-y-4">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#10213F] via-[#17345E] to-[#2B5D8C] p-5 text-white shadow-[0_24px_60px_rgba(16,33,63,0.2)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/12 blur-3xl" />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8B98C]">
              MovePro Israel
            </p>

            <h2 className="mt-2 max-w-[310px] text-[29px] font-semibold leading-[1.02] tracking-[-0.045em]">
              Переезд без хаоса — от заявки до последней коробки
            </h2>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="mobile-touch-card rounded-[24px] border border-white/14 bg-white/10 p-3 shadow-[0_10px_26px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 ease-out active:scale-[0.985] active:bg-white/14"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#E7CDAE]"
                    />

                    <div className="mt-3 text-[20px] font-semibold leading-none">
                      {fact.value}
                    </div>

                    <div className="mt-1 text-[11px] leading-4 text-white/68">
                      {fact.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mobile-touch-card overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-[#FFF9F0] via-white to-[#EAF3FB] p-5 shadow-[0_18px_45px_rgba(16,33,63,0.08)] transition duration-300 ease-out active:scale-[0.992]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#E4F0FB] text-[#2B5D8C] shadow-[0_10px_24px_rgba(43,93,140,0.1)]">
              <PackageCheck size={20} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B5D8C]">
                Как всё проходит
              </p>

              <h3 className="mt-1 text-[23px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#10213F]">
                Вы рассказываете — мы берём организацию на себя
              </h3>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {processItems.map((item, index) => (
              <div key={item} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#10213F] text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(16,33,63,0.14)]">
                  {index + 1}
                </span>

                <p className="pt-0.5 text-[14px] leading-5 text-[#526073]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#E7CDAE]/65 bg-gradient-to-br from-[#FFF8EB] via-[#F9EAD6] to-[#E7CDAE]/55 p-5 shadow-[0_20px_48px_rgba(138,95,46,0.12)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A5F2E]">
            Быстрый расчёт
          </p>

          <h3 className="mt-2 text-[25px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#10213F]">
            Что нужно перевезти?
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {estimateOptions.map((option) => {
              const Icon = option.icon;
              const active = selected === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(option.id)}
                  className={[
                    "relative flex min-h-[78px] flex-col items-start justify-between rounded-[24px] border p-3.5 text-left transition duration-300 ease-out active:scale-[0.97]",
                    active
                      ? "border-[#10213F] bg-[#10213F] text-white shadow-[0_16px_36px_rgba(16,33,63,0.22)]"
                      : "border-white/80 bg-white/76 text-[#10213F] shadow-[0_10px_24px_rgba(16,33,63,0.06)]",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={
                        active ? "text-[#E7CDAE]" : "text-[#2B5D8C]"
                      }
                    />

                    {active && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/16">
                        <Check size={12} strokeWidth={2} />
                      </span>
                    )}
                  </div>

                  <span className="mt-3 text-[14px] font-semibold">
                    {option.id}
                  </span>
                </button>
              );
            })}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
            className="mt-4 flex h-[56px] items-center justify-center gap-3 rounded-[20px] bg-[#10213F] px-5 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(16,33,63,0.2)] transition duration-300 ease-out active:scale-[0.98] active:bg-[#17345E]"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Получить расчёт
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}