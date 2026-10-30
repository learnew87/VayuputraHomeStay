import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vayuputra Boating & Homestays | Honnavar Sharavati Backwaters & Island Tours",
  description:
    "Official website for Vayuputra: Honnavar Sharavati backwater boating, island homestays at Mavinkurva, mangrove tours, and authentic Karavali home-cooked hospitality by Ganesh Gouda. Note: Authentic homestay, not a luxury resort.",
  keywords: [
    "Vayuputra Boating",
    "Vayuputra Honnavar",
    "Honnavar boating",
    "Sharavati backwater boating",
    "Mavinkurva island homestay",
    "Honnavar homestay",
    "Taribagilu boating",
    "mangrove boat ride Honnavar",
    "authentic coastal homestay Karnataka",
    "Ganesh Gouda Vayuputra",
  ],
  openGraph: {
    title: "Vayuputra Boating & Homestays | Honnavar Sharavati Backwaters",
    description:
      "Feel and breathe the untouched natural beauty of Sharavati backwaters. Private boat rides, island tours, and authentic homestays in Honnavar.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FCFAF6] text-[#242924] antialiased selection:bg-[#647B54] selection:text-white">
        {children}
      </body>
    </html>
  );
}
