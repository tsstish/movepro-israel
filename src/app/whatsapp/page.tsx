"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const PHONE = "972546745954";
const ATTRIBUTION_KEY = "movepro_attribution";

type Attribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  gclid?: string;
};

type WhatsAppParams = {
  cta: string;
  type: string;
  from: string;
  to: string;
  floorFrom: string;
  floorTo: string;
  lang: string;
};

function getStoredAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function WhatsAppRedirectPage() {
  const [attribution, setAttribution] = useState<Attribution>({});

  const [params, setParams] = useState<WhatsAppParams>({
    cta: "website",
    type: "",
    from: "",
    to: "",
    floorFrom: "",
    floorTo: "",
    lang: "ru",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    setParams({
      cta: searchParams.get("cta") || "website",
      type: searchParams.get("type") || "",
      from: searchParams.get("from") || "",
      to: searchParams.get("to") || "",
      floorFrom: searchParams.get("floorFrom") || "",
      floorTo: searchParams.get("floorTo") || "",
      lang: searchParams.get("lang") === "he" ? "he" : "ru",
    });

    setAttribution(getStoredAttribution());
  }, []);

  const { cta, type, from, to, floorFrom, floorTo, lang } = params;
  const isHebrew = lang === "he";

  const isGoogleAds = attribution.source === "google_ads";

  const message = useMemo(() => {
    const lines = [
      isHebrew ? "שלום! אשמח לקבל הצעת מחיר להובלה דרך האתר של MovePro Israel." : "Здравствуйте! Хочу рассчитать переезд с сайта MovePro Israel.",
    ];

    if (type) lines.push(isHebrew ? `מה מעבירים: ${type}.` : `Что перевозим: ${type}.`);
    if (from) lines.push(isHebrew ? `מאיפה: ${from}.` : `Откуда: ${from}.`);
    if (to) lines.push(isHebrew ? `לאן: ${to}.` : `Куда: ${to}.`);
    if (floorFrom) lines.push(isHebrew ? `במוצא — קומה / מעלית: ${floorFrom}.` : `Откуда — этаж / лифт: ${floorFrom}.`);
    if (floorTo) lines.push(isHebrew ? `ביעד — קומה / מעלית: ${floorTo}.` : `Куда — этаж / лифт: ${floorTo}.`);

    return lines.join("\n");
  }, [isHebrew, type, from, to, floorFrom, floorTo]);

  const whatsappUrl = useMemo(
    () =>
      `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(
        message
      )}&type=phone_number&app_absent=0`,
    [message]
  );

  useEffect(() => {
    if (!params.cta) return;

    window.gtag?.("event", "whatsapp_redirect", {
      cta_location: cta,
      language: lang,
      traffic_source: isGoogleAds
        ? "google_ads"
        : attribution.source || "website",
      transport_type: "beacon",
    });

    const timer = window.setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [
    whatsappUrl,
    cta,
    isGoogleAds,
    attribution.source,
    params.cta,
    lang,
  ]);

  return (
    <main lang={isHebrew ? "he" : "ru"} dir={isHebrew ? "rtl" : "ltr"} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4EFE7] px-5 py-10 text-[#101827]">
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
          {isHebrew ? "מעבר לוואטסאפ" : "Переход в WhatsApp"}
        </div>

        <h1 className="text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213F] sm:text-[42px]">
          {isHebrew ? "פותחים את WhatsApp…" : "Открываем WhatsApp…"}
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[16px] leading-7 text-[#5B6573]">
          {isHebrew ? "ההודעה כבר מוכנה — נשאר רק לשלוח אותה." : "Сообщение уже подготовлено — вам останется только отправить его."}
        </p>

        <div className="mx-auto mt-5 max-w-md rounded-[22px] border border-[#E7CDAE]/65 bg-[#FFF9F0]/75 px-4 py-3 text-[13px] leading-5 text-[#7A6858]">
          {isHebrew ? "לאחר שליחת ההודעה ייתכן שנבקש תמונות או סרטון קצר כדי להעריך את היקף ההובלה." : "После сообщения мы попросим фото или короткое видео вещей — так проще оценить объём переезда."}
        </div>

        <a
          href={whatsappUrl}
          data-cta="whatsapp-redirect-fallback"
          className="mx-auto mt-7 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#10213F] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_42px_rgba(16,33,63,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#17345E]"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
          {isHebrew ? "פתיחת WhatsApp" : "Открыть WhatsApp"}
        </a>

        <p className="mx-auto mt-5 max-w-sm text-[13px] leading-5 text-[#7A6858]">
          {isHebrew ? "אם WhatsApp לא נפתח אוטומטית, לחצו על הכפתור למעלה." : "Если WhatsApp не открылся автоматически, нажмите кнопку выше."}
        </p>
      </section>
    </main>
  );
}
