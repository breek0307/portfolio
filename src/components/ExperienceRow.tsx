const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading frontend architecture and mentoring junior developers. Reduced load time by 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2021 - 2023",
    description: "Built core product dashboard serving 50K+ users. Implemented CI/CD pipelines.",
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    period: "2020 - 2021",
    description: "Delivered 20+ client projects. Specialized in React and Node.js applications.",
  },
];

const ExperienceRow = () => {
  return (
    <section id="experience" className="content-section">
      <h2 className="row-title">Experience & Journey</h2>
      <div className="row-scroller">
        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="experience-card">
            <span className="experience-role">{exp.role}</span>
            <span className="experience-company">{exp.company}</span>
            <span className="experience-period">{exp.period}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceRow;
