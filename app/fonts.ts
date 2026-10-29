import { Geist, Geist_Mono, Noto_Serif, Noto_Sans_KR, PT_Serif, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Korean fallback: Inter has no Hangul glyphs, so Korean text falls through to this.
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const fontClassName = `${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} ${inter.variable} ${notoSansKR.variable} antialiased`;
