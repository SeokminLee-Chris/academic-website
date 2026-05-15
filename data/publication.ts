export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  pageUrl?: string;
  imageUrl?: string;
  award?: string;
  tldr?: string;
}

export const publicationData: Publication[] = [
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
