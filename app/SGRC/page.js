import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const members = [
    { sr: 1, name: "Prof. (Dr) Shivaji Patil", clause: "Section 5 (2) (a)", membership: "Chairman", mobile: "96736 33955" },
    { sr: 2, name: "Prof. (Dr) Dhanaji Masal", clause: "Section 5 (2) (b)", membership: "Member", mobile: "98606 81838" },
    { sr: 3, name: "Prof. (Dr) Ganesh Jadhav", clause: "Section 5 (2) (b)", membership: "Member", mobile: "70201 15625" },
    { sr: 4, name: "Prof. (Dr) Dada Namdas", clause: "Section 5 (2) (b)", membership: "Member", mobile: "98507 52177" },
    { sr: 5, name: "Prof. (Dr) Roshanara Shaikh", clause: "Section 5 (2) (b)", membership: "Member", mobile: "98500 40114" },
    { sr: 6, name: "Ms. Sayali Satish More", clause: "Section 5 (2) (c)", membership: "Member (YCIS)", mobile: "93071 20265" },
    { sr: 7, name: "Ms. Sanidhya Ganesh Pawar", clause: "Section 5 (2) (c)", membership: "Member (CSC)", mobile: "79725 63395" },
    { sr: 8, name: "Ms. Vaishanvi Bapu Yadav", clause: "Section 5 (2) (c)", membership: "Member (DGCC)", mobile: "70586 02562" },
  ];

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Students’ Grievance Redressal Committee (SGRC)
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
            <span className="text-yellow-400 font-semibold">
              Students’ Grievance Redressal Committee (SGRC)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-x-auto p-4">
        <div className="w-full max-w-7xl mx-auto">
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
