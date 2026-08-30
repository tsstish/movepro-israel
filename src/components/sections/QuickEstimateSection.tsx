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
      className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-[#F8FBFF] via-white/80 to-[#F4E4CF]/70 p-5 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl md:p-7">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
                Быстрый расчёт
              </p>

              <h2 className="mt-3 max-w-lg text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[42px]">
                Расскажите о переезде за минуту
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-6 text-[#5B6573]">
                Мы не показываем случайную автоматическую цену. Передайте основные
                детали — мы оценим объём и уточним стоимость в WhatsApp.
              </p>

              <div className="mt-5 rounded-[22px] border border-[#E7CDAE]/70 bg-[#FFF9F0]/72 p-4 text-[13px] leading-5 text-[#7A6858]">
                После сообщения мы попросим фото или короткое видео вещей — так проще
                оценить объём переезда.
              </div>
            </div>

            <div>
              <p className="mb-3 text-[13px] font-semibold text-[#10213F]">
                Что нужно перевезти?
              </p>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {types.map((item) => {
                  const Icon = item.icon;
                  const active = type === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id)}
                      className={`rounded-[20px] border p-3 text-left transition ${
                        active
                          ? "border-[#2B5D8C]/35 bg-[#EAF3FB] shadow-[0_10px_24px_rgba(43,93,140,0.08)]"
                          : "border-white/75 bg-white/65 hover:bg-white"
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="mb-2 text-[#2B5D8C]"
                      />
                      <span className="text-[13px] font-semibold leading-4 text-[#10213F]">
                        {item.id}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Field
                  label="Откуда"
                  placeholder="Например, Хайфа"
                  value={from}
                  onChange={setFrom}
                />
                <Field
                  label="Куда"
                  placeholder="Например, Крайот"
                  value={to}
                  onChange={setTo}
                />
                <Field
                  label="Этаж / лифт — откуда"
                  placeholder="3 этаж, есть лифт"
                  value={floorFrom}
                  onChange={setFloorFrom}
                />
                <Field
                  label="Этаж / лифт — куда"
                  placeholder="1 этаж, без лифта"
                  value={floorTo}
                  onChange={setFloorTo}
                />
              </div>

              <a
                href={`/whatsapp?${params.toString()}`}
                data-cta="quick-estimate"
                className="mt-4 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#10213F] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_42px_rgba(16,33,63,0.18)] transition hover:-translate-y-0.5 hover:bg-[#17345E]"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Получить расчёт в WhatsApp
                <ArrowRight size={18} strokeWidth={1.8} />
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
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-[#5B6573]">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[50px] w-full rounded-[18px] border border-white/80 bg-white/72 px-4 text-[14px] text-[#10213F] outline-none transition placeholder:text-[#9AA1AA] focus:border-[#2B5D8C]/40 focus:bg-white"
      />
    </label>
  );
}
