import { Locale, Localized, Text, localize } from "./i18n";

export interface ProjectSource {
  date: Text;
  title: Text;
  description: Text;
  projectUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
  tags?: Text[];
}

export type Project = Localized<ProjectSource>;

/** Engineering projects. Empty for now; the section shows a "coming soon" note until entries are added. */
export const projectSource: ProjectSource[] = [];

export function getProjectData(locale: Locale): Project[] {
  return localize(projectSource, locale);
}
