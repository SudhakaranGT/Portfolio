import React, { useRef } from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      year: "2009 - 2019",
      icon: <FaSchool />,
      school: "Govt. Hr. Sec. School, Kunnagampoondi",
      degree: "SSLC",
      achievements: "School Topper, School Pupil Leader, Social Science-100%",
      marks: "91%",
    },
    {
      year: "2019 - 2021",
      icon: <FaUniversity />,
      school: "Govt. Hr. Sec. School, Kunnagampoondi",
      degree: "HSC",
      achievements: "School Topper, Topper in all Subjects",
      marks: "92%",
    },
    {
      year: "2021 - 2025",
      icon: <MdSchool />,
      school: "SSN College Of Engineering, Chennai",
      degree: "B.Tech. in Information Technology",
      achievements:
        "Spurs Scholar, Participated in Various Coding Competitions",
      marks: "7.8 CGPA",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="border-b border-blue-500 pb-4 lg:mb-35 flex flex-col items-center"
    >
      <h1 className="text-blue-500 text-3xl font-bold m-20">Education</h1>
      {educationDetails.map((edu, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-full lg:w-3/4 xl:w-2/3 flex mb-8 p-6 rounded-lg shadow-neomorphic"
        >
          <div className="w-20 h-36 flex justify-center items-center text-7xl mr-8 text-blue-500">
            {edu.icon}
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-2xl font-semibold">{edu.degree}</div>
            <div className="text-xl">{edu.school}</div>
            <div className="text-lg text-gray-500">{edu.year}</div>
            <div className="text-lg">Marks: {edu.marks}</div>
            <div className="text-lg">Achievements: {edu.achievements}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
