import type { Metadata } from "next";
import HebrewEstimate from "@/components/HebrewEstimate";
import HebrewHeroSection from "@/components/he/HebrewHeroSection";
import HebrewServicesSection from "@/components/he/HebrewServicesSection";
import HebrewPriceFactorsSection from "@/components/he/HebrewPriceFactorsSection";
import HebrewProcessSection from "@/components/he/HebrewProcessSection";
import HebrewGeographySection from "@/components/he/HebrewGeographySection";
import HebrewTrustSection from "@/components/he/HebrewTrustSection";
import HebrewFAQSection from "@/components/he/HebrewFAQSection";
import HebrewFinalCTASection from "@/components/he/HebrewFinalCTASection";
import HebrewFooter from "@/components/he/HebrewFooter";


export const metadata: Metadata = {
  title: "הובלות בחיפה והקריות | הובלות דירה בכל הארץ | MovePro Israel",
  description: "מחפשים חברת הובלות בחיפה והקריות? MovePro Israel מבצעת הובלות דירה, הובלות משרדים והובלות קטנות בצפון ובכל הארץ. דברו איתנו לקבלת הצעת מחיר בוואטסאפ.",
  alternates: { canonical: "https://moveproisrael.online/he", languages: { "he-IL": "https://moveproisrael.online/he", "ru-IL": "https://moveproisrael.online/" } },
  keywords: ["הובלות בחיפה", "הובלות בקריות", "הובלת דירה בחיפה", "חברת הובלות בחיפה", "הובלות קטנות בחיפה", "הובלות משרדים", "הובלות רהיטים", "שירותי אריזה", "הובלות בצפון", "הובלות בין עירוניות"],
  openGraph: { title: "MovePro Israel | הובלות בחיפה והקריות", description: "הובלות דירות, משרדים ורהיטים עם צוות מחיפה. דברו איתנו לקבלת הצעת מחיר.", url: "https://moveproisrael.online/he", locale: "he_IL", siteName: "MovePro Israel", type: "website", images: ["/opengraph-image.jpg"] },
};

const faq = [
  ["איך מקבלים הצעת מחיר?", "שלחו לנו הודעה בוואטסאפ עם הערים או הכתובות, סוג ההובלה, הקומות והאם יש מעלית. במידת הצורך נבקש תמונות או סרטון קצר כדי להעריך את היקף העבודה."],
  ["האם אתם מובילים גם פריטים בודדים?", "כן. ניתן לפנות אלינו גם לגבי ספה, ארון, מקרר או מספר פריטים. הזמינות והמחיר תלויים במסלול ובפרטי ההובלה."],
  ["האם ניתן להזמין שירותי אריזה?", "כן, אפשר לתאם מראש אריזה והגנה על רהיטים, מכשירי חשמל וחפצים."],
  ["האם אתם מפרקים ומרכיבים רהיטים?", "אפשר לתאם פירוק והרכבה לפי סוג הרהיט ודרישות ההובלה."],
  ["אתם עובדים רק בחיפה?", "לא. הצוות שלנו מחיפה ואנחנו מבצעים הובלות מקומיות ובין־עירוניות ברחבי ישראל."],
];

export default function HebrewPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return (
    <main lang="he" dir="rtl" className="overflow-x-hidden bg-[#F4EFE7] text-[#10213F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <HebrewHeroSection />
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
