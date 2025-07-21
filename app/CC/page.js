'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ConstituentCollegesPage = () => {
  const colleges = [
    {
      name: 'Yashavantrao Chavan Institute of Science, Satara. (C-11240)',
      url: 'https://www.ycis.ac.in/',
      image: '/images/ycis.jpeg',
    },
    {
      name: 'Chhatrapati Shivaji College, Satara. (C-11029)',
      url: 'http://csc.ac.in/',
      image: '/images/csc.jpeg',
    },
    {
      name: 'Dhananjayrao Gadgil College of Commerce Satara. (C-11024)',
      url: 'https://dgccsatara.edu.in/',
      image: '/images/dgcc.jpeg',
    },
  ];

  return (
    <main>
      {/* Background Header Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Constituent Colleges
          </h1>
          <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />
          <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">
              Constituent Colleges
            </span>
          </div>
        </div>
      </div>

      {/* College Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college, index) => (
          <a
            key={index}
            href={college.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <h2 className="text-[#8b0a52] font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
              {college.name}
            </h2>

            {/* Image appears only on hover */}
            <div className="mt-4 hidden group-hover:block transition-all duration-300">
              <Image
                src={college.image}
                alt={college.name}
                width={200}
                height={150}
                className="mx-auto rounded-md shadow"
              />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default ConstituentCollegesPage;
