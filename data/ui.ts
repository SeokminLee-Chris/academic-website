import { Locale } from "./i18n";

/** Fixed UI labels (section headings, link texts) per language. */
export const ui = {
  ko: {
    htmlLang: "ko",
    languageName: "한국어",
    researchInterests: "연구 관심 분야",
    engineeringInterests: "엔지니어링 관심 분야",
    publications: "논문",
    experience: "경력",
    education: "학력",
    awards: "수상",
    gpa: "GPA",
    advisor: "지도교수",
    manager: "매니저",
    thesis: "학위논문",
    viewProjects: "프로젝트 보기 →",
    paper: "Paper",
    page: "Page",
    code: "Code",
    blog: "블로그",
    cv: "CV",
    lastUpdated: "최종 수정",
  },
  en: {
    htmlLang: "en",
    languageName: "English",
    researchInterests: "Research Interests",
    engineeringInterests: "Engineering Interests",
    publications: "Publications",
    experience: "Experience",
    education: "Education",
    awards: "Awards",
    gpa: "GPA",
    advisor: "Advisor",
    manager: "Manager",
    thesis: "Thesis",
    viewProjects: "View Projects →",
    paper: "Paper",
    page: "Page",
    code: "Code",
    blog: "Blog",
    cv: "CV",
    lastUpdated: "Last updated",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UI = (typeof ui)[Locale];
