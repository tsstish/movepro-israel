import type { Metadata } from "next";
import HebrewLegalPage from "@/components/he/HebrewLegalPage";
export const metadata: Metadata = {
  title: "מדיניות פרטיות | MovePro Israel",
  description: "מדיניות הפרטיות של MovePro Israel: מידע אישי, פניות בוואטסאפ וניתוח שימוש באתר.",
  alternates: { canonical: "/he/privacy", languages: { "he-IL": "/he/privacy", "ru-IL": "/privacy" } },
  robots: { index: true, follow: true },
};
export default function Page() { return <HebrewLegalPage kind="privacy" />; }
