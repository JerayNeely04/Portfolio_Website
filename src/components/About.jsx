export default function About() {
    return (
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-900 text-center transition-colors duration-500"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          I’m <span className="font-semibold">Jeray Neely-Speaks</span>, a
          software engineer and cybersecurity professional passionate about
          building secure, scalable backend systems and cloud-integrated
          applications. My background combines{" "}
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            software engineering, database management, and cybersecurity
          </span>{" "}
          to create reliable solutions that protect and power enterprise systems.
          I’m driven by innovation, problem-solving, and helping organizations
          improve their digital security posture.
        </p>
      </section>
    );
  }
  