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
      ko: "컴퓨터 비전 기반 핸드 트래킹 글러브 기술의 혁신성을 인정받아 QUESTER 소속으로 CES 2025에서 수상했습니다.",
      en: "Awarded at CES 2025 as part of QUESTER for innovation in hand-tracking glove technology with computer vision.",
    },
    imageUrl: "/images/CES-innovation-awards.jpg",
  },
  {
    year: "2025",
    title: { ko: "이사장상", en: "Chairman's Award" },
    organization: "DGIST",
    description: {
      ko: "학업 성취뿐 아니라 동료 학생들을 돕는 데에도 뛰어난 졸업생에게 수여되는 상입니다.",
      en: "Given at graduation to a student who excels not only academically but also in helping fellow students.",
    },
    imageUrl: "/images/chairman.jpg",
  },
];

export function getAwardData(locale: Locale): Award[] {
  return localize(awardSource, locale);
}
