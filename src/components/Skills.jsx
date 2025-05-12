import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, title, skills }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-100 p-6 rounded-2xl sm:w-[360px] w-full"
    >
      <h3 className="text-white font-bold text-[20px]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={`${title}-${skillIndex}`}
            className="bg-tertiary px-3 py-1 rounded-full text-sm text-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const technicalSkills = [
    "Python", "Java", "C++", "JavaScript", 
    "React.js", "Node.js", "Express.js", 
    "MongoDB", "PostgreSQL", "MySQL",
    "TensorFlow", "PyTorch", "Scikit-learn",
    "Git", "Docker", "AWS", "Azure"
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking", 
    "Communication", "Teamwork", 
    "Leadership", "Time Management",
    "Adaptability", "Creativity"
  ];

  const hobbies = [
    "Reading", "Hiking", "Photography", 
    "Chess", "Coding Challenges", 
    "Music", "Travel"
  ];

  const coActivities = [
    "Student Council Member", 
    "Hackathon Participant", 
    "Tech Club Organizer",
    "Volunteer at Code for Good",
    "Open Source Contributor",
    "AI Research Assistant"
  ];

  const certifications = [
    "AWS Certified Developer",
    "Machine Learning Specialization (Coursera)",
    "Full-Stack Web Development (Udemy)",
    "Python for Data Science (IBM)",
    "TensorFlow Developer Certificate",
    "React.js Advanced Concepts"
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My abilities</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills & Activities.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below are my technical and soft skills, certifications, hobbies, and co-curricular activities
          that showcase my diverse interests and capabilities beyond just coding.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <SkillCard index={0} title="Technical Skills" skills={technicalSkills} />
        <SkillCard index={1} title="Soft Skills" skills={softSkills} />
        <SkillCard index={2} title="Certifications" skills={certifications} />
        <SkillCard index={3} title="Hobbies & Interests" skills={hobbies} />
        <SkillCard index={4} title="Co-curricular Activities" skills={coActivities} />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
