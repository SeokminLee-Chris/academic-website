import { ProfileSection } from "@/components/profile-section";
import { PublicationEntry } from "@/components/publication-entry";
import { aboutMe } from "@/data/aboutme";
import { publicationData } from "@/data/publication";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="max-w-screen-lg mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Left Column - Fixed sidebar */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling content */}
          <div className="col-span-12 md:col-span-9 md:col-start-5 space-y-12">
            {aboutMe.description && (
              <section>
                <p className="font-serif text-md leading-relaxed text-zinc-800 mb-5">
                  {aboutMe.description}
                </p>
                {aboutMe.researchInterests && (
                  <details className="mb-4">
                    <summary className="cursor-pointer select-none font-serif text-md text-zinc-700 mb-1 tracking-wide font-bold uppercase">
                      Research Interests
                    </summary>
                    <ul className="mt-2 space-y-1">
                      {aboutMe.researchInterests.map((interest, i) => (
                        <li key={i} className="font-serif text-md leading-relaxed text-zinc-800">
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </section>
            )}
            {publicationData.length > 0 && (
              <section>
                <h2 className="font-serif text-xl mb-6 tracking-wide font-bold uppercase border-b border-zinc-200">
                  Publications
                </h2>
                <div className="space-y-6">
                  {publicationData.map((publication, index) => (
                    <div key={index}>
                      <PublicationEntry publication={publication} />
                      {index < publicationData.length - 1 && (
                        <div className="h-px bg-zinc-200 my-8" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
