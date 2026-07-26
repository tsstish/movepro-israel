import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moveproisrael.online"),

  title: {
    default: "MovePro Israel — переезды в Хайфе и по всему Израилю",
    template: "%s | MovePro Israel",
  },

  description:
    "Квартирные, офисные и междугородние переезды в Хайфе и по всему Израилю. Упаковка, защита мебели, перевозка вещей и помощь с организацией переезда.",

  applicationName: "MovePro Israel",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "переезды Израиль",
    "переезд Хайфа",
    "перевозки Хайфа",
    "квартирный переезд Хайфа",
    "офисный переезд Хайфа",
    "междугородний переезд Израиль",
    "перевозка мебели Хайфа",
    "грузчики Хайфа",
    "moving company Haifa",
    "movers Haifa",
    "moving Israel",
    "MovePro Israel",
  ],

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "MovePro Israel",
    title: "MovePro Israel — переезды в Хайфе и по всему Израилю",
    description:
      "Квартирные, офисные и междугородние переезды. Упаковка, защита мебели и аккуратная перевозка вещей.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MovePro Israel — переезды в Хайфе и по всему Израилю",
    description:
      "Квартирные, офисные и междугородние переезды. Упаковка и аккуратная перевозка вещей.",
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
