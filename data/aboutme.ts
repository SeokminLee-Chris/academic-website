import { Locale, Localized, Text, localize } from "./i18n";

export interface AboutMeSource {
  name: Text;
  title: Text;
  institution: Text;
  institutionUrl?: string;
  description: Text;
  philosophy?: Text[];
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
  philosophy: [
    {
      ko: "저는 **연구와 엔지니어링 역량을 모두 갖춘 사람**이 되고 싶습니다.",
      en: "I want to be someone who is skilled in both **research and engineering**.",
    },
    {
      ko: "학부 시절에는 컴퓨터공학의 기초를 탄탄히 다졌고, 이후 QUESTER에서 Computer Vision 엔지니어로 일하며 실제 제품을 개발했습니다. 이 과정에서 여러 기술을 하나의 시스템으로 잘 통합하는 것도 중요하지만, **핵심 기술 하나의 성능이 제품 전체의 경쟁력을 크게 좌우할 수 있다**는 것을 깨달았습니다. 이를 계기로 기존 기술을 활용하는 엔지니어링을 넘어 기술 자체의 성능을 높이는 연구에도 관심을 갖게 되었고, 실제로 Computer Vision 연구를 수행해 논문을 발표하는 경험도 쌓았습니다.",
      en: "During my undergraduate years, I focused on building a strong foundation in computer science. I then worked as a Computer Vision Engineer at QUESTER, where I gained hands-on experience developing real products. This taught me that while integrating different technologies into a working system is important, **the performance of a single key component can make a huge difference in a product's competitiveness**. This experience sparked my interest in not just applying existing technologies, but improving the technologies themselves. I went on to conduct research in computer vision and publish a research paper.",
    },
    {
      ko: "저는 **산업 현장에서 해결해야 할 문제를 직접 정의하고, 이를 해결하기 위한 핵심 기술을 깊이 연구하는 동시에, 여러 기술을 효과적으로 통합해 실제로 작동하는 시스템과 제품을 설계할 수 있는 사람**이 되고 싶습니다. 이를 위해 연구와 엔지니어링 역량을 함께 발전시켜 나가고자 합니다.",
      en: "My goal is to **identify real problems in industry, develop the core technologies needed to solve them, and design systems that bring those technologies together into working products**. I want to keep growing as both a researcher and an engineer, with the ability to dive deep into individual technologies while also seeing the bigger picture.",
    },
    {
      ko: "최근에는 Computer Vision뿐만 아니라 Robotics, LLM Agent, 회로 설계 자동화 등 분야를 가리지 않고 논문을 읽고 직접 연구하며 지식과 경험을 넓혀가고 있습니다. 또한 다양한 분야의 해커톤에 참여하며 실제 현장에서 어떤 문제들이 존재하고, 무엇이 필요한지 이해하려고 노력하고 있습니다. **특정 분야에 스스로를 한정하기보다, 해결할 가치가 있는 문제라면 분야에 관계없이 도전하고 싶습니다.**",
      en: "Recently, I've been exploring fields beyond computer vision, including robotics, LLM agents, and circuit design automation. I regularly read research papers and conduct my own research to expand my knowledge across different areas. I also participate in hackathons across various fields to better understand the challenges people face in the real world. **Rather than limiting myself to a single field, I want to take on any problem worth solving.**",
    },
  ],
  researchInterests: [
    {
      ko: "AI 에이전트를 더욱 강력하게 만들어 분야에 관계없이 다양한 연구 문제를 해결하는 데 관심이 있습니다. 에이전트가 스스로 경험을 쌓고, 실패에서 배우며, 점차 더 복잡한 문제를 해결할 수 있도록 만드는 연구를 하고 싶습니다.",
      en: "I'm interested in making AI agents more capable so they can solve challenging research problems across any field. I want to build agents that can learn from experience, reflect on their failures, and tackle increasingly complex tasks.",
    },
    {
      ko: "예를 들어, self-reflection loop를 설계해 코딩 에이전트의 작업 성공률을 높이거나, 로보틱스 분야에서 Genie와 같은 월드 모델을 활용해 가상 환경에서 다양한 경험을 쌓고 이를 실제 환경의 작업 성공률 향상으로 연결하는 연구에 관심이 있습니다.",
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
