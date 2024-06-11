import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Tech = () => {
  const techSkills = {
    ProgrammingLanguages: ["Python", "JavaScript", "C", "C++"],
    WebDevelopment: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    DataAnalysis: ["SQL", "R", "Tableau", "Excel", "Power BI"],
    MachineLearning: ["TensorFlow", "Keras", "scikit-learn"],
    AppDevelopment: ["Flutter"],
    DataScience: ["Numpy", "Pandas", "Matplotlib"],
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2 }}
      className="py-12 border-b border-blue-500"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          Technical Skills
        </h2>
        <div className="flex flex-col">
          {Object.keys(techSkills).map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
              className="p-9 rounded-lg shadow-md mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                {category.split(/(?=[A-Z])/).join(" ")}
              </h3>
              <div className="flex flex-wrap gap-4">
                {techSkills[category].map((skill) => (
                  <span
                    key={skill}
                    className="text-lg text-black bg-blue-500 font-semibold px-8 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Tech;
