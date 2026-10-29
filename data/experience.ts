import { Locale, Localized, Text, localize } from "./i18n";

export interface ExperienceSource {
  date: Text;
  title: Text;
  company: Text;
  description?: Text;
  advisor?: Text;
  manager?: Text;
  companyUrl?: string;
  projectUrl?: string;
  /** Link text for projectUrl; falls back to the generic "View Projects" label. */
  projectLabel?: Text;
  points?: Text[];
}

export type Experience = Localized<ExperienceSource>;

export const experienceSource: ExperienceSource[] = [
  {
    date: { ko: "2025.06 – 2028.05", en: "Jun 2025 – May 2028" },
    title: {
      ko: "중위 / 과학기술전문사관 (현역연구원)",
      en: "First Lieutenant / Research Officer for National Defense",
    },
    company: { ko: "국방과학연구소 (ADD)", en: "Agency for Defense Development (ADD)" },
    companyUrl: "https://www.add.re.kr/eps",
    points: [
      {
        ko: "국방 과학기술 R&D를 전담하는 전국 20명의 과학기술전문사관 중 한 명으로 선발되었습니다.",
        en: "Selected as one of 20 research officers nationwide dedicated to science-and-technology R&D for national defense.",
      },
      {
        ko: "ADD는 대한민국 군을 위한 첨단 국방 기술과 무기체계를 개발하는 정부출연 연구기관입니다.",
        en: "ADD is a government research institute responsible for developing advanced defense technologies and weapon systems for South Korea's military.",
      },
      {
        ko: "현재 Computer Vision 업무를 담당하고 있으며, 구체적인 내용은 보안상 공개할 수 없는 점 양해 부탁드립니다.",
        en: "I am currently working on computer vision tasks at ADD. Details of my work cannot be disclosed for security reasons.",
      },
    ],
  },
  {
    date: { ko: "2024.03 – 2025.03", en: "Mar 2024 – Mar 2025" },
    title: { ko: "Computer Vision AI 연구원", en: "Sole Computer Vision AI Researcher" },
    company: "QUESTER",
    companyUrl: "https://quester.kr/",
    points: [
      {
        ko: "데이터 수집부터 모델 설계, 배포까지 전 과정을 주도했으며, C++ 기반의 객체 탐지, 세그멘테이션, 트래킹, 스테레오 매칭 파이프라인을 개발했습니다.",
        en: "Led the complete AI pipeline from data collection through deployment, focusing on object detection, segmentation, tracking, and stereo matching using C++.",
      },
      {
        ko: "삼성 C-Lab Outside 6기에 선정되었고, 2025 CES 혁신상을 수상했으며 라스베이거스 CES 2025 현장에서 직접 기술을 발표했습니다.",
        en: "Recognized as Samsung C-Lab Outside 6th cohort; received the 2025 CES Innovation Award and presented the technology in person at CES 2025 in Las Vegas.",
      },
    ],
  },
  {
    date: { ko: "2024.06 – 2024.08", en: "Jun 2024 – Aug 2024" },
    title: { ko: "연구 인턴 (DGIST DURA 프로그램 파견)", en: "Graph Neural Network Research Intern" },
    company: { ko: "울름 대학교 (Universität Ulm)", en: "Universität Ulm" },
    advisor: { ko: "Ansgar Scherp 교수님", en: "Prof. Ansgar Scherp" },
    points: [
      {
        ko: "독일 울름 대학교에서 few-shot graph node classification 연구를 수행했습니다.",
        en: "Conducted research on few-shot graph node classification at Universität Ulm, Germany.",
      },
    ],
  },
  {
    date: { ko: "2022.12 – 2024.01", en: "Dec 2022 – Jan 2024" },
    title: { ko: "연구 인턴", en: "AI Safety Research Intern" },
    company: "HASS LAB",
    companyUrl: "https://sites.google.com/view/hass-dgist/hass-lab",
    advisor: { ko: "김백규 교수님", en: "Prof. Baekgyu Kim" },
    points: [
      {
        ko: "언리얼 엔진으로 여러 게임을 개발했습니다.",
        en: "Developed several games using Unreal Engine.",
      },
      {
        ko: "특정 사람을 따라다니는 자율 RC카/드론을 제작했습니다.",
        en: "Built an autonomous RC car/drone that follows a specific person.",
      },
      {
        ko: "학부생을 위한 연구실 웹사이트를 개발했으며, 연구실 공식 웹페이지로 채택되어 현재까지 사용되고 있습니다. 제가 수행한 프로젝트들도 이 웹사이트에 정리되어 있습니다.",
        en: "Built a lab website for undergraduate students, which was adopted as the lab's official webpage and is still in use. My projects at the lab are also documented there.",
      },
    ],
    projectUrl: "https://hass-dgist.github.io/undergraduate/#projects",
    projectLabel: {
      ko: "연구실 웹사이트에서 제 프로젝트 보기 →",
      en: "View my projects on the lab website →",
    },
  },
];

export function getExperienceData(locale: Locale): Experience[] {
  return localize(experienceSource, locale);
}
