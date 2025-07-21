import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">RTI/RTS</h1>
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
            <span className="text-yellow-400 font-semibold">RTI/RTS</span>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-4 md:p-8 w-full max-w-7xl mx-auto">
        {/* Table 1 */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-black text-black shadow-lg">
            <thead>
              <tr>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Sr.NO.</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Officer</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Name</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Registrar</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">1</td>
                <td className="border border-black px-4 py-2">RTI Officer</td>
                <td className="border border-black px-4 py-2">Mrs. Beena Nipane</td>
                <td className="border border-black px-4 py-2">DY. Registrar</td>
                <td className="border border-black px-4 py-2">admin@unikbp.ac.in</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-black px-4 py-2">2</td>
                <td className="border border-black px-4 py-2">First Appellate Officer</td>
                <td className="border border-black px-4 py-2">Dr. Vijay Khumbhar</td>
                <td className="border border-black px-4 py-2">AG. Registrar</td>
                <td className="border border-black px-4 py-2">registrar@unikbp.ac.in</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-black text-black shadow-lg">
            <thead>
              <tr>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Sr.NO.</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Name</th>
                <th className="bg-gray-900 border border-white px-4 py-2 text-white">Download PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">1</td>
                <td className="border border-black px-4 py-2">Right to Information Revised Rules</td>
                <td className="text-blue-600 underline border border-black px-4 py-2">
                  <a href="/pdf/rti.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border border-black px-4 py-2">2</td>
                <td className="border border-black px-4 py-2">Right To Public Services Act</td>
                <td className="text-blue-600 underline border border-black px-4 py-2">
                  <a href="/pdf/rti2.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
