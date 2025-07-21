'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const members = [
    {
      sr: 1,
      Section: "21 (3) (a)",
      Name: "Prin. Dr. Dnyandeo Mhaske",
      PositiontUniversity: "Vice-Chancellor",
      Designation: "Chairperson",
    },
    {
      sr: 2,
      Section: "21 (3) (b)",
      Name: "Prof. (Dr.) Manikarao Salunkhe",
      PositiontUniversity:
        "One eminent person nominated by Chancellor’s in consultation with the Provost",
      Designation: "Member",
    },
    {
      sr: 3,
      Section: "Prof. (Dr.) A. K. Wavare",
      Name: "Prof. (Dr.) Anilkumar Wavare",
      PositiontUniversity: "Dean, Vice Chancellor’s nominee",
      Designation: "Member",
    },
    {
      sr: 4,
      Section: "21 (3) (c)",
      Name: "-",
      PositiontUniversity: "Dean, Vice-Chancellor’s nominee (Women)",
      Designation: "Member",
    },
    {
      sr: 5,
      Section: "21 (3) (d)",
      Name: "Dr. Anil Appasaheb Patil",
      PositiontUniversity:
        "Eminent persons who are not the members of General Council to be nominated by the Provost",
      Designation: "Member",
    },
    {
      sr: 6,
      Section: "21 (3) (d)",
      Name: "Shri. Dilip Walse Patil",
      PositiontUniversity:
        "Eminent persons who are not the members of General Council to be nominated by the Provost",
      Designation: "Member",
    },
    {
      sr: 7,
      Section: "21 (3) (e)",
      Name: "Secretary, Rayat Shikshan Sanstha, Satara",
      PositiontUniversity:
        "Member of General Council, to be nominated by the Provost",
      Designation: "Member",
    },
    {
      sr: 8,
      Section: "21 (3) (e)",
      Name: "The Finance and Accounts Officer, KBP University, Satara",
      PositiontUniversity:
        "Member of General Council, to be nominated by the Provost",
      Designation: "Member",
    },
    {
      sr: 9,
      Section: "21 (3) (f)",
      Name: "-",
      PositiontUniversity: "State Government Nominee",
      Designation: "Member",
    },
    {
      sr: 10,
      Section: "21 (3) (g)",
      Name: "Prof. (Dr.) Rajan More",
      PositiontUniversity: "Dean, Provost’s Nominee",
      Designation: "Member",
    },
    {
      sr: 11,
      Section: "21 (3) (h)",
      Name: "Principal, Y.C. Institute of Science, Satara",
      PositiontUniversity:
        "The principal of one constituent college, to be nominated by the Provost",
      Designation: "Member",
    },
    {
      sr: 12,
      Section: "21 (3) (i)",
      Name: "Dr. Rajshekhar Nillolu",
      PositiontUniversity: "Teacher Nominated by Vice-Chancellor",
      Designation: "Member",
    },
    {
      sr: 13,
      Section: "21 (3) (i)",
      Name: "Prof. Dr. Mrs. R. S. Shaikh",
      PositiontUniversity: "Teacher Nominated by Vice-Chancellor",
      Designation: "Member",
    },
    {
      sr: 14,
      Section: "21 (3) (i)",
      Name: "Dr. Mahendra Jagtap",
      PositiontUniversity: "Alumnus nominated by the Vice-Chancellor",
      Designation: "Member",
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
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            BOARD OF GOVERNANCE
          </h1>
          <div className="border-t-2 border-white w-full max-w-md my-4" />
          <div className="text-white py-3 px-4 flex flex-wrap items-center space-x-2 text-sm justify-center">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="hover:underline">Boards and Committees</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">
              BOARD OF GOVERNANCE
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex justify-center p-4">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-full border border-black text-base">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-3">Section</th>
                <th className="border border-gray-300 px-4 py-3">Name</th>
                <th className="border border-gray-300 px-4 py-3">
                  Position at University
                </th>
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
