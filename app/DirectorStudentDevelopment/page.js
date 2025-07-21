import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Director, Student Development
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="hover:underline">Officer</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">
              Director, Student Development
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-center mt-6 text-2xl font-bold">
        Director, Student Development
      </h1>
    </div>
  );
};

export default Page;
