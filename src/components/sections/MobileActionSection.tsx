"use client";

import {
  ChevronDown,
  MapPin,
  PackageCheck,
  Route,
  Sofa,
  Calculator,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

const panels = [
  {
    id: "process",
    icon: Route,
    title: "Как проходит переезд?",
    text: "Заявка → уточняем детали → при необходимости упаковываем → аккуратно перевозим → помогаем расставить вещи.",
  },
  {
    id: "services",
    icon: Sofa,
    title: "Что перевозим?",
    text: "Квартиры, дома, офисы, мебель, технику, отдельные вещи и ценные предметы — от бабушкиного кресла до дорогой итальянской мебели.",
  },
  {
    id: "packing",
    icon: PackageCheck,
    title: "Как упаковываем?",
    text: "Используем коробки, найлон, защитные плёнки и современные материалы, чтобы вещи доехали спокойно и аккуратно.",
  },
  {
    id: "geo",
    icon: MapPin,
    title: "Где работаем?",
    text: "Мы из Хайфы и работаем по всему Израилю: север, центр, междугородние переезды и локальные перевозки.",
  },
];

const estimateOptions = [
  "Квартира",
  "Офис",
  "Мебель",
  "Несколько вещей",
];

export default function MobileActionSection() {
  const [openPanel, setOpenPanel] = useState<string | null>("process");
  const [selected, setSelected] = useState("Квартира");

  const whatsappText = encodeURIComponent(
    `Здравствуйте! Хочу получить расчёт переезда. Тип: ${selected}.`
  );

  return (
    <section className="bg-[#F4EFE7] px-4 py-5 text-[#101827] lg:hidden">
      <div className="mx-auto max-w-md">
        <div className="mb-4 grid grid-cols-2 gap-2.5">
          <a
            href={`https://wa.me/972000000000?text=${whatsappText}`}
            className="flex items-center justify-center gap-2 rounded-full bg-[#10213F] px-4 py-3 text-[14px] font-medium text-white shadow-[0_16px_34px_rgba(16,33,63,0.18)]"
          >
            <MessageCircle size={17} />
            Расчёт
          </a>

          <a
            href="tel:+972000000000"
            className="flex items-center justify-center gap-2 rounded-full border border-white/75 bg-white/66 px-4 py-3 text-[14px] font-medium text-[#10213F] shadow-[0_12px_26px_rgba(16,33,63,0.06)] backdrop-blur-xl"
          >
            <Phone size={17} />
            Позвонить
          </a>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-[#F8FBFF]/88 via-white/78 to-[#F4E8D9]/86 p-3 shadow-[0_18px_45px_rgba(16,33,63,0.065)] backdrop-blur-2xl">
          <div className="mb-3 rounded-[22px] border border-white/70 bg-white/60 p-4 shadow-[0_12px_26px_rgba(16,33,63,0.045)]">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
              Быстро понять
            </p>

            <h2 className="text-[23px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#10213F]">
              Всё важное о переезде — без длинного чтения
            </h2>

            <p className="mt-2 text-[13.5px] leading-5 text-[#5B6573]">
              Нажмите на нужный пункт — и сразу увидите главное.
            </p>
          </div>

          <div className="space-y-2">
            {panels.map((panel) => {
              const Icon = panel.icon;
              const isOpen = openPanel === panel.id;

              return (
                <div
                  key={panel.id}
                  className="overflow-hidden rounded-[22px] border border-white/70 bg-white/64 shadow-[0_10px_24px_rgba(16,33,63,0.045)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenPanel(isOpen ? null : panel.id)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-[#BFD2EA]/75 bg-gradient-to-br from-white to-[#E4F0FB] text-[#2B5D8C]">
                        <Icon size={17} strokeWidth={1.8} />
                      </span>

                      <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#10213F]">
                        {panel.title}
                      </span>
                    </span>

                    <ChevronDown
                      size={18}
                      className={[
                        "shrink-0 text-[#2B5D8C] transition duration-300",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pl-[64px] text-[13.5px] leading-5 text-[#5B6573]">
                      {panel.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-3 rounded-[24px] border border-[#E7CDAE]/70 bg-gradient-to-r from-white/76 via-[#FFF7E8]/88 to-[#F2D9AD]/68 p-4 shadow-[0_14px_32px_rgba(183,146,90,0.12)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#10213F] text-white">
                <Calculator size={17} />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#10213F]">
                  Быстрый расчёт
                </h3>
                <p className="text-[12.5px] text-[#6B7280]">
                  Выберите тип переезда
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {estimateOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelected(option)}
                  className={[
                    "rounded-full border px-3 py-2 text-[13px] font-medium transition",
                    selected === option
                      ? "border-[#2B5D8C]/40 bg-[#2B5D8C] text-white shadow-[0_10px_22px_rgba(43,93,140,0.18)]"
                      : "border-white/70 bg-white/64 text-[#10213F]",
                  ].join(" ")}
                >
                  {option}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/972000000000?text=${whatsappText}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#10213F] px-4 py-3 text-[14px] font-medium text-white shadow-[0_16px_34px_rgba(16,33,63,0.18)]"
            >
              <MessageCircle size={17} />
              Получить расчёт в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}