import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { getAboutMe } from "@/data/aboutme";

const aboutMe = getAboutMe("en");

export const metadata: Metadata = {
  title: aboutMe.name,
  description: aboutMe.description,
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell locale="en">{children}</RootShell>;
}
