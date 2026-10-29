import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { getAboutMe } from "@/data/aboutme";

const aboutMe = getAboutMe("ko");

export const metadata: Metadata = {
  title: `${aboutMe.name} | Seokmin Lee`,
  description: aboutMe.description,
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="ko">{children}</RootShell>;
}
