"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    question: "Как узнать стоимость переезда?",
    answer:
      "Стоимость зависит от маршрута, объёма вещей, этажей, лифта, условий доступа, упаковки и особенностей мебели или техники. Напишите нам основные данные в WhatsApp — после этого мы уточним детали, необходимые для расчёта.",
  },
  {
    question: "Зачем нужны фото или видео вещей?",
    answer:
      "По фото или короткому видео проще оценить реальный объём вещей, размеры мебели и особенности перевозки. После первого сообщения мы подскажем, что именно лучше показать.",
  },
  {
    question: "Вы перевозите несколько вещей или только целые квартиры?",
    answer:
      "Да, можно обратиться и для перевозки отдельных вещей, мебели или техники. Возможность и стоимость такой перевозки зависят в том числе от маршрута.",
  },
  {
    question: "Можно заказать упаковку вещей?",
    answer:
      "Да. При необходимости используем коробки, найлон, защитные плёнки и другие материалы для мебели, техники и личных вещей.",
  },
  {
    question: "Вы разбираете и собираете мебель?",
    answer:
      "Если для безопасной перевозки мебель нужно разобрать, это можно заранее включить в организацию переезда. Детали зависят от конкретной мебели.",
  },
  {
    question: "Работаете только в Хайфе?",
    answer:
      "Нет. Команда MovePro Israel находится в Хайфе, но мы выполняем локальные и междугородние переезды по Израилю.",
  },
  {
    question: "Что сообщить для расчёта?",
    answer:
      "Обычно достаточно написать, что нужно перевезти, адреса или города, этажи и наличие лифта. Затем мы уточним недостающие детали и при необходимости попросим фото или короткое видео.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#F4EFE7] px-5 py-10 text-[#101827]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              Вопросы о переезде
            </p>

            <h2 className="mt-3 max-w-lg text-[34px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#10213F] md:text-[46px]">
              Что обычно спрашивают перед переездом
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-6 text-[#5B6573]">
              Если вашей ситуации здесь нет — напишите нам. Для первого
              сообщения не обязательно знать все детали.
            </p>

            <a
              href="/whatsapp?cta=faq"
              data-cta="faq"
              className="mt-6 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#10213F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_38px_rgba(16,33,63,0.16)] transition hover:-translate-y-0.5 hover:bg-[#17345E]"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Задать вопрос в WhatsApp
            </a>
          </div>

          <div className="space-y-2.5">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[24px] border border-white/75 bg-white/62 shadow-[0_12px_30px_rgba(16,33,63,0.045)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold leading-5 text-[#10213F] md:text-[16px]">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={19}
                      strokeWidth={1.8}
                      className={`shrink-0 text-[#2B5D8C] transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#10213F]/6 px-5 pb-5 pt-4">
                      <p className="max-w-3xl text-[14px] leading-6 text-[#5B6573]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
