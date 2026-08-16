"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=972546745954&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C+%D0%BF%D0%B5%D1%80%D0%B5%D0%B5%D0%B7%D0%B4+%D0%B8+%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82.&type=phone_number&app_absent=0";

export default function WhatsAppRedirectPage() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4EFE7] px-5 py-10 text-[#101827]">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#DCEBFA]/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#E7CDAE]/28 blur-3xl" />

      <section className="relative w-full max-w-xl rounded-[36px] border border-white/75 bg-white/62 px-6 py-9 text-center shadow-[0_28px_70px_rgba(16,33,63,0.1)] backdrop-blur-xl sm:px-10 sm:py-11">
        <div className="mx-auto mb-4 flex justify-center">
  <div className="relative h-[120px] w-[180px]">
    <Image
      src="/images/logo.png"
      alt="MovePro Israel"
      fill
      sizes="180px"
      className="object-contain"
      priority
    />
  </div>
</div>

        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#BFD2EA]/70 bg-[#EAF3FB]/80 px-3.5 py-2 text-[12px] font-medium text-[#2B5D8C]">
          <ShieldCheck size={16} strokeWidth={1.8} />
          Переход в WhatsApp
        </div>

        <h1 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213F] sm:text-[42px]">
          Переходим в WhatsApp…
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[16px] leading-7 text-[#5B6573]">
          Сейчас откроется чат с MovePro Israel, где вы сможете обсудить
          переезд и получить расчёт.
        </p>

        <a
          href={WHATSAPP_URL}
          className="mx-auto mt-8 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#10213F] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_42px_rgba(16,33,63,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#17345E]"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
          Открыть WhatsApp
        </a>

        <p className="mx-auto mt-5 max-w-sm text-[13px] leading-5 text-[#7A6858]">
          Если WhatsApp не открылся автоматически, нажмите кнопку выше.
        </p>
      </section>
    </main>
  );
}