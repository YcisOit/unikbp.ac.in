'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

const tabs = [
  {
    id: 1,
    name: 'Beware',
    content: (
      <p>
        Ragging is totally prohibited in the Karmaveer Bhaurao Patil University,
        Satara and its Constituent Colleges. Anyone found guilty of ragging and/or abetting
        ragging, whether actively or passively, or being a part of a conspiracy to promote ragging,
        is liable to be punished in accordance with these Regulations as well as under the provisions
        of any penal law for the time being in force.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Premable',
    content: (
      <p>
        In view of the directions of the Hon’ble Supreme Court in the matter of
        “University of Kerala v/s. Council, Principals, Colleges and others” in SLP no. 24295 of 2006
        dated 16.05.2007 and that dated 8.05.2009 in Civil Appeal number 887 of 2009, and in consideration
        of the determination of the Central Government and the University Grants Commission to prohibit,
        prevent and eliminate the scourge of ragging including any conduct by any student or students
        whether by words spoken or written or by an act which has the effect of teasing, treating or
        handling with rudeness a fresher or any other student, or indulging in rowdy or indisciplined
        activities by any student or students which causes or is likely to cause annoyance, hardship
        or psychological harm or to raise fear or apprehension thereof in any fresher or any other student,
        or asking any student to do any act which such student will not in the ordinary course do and
        which has the effect of causing or generating a sense of shame, or torment or embarrassment
        so as to adversely affect the physique or psyche of such fresher or any other student, with or
        without an intent to derive a sadistic pleasure or showing off power, authority or superiority by
        a student over any fresher or any other student, in all higher education institutions in the
        country, and thereby, to provide for the healthy development, physically and psychologically,
        of all students, the University Grants Commission, in consultation with the Councils, brings forth
        this Regulation. In exercise of the powers conferred by Clause (g) of sub-section (1) of Section
        26 of the University Grants Commission Act, 1956, the University Grants Commission hereby made
        the Regulations.
      </p>
    ),
  },
  {
    id: 3,
    name: 'Resources',
    content: (
      <ul className="list-disc ml-5">
        <li>
          <Link href="/Resources/Annexure-I.pdf" className="text-blue-500">
            UGC Regulations On Curbing The Menace Of Ragging In Higher Educational Institutions Government Of India
          </Link>
        </li>
        <li>
          <a href="https://antiragging.in/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Know the Details
          </a>
        </li>
        <li>
          <Link href="/Resources/Information Kits and Posters.pdf" className="text-blue-500">
            Information Kits and Posters
          </Link>
        </li>
        <li>
          <a href="https://antiragging.in/affidavit_registration_disclaimer.html" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Affidavit Form
          </a>
        </li>
        <li>
          <a href="https://antiragging.in/undertaking_request.php" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Undertaking Document
          </a>
        </li>
        <li>
          <a href="https://antiragging.in/compliance_desclaimer.html" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Compliance Form
          </a>
        </li>
        <li>
          <a href="https://antiragging.in/complaint_register_form.html" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Register Complaint
          </a>
        </li>
        <li>
          <a href="https://antiragging.in/video.html" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Videos on Ragging
          </a>
        </li>
        <li>
          <Link href="#" className="text-blue-500">
            Action Taken on Anti-Ragging Celebration Day
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    name: 'ACT',
    content: (
      <ul className="list-disc ml-5 flex justify-center item-center">
        <li>
          <Link href="/Resources/Anti Ragging Act 2009 _1_.pdf" className="text-blue-500">
            Anti Ragging Act 2019
          </Link>
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    name: 'Committee and Squad',
    content: (
      <ul className="list-disc ml-5 flex justify-center item-center">
        <li>
          <Link href="/Resources/Anti Ragging Committee and Squad _1_.pdf" className="text-blue-500">
            Anti Ragging Committee and Squad
          </Link>
        </li>
      </ul>
    ),
  },
];

export default function HorizontalTabsWithTable() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Anti-Ragging
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Anti-Ragging</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="p-4 mx-50 sm:p-6">
        <div className="hidden border-2 px-5 py-5 md:block">
          <div className="flex justify-center w-[60%] p-4 mx-auto space-x-3 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'px-3 font-semibold',
                  activeTab.id === tab.id ? 'bg-black text-white' : 'bg-yellow-400 text-black'
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div>{activeTab.content}</div>
        </div>
      </div>
    </div>
  );
}
