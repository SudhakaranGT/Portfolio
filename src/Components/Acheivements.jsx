import React from 'react';
import { FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = () => {
  const achievements = [
    {
      title: 'School Topper in SSLC',
      description: 'Achieved highest marks in SSLC exams at Govt. Hr. Sec. School, Kunnagampoondi.',
    },
    {
      title: 'School Topper in HSC',
      description: 'Achieved highest marks in HSC exams at Govt. Hr. Sec. School, Kunnagampoondi.',
    },
    {
      title: 'Spurs Scholar',
      description: 'Awarded Spurs Scholarship for outstanding academic performance at SSN College Of Engineering.',
    },
    {
        title: 'Spurs Scholar',
        description: 'Awarded Spurs Scholarship for outstanding academic performance at SSN College Of Engineering.',
      },
      {
        title: 'Spurs Scholar',
        description: 'Awarded Spurs Scholarship for outstanding academic performance at SSN College Of Engineering.',
      },
  ];

  return (
    <div className="border-b border-blue-500 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">Achievements</h2>
        <div className="flex flex-col items-center">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AchievementCard = ({ achievement }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Set the threshold
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg shadow-md mb-6 w-full md:w-3/4 lg:w-2/3"
    >
      <div className="flex items-center mb-4 text-2xl">
        <FaMedal className="mr-4 text-blue-500" />
        <h3 className="font-semibold text-blue-500">{achievement.title}</h3>
      </div>
      <p>{achievement.description}</p>
    </motion.div>
  );
};

export default Achievements;
