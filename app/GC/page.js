import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const members = [

   
      {
        sr: 1,
        Section: "18 (2) (a)	",
        Name: "Hon'ble Shri Ramesh Bais Ji	",
        PositiontUniversity: "Chancellor	",
        Designation:"Chairperson",
  
      },
      {
        sr: 2,
        Section: "18 (2) (b)	",
        Name: "Hon'ble Shri. Chandrakant Dalvi		",
        PositiontUniversity: "The Provost		",
        Designation:"Member",
      },
      {
        sr: 3,
        Section: "18 (2) (c)	",
        Name: "Hon'ble Prin. Dr. Dnyandeo Mhaske	",
        PositiontUniversity: "The Vice-Chancellor	",
        Designation:"Member",
      },
      {
        sr: 4,
        Section: "18 (2) (d)	",
        Name: "Dr. D. S. Jadhav	",
        PositiontUniversity: "The Finance and Accounts Officer	",
        Designation:"Member",
      },
      {
        sr: 5,
        Section: "	18 (2) (e)	",
        Name: "Dr. H. P. Umap		",
        PositiontUniversity: "Director, Board of Examinations and Evaluation	",
        Designation:"Member",
      },
      {
        sr: 6,
        Section: "	18 (2) (f)	",
        Name: "Prof. Dr. V. K. Sawant	",
        PositiontUniversity: "Dean, nominated by the Vice-Chancellor	",
        Designation:"Member",
      },
      {
        sr: 7,
        Section: "18 (2) (g)	",
        Name: "Dr. G. S. Nhivekar	",
        PositiontUniversity: "Director, Board of Innovation, Incubation, Linkages and Placements	",
        Designation:"Member",
      },
      {
        sr: 8,
        Section: "18 (2) (h)	",
        Name: "Dr. A. D. Khobragade	",
        PositiontUniversity: "The Director, Knowledge Resource Centre	",
        Designation:"Member",
      },
      {
        sr: 9,
        Section: "18 (2) (i)	",
        Name: "Dr. Vivek Sawant	",
        PositiontUniversity: "An eminent external expert nominated by Provost	",
        Designation:"Member",
      },
      {
          sr: 10,
          Section: "18 (2) (i)	",
          Name: "Principal, Chhatrapati Shivaji College, Satara	",
          PositiontUniversity: "Table DataPrincipals of constituent colleges, Nominated by Provost (Male).	",
          Designation:"Member",
        },
        {
          sr: 11,
          Section: "18 (2) (i)	",
          Name: "-",
          PositiontUniversity: "Principals of constituent colleges, Nominated by Provost of which one should be a woman;	",
          Designation:"Member",
        },
        {
          sr: 12,
          Section: "18 (2) (j)	",
          Name: "Secretary, Rayat Shikshan Sanstha	",
          PositiontUniversity: "Person of eminence nominated by Parent Body	",
          Designation:"Member",
        },
        {
          sr: 13,
          Section: "18 (2) (j)	",
          Name: "Jt. Secretary, Rayat Shikshan Sanstha	",
          PositiontUniversity: "Person of eminence nominated by Parent Body	",
          Designation:"Member",
        },
        {
          sr: 14,
          Section: "18 (2) (k)	",
          Name: "Prof. Dr. A. P. Torane	",
          PositiontUniversity: "Teacher from SC/ST/NT/OBC/EWS etc. Vice-Chancellor's Nominee	",
          Designation:"Member",
        },
        {
          sr: 15,
          Section: "18 (2) (k)	",
          Name: "Prof. Dr. G.V. Jadhav	",
          PositiontUniversity: "One Teacher, Vice-Chancellor's Nominee	",
          Designation:"Member",
        },
        {
          sr: 16,
          Section: "18 (2) (l)	",
          Name: "-	",
          PositiontUniversity: "State Government Nominee	",
          Designation:"Member",
        },
        {
          sr: 17,
          Section: "18 (2) (m)	",
          Name: "Mr. Sanjeev Patil	",
          PositiontUniversity: "Industry Expert - Provost Nominee	",
          Designation:"Member",
        },
        {
          sr: 18,
          Section: "18 (2) (m)	",
          Name: "Prof. (Dr.) Sachin Vernekar	",
          PositiontUniversity: "Expert in Research and Development, Provost Nominee	",
          Designation:"Member",
        },
        {
          sr: 19,
          Section: "18 (2) (n)	",
          Name: "Mrs. B. J. Nipane	",
          PositiontUniversity: "Representative of Non-Teaching Staff, Vice-Chancellor's Nominee	",
          Designation:"Member",
        },
        {
          sr: 20,
          Section: "18 (2) (o)	",
          Name: "Dr. V.M. Kumbhar	",
          PositiontUniversity: "Ag. Registrar	",
          Designation:"Non-Voting Invitee",
        },
  ]





  return (
    <div className="w-full">
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">General Council</h1>
          <div className="border-t-2 border-white w-full md:w-[500px] my-4" />
          <div className="text-white py-3 px-4 flex flex-wrap justify-center items-center space-x-2 text-sm">
            <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
            <span className="hover:underline cursor-pointer"><Link href='/'>Home</Link></span>
            <span>/</span>
            <span className="hover:underline cursor-pointer">Boards and Committees</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">General Council</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full flex justify-center p-4">
        <div className="overflow-x-auto w-full max-w-7xl">
          <table className="min-w-full border border-black text-sm md:text-base">
            <thead className="bg-gray-400 text-gray-800">
              <tr>
                <th className="border border-gray-300 px-4 py-3 whitespace-nowrap">Sr.No.</th>
                <th className="border border-gray-300 px-4 py-3 whitespace-nowrap">Section</th>
                <th className="border border-gray-300 px-4 py-3">Name</th>
                <th className="border border-gray-300 px-4 py-3">Position at University</th>
                <th className="border border-gray-300 px-4 py-3 whitespace-nowrap">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.sr} className="hover:bg-gray-100">
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
  )
}

export default page
