import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="flex items-center gap-4">
        <div className="text-[#915eff] text-[28px]">
          {icon}
        </div>
        <h3 className="text-white font-bold text-[20px]">{title}</h3>
      </div>
      <p className="mt-4 text-secondary text-[14px]">{description}</p>
    </motion.div>
  );
};

const achievements = [
  {
    title: "Achiever Award 2025 and 2023",
    description: "Knowledge Institute of Technology (KIOT). Honored for outstanding academic and extracurricular contributions.",
    icon: <FaTrophy />
  },
  {
    title: "2nd Place – Paper Presentation",
    description: "National Level Technical Symposium. Presented a paper on AI and Ethics at Dhirajlal Gandhi College of Technology (Apr 6, 2024) and received a cash prize.",
    icon: <FaMedal />
  },
  {
    title: "3rd Place – Zonal Level Women's Basketball",
    description: "Anna University. Represented KIOT and achieved a podium finish through exceptional teamwork and resilience.",
    icon: <FaMedal />
  },
  {
    title: "Winner – iStart Hackathon 2024",
    description: "Secured 10,000 cash prize for innovative tech solution at the iStart Incubation Center.",
    icon: <FaTrophy />
  },
  {
    title: "Best Emerging Startuppreneur Award 2024",
    description: "iStart Incubation Center. Recognized for entrepreneurial excellence and startup innovation.",
    icon: <FaAward />
  },
  {
    title: "Winner – Smart Minds Hackathon",
    description: "AIC RAISE Business Incubator. Awarded for impactful tech contributions addressing real-world problems.",
    icon: <FaTrophy />
  },
  {
    title: "International Service Director",
    description: "RAC Salem Metropolis. Leading cross-cultural service initiatives as part of the global Rotaract community.",
    icon: <FaAward />
  },
  {
    title: "SAWIT.AI Learnathon Certification",
    description: "GUVI – IITM Research Park. Successfully completed AI-based learning program focused on real-world applications.",
    icon: <FaAward />
  },
  {
    title: "IBM Hack Challenge 2023 – Team Finalist",
    description: "Completed IBM's prestigious challenge with a collaborative project on innovation.",
    icon: <FaMedal />
  },
  {
    title: "JLPT N5 Certification",
    description: "International Certification. Cleared Japanese Language Proficiency Test Level N5, demonstrating perseverance and dedication to continuous learning.",
    icon: <FaAward />
  }
];

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Recognition and Accomplishments
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Key Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {achievements.map((achievement, index) => (
          <AchievementCard 
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
