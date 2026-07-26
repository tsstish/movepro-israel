const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://moveproisrael.online/#organization",
  name: "MovePro Israel",
  url: "https://moveproisrael.online",
  logo: "https://moveproisrael.online/icon.png",
  description:
    "Квартирные, офисные и междугородние переезды в Хайфе и по всему Израилю. Упаковка, защита мебели и аккуратная перевозка вещей.",
  telephone: "+972546745954",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972546745954",
    contactType: "customer service",
    availableLanguage: ["Russian", "Hebrew", "English"],
    areaServed: "IL",
  },
  areaServed: {
    "@type": "Country",
    name: "Israel",
  },
  sameAs: [
    "https://www.facebook.com/moveproisrael/",
    "https://t.me/movepro_israel",
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
