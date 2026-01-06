import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Based Startup",
    tech: "Typescript • FastAPI • Vanilla.js",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767555626/unfold_india_yelgvh.png",
    link: "https://real-unfoldindia-8u38.onrender.com/",
    gradient: "from-rose-600 to-rose-900",
    description: "Travel Based AI Startup",
  },
  {
    title: "Web Designing Agency",
    tech: "React • WebSocket • D3.js",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767648985/breekcodes_qsroqs.png",
    link: "https://breek0307.github.io/breekcodes/",
    gradient: "from-blue-600 to-blue-900",
    description: "creating website that convert leads",
  },
  {
    title: "Gym Based Website",
    tech: "React • TypeScript • PostgreSQL",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767555626/gym_awlhzd.png",
    link: "https://breek-fitness.onrender.com",
    gradient: "from-emerald-600 to-emerald-900",
    description: "website for gym",
  },
  {
    title: "instant roadmap designer",
    tech: "Python • FastAPI • OpenAI",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767649402/path_forge_wqstr5.png",
    link: "#",
    gradient: "from-purple-600 to-purple-900",
    description: "design roadmap for startup",
  },
  {
    title: "tech club website",
    tech: "React • TypeScript • Tailwind",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767649088/tech_club_mt4d3k.png",
    link: "https://tech-club-site.onrender.com",
    gradient: "from-amber-600 to-amber-900",
    description: "website for tech club",
  },
];

const ProjectsRow = () => {
  return (
    <section id="projects" className="content-section py-0">
      <h2 className="row-title mb-4 px-4 md:px-0">Featured Projects</h2>
      <div className="row-scroller flex gap-4 overflow-x-auto px-[4%] pt-32 pb-40 -mx-[4%] -mt-24 scrollbar-hide">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsRow;
