import { Education } from "@/data/education";
import { Locale } from "@/data/i18n";
import { ui } from "@/data/ui";

export function EducationEntry({ education, locale }: { education: Education; locale: Locale }) {
  const t = ui[locale];
  return (
    <div>
      <h3 className="font-serif text-md text-zinc-900 mb-0.5">{education.institution}</h3>
      <div className="flex justify-between text-sm text-zinc-500 mb-1">
        <span>{education.degree}</span>
        <span className="shrink-0 ml-4">{education.date}</span>
      </div>
      {education.gpa && (
        <p className="text-sm text-zinc-400">{t.gpa}: {education.gpa}</p>
      )}
      {education.note && (
        <p className="text-sm text-zinc-400">{education.note}</p>
      )}
      {education.advisor && (
        <p className="text-sm text-zinc-500 italic">{t.advisor}: {education.advisor}</p>
      )}
      {education.thesis && (
        <p className="text-sm text-zinc-500 italic">
          {t.thesis}:{" "}
          {education.thesisUrl ? (
            <a href={education.thesisUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {education.thesis}
            </a>
          ) : (
            education.thesis
          )}
        </p>
      )}
    </div>
  );
}
