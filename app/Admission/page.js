'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('phd');

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
              Admission
            </h1>
            <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
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
              <span className="text-[#fbbf24] font-semibold">Admission</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-center items-center my-5 bg-gray-100 shadow-md py-4">
        <div className="flex flex-col flex-shrink-0 flex-wrap gap-3 justify-center overflow-x-auto scrollbar-none">
          
          {/* Tabs Buttons */}
          <div className="flex justify-center space-x-5 mb-2">
            <button
              onClick={() => setActiveTab('phd')}
              className={`px-6 py-2 w-25 font-semibold shadow-md ${activeTab === 'phd' ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              Ph.D
            </button>
            <button
              onClick={() => setActiveTab('pg')}
              className={`px-6 py-2 w-25 font-semibold shadow ${activeTab === 'pg' ? 'bg-[#87064f] text-white' : 'bg-white text-black'}`}
            >
              PG
            </button>
          </div>

          {/* Tab Content */}
          <div className="shadow px-4 py-2 text-center">
            {activeTab === 'phd' ? (
              <Link
                href="/phdresult"
                className="text-sky-600 font-bold text-lg underline shadow-md bg-white py-3 px-100"
              >
                Ph.D Entrance Result 2024-25
              </Link>
            ) : (
              <span className="text-sky-600 font-bold text-lg underline shadow-md bg-white py-3 px-100">
                {/* Placeholder for PG, add link when available */}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
