import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a results-driven Software Engineer with a strong foundation in Object-Oriented Design,
        Data Structures, and Algorithm Development. Proficient in Python, C++, and Java, with hands-on
        experience building scalable and efficient solutions. Passionate about solving complex problems
        using Distributed Systems, Machine Learning, and Cloud Computing. My previous internship
        experience at Ernst & Young, LiveWires, and EAI has allowed me to apply AI, business development,
        and software engineering principles to real-world challenges.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 flex flex-wrap gap-6"
      >
        <div className="bg-tertiary rounded-xl p-4 w-full md:w-[48%] shadow-lg">
          <h3 className="text-white text-xl font-bold border-b border-[#915eff] pb-2 mb-3">Education</h3>
          <div className="mb-3">
            <p className="text-white font-semibold">Bachelor of Technology in Computer Science</p>
            <p className="text-secondary">Vellore Institute of Technology • 2020-2024</p>
            <p className="text-[#915eff] mt-1">CGPA: 8.5/10</p>
          </div>
        </div>

        <div className="bg-tertiary rounded-xl p-4 w-full md:w-[48%] shadow-lg">
          <h3 className="text-white text-xl font-bold border-b border-[#915eff] pb-2 mb-3">Key Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Python", "Java", "C++", "Machine Learning", "Cloud Computing",
              "Data Structures", "Algorithms", "Problem Solving"].map((skill) => (
              <span key={skill} className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-8"
      >
        <div className="bg-tertiary rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center border-b border-[#915eff] pb-3 mb-4">
            <h3 className="text-white text-xl font-bold">Resume Highlights</h3>
            <a
              href="/resume.pdf"
              download
              className="bg-[#915eff] hover:bg-[#7d4edb] text-white py-1.5 px-4 rounded-full text-sm transition-all duration-300 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Full Resume
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#915eff] font-semibold mb-2">Work Experience</h4>
              <div className="mb-3 pl-3 border-l-2 border-[#915eff]/30">
                <p className="text-white font-medium">Software Engineering Intern</p>
                <p className="text-secondary text-sm">Ernst & Young • 2023</p>
                <p className="text-secondary text-sm mt-1">Developed AI solutions for business challenges</p>
              </div>
              <div className="mb-3 pl-3 border-l-2 border-[#915eff]/30">
                <p className="text-white font-medium">AI Research Intern</p>
                <p className="text-secondary text-sm">LiveWires • 2022</p>
                <p className="text-secondary text-sm mt-1">Implemented machine learning algorithms</p>
              </div>
            </div>

            <div>
              <h4 className="text-[#915eff] font-semibold mb-2">Certifications & Achievements</h4>
              <ul className="list-disc list-inside text-secondary space-y-2">
                <li className="text-sm"><span className="text-white">AWS Certified Developer</span> - Amazon Web Services</li>
                <li className="text-sm"><span className="text-white">Machine Learning Specialization</span> - Stanford Online</li>
                <li className="text-sm"><span className="text-white">Hackathon Winner</span> - VIT TechFest 2022</li>
                <li className="text-sm"><span className="text-white">Dean's List</span> - Academic Excellence Award</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
