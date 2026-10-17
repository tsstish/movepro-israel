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
  title: "Переезды в Тель-Авиве и Центре Израиля",
  description:
    "Квартирные, домашние и офисные переезды в Тель-Авиве и по Центру Израиля. Бат-Ям, Холон, Ришон-ле-Цион, Рамат-Ган и другие города. Перевозка мебели, упаковка, разборка и сборка.",
  alternates: {
    canonical: "https://moveproisrael.online/pereezd/centre",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Переезды в Тель-Авиве и Центре Израиля | MovePro Israel",
    description:
      "Переезды квартир, домов и офисов в Тель-Авиве, Бат-Яме, Холоне, Ришон-ле-Ционе и других городах Центра Израиля.",
    url: "https://moveproisrael.online/pereezd/centre",
    siteName: "MovePro Israel",
    locale: "ru_IL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MovePro Israel — переезды в Тель-Авиве и Центре Израиля",
      },
    ],
  },
};

const centrePlaces = [
  "Тель-Авив",
  "Бат-Ям",
  "Холон",
  "Ришон-ле-Цион",
  "Рамат-Ган",
  "Гиватаим",
  "Петах-Тиква",
  "Бней-Брак",
  "Герцлия",
  "Рамат-ха-Шарон",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит переезд в Тель-Авиве и по Центру?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Стоимость зависит от маршрута, объёма вещей, этажей, наличия лифта, условий доступа, упаковки и особенностей мебели или техники. Для расчёта можно отправить основные данные и фото или видео вещей.",
      },
    },
    {
      "@type": "Question",
      name: "В каких городах Центра работает MovePro Israel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MovePro Israel выполняет переезды в Тель-Авиве, Бат-Яме, Холоне, Ришон-ле-Ционе, Рамат-Гане, Гиватаиме, Петах-Тикве и других городах Центра Израиля.",
      },
    },
    {
      "@type": "Question",
      name: "Можно заказать квартирный или офисный переезд?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. MovePro Israel выполняет переезды квартир, домов и офисов, а также перевозку отдельных вещей, мебели и техники.",
      },
    },
  ],
};

export default function CentreMovingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HeroSection
        eyebrow="Переезды по Тель-Авиву и Центру Израиля."
        title="Переезды в Тель-Авиве и по Центру Израиля"
        description="Квартиры, дома, офисы и отдельные вещи. Перевозим по Тель-Авиву, Бат-Яму, Холону, Ришон-ле-Циону и другим городам Центра. Поможем с упаковкой и разборкой мебели."
        mobileBenefit="Тель-Авив и Центр"
        mapImageSrc="/images/israel-map-centre.png"
        mapImageAlt="Карта переездов по Центру Израиля"
      />

      <QuickEstimateSection
        fromPlaceholder="Тель-Авив"
        toPlaceholder="Бат-Ям"
      />

      <ServicesSection />

      <section className="relative overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827] lg:py-12">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/55 shadow-[0_22px_60px_rgba(16,33,63,0.07)] backdrop-blur-xl lg:rounded-[40px]">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#D9E7F2]/45 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#E8D9C7]/45 blur-3xl" />

      <div className="relative grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
            Переезды по Центру
          </p>

          <h2 className="mt-3 max-w-xl text-[32px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213F] md:text-[46px]">
            Квартирные и офисные переезды по Тель-Авиву и Центру
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#5B6573]">
            Организуем переезд квартиры, дома или офиса в Тель-Авиве,
            Бат-Яме, Холоне, Ришон-ле-Ционе, Рамат-Гане и других городах
            Центра Израиля.
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5B6573]">
            Если нужны упаковка, защита мебели, разборка или сборка —
            включим это в организацию переезда заранее.
          </p>
        </div>

        <div className="relative border-t border-[#10213F]/8 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A735F]">
            Основные направления
          </p>

          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3 text-[15px] font-medium text-[#10213F]">
            {[
              "Тель-Авив",
              "Бат-Ям",
              "Холон",
              "Ришон-ле-Цион",
              "Рамат-Ган",
              "Гиватаим",
              "Петах-Тиква",
              "Герцлия",
            ].map((city, index, cities) => (
              <span key={city} className="inline-flex items-center">
                {city}
                {index !== cities.length - 1 && (
                  <span className="ml-2 text-[#D8B98C]">•</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-[#10213F]/10 pt-6">
            <p className="max-w-xl text-[17px] font-semibold leading-6 text-[#10213F]">
              Для предварительного расчёта не нужен длинный список вещей.
            </p>

            <p className="mt-2 max-w-xl text-[14px] leading-6 text-[#657080]">
              Напишите маршрут, этажи и наличие лифта. Фото или короткое видео
              помогут быстрее оценить объём и условия переезда.
            </p>

            <a
              href="/whatsapp?cta=centre-content"
              className="mt-5 inline-flex min-h-[48px] items-center rounded-full bg-[#10213F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(16,33,63,0.16)] transition hover:-translate-y-0.5 hover:bg-[#17345E]"
            >
              Рассчитать переезд
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <PriceFactorsSection />

      <ProcessSection />

      <GeographySection
        title="Переезды по Тель-Авиву и Центру Израиля"
        description="MovePro Israel выполняет квартирные, домашние и офисные переезды по Центру Израиля, а также перевозку мебели, техники и отдельных вещей."
        places={centrePlaces}
        placesLabel="Работаем в Центре Израиля"
        note="Нужного города нет в списке? Напишите нам — маршрут и возможность переезда обсудим индивидуально."
      />

      <TrustSection />

      <FAQSection
        locationQuestion="В каких городах Центра вы работаете?"
        locationAnswer="Работаем в Тель-Авиве, Бат-Яме, Холоне, Ришон-ле-Ционе, Рамат-Гане, Гиватаиме, Петах-Тикве и других городах Центра Израиля."
      />

      <FinalCTASection />

      <Footer />

      <SmartWhatsAppPrompt />
      <MobileStickyCTA />
    </main>
  );
}