import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // ✅ import Contact

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ new route */}
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Contact /> {/* ✅ shows contact section at bottom of homepage */}
    </>
  );
}

export default App;
