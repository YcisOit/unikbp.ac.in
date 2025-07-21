"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState("act");

  const universityNotices = [
    { title: "महाराष्ट्र लोकसेवा हक्क अधिनियम 2015", href: "#" },
    {
      title:
        "Gazette Ext No 62 Relating to amendment of Section 11 13 and 109 of Maharashtra Act No 6 of 2017",
      href: "#",
    },
    {
      title:
        "3rd Amendment -Appointment-of-Teachers-and-other-Academic-Staff-amendment-of-UGC-Regulations-2023",
      href: "#",
    },
    {
      title:
        "2nd Amendment -Appointment-of-Teachers-and-other-Academic-Staff-amendment-of-UGC-Regulations-2023",
      href: "#",
    },
    { title: "Research Strengthning Scheme Guidelines-KBPU", href: "#" },
    {
      title:
        "Innovation and Startup Policy For Students and Faculty",
      href: "#",
    },
    { title: "KBPU Satara addition in Principal Act MPUA 2016 Marathi", href: "#" },
    { title: "KBPU Satara addition in Principal Act MPUA 2016 English", href: "#" },
    { title: "1st BoG _ Academic Council of KBPU Satara", href: "#" },
    { title: "Appointment of First Vice Chancellor KBPU Satara", href: "#" },
    { title: "Autonomous College Statutes 2023", href: "#" },
    { title: "Empowered Autonomous Colleges 2023", href: "#" },
    { title: "KBP Notification 27 October 2021 – Mar", href: "#" },
    {
      title:
        "KBPU Vice Chancellor Search Committee and Eligibility – KBPU Satara",
      href: "#",
    },
    { title: "Maharashtra-public-University-Act2017.", href: "#" },
    {
      title:
        "Procedure For Conduct of Meeting of Authorities of Universities Amendments 2023",
      href: "#",
    },
    {
      title:
        "Procedure For Conduct of Meeting of Authorities of Universities",
      href: "#",
    },
    {
      title:
        "Vice Chancellor Search Committee and Eligibility – KBPU Satara 24-Jan-2022",
      href: "#",
    },
  ];

  return (
    <div className="relative">
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Act/Notification
          </h1>
          <div className="border-t-2 border-white w-full max-w-lg my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">
              Act/Notification
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-[900px]">
          <div className="bg-white p-6 shadow-lg flex flex-col w-full">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("act")}
                className={`px-4 py-2 font-semibold rounded-t-lg w-1/2 ${
                  activeTab === "act"
                    ? "bg-black text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                Act Notices
              </button>
              <button
                onClick={() => setActiveTab("notification")}
                className={`px-4 py-2 font-semibold rounded-t-lg w-1/2 ${
                  activeTab === "notification"
                    ? "bg-black text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                Notification Notices
              </button>
            </div>

            {/* Scrolling News */}
            <div className="h-[600px] overflow-y-auto">
              <div className="space-y-2">
                {(activeTab === "act" ? universityNotices : universityNotices).map(
                  (notice, index) => (
                    <div key={index} className="text-sm border-b pb-1">
                      <Link
                        href={notice.href}
                        className="text-blue-800 hover:text-black underline"
                      >
                        {notice.title}
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySection;
