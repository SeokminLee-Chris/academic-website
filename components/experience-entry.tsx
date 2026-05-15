import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="flex gap-4">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center pt-1.5">
        <div className="w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
        <div className="w-px flex-1 bg-zinc-200 mt-1" />
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 min-w-0">
        {/* Date badge */}
        <span className="inline-block text-xs text-zinc-400 tracking-wide mb-1">
          {experience.date}
        </span>

        {/* Title */}
        <h3 className="font-serif text-md text-zinc-900 leading-snug mb-0.5">
          {experience.title}
        </h3>

        {/* Company */}
        <p className="text-sm text-zinc-500 mb-2">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-800 transition-colors underline underline-offset-2 decoration-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </p>

        {(experience.manager || experience.advisor) && (
          <p className="text-sm text-zinc-500 mb-2">
            {experience.manager && <><strong>Manager:</strong> {experience.manager}</>}
            {experience.manager && experience.advisor && " / "}
            {experience.advisor && <><strong>Advisor:</strong> {experience.advisor}</>}
          </p>
        )}

        {experience.points && experience.points.length > 0 && (
          <ul className="space-y-1">
            {experience.points.map((point, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-zinc-600">
                <span className="text-zinc-400 shrink-0">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {!experience.points && experience.description && (
          <p className="text-sm italic text-zinc-600">{experience.description}</p>
        )}
      </div>
    </div>
  );
}
