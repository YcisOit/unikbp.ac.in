'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const faculties = ['Science Faculty', 'Commerce Faculty', 'Arts Faculty'];
const programs = ['UG Program', 'PG Program'];

const sampleData = {
  // ✅ All your sample data goes here (keeping it intact as you pasted) …
  'Science Faculty': {
    'UG Program': [
      /* Your UG Science Faculty Programs here */
    ],
    'PG Program': [
      /* Your PG Science Faculty Programs here */
    ]
  },
  'Commerce Faculty': {
    'UG Program': [
      /* Your UG Commerce Faculty Programs here */
    ],
    'PG Program': [
      /* Your PG Commerce Faculty Programs here */
    ]
  },
  'Arts Faculty': {
    'UG Program': [
      /* Your UG Arts Faculty Programs here */
    ],
    'PG Program': [
      /* Your PG Arts Faculty Programs here */
    ]
  }
};

export default function ProgramTabs() {
  const [activeFaculty, setActiveFaculty] = useState('Commerce Faculty');
  const [activeProgram, setActiveProgram] = useState('UG Program');

  const tableData = sampleData?.[activeFaculty]?.[activeProgram] || [];

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
            Syllabus pre NEP 2020
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="hover:underline">NEP-2020</span>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">Syllabus as per NEP 2020</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 max-w-screen-xl mx-auto">
        {/* Faculty Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {faculties.map(faculty => (
            <button
              key={faculty}
              className={clsx(
                'px-4 py-2 rounded font-semibold transition duration-200',
                faculty === activeFaculty ? 'bg-black text-white' : 'bg-yellow-400 text-black'
              )}
              onClick={() => setActiveFaculty(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:items-start">
          {/* Program Buttons */}
          <div className="flex justify-center md:flex-col gap-3 mx-10 my-20 md:justify-start">
            {programs.map(program => (
              <button
                key={program}
                className={clsx(
                  'px-4 py-2 font-semibold transition duration-200',
                  program === activeProgram
                    ? 'bg-black text-white'
                    : 'bg-yellow-400 text-black'
                )}
                onClick={() => setActiveProgram(program)}
              >
                {program}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="w-full bg-white rounded md:w-full p-4 my-5 max-h-[400px] overflow-y-auto">
            <table className="min-w-[600px] w-full text-sm border-[2]">
              <thead className="bg-gray-400 text-left">
                <tr>
                  <th className="border px-4 py-2">Sr</th>
                  <th className="border px-4 py-2">Program</th>
                  <th className="border px-4 py-2">Syllabus</th>
                </tr>
              </thead>
              <tbody>
                {tableData.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-4">
                      No data available
                    </td>
                  </tr>
                ) : (
                  tableData.map(item => (
                    <tr key={item.sr}>
                      <td className="border px-4 py-2">{item.sr}</td>
                      <td className="border px-4 py-2">{item.Program}</td>
                      <td className="border px-4 py-2">
                        {item.syllabus && item.syllabus !== '#' ? (
                          <a
                            href={item.syllabus}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
