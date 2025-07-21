import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Background Header Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">IQAC</h1>

          {/* Line divider */}
          <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

          {/* Breadcrumb */}
          <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
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
            <span className="text-[#fbbf24] font-semibold">IQAC</span>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <div className="text-center p-4">
        IQAC
      </div>
    </div>
  );
};

export default Page;
