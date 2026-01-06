import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];

const SkillsRow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="content-section py-4 relative group">
      <h2 className="row-title mb-6">Trending Skills</h2>

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
        className="row-scroller flex gap-0 px-[4%] overflow-x-auto scrollbar-hide pb-12 pt-4 -ml-[4%]"
        style={{ scrollBehavior: 'smooth' }}
      >
        {skills.map((skill, index) => (
          <div key={skill.name} className="relative flex-shrink-0 flex items-end group/card w-[220px] md:w-[260px] mx-1 first:ml-0 transition-transform duration-300 hover:z-30 hover:scale-105">
            {/* Big Rank Number */}
            <div className="absolute left-[-15px] bottom-[-20px] z-40 transition-transform duration-300 group-hover/card:translate-x-[-5px] pointer-events-none">
              <span
                className="text-[6rem] md:text-[8rem] font-black leading-none tracking-tighter text-black stroke-white"
                style={{
                  WebkitTextStroke: '2px #5e5e5e',
                  textShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 4px'
                }}
              >
                {index + 1}
              </span>
            </div>

            {/* Poster Card */}
            <div className="relative z-20 w-full aspect-video rounded-md overflow-hidden bg-[#141414] shadow-lg transition-all duration-300 group-hover/card:shadow-[0_0_20px_rgba(229,9,20,0.4)] border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              <div className="w-full h-full p-6 flex flex-col items-center justify-center relative z-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] ${skill.name === 'AWS' ? 'w-full h-auto mt-8' : 'w-20 h-20'
                    }`}
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                <span className="text-white font-bold tracking-wide uppercase text-sm drop-shadow-md">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsRow;
