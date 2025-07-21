'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const members = [
    {
      sr: 1,
      Section: '26 (3) (a)',
      Name: 'Prof. (Dr.) D. T. Shirke',
      PositiontUniversity: 'Vice-Chancellor',
      Designation: 'Chairperson',
    },
    {
      sr: 2,
      Section: '26 (3) (b)',
      Name: '-',
      PositiontUniversity: 'Dean, Faculty of Science and Technology',
      Designation: 'Member',
    },
    {
      sr: 3,
      Section: '26 (3) (b)',
      Name: 'Prof. (Dr.) Anilkumar Wavare',
      PositiontUniversity: 'Dean, Faculty of Humanities',
      Designation: 'Member',
    },
    {
      sr: 4,
      Section: '26 (3) (b)',
      Name: 'Prof. (Dr.) V. K. Sawant',
      PositiontUniversity: 'Dean, Faculty of Commerce and Management',
      Designation: 'Member',
    },
    {
      sr: 5,
      Section: '26 (3) (b)',
      Name: 'Prof. (Dr.) RR Salunkhe',
      PositiontUniversity: 'Dean, Faculty of Interdisciplinary Studies',
      Designation: 'Member',
    },
    {
      sr: 6,
      Section: '26 (3) (c)',
      Name: 'Shri. Nitin Deshpande',
      PositiontUniversity: 'Prominent Industrialists-1- Nominated by Parent Body',
      Designation: 'Member',
    },
    {
      sr: 7,
      Section: '26 (3) (c)',
      Name: 'Shri. Kailas Bhat',
      PositiontUniversity: 'Prominent Industrialists-2- Nominated by Parent Body',
      Designation: 'Member',
    },
    {
      sr: 8,
      Section: '26 (3) (c)',
      Name: 'Shri. Lokesh Uttekar',
      PositiontUniversity: 'Prominent Industrialists-3- Nominated by Parent Body',
      Designation: 'Member',
    },
    {
      sr: 9,
      Section: '26 (3) (c)',
      Name: 'Dr. Dattatray Gaikawad',
      PositiontUniversity: 'Prominent Industrialists-4- Nominated by Parent Body',
      Designation: 'Member',
    },
    {
      sr: 10,
      Section: '26 (3) (c)',
      Name: 'Shri. Sagar Deshpande',
      PositiontUniversity: 'Prominent Industrialists-5- Nominated by Parent Body',
      Designation: 'Member',
    },
  ];

  return (
    <div>
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Board of Innovation, Incubation Linkage & Placement
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="hover:underline">Boards and Committees</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">Board of Innovation, Incubation Linkage & Placement</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-center px-2 py-6">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-full border border-black text-sm md:text-base">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-3">Section</th>
                <th className="border border-gray-300 px-4 py-3">Name</th>
                <th className="border border-gray-300 px-4 py-3">Position at University</th>
                <th className="border border-gray-300 px-4 py-3">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sr}>
                  <td className="border border-gray-300 px-4 py-3">{m.sr}</td>
                  <td className="border border-gray-300 px-4 py-3">{m.Section}</td>
                  <td className="border border-gray-300 px-4 py-3">{m.Name}</td>
                  <td className="border border-gray-300 px-4 py-3">{m.PositiontUniversity}</td>
                  <td className="border border-gray-300 px-4 py-3">{m.Designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
