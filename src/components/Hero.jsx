import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sopna</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer | AI & ML Enthusiast | <br className="sm:block hidden" />
            Full-Stack Developer | Problem Solver
          </p>
          <div className="mt-4 flex flex-col gap-2 text-white-100">
            <div className="flex items-center">
              <span className="text-[#915eff] font-bold mr-2">✦</span>
              <span className="text-lg">Passionate about creating innovative solutions</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#915eff] font-bold mr-2">✦</span>
              <span className="text-lg">Specialized in React, Node.js, and Cloud Technologies</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#915eff] font-bold mr-2">✦</span>
              <span className="text-lg">Building the future through code</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#915eff] hover:bg-[#7d4edb] text-white py-2 px-6 rounded-full font-bold text-lg transition-all duration-300 inline-block"
            >
              Let's Connect
            </a>
            <a
              href="resume.pdf"
              download
              className="border-2 border-[#915eff] hover:bg-[#915eff]/10 text-white py-2 px-6 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
