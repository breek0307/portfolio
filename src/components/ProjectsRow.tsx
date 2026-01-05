const projects = [
  {
    title: "AI Based Startup",
    tech: "Typescript • FastAPI • Vanilla.js",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767639266/unfold_india_tvicxo.png",
    link: "https://real-unfoldindia-8u38.onrender.com/",
    gradient: "from-rose-600 to-rose-900",
    description: "Travel Based AI Startup",
  },
  {
    title: "Web Designing Agency",
    tech: "React • WebSocket • D3.js",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767639266/breekcode_u2cldv.png",
    link: "https://breek0307.github.io/breekcodes/",
    gradient: "from-blue-600 to-blue-900",
    description: "creating website that convert leads",
  },
  {
    title: "Gym Based Website",
    tech: "React • TypeScript • PostgreSQL",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767639274/breek_fit_fjiyua.png",
    link: "https://breek-fitness.onrender.com",
    gradient: "from-emerald-600 to-emerald-900",
    description: "website for gym",
  },
  {
    title: "roadmap designer",
    tech: "Python • FastAPI • OpenAI",
    image: "https://res.cloudinary.com/dkqyscpeq/image/upload/v1767639296/pathforge_dwxycu.png",
    link: "#",
    gradient: "from-purple-600 to-purple-900",
    description: "design roadmap for startup",
  },
  {
    title: "Mobile Banking UI",
    tech: "React Native • Tailwind",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    link: "#",
    gradient: "from-amber-600 to-amber-900",
    description: "Modern fintech mobile interface",
  },
];

const ProjectsRow = () => {
  return (
    <section id="projects" className="content-section">
      <h2 className="row-title">Featured Projects</h2>
      <div className="row-scroller">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group relative block cursor-pointer"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`} />
            )}

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

            <div className="project-card-overlay flex flex-col justify-end p-4 h-full relative z-10">
              <h3 className="project-card-title text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
              <p className="project-card-tech text-sm text-gray-200 mt-1 drop-shadow-sm">{project.tech}</p>

              {/* "View Project" Button appearing on hover */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-gray-200 transition">
                  View Project
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsRow;
