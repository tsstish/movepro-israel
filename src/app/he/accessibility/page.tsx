import type { Metadata } from "next";
import HebrewLegalPage from "@/components/he/HebrewLegalPage";
export const metadata: Metadata = {
  title: "הצהרת נגישות | MovePro Israel",
  description: "הצהרת הנגישות של MovePro Israel ודרכי יצירת קשר לקבלת סיוע.",
  alternates: { canonical: "/he/accessibility", languages: { "he-IL": "/he/accessibility", "ru-IL": "/accessibility" } },
  robots: { index: true, follow: true },
};
export default function Page() { return <HebrewLegalPage kind="accessibility" />; }
