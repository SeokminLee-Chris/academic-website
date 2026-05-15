import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left sidebar */}
        <div className="md:col-span-4">
          <ProfileSection aboutMe={aboutMe} />
        </div>

        {/* Right main content — to be filled in later */}
        <div className="md:col-span-8">
          {/* Sections will go here */}
        </div>
      </div>
    </div>
  );
}
