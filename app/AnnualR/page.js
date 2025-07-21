import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Section */}
        <div
          className="h-[250px] bg-cover bg-center relative bg-black"
          style={{ backgroundImage: "url('/images/tback.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-45" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
              Annual Reports
            </h1>
            <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
            <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
              <Image
                src="/images/breadcrumb.png"
                alt="breadcrumb"
                width={20}
                height={20}
              />
              <Link href="/" className="hover:underline cursor-pointer">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#fbbf24] font-semibold">Annual Reports</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-center my-8">
        <button className="bg-[#6a0d45] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#58093a] transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Page;
