export default function Projects() {
    const projects = [
      {
        title: "Flask Log Analyzer",
        description: "Real-time Flask dashboard analyzing 50k+ security logs daily.",
        tech: ["Python", "Flask", "SQL", "HTML/CSS"],
        link: "https://github.com/JerayNeely04/log-analyzer",
      },

      {
        title: "AI Phishing Detection Tool",
        description: "Java + Machine Learning tool analyzing 1M+ URLs daily with 85% phishing classification accuracy.",
        tech: ["Java", "Machine Learning", "REST API"],
        link: "https://github.com/JerayNeely04/AI-Phishing-Detector",
      },

      {
        title: "PeriodicTable Database",
        description: "An interactive database for the periodic table with search and filter features.",
        tech: ["Java"],
        link: "https://github.com/JerayNeely04/PeriodicTable-Database",
      },
      


      {

        title: "Plane Spotter AR App",
        description: "Mobile app built with C# and Unity that displays live flight data using FlightAware API.",
        tech: ["C#", "Unity", "REST API"],
        link: "https://github.com/JerayNeely04/plane-spotter",
      },
      {
        title: "Unix Shell",
        description: "Custom shell written in C supporting pipes, redirection, and background processes.",
        tech: ["C", "Linux", "Bash"],
        link: "https://github.com/JerayNeely04/WishShell",
      },
      {
        title: "DNA Sequence Analyzer",
        description: "Bioinformatics project comparing chimp DNA sequences for pattern analysis.",
        tech: ["Python", "NumPy", "Pandas"],
        link: "https://github.com/JerayNeely04/dna-sequence-analyzer",
      },
    ];
  
    return (
      <section
        id="projects"
        className="min-h-screen bg-[#0a0f1f] text-gray-200 py-20 px-6 text-center"
      >
        <h1 className="text-4xl font-bold text-cyber-blue mb-10 drop-shadow-[0_0_15px_#00BFFF]">
          Projects
        </h1>
  
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-[#111827] border border-cyber-blue/30 rounded-xl shadow-lg hover:border-cyber-green/50 hover:shadow-[0_0_25px_#00FF9C] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-cyber-blue mb-3">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
  
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-cyber-blue/40 text-cyber-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
  
              {/* 🔗 GitHub Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-cyber-green text-cyber-green rounded-md hover:bg-cyber-green hover:text-black transition-all duration-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  