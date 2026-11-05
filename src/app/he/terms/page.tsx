import type { Metadata } from "next";
import HebrewLegalPage from "@/components/he/HebrewLegalPage";
export const metadata: Metadata = {
  title: "תנאי שימוש | MovePro Israel",
  description: "תנאי השימוש באתר MovePro Israel ומידע על קבלת הצעת מחיר להובלה.",
  alternates: { canonical: "/he/terms", languages: { "he-IL": "/he/terms", "ru-IL": "/terms" } },
  robots: { index: true, follow: true },
};
export default function Page() { return <HebrewLegalPage kind="terms" />; }
