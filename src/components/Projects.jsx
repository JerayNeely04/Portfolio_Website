import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Flask Log Analyzer",
      description:
        "Real-time Flask dashboard analyzing 50k+ security logs daily.",
      tech: ["Python", "Flask", "SQL", "HTML/CSS"],
      link: "https://github.com/JerayNeely04/log-analyzer",
    },
    {
      title: "AI Phishing Detection Tool",
      description:
        "Java + Machine Learning tool analyzing 1M+ URLs daily with 85% phishing classification accuracy.",
      tech: ["Java", "Machine Learning", "REST API"],
      link: "https://github.com/JerayNeely04/AI-Phishing-Detector",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal website built with React, TailwindCSS, and Framer Motion showcasing projects, animations, and my professional resume.",
      tech: ["React", "TailwindCSS", "Framer Motion", "Node.js"],
      link: "https://github.com/JerayNeely04/Portfolio_Website",
    },
    {
      title: "PeriodicTable Database",
      description:
        "An interactive database for the periodic table with search and filter features.",
      tech: ["Java"],
      link: "https://github.com/JerayNeely04/PeriodicTable-Database",
    },
    {
      title: "Plane Spotter AR App",
      description:
        "Mobile app built with C# and Unity that displays live flight data using FlightAware API.",
      tech: ["C#", "Unity", "REST API"],
      link: "https://github.com/JerayNeely04/plane-spotter",
    },
    {
      title: "Unix Shell",
      description:
        "Custom shell written in C supporting pipes, redirection, and background processes.",
      tech: ["C", "Linux", "Bash"],
      link: "https://github.com/JerayNeely04/WishShell",
    },
    {
      title: "DNA Sequence Analyzer",
      description:
        "Bioinformatics project comparing chimp DNA sequences for pattern analysis.",
      tech: ["Python", "NumPy", "Pandas"],
      link: "https://github.com/JerayNeely04/dna-sequence-analyzer",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#08101d] text-gray-200 py-24 px-6 font-mono relative"
    >
      {/* Top Navigation */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <Link
          to="/"
          className="px-5 py-2 rounded-lg border border-cyan-400/40 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/resume"
          className="px-5 py-2 rounded-lg border border-emerald-400/40 text-emerald-300 bg-emerald-400/5 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300"
        >
          Resume
        </Link>

        <Link
          to="/contact"
          className="px-5 py-2 rounded-lg border border-violet-400/40 text-violet-300 bg-violet-400/5 hover:bg-violet-400 hover:text-white transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mt-16 mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70 mb-3">
          Portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A collection of software engineering, backend, data, and security-focused
          projects built to solve real problems and demonstrate practical technical depth.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a]/90 backdrop-blur-sm hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            {/* Image Frame Placeholder */}
            <div className="h-48 border-b border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />
              
              <div className="relative z-10 text-center px-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center text-cyan-300 text-lg">
                  &lt;/&gt;
                </div>
                <p className="text-sm text-gray-400">Project Preview</p>
                <p className="text-xs text-gray-500 mt-1">
                  Screenshot frame placeholder
                </p>
              </div>
            </div>


    {/* Subtle Page Background Binary */}
<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
  <div className="w-full h-full text-[8px] md:text-[10px] font-mono leading-4 tracking-[0.25em] whitespace-pre-wrap text-cyan-400/10 select-none animate-[scrollSlow_80s_linear_infinite]">
    {Array.from({ length: 5000 }).map((_, i) => (
      <span key={i}>
        {Math.random() > 0.5 ? "1" : "0"}
        {i % 140 === 139 ? "\n" : " "}
      </span>
    ))}
  </div>
</div>

            {/* Card Content */}
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg border border-emerald-400/30 text-emerald-300 bg-emerald-400/5 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-300 font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}