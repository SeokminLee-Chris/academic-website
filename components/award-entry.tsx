import Image from "next/image";
import { Award } from "@/data/award";

export function AwardEntry({ award }: { award: Award }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="flex gap-5 items-start">
      {award.imageUrl && (
        <div className="shrink-0">
          <Image
            src={`${basePath}${award.imageUrl}`}
            alt={award.title}
            width={80}
            height={80}
            className="rounded-lg object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h3 className="font-serif text-md text-zinc-900">{award.title}</h3>
          <span className="text-xs text-zinc-400 shrink-0 ml-4">{award.year}</span>
        </div>
        <p className="text-sm text-zinc-500 mb-1">{award.organization}</p>
        <p className="text-sm text-zinc-600 leading-relaxed">{award.description}</p>
      </div>
    </div>
  );
}
