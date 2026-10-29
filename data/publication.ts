import { Locale, Localized, Text, localize } from "./i18n";

export interface PublicationSource {
  year: Text;
  conference: Text;
  title: Text;
  authors: Text;
  paperUrl?: string;
  codeUrl?: string;
  pageUrl?: string;
  imageUrl?: string;
  award?: Text;
  tldr?: Text;
}

export type Publication = Localized<PublicationSource>;

export const publicationSource: PublicationSource[] = [
  {
    year: "2026",
    conference: "CVPR Workshops",
    title: "Pixel-level Scene Understanding in One Token: Visual States Need What-is-Where Composition",
    authors: "Seokmin Lee, Yunghee Lee, Byeonghyun Pak, Byeongju Woo",
    paperUrl: "https://arxiv.org/pdf/2603.13904",
    codeUrl: "https://github.com/SeokminLee-Chris/CroBo",
    pageUrl: "https://seokminlee-chris.github.io/CroBo-ProjectPage/",
    imageUrl: "/images/CroBo.png",
  },
];

export function getPublicationData(locale: Locale): Publication[] {
  return localize(publicationSource, locale);
}
