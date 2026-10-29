import { Locale, Localized, Text, localize } from "./i18n";

export interface EducationSource {
  date: Text;
  institution: Text;
  degree: Text;
  gpa?: Text;
  advisor?: Text;
  thesis?: Text;
  thesisUrl?: string;
  note?: Text;
}

export type Education = Localized<EducationSource>;

export const educationSource: EducationSource[] = [
  {
    date: { ko: "2021.03 – 2025.02", en: "Mar 2021 – Feb 2025" },
    institution: {
      ko: "DGIST (대구경북과학기술원)",
      en: "DGIST (Daegu Gyeongbuk Institute of Science and Technology)",
    },
    degree: { ko: "컴퓨터공학 학사", en: "B.S. in Computer Science and Engineering" },
    gpa: "4.12 / 4.30 (CS: 4.26 / 4.30)",
    note: { ko: "전체 졸업생 중 3등", en: "3rd among all graduates" },
  },
  {
    date: { ko: "2022.06 – 2022.08", en: "Jun 2022 – Aug 2022" },
    institution: {
      ko: "UCLA (캘리포니아 대학교 로스앤젤레스)",
      en: "UCLA (University of California, Los Angeles)",
    },
    degree: {
      ko: "전기공학 (여름 학기, DGIST FGLP 프로그램 파견)",
      en: "Electrical Engineering (Summer Session, via DGIST FGLP Program)",
    },
    gpa: "4.0 / 4.3",
    note: { ko: "최우수 참가자 선정", en: "Selected as Outstanding Participant" },
  },
];

export function getEducationData(locale: Locale): Education[] {
  return localize(educationSource, locale);
}
