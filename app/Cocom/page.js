'use client';
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
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Co-ordination Committees
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
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
            <span className="hover:underline">Boards and Committees</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">Co-ordination Committees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
