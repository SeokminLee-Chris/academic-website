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
    description: "Given at graduation to a student who excels not only academically but also in helping fellow students.",
    imageUrl: "/images/chairman.jpg",
  },
];
