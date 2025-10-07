import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0f1f] text-gray-200 px-6 py-20 text-center overflow-hidden font-mono"
    >
      {/* 🔙 Navigation Buttons */}
      <div className="absolute top-6 flex gap-4 left-1/2 -translate-x-1/2">
        <Link
          to="/"
          className="px-5 py-2 bg-cyber-blue/20 border border-cyber-blue text-cyber-blue rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="px-5 py-2 bg-cyber-green/20 border border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green hover:text-black transition-all duration-300"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="px-5 py-2 bg-cyber-purple/20 border border-cyber-purple text-cyber-purple rounded-lg hover:bg-cyber-purple hover:text-white transition-all duration-300"
        >
          Resume
        </Link>
      </div>

      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/10 via-transparent to-cyber-purple/10 blur-3xl -z-10" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyber-green mb-6 drop-shadow-[0_0_15px_#00FF9C] mt-20"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 mb-12 max-w-xl"
      >
        Let’s connect! Whether you’re interested in collaborating, hiring, or
        just chatting about cybersecurity and software engineering — feel free
        to reach out.
      </motion.p>

      {/* Contact options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8"
      >
        {/* Email */}
        <a
          href="mailto:jerayneelyspeaks@gmail.com"
          className="group flex items-center gap-3 px-6 py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#00BFFF55]"
        >
          <Mail className="w-5 h-5 group-hover:animate-pulse" />
          jerayneelyspeaks@gmail.com
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jeray-neely-speaks"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-cyber-green/10 border border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#00FF9C55]"
        >
          <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/JerayNeely04"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-cyber-purple/10 border border-cyber-purple text-cyber-purple rounded-lg hover:bg-cyber-purple hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_15px_#9D4EDD55]"
        >
          <Github className="w-5 h-5 group-hover:animate-pulse" />
          GitHub
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-16 text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Jeray Neely-Speaks. All Rights Reserved.
      </motion.p>
    </section>
  );
}
