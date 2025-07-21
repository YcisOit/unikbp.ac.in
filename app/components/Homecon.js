'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const videos = [
  'https://www.youtube.com/embed/tgbNymZ7vqY',
  'https://www.youtube.com/embed/3jWRrafhO7M',
  'https://www.youtube.com/embed/ScMzIvxBSi4',
];

const Homecon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 p-4 lg:p-10">
      {/* Paragraph Section */}
      <motion.div
        className="w-full lg:w-1/2 text-justify px-4 lg:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[4vw] xl:text-[3vw] font-bold text-cyan-700 pb-2 font-mono">
          Rayat Shikshan Sanstha
        </h2>
        <p className="text-gray-900">
          A premier institution of education like the Rayat Shikshan Sanstha,
          known and honoured far and wide, not only at the national level, but
          at the global level too, needs no introduction. The institution
          itself is regarded as a noble mission, a noble cause, so earnestly
          and so endearingly pursued by its founder-father Karmaveer Bhaurao Patil,
          the educator of the educators and his legendary wife Sou. Laxmibai Patil
          with her exemplary sacrifices made to turn the mission into a reality. The
          Rayat Shikshan Sanstha is one of the leading educational institutions in
          Asia. The value of its contribution to education in general is enormously
          great as it has, from the very beginning, tried its best to lay emphasis
          on the education of the down-trodden, the poor and the ignorant who really
          form the major bulk of society. The founder of the institution, late
          Dr. Karamaveer Bhaurao Patil, was a man of the masses who devoted all
          his mind and heart to the cause of their education.
          <Link href="/" className="px-2 text-red-600 font-medium">
            Read More...
          </Link>
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="w-full lg:w-1/3 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative w-full">
          <iframe
            src={videos[currentIndex]}
            title={`Video ${currentIndex + 1}`}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-40 xl:h-60 shadow-lg rounded-lg"
            allowFullScreen
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 mx-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? 'bg-cyan-500 border-2 border-white shadow-md'
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Homecon;
