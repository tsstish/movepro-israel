"use client";

import {
  ArrowRight,
  Box,
  Building2,
  Home,
  MessageCircle,
  Sofa,
} from "lucide-react";
import { useState } from "react";

const types = [
  { id: "Квартира / дом", icon: Home },
  { id: "Офис", icon: Building2 },
  { id: "Мебель / техника", icon: Sofa },
  { id: "Несколько вещей", icon: Box },
];

export default function QuickEstimateSection() {
  const [type, setType] = useState("Квартира / дом");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [floorFrom, setFloorFrom] = useState("");
  const [floorTo, setFloorTo] = useState("");

  const params = new URLSearchParams({
    cta: "quick-estimate",
    type,
  });

  if (from.trim()) params.set("from", from.trim());
  if (to.trim()) params.set("to", to.trim());
  if (floorFrom.trim()) params.set("floorFrom", floorFrom.trim());
  if (floorTo.trim()) params.set("floorTo", floorTo.trim());

  return (
    <section
      id="quick-estimate"
      className="relative scroll-mt-20 bg-[#F4EFE7] px-5 py-7 text-[#101827] lg:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/58 shadow-[0_18px_50px_rgba(16,33,63,0.07)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-[#10213F]/8 p-5 lg:border-b-0 lg:border-r lg:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
                Быстрый расчёт
              </p>

              <h2 className="mt-2 max-w-lg text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#10213F] md:text-[40px]">
                Расскажите о переезде за минуту
              </h2>

              <p className="mt-3 max-w-md text-[14px] leading-[1.55] text-[#5B6573]">
                Укажите основные детали — остальное уточним в WhatsApp.
              </p>

              <p className="mt-3 flex gap-2 text-[12.5px] leading-5 text-[#8A735F]">
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8B98C]" />
                После сообщения попросим фото или короткое видео вещей, чтобы
                оценить объём переезда.
              </p>
            </div>

            <div className="p-5 lg:p-7">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {types.map((item) => {
                  const Icon = item.icon;
                  const active = type === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id)}
                      className={`flex min-h-[44px] items-center gap-2 rounded-[15px] border px-3 py-2 text-left transition ${
                        active
                          ? "border-[#2B5D8C]/30 bg-[#EAF3FB] text-[#10213F]"
                          : "border-[#10213F]/8 bg-white/55 text-[#536174]"
                      }`}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#2B5D8C]"
                      />

                      <span className="text-[11.5px] font-semibold leading-[1.2] sm:text-[12px]">
                        {item.id}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <Field
                  label="Откуда"
                  placeholder="Хайфа"
                  value={from}
                  onChange={setFrom}
                />

                <Field
                  label="Куда"
                  placeholder="Крайот"
                  value={to}
                  onChange={setTo}
                />

                <Field
                  label="Этаж / лифт — откуда"
                  placeholder="3, есть лифт"
                  value={floorFrom}
                  onChange={setFloorFrom}
                />

                <Field
                  label="Этаж / лифт — куда"
                  placeholder="1, без лифта"
                  value={floorTo}
                  onChange={setFloorTo}
                />
              </div>

              <a
                href={`/whatsapp?${params.toString()}`}
                data-cta="quick-estimate"
                className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[17px] bg-[#10213F] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(16,33,63,0.16)] transition hover:bg-[#17345E] active:scale-[0.99]"
              >
                <MessageCircle size={17} strokeWidth={1.8} />
                Получить расчёт
                <ArrowRight size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="min-w-0">
      <span className="mb-1 block min-h-[28px] text-[10.5px] font-medium leading-[14px] text-[#6B7280]">
        {label}
      </span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[43px] w-full min-w-0 rounded-[14px] border border-[#10213F]/8 bg-white/70 px-3 text-[13px] text-[#10213F] outline-none transition placeholder:text-[#A1A7AF] focus:border-[#2B5D8C]/40 focus:bg-white"
      />
    </label>
  );
}