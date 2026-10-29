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
  title: { ko: "현역연구원 (중위)", en: "Research Officer" },
  institution: { ko: "국방과학연구소 (ADD)", en: "Agency for Defense Development" },
  institutionUrl: "https://www.add.re.kr/eps",
  description: {
    ko: "현재 대한민국 육군 중위로 복무 중이며, 국방과학연구소(ADD)에서 과학기술전문사관(현역연구원)으로 근무하고 있습니다. 전역 예정일은 2028년 5월 31일입니다. DGIST 컴퓨터공학과를 졸업했습니다.",
    en: "I am currently serving as a First Lieutenant in the Republic of Korea Army and working as a research officer at the Agency for Defense Development, the Korean counterpart to the U.S. DARPA. Previously, I completed my bachelor's degree in Computer Science at DGIST.",
  },
  researchInterests: [
    {
      ko: "저는 AI 에이전트가 어떤 분야의 어려운 연구 문제든 풀 수 있도록 더 유능하게 만드는 데 관심이 있습니다. 경험으로부터 배우고, 실패를 돌아보며, 점점 더 복잡한 과제를 해결해 나가는 에이전트를 만들고 싶습니다.",
      en: "I'm interested in making AI agents more capable so they can solve challenging research problems across any field. I want to build agents that can learn from experience, reflect on their failures, and tackle increasingly complex tasks.",
    },
    {
      ko: "예를 들어, 코딩 에이전트의 성공률을 높이기 위한 자기 성찰(self-reflection) 루프를 설계하는 데 관심이 있습니다. 로보틱스에서는 Genie 같은 월드 모델을 활용해 에이전트가 가상 환경에서 경험을 쌓고, 그 경험을 실제 환경에서의 성능 향상으로 이어지게 하는 것에도 관심이 있습니다.",
      en: "For example, I'm interested in designing self-reflection loops to improve the success rates of coding agents. In robotics, I'm also interested in using world models like Genie to let agents gain experience in virtual environments and apply what they learn to improve their performance in the real world.",
    },
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
