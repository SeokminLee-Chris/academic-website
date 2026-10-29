import { Locale, Localized, localize } from "./i18n";
import { ExperienceSource } from "./experience";

/** Leadership & community activities. Same shape as experience entries (company = organization). */
export type ActivitySource = ExperienceSource;
export type Activity = Localized<ActivitySource>;

export const activitySource: ActivitySource[] = [
  {
    date: { ko: "2022.01 – 2022.12", en: "Jan 2022 – Dec 2022" },
    title: { ko: "Peer Counselor 대표", en: "Peer Counselor Representative" },
    company: "DGIST",
    points: [
      {
        ko: "Peer Counselor로서 약 20명의 신입생이 대학 생활에 적응할 수 있도록 지원했으며, 전체 Peer Counselor를 대표하는 역할을 맡았습니다.",
        en: "Helped around 20 freshmen adjust to university life as a Peer Counselor and served as the representative of all Peer Counselors.",
      },
      {
        ko: "대표로 활동하며 Peer Counselor 최초의 체육대회를 기획·개최하고, 신입생들에게 유용한 정보를 제공하기 위한 DGIST 백과사전 제작을 주도했습니다.",
        en: "Organized the first-ever sports event for Peer Counselors and led the creation of the DGIST Encyclopedia to help new students navigate university life.",
      },
    ],
  },
  {
    date: { ko: "2023.03 – 2023.12", en: "Mar 2023 – Dec 2023" },
    title: { ko: "교외행사국 국원", en: "External Events Team Member" },
    company: { ko: "DGIST 학생회", en: "DGIST Student Council" },
    points: [
      {
        ko: "타 대학 학생회와 협력하여 해커톤, STadium(과학기술원 연합 체육대회) 등 여러 대학이 참여하는 연합 행사를 기획하고 개최했습니다.",
        en: "Collaborated with student councils from other universities to organize joint events, including hackathons and STadium, an inter-university sports competition among science and technology institutes.",
      },
    ],
  },
  {
    date: { ko: "2021.09 – 2023.12", en: "Sep 2021 – Dec 2023" },
    title: { ko: "디지로이드 임원", en: "Executive Member, Digiroid" },
    company: { ko: "DGIST 프로그래밍 동아리", en: "DGIST Programming Club" },
    points: [
      {
        ko: "Python, 웹 개발, 알고리즘 스터디를 기획하고 리더로 활동했습니다.",
        en: "Organized and led study groups on Python, web development, and algorithms.",
      },
      {
        ko: "2023년 한 해 동안 후배들을 대상으로 인공지능과 자율주행 드론 제작에 관한 강의를 매주 진행했습니다.",
        en: "Taught weekly classes on artificial intelligence and autonomous drone development to junior students throughout 2023.",
      },
    ],
  },
];

export function getActivityData(locale: Locale): Activity[] {
  return localize(activitySource, locale);
}
