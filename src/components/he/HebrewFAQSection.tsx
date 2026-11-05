"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    question: "איך מקבלים הצעת מחיר להובלה?",
    answer:
      "המחיר תלוי במסלול, בכמות החפצים, בקומות, במעלית ובגישה למשאית. שלחו לנו את פרטי ההובלה בוואטסאפ ונחזור אליכם עם שאלות נוספות לפי הצורך.",
  },
  {
    question: "למה כדאי לשלוח תמונות או סרטון?",
    answer:
      "תמונות או סרטון קצר עוזרים להבין כמה ציוד יש, מה גודל הרהיטים ואם נדרשת היערכות מיוחדת. נסביר לכם מה כדאי לצלם.",
  },
  {
    question: "אפשר להזמין הובלה של כמה פריטים בלבד?",
    answer:
      "כן. אפשר לפנות אלינו גם לגבי הובלת ספה, מקרר, ארון או כמה פריטים. המחיר והזמינות תלויים במסלול ובפרטי ההובלה.",
  },
  {
    question: "אתם מספקים גם שירותי אריזה?",
    answer:
      "כן. אפשר לתאם מראש אריזה והגנה על רהיטים, מוצרי חשמל וחפצים אישיים.",
  },
  {
    question: "אתם מפרקים ומרכיבים רהיטים?",
    answer:
      "כן, בהתאם לסוג הרהיט. כדאי לציין מראש אילו רהיטים דורשים פירוק והרכבה.",
  },
  {
    question: "אתם מבצעים הובלות רק בחיפה?",
    answer:
      "לא. הצוות שלנו מחיפה, ואנחנו מבצעים הובלות בחיפה, בקריות, בצפון וגם הובלות בין־עירוניות בכל הארץ.",
  },
  {
    question: "אילו פרטים צריך לשלוח כדי לקבל מחיר?",
    answer:
      "כדאי לשלוח מה מעבירים, מאיזו עיר ולאיזו עיר, באילו קומות מדובר והאם יש מעלית. אפשר גם לשלוח תמונות של החפצים.",
  },
];

type HebrewFAQSectionProps = {
  locationQuestion?: string;
  locationAnswer?: string;
};

export default function HebrewFAQSection({
  locationQuestion = "אתם מבצעים הובלות רק בחיפה?",
  locationAnswer =
    "לא. הצוות שלנו מחיפה, ואנחנו מבצעים הובלות בחיפה, בקריות, בצפון וגם הובלות בין־עירוניות בכל הארץ.",
}: HebrewFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = faq.map((item) =>
    item.question === "אתם מבצעים הובלות רק בחיפה?"
      ? {
          question: locationQuestion,
          answer: locationAnswer,
        }
      : item
  );

  return (
    <section
      id="faq"
      className="relative bg-[#F4EFE7] px-5 py-10 text-[#101827]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#2B5D8C]">
              שאלות נפוצות
            </p>

            <h2 className="mt-3 max-w-lg text-[34px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#10213F] md:text-[46px]">
              מה כדאי לדעת לפני ההובלה?
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-6 text-[#5B6573]">
              לא מצאתם תשובה? שלחו לנו הודעה. לא חייבים לדעת את כל הפרטים כבר בפנייה הראשונה.
            </p>

            <a
              href="/whatsapp?lang=he&cta=faq"
              data-cta="faq"
              className="mt-6 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#10213F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_38px_rgba(16,33,63,0.16)] transition hover:-translate-y-0.5 hover:bg-[#17345E]"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              שאלו אותנו בוואטסאפ
            </a>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((item, index) => {
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
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-right"
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
