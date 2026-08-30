"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_KEY = "movepro_attribution";

type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  gclid: string;
};

function detectAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);

  const gclid = params.get("gclid") || "";
  const source = params.get("utm_source") || "";
  const medium = params.get("utm_medium") || "";
  const campaign = params.get("utm_campaign") || "";

  if (gclid) {
    return {
      source: "google_ads",
      medium: medium || "cpc",
      campaign,
      gclid,
    };
  }

  const normalizedSource = source.toLowerCase();
  const normalizedMedium = medium.toLowerCase();

  if (
    normalizedSource.includes("google") &&
    ["cpc", "ppc", "paid", "paid_search"].includes(normalizedMedium)
  ) {
    return {
      source: "google_ads",
      medium,
      campaign,
      gclid,
    };
  }

  if (
    normalizedSource.includes("facebook") ||
    normalizedSource.includes("instagram") ||
    normalizedSource.includes("meta")
  ) {
    return {
      source: "meta",
      medium,
      campaign,
      gclid,
    };
  }

  return {
    source: source || "website",
    medium,
    campaign,
    gclid,
  };
}

function getSectionName(link: HTMLAnchorElement) {
  if (link.dataset.cta) return link.dataset.cta;

  const section = link.closest("section");
  if (section?.id) return section.id;

  const footer = link.closest("footer");
  if (footer) return "footer";

  return "unknown";
}

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const current = detectAttribution();

    // Не затираем рекламный источник обычным внутренним переходом.
    if (
      current.gclid ||
      current.source === "google_ads" ||
      current.source === "meta" ||
      new URLSearchParams(window.location.search).has("utm_source")
    ) {
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
    } else if (!sessionStorage.getItem(ATTRIBUTION_KEY)) {
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(current));
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;

      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const isInternalWhatsApp =
        href === "/whatsapp" ||
        href.startsWith("/whatsapp?");

      const isDirectWhatsApp =
        href.startsWith("https://wa.me/") ||
        href.startsWith("https://api.whatsapp.com/");

      if (isInternalWhatsApp || isDirectWhatsApp) {
        const ctaLocation = getSectionName(link);

        window.gtag?.("event", "whatsapp_click", {
          link_url: href,
          link_text: link.textContent?.trim() || "",
          cta_location: ctaLocation,
          transport_type: "beacon",
        });

        // Для внутренних CTA передаём место клика на страницу /whatsapp.
        if (isInternalWhatsApp) {
          event.preventDefault();

          const destination = new URL(href, window.location.origin);

          if (!destination.searchParams.has("cta")) {
            destination.searchParams.set("cta", ctaLocation);
          }

          window.setTimeout(() => {
            window.location.href =
              destination.pathname + destination.search;
          }, 180);
        }
      }

      if (href.startsWith("tel:")) {
        window.gtag?.("event", "phone_click", {
          link_url: href,
          link_text: link.textContent?.trim() || "",
          cta_location: getSectionName(link),
          transport_type: "beacon",
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
