"use client";

import { ArrowRight, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_KEY = "movepro_whatsapp_prompt_closed";

export default function SmartWhatsAppPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let shown = false;

    const show = () => {
      if (shown || sessionStorage.getItem(SESSION_KEY)) return;

      shown = true;
      setVisible(true);

      window.gtag?.("event", "estimate_prompt_view", {
        prompt_type: "whatsapp",
      });
    };

    const timer = window.setTimeout(show, 40000);

    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) return;

      const progress = window.scrollY / documentHeight;

      if (progress >= 0.55) {
        show();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed bottom-[82px] left-4 right-4 z-[70] mx-auto max-w-[420px] rounded-[28px] border border-white/80 bg-[#FFFDFC]/92 p-5 shadow-[0_24px_70px_rgba(16,33,63,0.2)] backdrop-blur-xl md:bottom-6 md:left-auto md:right-6 md:mx-0">
      <button
        type="button"
        onClick={close}
        aria-label="Закрыть"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#7A8491] transition hover:bg-[#10213F]/5 hover:text-[#10213F]"
      >
        <X size={17} strokeWidth={1.8} />
      </button>

      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#EAF3FB] text-[#2B5D8C]">
        <MessageCircle size={20} strokeWidth={1.8} />
      </div>

      <h2 className="mt-4 pr-7 text-[21px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#10213F]">
        Уже примерно понимаете, что нужно перевезти?
      </h2>

      <p className="mt-3 text-[13.5px] leading-5 text-[#5B6573]">
        Напишите нам в WhatsApp. Мы уточним детали и попросим фото или короткое
        видео, чтобы оценить объём переезда.
      </p>

      <a
        href="/whatsapp?cta=smart-prompt"
        data-cta="smart-prompt"
        onClick={() => {
          window.gtag?.("event", "estimate_prompt_click", {
            prompt_type: "whatsapp",
          });
        }}
        className="mt-4 flex min-h-[48px] w-full items-center justify-between rounded-full bg-[#10213F] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-[#17345E]"
      >
        Написать в WhatsApp
        <ArrowRight size={18} strokeWidth={1.8} />
      </a>

      <p className="mt-3 text-center text-[11.5px] text-[#8A735F]">
        Для первого сообщения не нужно знать все детали
      </p>
    </aside>
  );
}
