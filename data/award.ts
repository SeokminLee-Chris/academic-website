import { Locale, Localized, Text, localize } from "./i18n";

export interface AwardSource {
  year: Text;
  title: Text;
  organization: Text;
  description: Text;
  imageUrl?: string;
}

export type Award = Localized<AwardSource>;

export const awardSource: AwardSource[] = [
  {
    year: "2025",
    title: { ko: "CES 혁신상", en: "CES Innovation Award" },
    organization: "CES",
    description: {
      ko: "Computer Vision 기반 핸드 트래킹 글러브 기술의 혁신성을 인정받아 QUESTER 소속으로 CES 2025에서 수상했습니다.",
      en: "Awarded at CES 2025 as part of QUESTER for innovation in hand-tracking glove technology with computer vision.",
    },
    imageUrl: "/images/CES-innovation-awards.jpg",
  },
  {
    year: "2025",
    title: { ko: "이사장상", en: "Chairman's Award" },
    organization: "DGIST",
    description: {
      ko: "학업 성취가 뛰어나고 학교 구성원을 많이 도운 졸업생에게 수여되는 상입니다. 재학 중 후배들을 위해 수업 내용 등 여러 강의를 직접 진행했고, UCLA에서는 코딩을 어려워하는 동기들을 위해 코딩 수업을 열었습니다. 또한 후배들의 과학기술전문사관 면접을 체계적으로 돕는 시스템을 만들었으며, 이 시스템은 현재까지 성공적으로 운영되고 있습니다.",
      en: "Awarded at graduation to a student who demonstrates academic excellence and makes meaningful contributions to fellow students. During my studies, I helped junior students by giving lectures on course material and other topics. At UCLA, I also organized coding sessions for classmates who needed help with programming. In addition, I built a system to help junior students prepare for the Research Officer selection interview, which is still being used successfully today.",
    },
    imageUrl: "/images/chairman.jpg",
  },
];

export function getAwardData(locale: Locale): Award[] {
  return localize(awardSource, locale);
}
