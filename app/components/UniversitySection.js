'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState("university");

  const universityNotices = [
    { title: "Annual Exam Timetable 2024", href: "/pdf/annual_exam.pdf" },
    { title: "Revaluation Results 2024", href: "https://externalwebsite.com/reval.pdf" },
    { title: "Convocation Registration Form", href: "/pdf/convocation_form.pdf" },
    { title: "Annual Exam Timetable 2024", href: "/pdf/annual_exam.pdf" },
    { title: "Annual Exam Timetable 2024", href: "/pdf/annual_exam.pdf" },
    { title: "Annual Exam Timetable 2024", href: "/pdf/annual_exam.pdf" },
    { title: "Revised-Notice-Anti-Ragging-CommitteeAnti-Ragging", href: "/pdf/annual_exam.pdf" },
  ];

  const collegeNotices = [
    { title: "College Sports Meet 2024", href: "/pdf/sports_meet.pdf" },
    { title: "Annual Gathering 2024 Details", href: "https://externalwebsite.com/gathering.pdf" },
    { title: "Notice for Admissions 2024-25", href: "/pdf/admissions.pdf" },
  ];

  const notices = activeTab === "university" ? universityNotices : collegeNotices;

  const profiles = [
    {
      name: "Shri C. P. Radhakrishnan",
      title: "Hon’ble Chancellor",
      image: "/images/chancellor.jpg",
      link: "https://rajbhavan-maharashtra.gov.in/en/",
    },
    {
      name: "Shri. Chandrakant Dalvi",
      title: "Hon’ble Provost",
      image: "/images/provost.jpg",
      link: "/pdf/ShriChandrakantDalvi.pdf",
    },
  ];

  const profiles1 = [
    {
      name: "Dr. Dnyandeo Mhaske",
      title: "Hon’ble Vice Chancellor",
      image: "/images/vicechancellor.jpg",
      link: "/pdf/vicechancellor.pdf",
    },
    {
      name: "Dr. Vijay M. Kumbhar",
      title: "I/C Registrar",
      image: "/images/registrar.jpg",
      link: "/pdf/DrVijayKumbhar.pdf",
    },
  ];

  const { ref: refNotices, inView: inViewNotices } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: refProfiles, inView: inViewProfiles } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full justify-center items-center px-4 sm:px-8 lg:px-16 xl:px-40 py-8">
      {/* Notices Section */}
      <motion.div
        ref={refNotices}
        initial={{ x: -100, opacity: 0 }}
        animate={inViewNotices ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full xl:w-1/2"
      >
        <div className="bg-white w-full p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-center font-serif">Notices</h2>

          <div className="flex gap-2 flex-col sm:flex-row">
            <button
              onClick={() => setActiveTab("university")}
              className={`px-4 py-2 font-semibold w-full rounded ${activeTab === "university" ? "bg-black text-white" : "bg-yellow-400 text-black"}`}
            >
              University Notices
            </button>
            <button
              onClick={() => setActiveTab("college")}
              className={`px-4 py-2 font-semibold w-full rounded ${activeTab === "college" ? "bg-black text-white" : "bg-yellow-400 text-black"}`}
            >
              Notices for Colleges
            </button>
          </div>

          <div className="h-[300px] overflow-hidden relative">
            <div className="absolute flex flex-col space-y-2 animate-scroll-up">
              {[...notices, ...notices].map((notice, index) => (
                <div key={index} className="border-b pb-1 flex items-center gap-2">
                  <Image src="/new-icon-gif-3.gif" alt="New" width={32} height={24} />
                  {notice.href.startsWith("http") ? (
                    <a
                      href={notice.href}
                      className="text-gray-800 hover:text-blue-600 underline text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {notice.title}
                    </a>
                  ) : (
                    <Link
                      href={notice.href}
                      className="text-gray-800 hover:text-blue-600 underline text-base"
                    >
                      {notice.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profiles Section */}
      <motion.div
        ref={refProfiles}
        initial={{ x: 100, opacity: 0 }}
        animate={inViewProfiles ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full xl:w-2/3 space-y-6"
      >
        {[profiles, profiles1].map((group, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {group.map((person, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-3 rounded-lg shadow hover:scale-105 transition-transform"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"
                  width={96}
                  height={96}
                />
                <div>
                  <h3 className="text-lg font-bold text-[#940E5C]">{person.name}</h3>
                  <p className="italic">{person.title}</p>
                  {person.link.startsWith("http") ? (
                    <a
                      href={person.link}
                      className="inline-block mt-1 px-3 py-1 bg-[#940E5C] text-white hover:bg-amber-400 rounded-md text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <Link
                      href={person.link}
                      className="inline-block mt-1 px-3 py-1 bg-[#940E5C] text-white hover:bg-amber-400 rounded-md text-sm"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default UniversitySection;
