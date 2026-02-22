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
  title: "Edward Gold | Premium Gold Trading — Kampala, Uganda",
  description:
    "Trusted gold trading and sourcing company based in Kampala, Uganda. 97.6% purity, 23+ carats. Founded by Trevor Jjingo.",
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
      <body className={`${playfair.variable} ${lora.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme={defaultTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}