import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import QuickEstimateSection from "@/components/sections/QuickEstimateSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PriceFactorsSection from "@/components/sections/PriceFactorsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GeographySection from "@/components/sections/GeographySection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import SmartWhatsAppPrompt from "@/components/SmartWhatsAppPrompt";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Переезды в Хайфе и по Израилю | MovePro Israel",
  description:
    "Квартирные, офисные и междугородние переезды в Хайфе и по Израилю. Перевозка мебели и техники, упаковка, разборка и сборка мебели. MovePro Israel.",
  alternates: {
    canonical: "https://moveproisrael.online/",
  },
  openGraph: {
    title: "Переезды в Хайфе и по Израилю | MovePro Israel",
    description:
      "Квартирные, офисные и междугородние переезды. Упаковка, мебель, техника и перевозки по Израилю.",
    url: "https://moveproisrael.online/",
    siteName: "MovePro Israel",
    locale: "ru_IL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MovePro Israel — переезды в Хайфе и по Израилю",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как узнать стоимость переезда?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость зависит от маршрута, объёма вещей, этажей, лифта, условий доступа, упаковки и особенностей мебели или техники. После первого обращения MovePro Israel уточняет детали, необходимые для расчёта.",
      },
    },
    {
      "@type": "Question",
      name: "Зачем нужны фото или видео вещей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "По фото или короткому видео проще оценить реальный объём вещей, размеры мебели и особенности перевозки.",
      },
    },
    {
      "@type": "Question",
      name: "Вы перевозите несколько вещей или только целые квартиры?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MovePro Israel выполняет переезды квартир и домов, а также перевозку отдельных вещей, мебели и техники.",
      },
    },
    {
      "@type": "Question",
      name: "Можно заказать упаковку вещей?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. При необходимости используются коробки, найлон, защитные плёнки и другие материалы для мебели, техники и личных вещей.",
      },
    },
    {
      "@type": "Question",
      name: "Вы разбираете и собираете мебель?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если для перевозки мебель необходимо разобрать, это можно заранее включить в организацию переезда.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете только в Хайфе?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Нет. Команда MovePro Israel находится в Хайфе и выполняет локальные и междугородние переезды по Израилю.",
      },
    },
    {
      "@type": "Question",
      name: "Что сообщить для расчёта?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Обычно достаточно сообщить, что нужно перевезти, адреса или города, этажи и наличие лифта. Затем MovePro Israel уточнит недостающие детали.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HeroSection />

      <QuickEstimateSection />

      <ServicesSection />

      <PriceFactorsSection />

      <ProcessSection />

      <GeographySection />

      <TrustSection />

      <FAQSection />

      <FinalCTASection />

      <Footer />

      <SmartWhatsAppPrompt />
      <MobileStickyCTA />
    </main>
  );
}
