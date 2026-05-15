export interface Education {
  date: string;
  institution: string;
  degree: string;
  gpa?: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  note?: string;
}

export const educationData: Education[] = [
  {
    date: "Mar 2021 – Feb 2025",
    institution: "DGIST (Daegu Gyeongbuk Institute of Science and Technology)",
    degree: "B.S. in Computer Science and Engineering",
    gpa: "4.12 / 4.30 (CS: 4.26 / 4.30)",
  },
  {
    date: "Jun 2022 – Aug 2022",
    institution: "UCLA (University of California, Los Angeles)",
    degree: "Summer Session",
    gpa: "4.0 / 4.3",
  },
];
