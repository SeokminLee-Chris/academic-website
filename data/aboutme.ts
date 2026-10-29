export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  researchInterests?: string[];
  engineeringInterests?: string[];
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
  description: "I am currently serving as a First Lieutenant in the Republic of Korea Army and working as a research officer at the Agency for Defense Development, the Korean counterpart to the U.S. DARPA. Previously, I completed my bachelor's degree in Computer Science at DGIST.",
  researchInterests: [
    "Robot Foundation Models",
    "VLA (Vision-Language-Action Models)",
    "World Models",
    "Computer Vision",
    "Agentic Systems",
  ],
  engineeringInterests: [
    "I'm interested in automating all kinds of work. I enjoy building everything from simple rule-based systems to AI agents that can handle complex tasks and workflows.",
    "I'm especially interested in automating not just repetitive administrative tasks, but also professional work in areas like accounting, law, and HR. I want to work closely with experts in these fields to understand their workflows and find better ways to automate them.",
  ],
  email: "lsm9434@gmail.com",
  imageUrl: "/images/profile.png",
  blogUrl: "https://seokmin-hardstudy.tistory.com/",
  googleScholarUrl: "https://scholar.google.com/citations?user=ciiz7PkAAAAJ&hl=en",
  githubUsername: "SeokminLee-Chris",
  linkedinUsername: "seokmin-lee-0a9192400",
  addressOffice: "Daejeon, Republic of Korea",
  addressURL: "https://maps.app.goo.gl/UDcczVBM8Kp2APpm8",
  lastUpdated: "May 15, 2026",
};
