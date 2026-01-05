const projects = [
  {
    title: "E-Commerce Platform",
    tech: "React • Node.js • MongoDB",
    gradient: "from-rose-600 to-rose-900",
    description: "Full-stack marketplace with payment integration",
  },
  {
    title: "Real-Time Dashboard",
    tech: "React • WebSocket • D3.js",
    gradient: "from-blue-600 to-blue-900",
    description: "Analytics dashboard with live data visualization",
  },
  {
    title: "Task Management App",
    tech: "React • TypeScript • PostgreSQL",
    gradient: "from-emerald-600 to-emerald-900",
    description: "Collaborative project management tool",
  },
  {
    title: "AI Content Generator",
    tech: "Python • FastAPI • OpenAI",
    gradient: "from-purple-600 to-purple-900",
    description: "ML-powered content creation platform",
  },
  {
    title: "Mobile Banking UI",
    tech: "React Native • Tailwind",
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
          <div key={project.title} className="project-card">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            <div className="project-card-overlay">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsRow;
