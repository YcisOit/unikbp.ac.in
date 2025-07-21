import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Director, Knowledge and Center
          </h1>
          <div className="border-t-2 border-white w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb icon"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <span className="hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">Officer</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Director, Knowledge and Center</span>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-4 text-xl font-bold">
        Director, Knowledge and Center
      </h1>
    </div>
  );
};

export default Page;
