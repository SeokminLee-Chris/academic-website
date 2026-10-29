import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/project";
import { Locale } from "@/data/i18n";
import { ui } from "@/data/ui";

export function ProjectEntry({ project, locale }: { project: Project; locale: Locale }) {
  const t = ui[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {project.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[200px] relative">
          <Image
            src={`${basePath}${project.imageUrl}`}
            alt={project.title}
            width={200}
            height={150}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <p className="text-sm text-zinc-500 mb-2">{project.date}</p>
        <h3 className="font-serif text-md mb-3">{project.title}</h3>
        <p className="text-sm text-zinc-600 mb-4 leading-relaxed">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs text-zinc-500 border border-zinc-200 rounded-md px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-row gap-6">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span className="tracking-wider uppercase">{t.page}</span>
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span className="tracking-wider uppercase">{t.code}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
