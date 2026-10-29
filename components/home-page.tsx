import { ProfileSection } from "@/components/profile-section";
import { PublicationEntry } from "@/components/publication-entry";
import { ExperienceEntry } from "@/components/experience-entry";
import { EducationEntry } from "@/components/education-entry";
import { AwardEntry } from "@/components/award-entry";
import { LanguageToggle } from "@/components/language-toggle";
import { Locale } from "@/data/i18n";
import { ui } from "@/data/ui";
import { getAboutMe } from "@/data/aboutme";
import { getPublicationData } from "@/data/publication";
import { getExperienceData } from "@/data/experience";
import { getEducationData } from "@/data/education";
import { getAwardData } from "@/data/award";

export function HomePage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const aboutMe = getAboutMe(locale);
  const publicationData = getPublicationData(locale);
  const experienceData = getExperienceData(locale);
  const educationData = getEducationData(locale);
  const awardData = getAwardData(locale);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="max-w-screen-lg mx-auto px-8 pt-6 pb-16">
        <div className="mb-8">
          <LanguageToggle current={locale} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          {/* Left Column - Fixed sidebar */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} locale={locale} />
            </div>
          </div>

          {/* Right Column - Scrolling content */}
          <div className="col-span-12 md:col-span-9 md:col-start-5 space-y-12">

            {/* About + Research Interests + Engineering Interests */}
            {aboutMe.description && (
              <section>
                <p className="font-serif text-md leading-relaxed text-zinc-800 mb-5">
                  {aboutMe.description}
                </p>
                {aboutMe.researchInterests && (
                  <details open className="mb-4">
                    <summary className="cursor-pointer select-none font-serif text-md text-zinc-700 mb-1 tracking-wide font-bold uppercase">
                      {t.researchInterests}
                    </summary>
                    <ul className="mt-2 space-y-1 pl-8">
                      {aboutMe.researchInterests.map((interest, i) => (
                        <li key={i} className="font-serif text-md leading-relaxed text-zinc-800">
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
                {aboutMe.engineeringInterests && (
                  <details open className="mb-4">
                    <summary className="cursor-pointer select-none font-serif text-md text-zinc-700 mb-1 tracking-wide font-bold uppercase">
                      {t.engineeringInterests}
                    </summary>
                    <div className="mt-2 space-y-3 pl-8">
                      {aboutMe.engineeringInterests.map((paragraph, i) => (
                        <p key={i} className="font-serif text-md leading-relaxed text-zinc-800">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </details>
                )}
              </section>
            )}

            {/* Publications */}
            {publicationData.length > 0 && (
              <section>
                <h2 className="font-serif text-xl mb-6 tracking-wide font-bold uppercase border-b border-zinc-200">
                  {t.publications}
                </h2>
                <div className="space-y-6">
                  {publicationData.map((publication, index) => (
                    <div key={index}>
                      <PublicationEntry publication={publication} locale={locale} />
                      {index < publicationData.length - 1 && (
                        <div className="h-px bg-zinc-200 my-8" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Experience */}
            {experienceData.length > 0 && (
              <section>
                <h2 className="font-serif text-xl mb-4 tracking-wide font-bold uppercase border-b border-zinc-200">
                  {t.experience}
                </h2>
                <div className="space-y-4">
                  {experienceData.map((experience, index) => (
                    <ExperienceEntry key={index} experience={experience} locale={locale} />
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {educationData.length > 0 && (
              <section>
                <h2 className="font-serif text-xl mb-4 tracking-wide font-bold uppercase border-b border-zinc-200">
                  {t.education}
                </h2>
                <div className="space-y-6">
                  {educationData.map((education, index) => (
                    <EducationEntry key={index} education={education} locale={locale} />
                  ))}
                </div>
              </section>
            )}

            {/* Awards */}
            {awardData.length > 0 && (
              <section>
                <h2 className="font-serif text-xl mb-6 tracking-wide font-bold uppercase border-b border-zinc-200">
                  {t.awards}
                </h2>
                <div className="space-y-8">
                  {awardData.map((award, index) => (
                    <AwardEntry key={index} award={award} />
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
