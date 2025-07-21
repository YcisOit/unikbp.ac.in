import React from "react";

const skills = [
  "Design",
  "Standards & Quality Assurance",
  "Indo-Japan Program",
  "Marketing",
  "IT & Software",
  "Skill Impact Bond",
];

const SkillDevelopmentCenter = () => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[600px] md:min-h-[200px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('bg.jpg')" }} // Ensure bg.jpg is in /public
      />
  

      {/* Content Area */}
      <div className="relative z-10 h-full w-full flex flex-col-reverse lg:flex-row justify-center items-center text-white px-4 lg:px-16 py-10 gap-8">
        
        {/* Left Side: Skills */}
        <div className="flex flex-wrap gap-4 max-w-xl w-full justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#940E5C] px-4 py-3 rounded-md flex items-center justify-center text-center font-bold text-white text-sm sm:text-base shadow-lg hover:scale-105 transform transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Right Side: Text */}
        <div className="text-center max-w-xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-4 drop-shadow-md">
            Skill Development Center
          </h2>
          <p className="text-md sm:text-lg md:text-xl font-medium drop-shadow-md font-serif">
            For Holistic Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopmentCenter;
