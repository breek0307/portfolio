import { Play, Info } from "lucide-react";

const HERO_IMAGE = "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767630437/myphoto_nuajep.png";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end items-end">
        <img
          src={HERO_IMAGE}
          alt="Vedant - Full Stack Developer"
          className="h-[90vh] w-auto object-contain object-right-bottom animate-slow-zoom"
          style={{ 
            maskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
            filter: "brightness(0.9) contrast(1.1)"
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="hero-gradient-overlay" />
      <div className="hero-bottom-gradient" />

      {/* Content */}
      <div className="hero-content">
        {/* Netflix-style Badge */}
        <div className="hero-badge animate-fade-in-up opacity-0">
          <span className="hero-badge-icon">V</span>
          <span>ORIGINAL</span>
        </div>

        {/* Title */}
        <h1 className="hero-title animate-fade-in-up opacity-0 animate-delay-1">
          VEDANT
        </h1>

        {/* Meta Row */}
        <div className="hero-meta animate-fade-in-up opacity-0 animate-delay-2">
          <span className="hero-match">98% Match</span>
          <span>2024</span>
          <span className="hero-tag">PRO</span>
          <span>5 Years Experience</span>
          <span className="hero-tag">HD</span>
        </div>

        {/* Description - Recruiter-Focused */}
        <p className="hero-description animate-fade-in-up opacity-0 animate-delay-3">
          Full Stack Developer who ships production-ready applications. 
          Specializing in React, Node.js, and scalable architectures. 
          I turn complex requirements into elegant, maintainable code that users love.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-4">
          <button onClick={scrollToProjects} className="btn-play">
            <Play className="w-6 h-6 fill-current" />
            View Projects
          </button>
          <button onClick={scrollToAbout} className="btn-info">
            <Info className="w-6 h-6" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
