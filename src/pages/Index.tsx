import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AnnouncementsSection />
      <EventsSection />
      <AboutSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
