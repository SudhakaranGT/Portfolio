import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = [
    "Full Stack Developer",
    "Frontend Developer",
    "Data Analyst",
    "Data Scientist",
    "Python Developer",
    "Machine Learning Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxProfessionLength = Math.max(
    ...professions.map((profession) => profession.length)
  );

  return (
    <div className="border-b border-blue-500 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8 mb-20">
          <div className="flex justify-center relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200 to-cyan-900 sm:w-64 sm:h-64 xs:w-full xs:h-90 lg:w-96 lg:h-96 xl:w-112 xl:h-112"
            />
            <motion.div
              className="absolute w-95 h-95 rounded-full sm:w-64 sm:h-64 xs:w-full xs:h-full lg:w-96 lg:h-96 xl:w-112 xl:h-112"
              animate={{
                y: ["0%", "-5%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h2 className="text-lg font-medium">
              Welcome to my portfolio!
            </h2>
            <h1 className="text-4xl font-bold lg:text-7xl">I'm <span className="text-blue-500">Sudhakaran</span></h1>
            <div className="h-16">
              <AnimatePresence>
                {professions.map(
                  (profession, index) =>
                    index === professionIndex && (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-500 lg:text-3xl md:text-3xl text-2xl"
                        style={{ width: `${maxProfessionLength * 0.75}ch` }}
                      >
                        {profession.split("").map((letter, letterIndex) => (
                          <motion.span
                            key={letterIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: letterIndex * 0.1,
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </motion.span>
                    )
                )}
              </AnimatePresence>
            </div>
            <p className="max-w-xl text-xl font-light">
              Pre-final year IT student specializing in Python, R, SQL for data
              manipulation, and Tableau, Excel for visualization. Skilled in
              deriving insights from complex datasets.
            </p>
            <p className="max-w-xl text-xl font-light">
              Having strong background in Programming languages like Python, C,
              C++.
            </p>
            <p className="max-w-xl text-xl font-light">
              Proficient in web development with HTML, CSS, JavaScript, React
              for front-end, Node.js, Express.js for server-side, and MongoDB
              for database.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
