import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

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
            {/* Sections will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
