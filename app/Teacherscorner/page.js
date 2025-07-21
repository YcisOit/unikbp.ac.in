'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState("act");

  const Notices = [
    { title: "Application for Revised Approval of KBPU (Word File)", href: "/pdf/Teacherscorner/ApplicationforRevisedApprovalofKBPU.doc" },
    { title: "Application for Revised Approval of KBPU (PDF File)", href: "/pdf/Teacherscorner/ApplicationforRevisedApprovalofKBPU.pdf" },
    { title: "Circular of Changes in Staff for KBPU SATARA", href: "/pdf/Teacherscorner/CircularofChangesinStaffforKBPUSATARA.pdf" },
    { title: "Format Circular of Changes in Staff for KBPU SATARA", href: "/pdf/Teacherscorner/CircularofChangesinStaffforKBPUSATARA.docx" },
    { title: "CAS Promotion Interview Schedule 25-03-2023", href: "/pdf/Teacherscorner/CASPromotionScheduled.pdf" },
    { title: "CAS Notice", href: "/pdf/Teacherscorner/CASNotice.pdf" },
    { title: "CAS Promotion Interview Schedule 19-01-2023", href: "/pdf/Teacherscorner/CASPromotion.pdf" },
  ];

  const Format = [
    { title: "Primary Information for CAS", href: "/pdf/Teacherscorner/PrimaryInformationforCAS.docx" },
    { title: "Proforma 1, 2, 3", href: "/pdf/Teacherscorner/Proforma123.doc" },
    { title: "ASER – Assistant Professor", href: "/pdf/Teacherscorner/3ASERAssistantProfessor.docx" },
    { title: "ASER – Associate Professor", href: "/pdf/Teacherscorner/4ASERAssociateProfessor.docx" },
    { title: "ASER – Professor", href: "/pdf/Teacherscorner/5ASERProfessor.docx" },
    { title: "ASER Librarian", href: "/pdf/Teacherscorner/6ASERLiberarian.docx" },
    { title: "ASER Physical Education", href: "/pdf/Teacherscorner/7ASARPhysicalEducation.docx" },
    { title: "CAS Committee - Assistant Professor", href: "/pdf/Teacherscorner/8CASCommitteeAssistantProfessor.docx" },
    { title: "CAS Committee - Associate Professor", href: "/pdf/Teacherscorner/9CASCommitteeAssociateProfessor.docx" },
    { title: "CAS Committee - Professor", href: "/pdf/Teacherscorner/10CASCommitteeProfessor.docx" },
    { title: "Professor Table 2", href: "/pdf/Teacherscorner/11ProfessorTable2.doc" },
  ];

  const currentList = activeTab === "act" ? Notices : Format;

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
            Teacher&apos;s Corner
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
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Teacher&apos;s Corner</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-[500px]">
          <div className="bg-gray-200 p-6 shadow-lg flex flex-col w-full">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("act")}
                className={`px-4 py-2 font-semibold w-1/2 ${activeTab === "act" ? "bg-black text-white" : "bg-yellow-400 text-black"}`}
              >
                Notices
              </button>
              <button
                onClick={() => setActiveTab("notification")}
                className={`px-4 py-2 font-semibold w-1/2 ${activeTab === "notification" ? "bg-black text-white" : "bg-yellow-400 text-black"}`}
              >
                Format
              </button>
            </div>

            {/* Scrollable List */}
            <div className="h-[300px] overflow-y-auto">
              <div className="space-y-2">
                {currentList.map((item, index) => (
                  <div key={index} className="text-sm border-b pb-1">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-black underline"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySection;
