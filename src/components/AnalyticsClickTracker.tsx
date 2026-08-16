"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href) return;

      if (href.startsWith("https://wa.me/")) {
        window.gtag?.("event", "whatsapp_click", {
          link_url: href,
          link_text: link.textContent?.trim() || "",
        });
      }

      if (href.startsWith("tel:")) {
        window.gtag?.("event", "phone_click", {
          link_url: href,
          link_text: link.textContent?.trim() || "",
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}