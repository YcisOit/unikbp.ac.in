'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
// import Popup from '../popup/popup'; // Uncomment if you use it later

const tabs = ['Science and Technology', 'Commerce and Management', 'Humanities', 'Interdisiplinary Studies'];

const tableData = {
  'Science and Technology': [
    { sr: 1, Subject: 'Mathematics', View: '#' },
    { sr: 2, Subject: 'Statistic', View: '#' },
    { sr: 3, Subject: 'Physics', View: '#' },
    { sr: 4, Subject: 'Chemistry', View: '#' },
    { sr: 5, Subject: 'Electronics', View: '#' },
    { sr: 6, Subject: 'Computer Science', View: '#' },
    { sr: 7, Subject: 'Botany', View: '#' },
    { sr: 8, Subject: 'Zoology', View: '#' },
    { sr: 9, Subject: 'Microbiology', View: '#' },
    { sr: 10, Subject: 'Biotechnology', View: '#' },
    { sr: 11, Subject: 'Food Technology', View: '#' },
    { sr: 12, Subject: 'Geography', View: '#' },
  ],
  'Commerce and Management': [
    { sr: 1, Subject: 'Commerce', View: '#' },
    { sr: 2, Subject: 'Management', View: '#' },
    { sr: 3, Subject: 'Accountancy', View: '#' },
    { sr: 4, Subject: 'Business Economics	', View: '#' },
    { sr: 5, Subject: 'Banking and Finance	', View: '#' },
  ],
  'Humanities': [
    { sr: 1, Subject: 'Marathi ', View: '#' },
    { sr: 2, Subject: 'Hindi ', View: '#' },
    { sr: 3, Subject: 'English ', View: '#' },
    { sr: 4, Subject: 'Sanskrit and Prakrit	 ', View: '#' },
    { sr: 5, Subject: 'Foreign Languages	 ', View: '#' },
    { sr: 6, Subject: 'Economics ', View: '#' },
    { sr: 7, Subject: 'Political Science	 ', View: '#' },
    { sr: 8, Subject: 'History ', View: '#' },
    { sr: 9, Subject: 'Sociology ', View: '#' },
    { sr: 10, Subject: 'Psychology	 ', View: '#' },
  ],
  'Interdisiplinary Studies': [
    { sr: 1, Subject: 'Education', View: '#' },
    { sr: 2, Subject: 'Physical Education	', View: '#' },
    { sr: 3, Subject: 'Journalism and Mass Communication	', View: '#' },
    { sr: 4, Subject: 'Performing and Fine Arts	', View: '#' },
    { sr: 5, Subject: 'N.C.C. and N.S.S.	', View: '#' },
    { sr: 6, Subject: 'Environmental Studies	', View: '#' },  
  ],
};

export default function HorizontalTabsWithTable() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);



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
          Bos
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            {/* <img
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              className="w-5 h-5"
            /> */}
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {/* <span className="hover:underline cursor-pointer">
              <a href="/">Home</a>
            </span> */}
            <span className="hover:underline cursor-pointer">
              <Link href="/">Home</Link>
            </span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Bos</span>
          </div>
        </div>
      </div>



    <div className="p-4 sm:p-6">
  {/* Modal */}
  {showModal && (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-lg w-full max-w-2xl rounded-2xl shadow-2xl p-4 sm:p-8 relative border border-gray-200">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          Board of Studies in {selectedSubject}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left text-gray-700 border border-gray-300 rounded-md overflow-hidden">
            <thead className="bg-gray-400 text-black">
              <tr>
                <th className="px-4 py-2 border">Sr.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Nomination</th>
                <th className="px-4 py-2 border">Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sr: 1, name: '', nomination: 'Head of the Department', designation: 'Chairman' },
                { sr: 2, name: '', nomination: 'Teacher Nominated by VC', designation: 'Member' },
                { sr: 3, name: '', nomination: 'Post Graduate Teacher Nominated by VC', designation: 'Member' },
                { sr: 4, name: '', nomination: 'Teacher other than Head', designation: 'Member' },
                { sr: 5, name: '', nomination: 'Teacher other than Head', designation: 'Member' },
                { sr: 6, name: '', nomination: 'Professor or Associate Professor other University', designation: 'Member' },
                { sr: 7, name: '', nomination: 'Industry Expert', designation: 'Member' },
              ].map((item) => (
                <tr key={item.sr} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2 border">{item.sr}</td>
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">{item.nomination}</td>
                  <td className="px-4 py-2 border">{item.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )}

  {/* Tabs */}
  {/* Mobile View: Accordion Style Tabs */}
<div className="md:hidden space-y-4 mb-6">
  {tabs.map((tab) => (
    <div key={tab} className="border rounded">
      <button
        onClick={() => setActiveTab(activeTab === tab ? null : tab)}
        className="w-full px-4 py-2 text-left font-semibold bg-yellow-400 text-black"
      >
        {tab}
      </button>
      {activeTab === tab && (
        <div className="p-4 border-t">
          <table className="w-full text-sm border">
            <thead className="bg-gray-400 text-black">
              <tr>
                <th className="border px-4 py-2">Sr</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody>
              {(tableData[tab] || []).map((item) => (
                <tr key={item.sr}>
                  <td className="border px-4 py-2">{item.sr}</td>
                  <td className="border px-4 py-2">{item.Subject}</td>
                  <td className="border px-4 py-2">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedSubject(item.Subject);
                        setShowModal(true);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      Click here
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  ))}
</div>

{/* Desktop View: Horizontal Tabs */}
<div className="hidden md:block">
  <div className="flex justify-center space-x-4 mb-6">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={clsx(
          'px-4 py-2 rounded font-semibold',
          activeTab === tab ? 'bg-black text-white' : 'bg-yellow-400 text-black'
        )}
      >
        {tab}
      </button>
    ))}
  </div>

  <div className="flex justify-center p-4 overflow-x-auto">
    <table className="min-w-[400px] w-full max-w-3xl text-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Sr</th>
          <th className="border px-4 py-2">Subject</th>
          <th className="border px-4 py-2">View</th>
        </tr>
      </thead>
      <tbody>
        {(tableData[activeTab] || []).map((item) => (
          <tr key={item.sr}>
            <td className="border px-4 py-2">{item.sr}</td>
            <td className="border px-4 py-2">{item.Subject}</td>
            <td className="border px-4 py-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSubject(item.Subject);
                  setShowModal(true);
                }}
                className="text-blue-600 hover:underline"
              >
                Click here
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>

    
  );
}
