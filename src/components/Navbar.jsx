import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0f1f]/80 backdrop-blur-md border-b border-cyber-blue/30 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-cyber-blue drop-shadow-[0_0_10px_#00BFFF]">
          Jeray Neely-Speaks
        </Link>
        <div className="space-x-8 text-gray-300 font-mono text-sm tracking-wide">
          <Link to="/" className="hover:text-cyber-green transition">Home</Link>
          <Link to="/projects" className="hover:text-cyber-green transition">Projects</Link>
          <Link to="/resume" className="hover:text-cyber-green transition">Resume</Link>
          <a href="#contact" className="hover:text-cyber-green transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
