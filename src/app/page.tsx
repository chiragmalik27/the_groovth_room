import HeroShowcase from "@/components/home/HeroShowcase";
import PillarsSection from "@/components/home/PillarsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CollaborationSection from "@/components/home/CollaborationSection";
import ApproachPreview from "@/components/home/ApproachPreview";
import AudienceSection from "@/components/home/AudienceSection";
import ReadingRoomPreview from "@/components/home/ReadingRoomPreview";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroShowcase />
      <PillarsSection />
      <ServicesSection />
      <CollaborationSection />
      <ApproachPreview />
      <AudienceSection />
      <ReadingRoomPreview />
      <CtaBanner />
    </>
  );
}
