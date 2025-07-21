import React from "react";
import Image from "next/image";
import Link from "next/link";

const Recruitment = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Recruitment
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <span className="hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Recruitment</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center">
        <div className="py-4 flex flex-col">
          <div className="text-[25px] flex justify-center items-center font-bold">
            <h1>Recruitment Notification And Application Form 2024-2025</h1>
          </div>
          <div className="my-4 border-5 border-white flex justify-center items-center shadow-md w-[100%]">
            <h2 className="text-blue-500 underline font-bold">
              <a
                href="/pdf/KBPU_Non-Teaching_Advt.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                KBP Non-Teaching Advertisement and walk-in Interview 2024-25
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
