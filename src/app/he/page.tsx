import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, Building2, CheckCircle2, MapPin, MessageCircle, PackageCheck, Phone, ShieldCheck, Sofa, Truck, Home } from "lucide-react";
import HebrewEstimate from "@/components/HebrewEstimate";

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
      <section id="services" className="relative scroll-mt-20 overflow-hidden bg-[#F4EFE7] px-5 py-8 text-[#101827]">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="mb-2 text-xs font-semibold text-[#2B5D8C]">השירותים של MovePro Israel</p><h2 className="max-w-xl text-[32px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#10213F] md:text-[42px]">הובלות לבית, למשרד ולכל מה שחשוב לכם</h2></div>
            <p className="max-w-md text-[15px] leading-6 text-[#5B6573]">מתכננים, אורזים לפי הצורך, מעמיסים ומובילים בזהירות — כדי שהמעבר יהיה פשוט ומסודר יותר.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative isolate overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-white/82 via-[#F8FBFF]/78 to-[#EEF3F6]/72 p-6 shadow-[0_24px_60px_rgba(16,33,63,0.08)] backdrop-blur-xl">
              <p className="mb-3 text-sm font-medium text-[#8A735F]">לא רק סבלים</p>
              <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#10213F]">אנחנו מתכננים את ההובלה, כדי שאתם תוכלו להתרכז בבית החדש.</h3>
              <p className="mt-4 text-[15px] leading-6 text-[#4B5563]">נייעץ איך להכין את החפצים, מה כדאי לארוז בנפרד ואילו חומרי אריזה מתאימים. מתייחסים בזהירות גם לרהיטים פשוטים וגם לפריטים יקרי ערך.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map((service) => { const Icon = service.icon; return (
                <article key={service.title} className="group grid grid-cols-[96px_1fr] overflow-hidden rounded-[24px] border border-white/70 bg-white/66 shadow-[0_12px_30px_rgba(16,33,63,0.06)] backdrop-blur-xl transition duration-300 sm:block sm:hover:-translate-y-1">
                  <div className="relative min-h-[112px] overflow-hidden sm:h-28 sm:min-h-0"><Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 96px" className="object-cover transition duration-700 sm:group-hover:scale-105" /></div>
                  <div className="p-3.5 sm:p-4"><div className="mb-2 flex items-center gap-2.5 sm:mb-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[14px] border border-[#BFD2EA]/70 bg-[#EAF3FB] text-[#2B5D8C] sm:h-10 sm:w-10"><Icon size={18}/></div><h3 className="text-[15px] font-semibold leading-tight text-[#10213F] sm:text-base">{service.title}</h3></div><p className="text-[12.5px] leading-5 text-[#5B6573] sm:text-[13.5px]">{service.description}</p></div>
                </article>
              ); })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#10213F] px-5 py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div><p className="text-sm font-bold text-[#E7CDAE]">כמה עולה הובלה?</p><h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">מחיר ההובלה תלוי בפרטים</h2><p className="mt-4 max-w-xl leading-7 text-white/70">כדי לתת הצעת מחיר מתאימה, חשוב להבין את היקף ההובלה ואת התנאים בשתי הכתובות.</p></div>
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">{["מרחק ומסלול","כמות החפצים","קומות ומעלית","רהיטים ומכשירי חשמל","שירותי אריזה","גישה וחניה"].map(t=><div key={t} className="rounded-xl border border-white/15 p-4"><CheckCircle2 className="mb-3 text-[#E7CDAE]" size={20}/>{t}</div>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16"><p className="text-sm font-bold text-[#2B5D8C]">איך זה עובד?</p><h2 className="mt-2 text-3xl font-semibold sm:text-5xl">ארבעה צעדים למעבר</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([num,title,desc])=><div key={num} className="rounded-2xl border border-white/70 bg-white/65 p-5"><span className="text-sm font-semibold text-[#2B5D8C]">{num}</span><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#536174]">{desc}</p></div>)}</div></section>
      <section className="border-y border-[#10213F]/10 bg-white/45 px-5 py-12"><div className="mx-auto max-w-7xl"><p className="flex items-center gap-2 text-sm font-bold text-[#2B5D8C]"><MapPin size={18}/> אזורי שירות</p><h2 className="mt-2 text-3xl font-semibold sm:text-5xl">מחיפה לכל רחבי ישראל</h2><p className="mt-4 max-w-3xl leading-7 text-[#536174]">הובלות בחיפה, בקריות, בנשר, בטירת כרמל, בעכו, בנהריה, בכרמיאל, בעפולה, בתל אביב, בירושלים ובערים נוספות. גם הובלות בין־עירוניות.</p></div></section>
      <section className="mx-auto max-w-7xl px-5 py-12"><p className="text-sm font-bold text-[#2B5D8C]">שאלות נפוצות</p><h2 className="mt-2 text-3xl font-semibold sm:text-5xl">מה כדאי לדעת לפני המעבר?</h2><div className="mt-7 grid gap-3">{faq.map(([q,a])=><details key={q} className="group rounded-2xl border border-white/80 bg-white/70 p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 max-w-4xl text-sm leading-7 text-[#536174]">{a}</p></details>)}</div></section>
      <section className="mx-auto max-w-7xl px-5 pb-12"><div className="rounded-[28px] bg-[#E8EEF3] p-7 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-10"><div><h2 className="text-2xl font-semibold sm:text-4xl">מתכננים מעבר דירה?</h2><p className="mt-2 text-[#536174]">שלחו לנו את הפרטים ונמשיך בוואטסאפ.</p></div><a href={wa} data-cta="he-final" className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#10213F] px-6 font-semibold text-white sm:mt-0"><MessageCircle size={19}/> דברו איתנו בוואטסאפ</a></div></section>
      <footer className="bg-[#10213F] px-5 py-8 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row"><div><strong dir="ltr">MovePro Israel</strong><p className="mt-2 text-sm text-white/60">הובלות דירות, משרדים ורהיטים בחיפה ובכל הארץ.</p></div><div className="flex flex-wrap gap-5 text-sm"><a href="tel:+972546745954" dir="ltr">054-674-5954</a><a href={wa}>WhatsApp</a><a href="/api/language?lang=ru">Русский</a><a href="/privacy">מדיניות פרטיות</a><a href="/accessibility">הצהרת נגישות</a><a href="/terms">תנאי שימוש</a></div></div><div className="mx-auto mt-5 max-w-7xl border-t border-white/10 pt-4 text-xs text-white/50">© 2026 MovePro Israel</div></footer>
      <div className="h-20 lg:hidden"/><div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/50 bg-[#F4EFE7]/95 p-3 backdrop-blur lg:hidden"><div className="mx-auto flex max-w-md gap-2"><a href={wa} data-cta="he-sticky" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#10213F] font-semibold text-white"><MessageCircle size={18}/> שלחו הודעה</a><a href="tel:+972546745954" aria-label="התקשרו" className="flex h-12 w-14 items-center justify-center rounded-2xl bg-white"><Phone size={19}/></a></div></div>
    </main>
  );
}
