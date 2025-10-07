import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function Navbar() {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/" || location.hash === "#/") {
      e.preventDefault(); // stop navigation
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional: scroll to top
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0f1f]/80 backdrop-blur-md border-b border-cyber-blue/30 z-50 font-mono">
      <ul className="flex justify-center gap-10 py-4 text-gray-200">
        <li>
          <Link
            to="/"
            onClick={handleHomeClick}
            className="hover:text-cyber-green transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-cyber-green transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-cyber-green transition">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-cyber-green transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
  );
}
