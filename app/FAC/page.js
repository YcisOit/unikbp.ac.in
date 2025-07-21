import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const members = [
    {
      sr: 1,
      Name: 'Prof. (Dr.) D. T. Shirke',
      PositiontUniversity: 'Vice-Chancellor 94 (2) (a)',
      Designation: 'Chairperson',
    },
    {
      sr: 2,
      Name: '-',
      PositiontUniversity: 'Director of Accounts and Treasuries (GoM)',
      Designation: 'Member',
    },
    {
      sr: 3,
      Name: 'Prof. (Dr.) Manikarao Salunkhe',
      PositiontUniversity: 'Chancellor’s nominee from the Management Council',
      Designation: 'Member',
    },
    {
      sr: 4,
      Name: 'Prin. Dr. B. T. Jadhav',
      PositiontUniversity: 'Academic Council nominee by Vice-Chancellor 94 (2) (e)',
      Designation: 'Member',
    },
    {
      sr: 5,
      Name: 'Mr. Shubham C. Salunkhe',
      PositiontUniversity: 'Expert Nominated by the Management (BOG) Council 94 (2) (f)',
      Designation: 'Member',
    },
    {
      sr: 6,
      Name: 'Mr. Shailesh S. Mahadik',
      PositiontUniversity: 'Expert Nominated by the Management (BOG) Council 94 (2) (f)',
      Designation: 'Member',
    },
    {
      sr: 7,
      Name: 'Dr. Vijay Kumbhar',
      PositiontUniversity: 'Registrar 94 (2) (g)',
      Designation: 'Member',
    },
    {
      sr: 8,
      Name: 'Dr. D. S. Jadhav',
      PositiontUniversity: 'Finance and Accounts Officer 94 (2) (h)',
      Designation: 'Member Secretary',
    },
  ];

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Finance and Accounts Committee
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
            <span className="hover:underline">Boards and Committees</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">Finance and Accounts Committee</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-2 py-6">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-full border border-black text-sm md:text-base">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-3">Name</th>
                <th className="border border-gray-300 px-4 py-3">Position at University</th>
                <th className="border border-gray-300 px-4 py-3">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sr}>
                  <td className="border border-gray-300 px-4 py-3">{m.sr}</td>
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

export default Page;
