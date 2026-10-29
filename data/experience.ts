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
        ko: "삼성 C-Lab Outside 6기에 선정되었고, 2025 CES 혁신상을 수상했습니다.",
        en: "Recognized as Samsung C-Lab Outside 6th cohort; received the 2025 CES Innovation Award.",
      },
    ],
  },
  {
    date: { ko: "2024.06 – 2024.08", en: "Jun 2024 – Aug 2024" },
    title: { ko: "연구 인턴", en: "Graph Neural Network Research Intern" },
    company: { ko: "울름 대학교 (Universität Ulm)", en: "Universität Ulm" },
    advisor: { ko: "Ansgar Scherp 교수님", en: "Prof. Ansgar Scherp" },
    points: [
      {
        ko: "독일 울름 대학교에서 few-shot graph node classification 연구를 수행했습니다.",
        en: "Conducted research on few-shot graph classification at Universität Ulm, Germany.",
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
        ko: "언리얼 엔진으로 게임플레이 데모 및 실험용 게임을 개발했습니다.",
        en: "Developed games using Unreal Engine as gameplay demos and experiments.",
      },
      {
        ko: "컴퓨터 비전으로 특정 사람을 따라다니는 자율 RC카/드론을 제작했습니다.",
        en: "Built an autonomous RC car/drone that follows a specific person using computer vision.",
      },
    ],
    projectUrl: "https://seokminlee-chris.github.io/self-introduction-website/projects_eng.html",
  },
];

export function getExperienceData(locale: Locale): Experience[] {
  return localize(experienceSource, locale);
}
