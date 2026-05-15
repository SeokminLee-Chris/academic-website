export interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
  imageUrl?: string;
}

export const awardData: Award[] = [
  {
    year: "2025",
    title: "CES Innovation Award",
    organization: "CES",
    description: "Awarded at CES 2025 as part of QUESTER for innovation in hand-tracking glove technology with computer vision.",
    imageUrl: "/images/CES-innovation-awards.jpg",
  },
  {
    year: "2025",
    title: "Chairman's Award",
    organization: "DGIST",
    description: "Awarded at graduation for outstanding academic achievement and exceptional dedication to helping fellow students — given to graduates who excel not only in academics but also in their contributions to others.",
    imageUrl: "/images/chairman.jpg",
  },
];
