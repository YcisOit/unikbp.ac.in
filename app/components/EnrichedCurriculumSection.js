'use client'
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EnrichedCurriculumSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the section is in view
    threshold: 0.2,    // Trigger when 20% of the element is in view
  });

  const leftPrograms = [
    "Honors Programs",
    "Internships & Co-op Programs",
    "Study Abroad Programs",
    "Service-Learning Initiatives",
    "Interdisciplinary Courses",
    "Leadership Development Programs",
    "Mentorship Programs",
    "Health & Wellness Programs",
  ];

  const rightPrograms = [
    "Research & Innovation Initiatives",
    "Financial Literacy Programs",
    "Capstone Projects",
    "Industry Partnerships",
    "Entrepreneurship Programs",
    "Technology Integration",
    "Career Counselling Services",
  ];

  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-center font-serif text-4xl font-bold text-pink-700 mb-4">
        Enriched Curriculum
      </h2>
      <p className="text-center text-lg mb-5 max-w-4xl mx-auto">
        An enriched curriculum in a university typically goes beyond the basic academic
        requirements and offers additional components that enhance the overall learning experience.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-10 max-w-6xl mx-auto">
        <ul className="text-left lg:text-left space-y-2">
          {leftPrograms.map((item, idx) => (
            <li key={idx} className="list-disc list-inside text-gray-800">
              {item}
            </li>
          ))}
        </ul>

        {/* Motion Image Section */}
        <motion.div
          ref={ref}
          initial={{ scale: 0.1, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[200px] sm:w-[200px] md:w-[300px] h-auto relative"
        >
          <Image
            src="/images/footer1.png" // Direct path from the public folder
            alt="Tree growing from book"
            layout="intrinsic" // Better control over image size
            width={400} // Optional: Set the desired width
            height={400} // Optional: Set the desired height
          />
        </motion.div>

        <ul className="text-left space-y-2">
          {rightPrograms.map((item, idx) => (
            <li key={idx} className="list-disc list-inside text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EnrichedCurriculumSection;
