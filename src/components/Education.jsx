import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ title, school, date, degree, score }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="mt-1">
        <h3 className="text-white font-bold text-[24px]">{school}</h3>
        <p className="text-secondary text-[16px] mt-2">{title}</p>
        <p className="text-white-100 text-[14px] mt-2">{degree}</p>
        <p className="text-white-100 text-[14px] mt-2">Score: {score}</p>
        <p className="text-secondary text-[14px] mt-4">{date}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        <EducationCard
          school="Knowledge Institute of Technology"
          title="B.Tech in Artificial Intelligence and Data Science"
          degree="Bachelor of Technology"
          score="CGPA: 8.5"
          date="2021-2025"
        />
        <EducationCard
          school="SSV Higher Secondary School"
          title="Higher Secondary Certificate (HSC)"
          degree="12th Grade"
          score="90.5%"
          date="2021"
        />
        <EducationCard
          school="SSV Higher Secondary School"
          title="Secondary School Leaving Certificate (SSLC)"
          degree="10th Grade"
          score="85.4%"
          date="2019"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
