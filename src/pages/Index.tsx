import { useState } from "react";
import ProfileGate from "@/components/ProfileGate";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsRow from "@/components/SkillsRow";
import ProjectsRow from "@/components/ProjectsRow";
import ExperienceRow from "@/components/ExperienceRow";
import ContactSection from "@/components/ContactSection";
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
            <div className="relative z-10 -mt-20">
              <ProjectsRow />
              <SkillsRow />
              <ExperienceRow />
              <ContactSection />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
