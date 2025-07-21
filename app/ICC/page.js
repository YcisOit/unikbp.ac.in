import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const members = [
    {
      sr: 1,
      name: "Prof. (Dr) Savita Shivaling Menkudale",
      clause: "Section 4(a)",
      membership: "Presiding Officer",
      mobile: "99211 35065",
    },
    {
      sr: 2,
      name: "Dr. Neha Nandkumar Bendre",
      clause: "Section 4(b)",
      membership: "Faculty Member",
      mobile: "97632 80147",
    },
    {
      sr: 3,
      name: "Dr. Vidhya Nawadkar",
      clause: "Section 4(b)",
      membership: "Faculty Member",
      mobile: "90490 41979",
    },
    {
      sr: 4,
      name: "Smt. Seema Jadhav",
      clause: "Section 4(a)",
      membership: "Non-Teaching Employee",
      mobile: "98906 67917",
    },
    {
      sr: 5,
      name: "Smt. Vidhya Shinde",
      clause: "Section 4(b)",
      membership: "Non-Teaching Employee",
      mobile: "91752 98917",
    },
    {
      sr: 6,
      name: "Dr. Rajashree Jawale",
      clause: "Section 4(d)",
      membership: "Member of Association",
      mobile: "97666 72848",
    },
    {
      sr: 7,
      name: "Student Representative (YCIS)",
      clause: "Section 4(c)",
      membership: "Member",
      mobile: "93071 20265",
    },
    {
      sr: 8,
      name: "Student Representative (CSC)",
      clause: "Section 4(c)",
      membership: "Member",
      mobile: "79725 63395",
    },
    {
      sr: 9,
      name: "Student Representative (DGCC)",
      clause: "Section 4(c)",
      membership: "Member",
      mobile: "70586 02562",
    },
  ];

  return (
    <div className="relative">
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Internal Complaints Committee (ICC)
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
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
            <span className="text-yellow-400 font-semibold">
              Internal Complaints Committee (ICC)
            </span>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="p-4 flex justify-center">
        <div className="w-full max-w-6xl overflow-x-auto">
          <table className="min-w-full border border-black text-sm md:text-base">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name of The Members</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Clause</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Membership</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sr} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{m.sr}</td>
                  <td className="border border-gray-300 px-4 py-2 break-words">{m.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{m.clause}</td>
                  <td className="border border-gray-300 px-4 py-2">{m.membership}</td>
                  <td className="border border-gray-300 px-4 py-2 break-words">{m.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
