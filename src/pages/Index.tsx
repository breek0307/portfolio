import { useState } from "react";
import ProfileGate from "@/components/ProfileGate";
import RevealOnScroll from "@/components/RevealOnScroll";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsRow from "@/components/SkillsRow";
import ProjectsRow from "@/components/ProjectsRow";
import ExperienceRow from "@/components/ExperienceRow";
import ContactSection from "@/components/ContactSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showApp, setShowApp] = useState(false);
  const [gateHidden, setGateHidden] = useState(false);

  const handleEnter = () => {
    setGateHidden(true);
    setTimeout(() => {
      setShowApp(true);
    }, 800);
  };

  return (
    <>
      {/* Profile Gate */}
      {!showApp && (
        <ProfileGate onEnter={handleEnter} isHidden={gateHidden} />
      )}

      {/* Main Application */}
      {showApp && (
        <div className="animate-fade-in-up">
          <Header />
          <main>
            <HeroSection />
            <div className="relative z-10 -mt-10 space-y-4">
              <RevealOnScroll delay={100}>
                <ProjectsRow />
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <SkillsRow />
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <ExperienceRow />
              </RevealOnScroll>

              <RevealOnScroll delay={350}>
                <JourneySection />
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <ContactSection />
              </RevealOnScroll>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
