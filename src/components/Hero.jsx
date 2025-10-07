import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0a0f1f]/80 backdrop-blur-md border-b border-cyber-blue/30 z-50">
        <ul className="flex justify-center gap-10 py-4 text-gray-200 font-mono">
          <li>
            <a href="#hero" className="hover:text-cyber-green transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyber-green transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyber-green transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* 🪩 Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0a0f1f] text-gray-200 text-center pt-20 font-mono"
      >
        {/* 🔮 Particle Background */}
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
        </div>

        {/* 🧮 Binary Matrix Effect */}
        <div className="absolute inset-0 overflow-hidden z-0 flex justify-center glow-binary">
          <div className="w-full h-full text-[10px] font-mono leading-4 tracking-widest whitespace-pre-wrap animate-scroll opacity-70">
            {Array.from({ length: 20000 }).map((_, i) => (
              <span key={i} className="inline-block">
                {Math.random() > 0.5 ? "1" : "0"}
                {i % 100 === 99 ? "\n" : " "}
              </span>
            ))}
          </div>
        </div>

        {/* ✨ Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-transparent to-cyber-green/20 blur-3xl animate-pulse -z-30" />

        {/* 🌟 Foreground */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cyber-blue drop-shadow-[0_0_20px_#00BFFF] hover:drop-shadow-[0_0_35px_#00BFFF] transition-all duration-500">
            Jeray Neely-Speaks
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Cybersecurity Analyst",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-xl md:text-2xl text-cyber-green mb-8 tracking-widest uppercase drop-shadow-[0_0_10px_#00FF9C]"
          />

          {/* 🧩 Tagline */}
          <p className="max-w-2xl mx-auto mb-12 leading-relaxed text-gray-100 drop-shadow-[0_0_12px_#ffffff] animate-[brightGlow_2.5s_ease-in-out_infinite_alternate]">
            Building secure systems, data pipelines, and AI-powered tools for a
            safer digital world.
          </p>

          {/* 🔗 Cyber Boxes for Links */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {/* GitHub */}
            <motion.a
              href="https://github.com/JerayNeely04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3 p-6 w-44 h-44 border border-cyber-purple rounded-xl bg-cyber-purple/5 hover:bg-cyber-purple/20 transition-all duration-300 shadow-[0_0_15px_#9D4EDD55] hover:shadow-[0_0_30px_#9D4EDD88]"
            >
              <Github className="w-10 h-10 text-cyber-purple group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold text-cyber-purple">GitHub</h3>
              <p className="text-xs text-gray-400">View my work</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/jeray-neely-speaks-05931a234/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3 p-6 w-44 h-44 border border-cyber-green rounded-xl bg-cyber-green/5 hover:bg-cyber-green/20 transition-all duration-300 shadow-[0_0_15px_#00FF9C55] hover:shadow-[0_0_30px_#00FF9C88]"
            >
              <Linkedin className="w-10 h-10 text-cyber-green group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold text-cyber-green">LinkedIn</h3>
              <p className="text-xs text-gray-400">Let’s connect</p>
            </motion.a>

            {/* Resume */}
            <Link
              to="/resume"
              className="group flex flex-col items-center gap-3 p-6 w-44 h-44 border border-cyber-blue rounded-xl bg-cyber-blue/5 hover:bg-cyber-blue/20 transition-all duration-300 shadow-[0_0_15px_#00BFFF55] hover:shadow-[0_0_30px_#00BFFF88]"
            >
              <FileText className="w-10 h-10 text-cyber-blue group-hover:animate-pulse" />
              <h3 className="text-lg font-semibold text-cyber-blue">Resume</h3>
              <p className="text-xs text-gray-400">View / Download</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
