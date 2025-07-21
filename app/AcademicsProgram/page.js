'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const faculties = ['Science Faculty', 'Commerce Faculty', 'Arts Faculty'];
const programs = ['UG Program', 'PG Program', 'PhD Program'];

const sampleData = {
'Science Faculty': {
    'UG Program': [
      { sr: 1, name: 'Chemistry	', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Chemistry-UG.pdf' },
      { sr: 2, name: 'Physics	', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Physics_UG.pdf' },
      { sr: 3, name: 'Botony	', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Botany_UG.pdf' },
      { sr: 4, name: ' Microbiology	', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Microbiology-UG.pdf' },
      { sr: 5, name: ' Zoology	', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Zoology-UG.pdf' },
      { sr: 6, name: ' Mathematics', duration: '4  years', credits: 176	, syllabus: '/ug programs/Science/Mathematics_UG.pdf' },
      { sr: 7, name: ' Statistics', duration: ' 4 years', credits: 176	, syllabus: '/ug programs/Science/Statistics-UG.pdf' },
      { sr: 8, name: ' Electronics', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Electronics_UG.pdf' },
      { sr: 9, name: ' Animation Science	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Animation-Science_UG.pdf' },
      { sr: 10, name: 'Artificial Intelligence	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Artificial-Intelligence-UG.pdf' },
      { sr: 11, name: 'B.Voc (Software Development)	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/B.VOC-UG.pdf' },
      { sr: 12, name: ' Biotechnology', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Biotechnology_UG.pdf' },
      { sr: 13, name: ' Computer Application	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Computer-Application_UG.pdf' },
      { sr: 14, name: 'Computer Science (Entire)	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Comp-Sci-entire-UG.pdf' },
      { sr: 15, name: ' Computer Science (Optional)	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Comp-Sci-entire-UG.pdf' },
      { sr: 16, name: ' Data Science	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/DSC-UG.pdf' },
      { sr: 17, name: 'Drug Chemistry	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Drug-Chemistry-UG.pdf' },
      { sr: 18, name: ' Food Technolgy	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Food-Technology-UG.pdf' },
      { sr: 19, name: 'Forensic Science	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Forensic-Sci-UG.pdf' },
      { sr: 20, name: ' Nanoscience and Technolgy	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Nanoscience-NEP-1.pdf' },
      { sr: 21, name: 'Material Science	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Material-Science.pdf' },
      { sr: 22, name: ' Instrumentation	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Instrumentation_UG.pdf' },
      { sr: 23, name: ' Music Science	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Astrophysics_UG.pdf' },
      { sr: 24, name: 'Astro Physics	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Astrophysics_UG.pdf' },
      { sr: 25, name: 'Bioinformatics	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Bioinformatics-UG.pdf' },
      { sr: 26, name: ' Biochemistry	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Biochemistry-UG.pdf' },
      { sr: 27, name: ' Military Science	', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Military-Science-and-NCC_UG.pdf' },
      { sr: 28, name: 'Plant Protection	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Plant-Protection_UG.pdf' },
      { sr: 29, name: 'Seed Technology	 ', duration: '4 years', credits: 176	, syllabus: '/ug programs/Science/Seed-Technology_UG.pdf' },
    ],
    'PG Program': [
      { sr: 1, name: ' Chemistry', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Chemistry-PG.pdf' },
      { sr: 2, name: 'Physics ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/M.Sc-_Physics_.pdf' },
      { sr: 3, name: ' Electronics', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Electronics_PG.pdf' },
      { sr: 4, name: 'M.Sc(Mathematics)	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Mathematics-_PG.pdf' },
      { sr: 5, name: ' M.Sc(Statistics)	', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Statistics-PG.pdf' },
      { sr: 6, name: ' M.Sc(Applied Microbiology)	', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Applied-Microbiology-PG.pdf' },
      { sr: 7, name: 'M.Sc(Zoology)	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Zoology-PG.pdf' },
      { sr: 8, name: 'M.Sc(Fisheries)	 ', duration: '2  years', credits: 88, syllabus: '#' },
      { sr: 9, name: ' M.Sc(Botany)	', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/M.Sc-_Botany_-Course-Strucuture.pdf' },
      { sr: 10, name: 'M.Sc (Biotechnology)	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/M.Sc_Biotechnology_.pdf' },
      { sr: 11, name: 'M.Sc (Computer Science))	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Computer-Science-PG.pdf' },
      { sr: 12, name: 'M.Sc (Animation Science)	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/M.Sc-_Animation.Sci_.pdf' },
      { sr: 13, name: 'M.Sc (Food Processing and Packaging)	 ', duration: '2  years', credits: 88, syllabus: '-' },
      { sr: 14, name: ' M.Sc (Forensic Science)	', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/M.Sc-Program-Structure-Forensic.pdf' },
      { sr: 15, name: 'M.Sc (Data Science)	 ', duration: '2  years', credits: 88, syllabus: '/pg programs/Science/Data.Science.pdf' },
    ],
    'PhD Program': [
      { sr: 1, name: ' Research in Chemistry	', duration: '4-6 years	', credits: 'Variable', syllabus: '#' },
      { sr: 2, name: ' Physics Research	', duration: '4-6 years	', credits: 'Variable', syllabus: '#' },
    ],
  },
  'Commerce Faculty': {
    'UG Program': [
      { sr: 1, name: ' Accountancy', duration: '3 years', credits: 120, syllabus: '#' },
      { sr: 2, name: 'Business Studies	 ', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/Business-Studies.pdf' },
      { sr: 3, name: ' Banking & Finance	', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/Banking-and-Finance.pdf' },
      { sr: 4, name: ' Bank Management	', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/Bank Management.pdf' },
      { sr: 5, name: ' Bachelor of Computer Applications	', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/BCA-Program-Structure-2024-25.pdf' },
      { sr: 6, name: 'Information Technology	 ', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/Information-Technbology.pdf' },
      { sr: 7, name: ' Aviation Management	', duration: '3 years', credits: 120, syllabus: '#' },
      { sr: 8, name: ' Information Technology	', duration: '3 years', credits: 120, syllabus: '/ug programs/Commerce/Information-Technbology.pdf' },
    ],
    'PG Program': [
      { sr: 1, name: 'Bank Management	 ', duration: '	4-6 years', credits: 	'Variable', syllabus: '/pg programs/Commerce/M.-Com-Bank-Management-May-2024.pdf' },
      { sr: 2, name: 'Business Studies	 ', duration: '	4-6 years', credits: 'Variable', syllabus: '/pg programs/Commerce/M.-Com-Business-Studies-May-2024.pdf' },
      { sr: 3, name: 'Information Technolgy	 ', duration: '	4-6 years', credits: 'Variable', syllabus: '/pg programs/Commerce/M.-Com-IT-Information-Technbology-May-2024-1.pdf' },
      { sr: 4, name: 'Advanced Accountancy	', duration: '	4-6 years', credits: 'Variable', syllabus: '/pg programs/Commerce/M.Com-Adv.-Accountancy-May-2024.pdf' },
    ],
    'PhD Program': [
      { sr: 1, name: 'Bank Management	 ', duration: '	4-6 years', credits: 	'Variable', syllabus: '/phd programs/Commerce/M.-Com-Bank-Management-May-2024-1.pdf' },
      { sr: 2, name: 'Business Studies	 ', duration: '	4-6 years', credits: 'Variable', syllabus: '/phd programs/Commerce/M.-Com-Business-Studies-May-2024-1.pdf' },
      { sr: 3, name: 'Information Technolgy	 ', duration: '	4-6 years', credits: 'Variable', syllabus: '/phd programs/Commerce/M.-Com-IT-Information-Technbology-May-2024-2.pdf' },
      { sr: 4, name: 'Advanced Accountancy	', duration: '	4-6 years', credits: 'Variable', syllabus: '/phd programs/Commerce/M.Com-Adv.-Accountancy-May-2024-1.pdf' },
    ],
  },
  'Arts Faculty': {
    'UG Program': [
      { sr: 1, name: ' Marathi	', duration: '4 years', credits: 120, syllabus: '/ug programs/Arts/MARATHI.pdf' },
      { sr: 2, name: ' Hindi	', duration: '4 years', credits: 120, syllabus:  '/ug programs/Arts/Hindi-1.pdf' },
      { sr: 3, name: ' English', duration: '4 years', credits: 120, syllabus:  '/ug programs/Arts/English-1.pdf' },
      { sr: 4, name: ' Sanskrit', duration: '4 years', credits: 120, syllabus: '#' },
      { sr: 5, name: 'Political Science	 ', duration: '4 years', credits: 120, syllabus:  '/ug programs/Arts/Political-Science.pdf' },
      { sr: 6, name: ' Economics', duration: '4 years', credits: 120, syllabus:  '/ug programs/Arts/Economics-1.pdf' },
      { sr: 7, name: ' History', duration: '4 years', credits: 120, syllabus:  '/ug programs/Arts/History-1.pdf' },
      { sr: 8, name: ' Sociology', duration: '4 years', credits: 120, syllabus: '#' },
      { sr: 9, name: 'Psychology ', duration: '4 years', credits: 120, syllabus: '#' },
    ],
    'PG Program': [
      { sr: 1, name: 'Advanced History	 ', duration: '2 years', credits: 60, syllabus: '#' },
      { sr: 2, name: 'Social Theory	 ', duration: '2 years', credits: 60, syllabus: '#' },
    ],
    'PhD Program': [
      { sr: 1, name: ' Research in History	', duration: '	4-6 years', credits: 'Variable', syllabus: '#' },
      { sr: 2, name: 'Sociology Research	 ', duration: '	4-6 years', credits: 'Variable', syllabus: '#' },
    ],
  },
};

export default function ProgramTabs() {
  const [activeFaculty, setActiveFaculty] = useState('Commerce Faculty');
  const [activeProgram, setActiveProgram] = useState('UG Program');

  const tableData = sampleData?.[activeFaculty]?.[activeProgram] || [];

  return (


<div>
        {/* Background Section */}
        <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
          Academics Programs
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Academics Programs</span>
          </div>
        </div>
      </div>


    <div className="p-4 sm:p-6 max-w-screen-xl mx-auto">
      {/* Horizontal Tabs - Faculties */}
      <div className="flex  flex-wrap  justify-center gap-3 mb-6">
        {faculties.map(faculty => (
          <button
            key={faculty}
            className={clsx(
              'px-4 py-2 rounded font-semibold transition duration-200',
              faculty === activeFaculty
                ? 'bg-black text-white'
                : 'bg-yellow-400 text-black'
            )}
            onClick={() => setActiveFaculty(faculty)}
          >
            {faculty}
          </button>
        ))}
      </div>

      {/* Layout: Stack on small screens, flex on md+ */}
      
        
        {/* Table content */}
        <div className="flex flex-col   md:flex-row gap-6 md:items-start">
        {/* Vertical Tabs - Program Types */}
        <div className="flex justify-center md:flex-col gap-3 mx-10 my-20 md:justify-start">
          {programs.map(program => (
            <button
              key={program}
              className={clsx(
                'px-4 py-2  font-semibold transition duration-200',
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
        <div className="w-full bg-white rounded md:w-full p-4 my-5 max-h-[400px] overflow-y-auto">
  <table className="min-w-[600px] w-full text-sm border-[2]">
    <thead className="bg-gray-400 text-left">
      <tr>
        <th className="border px-4 py-2">Sr</th>
        <th className="border px-4 py-2">Program</th>
        <th className="border px-4 py-2">Duration</th>
        <th className="border px-4 py-2">Total Credits</th>
        <th className="border px-4 py-2">Syllabus</th>
      </tr>
    </thead>
    <tbody>
      {tableData.length === 0 ? (
        <tr>
          <td colSpan={5} className="text-center py-4">
            No data available
          </td>
        </tr>
      ) : (
        tableData.map(item => (
          <tr key={item.sr}>
            <td className="border px-4 py-2">{item.sr}</td>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.duration}</td>
            <td className="border px-4 py-2">{item.credits}</td>
            <td className="border px-4 py-2">
              {item.syllabus ? (
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
