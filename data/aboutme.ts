export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  researchInterests?: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  twitterUsername?: string;
  altName?: string;
  addressOffice?: string;
  addressURL?: string;
  lastUpdated?: string;
}

export const aboutMe: AboutMe = {
  name: "Seokmin Lee",
  title: "Research Officer",
  institution: "Agency for Defense Development",
  institutionUrl: "https://www.add.re.kr/eps",
  description: "",
  email: "lsm9434@gmail.com",
  imageUrl: "/images/profile.jpg.png",
  blogUrl: "https://seokmin-hardstudy.tistory.com/",
  googleScholarUrl: "https://scholar.google.com/citations?user=ciiz7PkAAAAJ&hl=en",
  githubUsername: "SeokminLee-Chris",
  linkedinUsername: "seokmin-lee-0a9192400",
  addressOffice: "Daejeon, Republic of Korea",
  addressURL: "https://maps.app.goo.gl/UDcczVBM8Kp2APpm8",
  lastUpdated: "May 15, 2026",
};
