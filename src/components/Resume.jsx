import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0f1f] text-gray-200 px-6 py-20 text-center overflow-hidden font-mono">

      {/* === CYBER GRID BACKGROUND === */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Horizontal lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 w-full h-[1px] bg-cyber-blue/10"
            style={{ top: `${(i + 1) * 5}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
          />
        ))}

        {/* Vertical lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 h-full w-[1px] bg-cyber-blue/10"
            style={{ left: `${(i + 1) * 5}%` }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 5, delay: i * 0.1, repeat: Infinity }}
          />
        ))}

        {/* Floating pulse light */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-cyber-blue/10 blur-3xl"
          animate={{
            x: ["0%", "80%", "0%"],
            y: ["0%", "60%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* === CONTENT === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-cyber-blue mb-6 drop-shadow-[0_0_15px_#00BFFF]"
      >
        My Resume
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-400 mb-8 max-w-2xl"
      >
        You can view or download my most recent resume below.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap gap-6 mb-8 justify-center"
      >
        <a
          href="/Jeray_NeelySpeaks_Associate_Engineer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyber-blue text-white rounded-lg hover:bg-cyber-green hover:scale-105 transform transition-all duration-300 shadow-[0_0_15px_#00BFFF] hover:shadow-[0_0_25px_#00FF9C]"
        >
          View Resume
        </a>
        <a
          href="/Jeray_NeelySpeaks_Associate_Engineer_Resume.pdf"
          download
          className="px-6 py-3 border border-cyber-blue text-cyber-blue rounded-lg hover:bg-cyber-blue hover:text-white hover:scale-105 transform transition-all duration-300 shadow-[0_0_10px_#00BFFF55]"
        >
          Download PDF
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="w-full max-w-4xl border border-cyber-blue/30 rounded-xl shadow-lg overflow-hidden hover:shadow-[0_0_30px_#00BFFF66] transition-all duration-500"
      >
        <iframe
          src="/Jeray_NeelySpeaks_Associate_Engineer_Resume.pdf"
          title="Jeray Neely-Speaks Resume"
          className="w-full h-[80vh] rounded-xl"
        />
      </motion.div>
    </section>
  );
}
