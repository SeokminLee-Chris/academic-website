import { Locale, Localized, Text, localize } from "./i18n";

export interface AboutMeSource {
  name: Text;
  title: Text;
  institution: Text;
  institutionUrl?: string;
  description: Text;
  researchInterests?: Text[];
  engineeringInterests?: Text[];
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  twitterUsername?: string;
  altName?: Text;
  addressOffice?: Text;
  addressURL?: string;
  lastUpdated?: Text;
}

export type AboutMe = Localized<AboutMeSource>;

export const aboutMeSource: AboutMeSource = {
  name: { ko: "이석민", en: "Seokmin Lee" },
  altName: { ko: "Seokmin Lee", en: "" },
  title: { ko: "연구장교 (중위)", en: "Research Officer" },
  institution: { ko: "국방과학연구소 (ADD)", en: "Agency for Defense Development" },
  institutionUrl: "https://www.add.re.kr/eps",
  description: {
    ko: "현재 대한민국 육군 중위로 복무 중이며, 미국 DARPA에 해당하는 국방과학연구소(ADD)에서 과학기술전문사관(연구장교)으로 근무하고 있습니다. DGIST 컴퓨터공학과를 졸업했습니다.",
    en: "I am currently serving as a First Lieutenant in the Republic of Korea Army and working as a research officer at the Agency for Defense Development, the Korean counterpart to the U.S. DARPA. Previously, I completed my bachelor's degree in Computer Science at DGIST.",
  },
  researchInterests: [
    { ko: "로봇 파운데이션 모델", en: "Robot Foundation Models" },
    { ko: "VLA (Vision-Language-Action 모델)", en: "VLA (Vision-Language-Action Models)" },
    { ko: "월드 모델", en: "World Models" },
    { ko: "컴퓨터 비전", en: "Computer Vision" },
    { ko: "에이전트 시스템", en: "Agentic Systems" },
  ],
  engineeringInterests: [
    {
      ko: "저는 다양한 분야의 업무를 자동화하는 것에 관심이 많습니다. 규칙 기반의 결정론적 시스템을 설계하는 것부터 AI 에이전트를 직접 구현하는 것까지, 업무의 특성에 맞는 기술을 활용해 복잡한 시스템과 업무 흐름을 자동화할 수 있습니다.",
      en: "I'm interested in automating all kinds of work. I enjoy building everything from simple rule-based systems to AI agents that can handle complex tasks and workflows.",
    },
    {
      ko: "특히 단순하고 반복적인 행정 업무를 넘어, 회계, 법무, 인사 등 전문성이 요구되는 업무를 해당 분야의 전문가들과 협업하여 자동화하는 데 큰 관심이 있습니다.",
      en: "I'm especially interested in automating not just repetitive administrative tasks, but also professional work in areas like accounting, law, and HR. I want to work closely with experts in these fields to understand their workflows and find better ways to automate them.",
    },
  ],
  email: "lsm9434@gmail.com",
  imageUrl: "/images/profile.png",
  blogUrl: "https://seokmin-hardstudy.tistory.com/",
  googleScholarUrl: "https://scholar.google.com/citations?user=ciiz7PkAAAAJ&hl=en",
  githubUsername: "SeokminLee-Chris",
  linkedinUsername: "seokmin-lee-0a9192400",
  addressOffice: { ko: "대한민국 대전", en: "Daejeon, Republic of Korea" },
  addressURL: "https://maps.app.goo.gl/UDcczVBM8Kp2APpm8",
  lastUpdated: { ko: "2026년 10월 29일", en: "Oct 29, 2026" },
};

export function getAboutMe(locale: Locale): AboutMe {
  return localize(aboutMeSource, locale);
}
