import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const Certification = () => {
  const certifications = [
    {
      title: "Google | Data Analyst Professional",
      organization: "Coursera",
      issueDate: "June 2023",
      description:
        "Completed a comprehensive course on Data analyst consist 0f 8 certificates.",
    },
    {
      title: "Meta | Front end Developer",
      organization: "Coursera",
      issueDate: "March 2023",
      description: "Studying Comprehensive course for Frontend development",
    },
    {
      title: "Ethical Hacking",
      organization: "NPTEL",
      issueDate: "Dec 2023",
      description:
        "Gained expertise in Ethical hacking and various penetration techniques",
    },
    {
      title: "Programming in Modern C++",
      organization: "NPTEL",
      issueDate: "April 2023",
      description: "Motivated to learn C++ and terminilogies",
    },
  ];

  return (
    <div className="border-b border-blue-500 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-500 font-bold text-center mb-12">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-lg shadow-lg mb-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"></div>
              <div className="flex items-center mb-4">
                <FaAward className="text-blue-500 w-10 h-10 mr-4" />
                <h3 className="text-2xl text-blue-500 font-bold">
                  {cert.title}
                </h3>
              </div>
              <p className="text-lg mb-2">Issued by: {cert.organization}</p>
              <p className="text-lg mb-2">Issue Date: {cert.issueDate}</p>
              <p className="text-base text-gray-400">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
