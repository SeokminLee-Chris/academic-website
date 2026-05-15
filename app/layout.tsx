import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif, Inter } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seokmin Lee",
  description: aboutMe.description || "Research Officer at Agency for Defense Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} ${inter.variable} antialiased`}
      >
        <main>{children}</main>

        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} {aboutMe.name}.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
