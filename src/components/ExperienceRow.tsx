import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const experiences = [
  {
    title: "Founder & Web Developer",
    company: "BreekCodes",
    period: "2025 – Present",
    description: [
      "Built and launched a web development agency",
      "Designed and deployed responsive websites",
      "Worked with HTML, CSS, JavaScript, React, TypeScript, Tailwind",
      "Managed GitHub workflow and Render deployments",
      "Created conversion-focused landing pages"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Developer (Project-Based)",
    company: "Unfold India",
    period: "2024",
    description: [
      "Developed a business website for Unfold India",
      "Implemented responsive UI and clean layout",
      "Focused on usability and modern design",
      "Delivered a production-ready website"
    ],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Frontend / Full-Stack Developer",
    company: "Personal Projects",
    period: "2024 – Present",
    description: [
      "Built portfolio, gym, and business websites",
      "Implemented animations and smooth interactions",
      "Focused on responsive and deployable code",
      "Used Git/GitHub for version control"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
];

const ExperienceRow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="content-section py-4 group">
      <h2 className="row-title mb-6 px-4 md:px-0">Experience</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/60 p-2 h-full opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center hover:bg-black/80"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/60 p-2 h-full opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center hover:bg-black/80"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div
        ref={scrollRef}
        className="row-scroller flex gap-6 overflow-x-auto px-[4%] pt-12 pb-20 -mx-[4%] scrollbar-hide"
      >
        {experiences.map((exp, index) => (
          <RevealOnScroll key={index} delay={index * 150} className="flex-shrink-0">
            <div className="experience-card relative group/card w-[350px] md:w-[450px] h-[260px] md:h-[300px] flex-shrink-0 rounded-md overflow-hidden bg-[#141414] border border-white/5 transition-all duration-500 hover:scale-105 hover:z-50 hover:border-red-600/50 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer">

              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img src={exp.image} alt={exp.company} className="w-full h-full object-cover opacity-40 group-hover/card:opacity-20 transition-opacity duration-500 saturate-0 group-hover/card:saturate-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">

                {/* Header (Always Visible) */}
                <div className="mb-2 transform transition-all duration-500 group-hover/card:-translate-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover/card:text-red-500 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="font-semibold">{exp.title}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                </div>

                {/* Hidden Details (Reveal on Hover) */}
                <div className="max-h-0 opacity-0 group-hover/card:max-h-[200px] group-hover/card:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                  <ul className="text-xs md:text-sm text-gray-400 space-y-1 list-disc pl-4 marker:text-red-600">
                    {exp.description.map((item, i) => (
                      <li key={i} className="line-clamp-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ExperienceRow;
