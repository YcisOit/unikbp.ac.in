'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    const members = [
      
     
        {
          sr: 1,
          Section: "26 (3) (a)",
          Name: "Prin. Dr. Dnyandeo Mhaske	",
          PositiontUniversity: "Vice-Chancellor		",
          Designation:"Chairperson",

        },
        {
          sr: 2,
          Section: "26 (3) (b)",
          Name: "Prin. Dr. B. T. Jadhav	",
          PositiontUniversity: "Principal of the Constituent College;		",
          Designation:"Member",
        },
        {
          sr: 3,
          Section: "26 (3) (b)",
          Name: "Prin. Dr. Rajendra More	",
          PositiontUniversity: "Principal of the Constituent College;	",
          Designation:"Member",
        },
        {
          sr: 4,
          Section: "26 (3) (b)",
          Name: "Prin. Dr. D.K. Mhaske		",
          PositiontUniversity: "Principal of the Constituent College;	",
          Designation:"Member",
        },
        {
          sr: 5,
          Section: "	23 (2) (c)",
          Name: "Prof. Dr. Rajan More	",
          PositiontUniversity: "Dean, Faculty of Science and Technology	",
          Designation:"Member",
        },
        {
          sr: 6,
          Section: "	26 (3) (c)",
          Name: "	Prof.(Dr.) A. K. Wavare",
          PositiontUniversity: "Dean, Faculty of Humanities",
          Designation:"Member",
        },
        {
          sr: 7,
          Section: "	26 (3) (c)",
          Name: "Prof.(Dr.) V. K. Sawant",
          PositiontUniversity: "Dean, Faculty of Commerce and Management",
          Designation:"Member",
        },
        {
          sr: 8,
          Section: "	26 (3) (c)",
          Name: "Prof.(Dr.) R.R. Salunkhe",
          PositiontUniversity: "Dean, Faculty of Interdisciplinary Studies",
          Designation:"Member",
        },
        {
          sr: 9,
          Section: "23 (2) (d)",
          Name: "Prof. Dr. D.D. Namdas",
          PositiontUniversity: "	Head of Departments of the University; nominated by the Vice-Chancellor",
          Designation:"Member",
        },
        {
            sr: 10,
            Section: "23 (2) (d)",
            Name: "Prof. Dr. S. D. Waghmare	",
            PositiontUniversity: "	Head of Departments of the University; nominated by the Vice-Chancellor",
            Designation:"Member",
          },
          {
            sr: 11,
            Section: "23 (2) (d)",
            Name: "Prof. Dr. G.V. Jadhav	",
            PositiontUniversity: "Head of Departments of the University; nominated by the Vice-Chancellor",
            Designation:"Member",
          },
          {
            sr: 12,
            Section: "	23 (2) (e)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "Professors or Associate Professor from Constituent Colleges or subjects other than those represented by the Principals",
            Designation:"Member",
          },
          {
            sr: 13,
            Section: "		23 (2) (e)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "Professors or Associate Professor from Constituent Colleges or subjects other than those represented by the Principals;",
            Designation:"Member",
          },
          {
            sr: 14,
            Section: "	23 (2) (f)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "Teacher who are not principals of constituent colleges to be nominated by the Vice-Chancellor;",
            Designation:"Member",
          },
          {
            sr: 15,
            Section: "	23 (2) (f)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "	Teacher who are not principals of constituent colleges to be nominated by the Vice-Chancellor;",
            Designation:"Member",
          },
          {
            sr: 16,
            Section: "	23 (2) (g)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "	Other external experts as per requirement, representing various disciplines to be nominated by the Provost;",
            Designation:"Member",
          },
          {
            sr: 17,
            Section: "	23 (2) (g)",
            Name: "Shri. Sagar Deshpande	",
            PositiontUniversity: "Other external experts as per requirement, representing various disciplines to be nominated by the Provost;",
            Designation:"Member",
          },
          {
            sr: 18,
            Section: "	23 (2) (g)",
            Name: "Shri. Vidyadhar Anaskar	",
            PositiontUniversity: "Other external experts as per requirement, representing various disciplines to be nominated by the Provost;	",
            Designation:"Member",
          },
          {
            sr: 19,
            Section: "	23 (2) (g)",
            Name: "Prof. Dr. A. D. Shaligram	",
            PositiontUniversity: "	Other external experts as per requirement, representing various disciplines to be nominated by the Provost;",
            Designation:"Member",
          },
          {
            sr: 20,
            Section: "	23 (2) (g)",
            Name: "Dr. Sarang Shankar Bhola	",
            PositiontUniversity: "Other external experts as per requirement, representing various disciplines to be nominated by the Provost;",
            Designation:"Member",
          },
          {
            sr: 21,
            Section: "	23 (2) (g)",
            Name: "Prof. Dr. Sadananad More	",
            PositiontUniversity: "	Other external experts as per requirement, representing various disciplines to be nominated by the Provost;",
            Designation:"Member",
          },
          {
            sr: 22,
            Section: "23 (2) (h)",
            Name: "Prof. Dr. Mrs. S. A. Kurkute	",
            PositiontUniversity: "One alumnus student nominated by the Vice-Chancellor.",
            Designation:"Member",
          },
          {
            sr: 23,
            Section: "-",
            Name: "Registrar	",
            PositiontUniversity: "	Registrar of the University",
            Designation:"	Member Secetary",
          },
  

    ];

    return (
        <div className="w-full">
            {/* Header Section */}
            <div
                className="h-[250px] bg-cover bg-center relative bg-black"
                style={{ backgroundImage: "url('/images/tback.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-45" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">Academic Council</h1>
                    <div className="border-t-2 border-white w-full max-w-[500px] my-4" />
                    <div className="text-white py-3 px-6 flex flex-wrap justify-center items-center gap-2 text-sm">
                        <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
                        <span className="hover:underline cursor-pointer"><Link href='/'>Home</Link></span>
                        <span>/</span>
                        <span className="hover:underline cursor-pointer">Boards and Committees</span>
                        <span>/</span>
                        <span className="text-yellow-400 font-semibold">Academic Council</span>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="w-full px-4 py-6 overflow-x-auto">
                <div className="w-full max-w-7xl mx-auto">
                    <table className="min-w-[800px] w-full border border-black text-sm md:text-base bg-white shadow">
                        <thead className="bg-gray-400 text-gray-900">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">Sr.No.</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Position at University</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((m) => (
                                <tr key={m.sr} className="hover:bg-gray-100 transition">
                                    <td className="border border-gray-300 px-4 py-2">{m.sr}</td>
                                    <td className="border border-gray-300 px-4 py-2">{m.Section}</td>
                                    <td className="border border-gray-300 px-4 py-2">{m.Name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{m.PositiontUniversity}</td>
                                    <td className="border border-gray-300 px-4 py-2">{m.Designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page
