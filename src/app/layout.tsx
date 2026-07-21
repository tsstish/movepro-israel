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
  metadataBase: new URL("https://movepro-israel.vercel.app"),

  title: {
    default: "MovePro Israel — переезд без стресса по Израилю",
    template: "%s | MovePro Israel",
  },

  description:
    "MovePro Israel — квартирные, офисные и междугородние переезды из Хайфы по всему Израилю. Упаковка, защита мебели и аккуратная перевозка вещей.",

  applicationName: "MovePro Israel",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "переезды Израиль",
    "переезд Хайфа",
    "квартирный переезд",
    "офисный переезд",
    "междугородний переезд",
    "перевозка мебели",
    "грузчики Хайфа",
    "MovePro Israel",
  ],

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "MovePro Israel",
    title: "MovePro Israel — переезд без стресса",
    description:
      "Квартирные, офисные и междугородние переезды из Хайфы по всему Израилю.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MovePro Israel — переезд без стресса",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MovePro Israel — переезд без стресса",
    description: "Аккуратные переезды из Хайфы по всему Израилю.",
    images: ["/opengraph-image.jpg"],
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