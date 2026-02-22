import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

import { cookies } from "next/headers";

import "./globals.css";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  // ── Primary Meta ──────────────────────────────────────────────────────────
  title: {
    default: "Edward Gold | Buy & Sell Premium African Gold — Worldwide",
    template: "%s | Edward Gold",
  },
  description:
    "Edward Gold is a globally trusted gold trading and sourcing company headquartered in Kampala, Uganda. Founded by Trevor Jjingo. We supply 23+ carat African gold bars and nuggets with 97.6% purity at $120,000 USD/kg. Safe, transparent, and professional — serving buyers and sellers worldwide.",
  keywords: [
    // ── Brand ───────────────────────────────────────────────────────────────
    "Edward Gold",
    "Trevor Jjingo gold",
    "Edward Gold Uganda",

    // ── Global gold trading ─────────────────────────────────────────────────
    "gold trading worldwide",
    "international gold supplier",
    "buy gold internationally",
    "sell gold internationally",
    "African gold export",
    "gold bars for sale",
    "gold nuggets for sale",
    "gold investment",
    "gold commodity trading",
    "raw gold supplier",
    "wholesale gold supplier",
    "gold bullion supplier",

    // ── Regional: Africa ────────────────────────────────────────────────────
    "gold trading Uganda",
    "gold buying Uganda",
    "gold selling Uganda",
    "gold bars Kampala",
    "gold nuggets Uganda",
    "DRC gold",
    "Congo gold export",
    "East Africa gold supplier",
    "African gold bars",
    "Uganda gold export",

    // ── Regional: Middle East / Dubai ───────────────────────────────────────
    "gold supplier Dubai",
    "African gold Dubai",
    "Dubai gold trade",

    // ── Regional: Europe & Americas ─────────────────────────────────────────
    "African gold import Europe",
    "buy raw gold from Africa",
    "gold sourcing Africa",

    // ── Product specific ────────────────────────────────────────────────────
    "23 carat gold",
    "97.6% purity gold",
    "gold sourcing Kampala",
    "buy gold Uganda",
    "sell gold Uganda",
  ],
  authors: [{ name: "Trevor Jjingo", url: "https://edwardgold.com" }],
  creator: "Trevor Jjingo",
  publisher: "Edward Gold",
  category: "Finance & Commodities",

  // ── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: "https://edwardgold.com",
    languages: {
      // Serve English globally — add more locales here if you add translations
      "en": "https://edwardgold.com",
      "en-UG": "https://edwardgold.com",
      "x-default": "https://edwardgold.com",
    },
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ────────────────────
  openGraph: {
    type: "website",
    locale: "en_US", // en_US ranks better globally than en_UG
    url: "https://edwardgold.com",
    siteName: "Edward Gold",
    title: "Edward Gold | Premium African Gold Trading — Worldwide",
    description:
      "Buy or sell 23+ carat African gold bars and nuggets. 97.6% verified purity, transparent pricing at $120,000 USD/kg. Headquartered in Kampala, Uganda — trading globally. Contact us directly on WhatsApp: +256762804292.",
    images: [
      {
        url: "https://edwardgold.com/og-image.jpg", // replace with your real OG image
        width: 1200,
        height: 630,
        alt: "Edward Gold — Premium African Gold Trading Worldwide",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Edward Gold | Premium African Gold Trading — Worldwide",
    description:
      "Trusted gold trading globally. 23+ carat, 97.6% purity, $120K/kg. Sourced from DRC, Uganda & Dubai. Founded by Trevor Jjingo. WhatsApp: +256762804292.",
    images: ["https://edwardgold.com/og-image.jpg"], // replace with your real OG image
    // creator: "@yourTwitterHandle", // uncomment if you have a Twitter account
  },

  // ── Robots & Indexing ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── Web App / PWA hints ───────────────────────────────────────────────────
  applicationName: "Edward Gold",
  manifest: "/manifest.json", // optional: add a PWA manifest
  appleWebApp: {
    capable: true,
    title: "Edward Gold",
    statusBarStyle: "black-translucent",
  },

  // ── Verification (add your real tokens when ready) ────────────────────────
  verification: {
    // google: "your-google-site-verification-token",
    // yandex: "your-yandex-verification-token",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const getCookies = async () => {
    const cookieStore = await cookies();
    return {
      theme: cookieStore.get("theme")?.value,
      locale: cookieStore.get("NEXT_LOCALE")?.value ?? cookieStore.get("locale")?.value ?? "sw",
      gtlocale: cookieStore.get("googtrans")?.value
    };
  };

  const { theme: defaultTheme, locale, gtlocale } = await getCookies();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Structured Data: Organization (global reach signal to Google) ──── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Edward Gold",
              url: "https://edwardgold.com",
              logo: "https://edwardgold.com/logo.png", // replace with your real logo URL
              description:
                "Globally trusted gold trading and sourcing company headquartered in Kampala, Uganda. Supplying 23+ carat African gold bars and nuggets worldwide.",
              founder: {
                "@type": "Person",
                name: "Trevor Jjingo",
              },
              // ── Contact: updated to real number ─────────────────────────────
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+256762804292",
                  contactType: "sales",
                  areaServed: "Worldwide",
                  availableLanguage: ["English", "Luganda", "Swahili", "Arabic"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              // ── areaServed signals global trading to search engines ──────────
              areaServed: [
                "Worldwide",
                "UG", // Uganda
                "CD", // DRC / Congo
                "AE", // UAE / Dubai
                "GB", // United Kingdom
                "US", // United States
                "DE", // Germany
                "CN", // China
                "ZA", // South Africa
                "KE", // Kenya
                "TZ", // Tanzania
                "NG", // Nigeria
                "RW", // Rwanda
              ],
              sameAs: [
                // "https://wa.me/256762804292", // add your real socials
              ],
            }),
          }}
        />

        {/* ── Structured Data: LocalBusiness (helps Google show rich results) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Edward Gold",
              description:
                "Trusted gold trading and sourcing company based in Kampala, Uganda, trading globally. Specializing in 23+ carat African gold bars and nuggets with 97.6% purity.",
              founder: {
                "@type": "Person",
                name: "Trevor Jjingo",
              },
              url: "https://edwardgold.com",
              // ── Updated to real number ───────────────────────────────────────
              telephone: "+256762804292",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 0.3476,
                longitude: 32.5825,
              },
              areaServed: "Worldwide",
              priceRange: "$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />

        {/* ── Structured Data: Product (helps Google show product rich results) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "African Gold Bars & Nuggets",
              description:
                "23+ carat African gold bars and nuggets with 97.6% verified purity. Sourced from DRC, Uganda, and Dubai. Available for buyers worldwide.",
              brand: {
                "@type": "Brand",
                name: "Edward Gold",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "120000",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
                areaServed: "Worldwide",
                seller: {
                  "@type": "Organization",
                  name: "Edward Gold",
                  telephone: "+256762804292", // updated to real number
                },
              },
              additionalProperty: [
                { "@type": "PropertyValue", name: "Purity", value: "97.6%" },
                { "@type": "PropertyValue", name: "Carat", value: "23+" },
                { "@type": "PropertyValue", name: "Color", value: "Yellow" },
                { "@type": "PropertyValue", name: "Origin", value: "DRC, Uganda, Dubai" },
                { "@type": "PropertyValue", name: "Unit", value: "Per Kilogram" },
                { "@type": "PropertyValue", name: "Commission", value: "$3,000 USD" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme={defaultTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}