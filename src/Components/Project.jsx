import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      name: "Job Board",
      description:
        "a comprehensive job portal that utilizes ML techniques for resume classification, resume ranking, and fraud detection in job listings.",
      githubLink: "https://github.com/SudhakaranGT/JobBoard",
    },
    {
      name: "Sign Language Translation",
      description: "sign language translator using LSTM deep learning models",
      githubLink: "https://github.com/SudhakaranGT/Sign-Language-Translation",
    },
    {
      name: "Real Estate Web",
      description:
        " a web frontend for a real estate application built using React",
      githubLink: "https://github.com/SudhakaranGT/RealEstateWeb",
    },
    {
      name: "Package Delivery System",
      description:
        "a package delivery system using data structures and tkinter for the graphical user interface",
      githubLink: "https://github.com/SudhakaranGT/Package-Delivery-System",
    },
    {
        name: "Plagarism Checker",
        description:
          "Plagarism checker using Data structures and HTML,CSS,python",
        githubLink: "https://github.com/SudhakaranGT/Package-Delivery-System",
      },
  ];

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  };

  const linkVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="border-b border-blue-500 py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6  rounded-lg shadow-md "
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{project.name}</h3>
              <motion.p
                className="mb-4 overflow-hidden overflow-ellipsis h-20"
                variants={linkVariants}
              >
                {project.description}
              </motion.p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FaGithub className="mr-2" />
                <motion.span variants={linkVariants}>
                  View on GitHub
                </motion.span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
