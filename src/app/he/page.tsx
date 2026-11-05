import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, Building2, CheckCircle2, MapPin, MessageCircle, PackageCheck, Phone, ShieldCheck, Sofa, Truck, Home } from "lucide-react";
import HebrewEstimate from "@/components/HebrewEstimate";
import HebrewServicesSection from "@/components/he/HebrewServicesSection";
import HebrewPriceFactorsSection from "@/components/he/HebrewPriceFactorsSection";
import HebrewProcessSection from "@/components/he/HebrewProcessSection";
import HebrewGeographySection from "@/components/he/HebrewGeographySection";
import HebrewTrustSection from "@/components/he/HebrewTrustSection";
import HebrewFAQSection from "@/components/he/HebrewFAQSection";
import HebrewFinalCTASection from "@/components/he/HebrewFinalCTASection";
import HebrewFooter from "@/components/he/HebrewFooter";


export const metadata: Metadata = {
  title: "הובלות בחיפה ובכל הארץ | MovePro Israel",
  description: "הובלות דירות, בתים ומשרדים בחיפה, בקריות ובכל הארץ. הובלת רהיטים ומכשירי חשמל, אריזה, פירוק והרכבת רהיטים. קבלו הצעת מחיר בוואטסאפ.",
  alternates: { canonical: "https://moveproisrael.online/he", languages: { "he-IL": "https://moveproisrael.online/he", "ru-IL": "https://moveproisrael.online/" } },
  openGraph: { title: "MovePro Israel | הובלות בחיפה ובכל הארץ", description: "הובלות דירות, משרדים ורהיטים עם צוות מחיפה. דברו איתנו לקבלת הצעת מחיר.", url: "https://moveproisrael.online/he", locale: "he_IL", siteName: "MovePro Israel", type: "website", images: ["/opengraph-image.jpg"] },
};

const services = [
  { icon: Home, image: "/images/service-apartment.webp", title: "הובלות דירה ובית", description: "מעבר דירה או בית עם תכנון מוקדם וטיפול זהיר בחפצים שלכם." },
  { icon: Building2, image: "/images/service-office.webp", title: "הובלות משרדים", description: "העברת משרדים וציוד עסקי בהתאם לצרכים וללוח הזמנים שלכם." },
  { icon: Sofa, image: "/images/service-furniture.webp", title: "רהיטים ומכשירי חשמל", description: "הובלת ספות, ארונות, מקררים, מכשירי חשמל ופריטים בודדים." },
  { icon: PackageCheck, image: "/images/service-packing.webp", title: "אריזה ופירוק רהיטים", description: "שירותי אריזה, הגנה על הרהיטים, פירוק והרכבה לפי הצורך." },
];
const steps = [
  ["01", "פונים אלינו", "מספרים לנו מה צריך להעביר ולאן."],
  ["02", "מתאמים את הפרטים", "בודקים נפח, קומות, מעלית וגישה למשאית."],
  ["03", "מתכוננים למעבר", "מתאמים אריזה והגנה על חפצים לפי הצורך."],
  ["04", "מבצעים את ההובלה", "מעמיסים, מובילים ופורקים בכתובת החדשה."],
];
const faq = [
  ["איך מקבלים הצעת מחיר?", "שלחו לנו הודעה בוואטסאפ עם הערים או הכתובות, סוג ההובלה, הקומות והאם יש מעלית. במידת הצורך נבקש תמונות או סרטון קצר כדי להעריך את היקף העבודה."],
  ["האם אתם מובילים גם פריטים בודדים?", "כן. ניתן לפנות אלינו גם לגבי ספה, ארון, מקרר או מספר פריטים. הזמינות והמחיר תלויים במסלול ובפרטי ההובלה."],
  ["האם ניתן להזמין שירותי אריזה?", "כן, אפשר לתאם מראש אריזה והגנה על רהיטים, מכשירי חשמל וחפצים."],
  ["האם אתם מפרקים ומרכיבים רהיטים?", "אפשר לתאם פירוק והרכבה לפי סוג הרהיט ודרישות ההובלה."],
  ["אתם עובדים רק בחיפה?", "לא. הצוות שלנו מחיפה ואנחנו מבצעים הובלות מקומיות ובין־עירוניות ברחבי ישראל."],
];
const wa = "/whatsapp?lang=he";

export default function HebrewPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return (
    <main lang="he" dir="rtl" className="overflow-x-hidden bg-[#F4EFE7] text-[#10213F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:py-6">
        <a href="/he" className="flex items-center gap-2">
          <Image src="/images/logo-heart.png" alt="MovePro Israel" width={65} height={65} className="object-contain" priority />
          <span className="flex flex-col"><strong className="text-base sm:text-2xl" dir="ltr">MovePro Israel</strong><small className="text-[#647084]">עוברים בראש שקט</small></span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a href="/api/language?lang=ru" lang="ru" dir="ltr" className="rounded-full border border-[#10213F]/20 px-3 py-2 text-xs font-semibold hover:bg-white">RU</a>
          <a href="#services" className="hidden text-sm font-medium sm:block">השירותים שלנו</a>
          <a href={wa} data-cta="he-header" className="rounded-full bg-[#10213F] px-4 py-2.5 text-xs font-semibold text-white sm:text-sm">הצעת מחיר</a>
        </nav>
      </header>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-5 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
        <div>
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#2B5D8C]"><MapPin size={18} /> צוות מחיפה · הובלות בכל הארץ</div>
          <h1 className="max-w-2xl text-[clamp(40px,6vw,75px)] font-semibold leading-[1.1] tracking-tight">הובלות בחיפה ובכל הארץ <span className="relative mt-2 block w-fit text-[#2B5D8C]">בראש שקט<svg className="absolute -bottom-3 right-0 h-4 w-full" viewBox="0 0 260 30" fill="none" aria-hidden="true"><path d="M5 20C70 4 175 4 255 18" stroke="#9EB6C9" strokeWidth="4" strokeLinecap="round"/></svg></span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#536174] sm:text-lg">מעבירים דירות, בתים, משרדים וגם פריטים בודדים. מתכננים יחד את המעבר, דואגים לחפצים שלכם ומובילים אותם ליעד.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={wa} data-cta="he-hero" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#10213F] px-7 font-semibold text-white shadow-xl"><MessageCircle size={20}/> קבלת הצעת מחיר בוואטסאפ <ArrowLeft size={18}/></a>
            <a href="tel:+972546745954" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-[#10213F]/20 bg-white/70 px-7 font-semibold"><Phone size={18}/> התקשרו אלינו</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#536174]"><span className="flex items-center gap-1"><ShieldCheck size={17}/> מתאמים את כל הפרטים מראש</span><span className="flex items-center gap-1"><CheckCircle2 size={17}/> שומרים על הרהיטים</span><span className="flex items-center gap-1"><Truck size={17}/> הובלות בכל הארץ</span></div>
        </div>
        <div className="relative h-[310px] overflow-hidden rounded-[32px] shadow-2xl sm:h-[420px]">
          <Image src="/images/hero-moving.webp" alt="הובלות דירות ורהיטים עם MovePro Israel" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10213F]/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 left-6 rounded-2xl border border-white/20 bg-white/85 p-4 backdrop-blur"><strong className="text-lg">המעבר שלכם. האחריות שלנו.</strong><p className="mt-1 text-sm text-[#536174]">מדברים מראש, מתכננים נכון ומובילים בזהירות.</p></div>
        </div>
      </section>
      <HebrewEstimate />
      <HebrewServicesSection />
      <HebrewPriceFactorsSection />
      <HebrewProcessSection />
      <HebrewGeographySection />
      <HebrewTrustSection />
      <HebrewFAQSection />
      <HebrewFinalCTASection />
      <HebrewFooter />
      <div className="h-20 lg:hidden"/><div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/50 bg-[#F4EFE7]/95 p-3 backdrop-blur lg:hidden"><div className="mx-auto flex max-w-md gap-2"><a href={wa} data-cta="he-sticky" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#10213F] font-semibold text-white"><MessageCircle size={18}/> שלחו הודעה</a><a href="tel:+972546745954" aria-label="התקשרו" className="flex h-12 w-14 items-center justify-center rounded-2xl bg-white"><Phone size={19}/></a></div></div>
    </main>
  );
}
