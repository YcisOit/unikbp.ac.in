'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaDesktop } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const tabs = [
    { id: 1, name: 'About',
       content: (<>

  
  <div className="flex flex-col  items-start  text-left space-y-2">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold">
           Skills
          </h2>
          <p className="font-bold text-base text-gray-900">
          Major & Minor Research Project : <a href='#' className='text-blue-600 font-normal'>Ckilck here</a>
          </p>
          <p className="font-bold text-base text-gray-900">
          Process Patents Published  : <a href='#' className='text-blue-600 font-normal'>Ckilck here</a>
          </p>
         
          <button className='rounded-full bg-[#8a0c56] hover:bg-black text-white px-4 py-2'>
    Read More
  </button>
        </div>
    
 
       </>) },
    { id: 2, name: 'Qualification', 
    content: 
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Year</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Degree</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Institute</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Subject</th>

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>2002	</td>
               <td className='border border-black px-4 py-2'>M.A.		</td>
               <td className=' border border-black px-4 py-2'> _</td>
               <td className=' border border-black px-4 py-2'> Economics</td>

               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>2001	</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>B.Ed</td>
               <td className=' border border-black px-4 py-2 bg-gray-200'> _ </td>
               <td className=' border border-black px-4 py-2  bg-gray-200'> (Education )  </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>3</td>
               <td className='border border-black px-4 py-2'>2011		</td>
               <td className='border border-black px-4 py-2'>Ph.D.</td>
               <td className=' border border-black px-4 py-2'> _ </td>
               <td className=' border border-black px-4 py-2'>	e-Banking and Customers Satisfaction </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>4</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>2002</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>DIT</td>
               <td className=' border border-black px-4 py-2 bg-gray-200'> _ </td>
               <td className=' border border-black px-4 py-2  bg-gray-200'> Diploma in Information Technology from C-DAC </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>5</td>
               <td className='border border-black px-4 py-2'>2005-2006</td>
               <td className='border border-black px-4 py-2'>	UGC-SET UGC-NET	</td>
               <td className=' border border-black px-4 py-2'> _ </td>
               <td className=' border border-black px-4 py-2'>Economics   </td>
               </tr>
              
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>6</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>2011		</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>_</td>
               <td className=' border border-black px-4 py-2  bg-gray-200 '> Post Graduate Diploma in Rural Development</td>
               <td className=' border border-black px-4 py-2  bg-gray-200'>	_ </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  '>7</td>
               <td className='border border-black px-4 py-2  '>2002</td>
               <td className='border border-black px-4 py-2  '>_</td>
               <td className=' border border-black px-4 py-2  '> Diploma in Mass Communication and Journalism	</td>
               <td className=' border border-black px-4 py-2  '> _</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>8</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>2005-2006</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>	M.A	</td>
               <td className=' border border-black px-4 py-2  bg-gray-200'> _ </td>
               <td className=' border-black px-4 py-2'>Rural Development (IGNOU) </td>
               </tr>
              
           </tbody>
          </table>
          </div> },
    { id: 3, name: 'Experience', 
      content:
      <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Year</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Designation</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Organization
               </th>
              

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>	10 Years	</td>
               <td className='border border-black px-4 py-2'> PG		</td>
               <td className=' border border-black px-4 py-2'> _</td>

               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>17 Years		</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>UG Experience	</td>
               <td className=' border border-black px-4 py-2 bg-gray-200'> _ </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>3</td>
               <td className='border border-black px-4 py-2'>12 Years			</td>
               <td className='border border-black px-4 py-2'>Research Experience	</td>
               <td className=' border border-black px-4 py-2'> _ </td>
               </tr>
              
           
              
           </tbody>
          </table>
          </div> },
    { id: 4, name: 'About Research', content:
      <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Title</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Download
               </th>
              

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>	BOOKS PUBLISHED		</td>
               <td className='border border-black px-4 py-2  '><a href='#'>Click here</a>	</td>

               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Research Paper-UGC Listed Journals			</td>
               <td className='border border-black px-4 py-2  bg-gray-200'><a href='#'>Click here</a>	</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>3</td>
               <td className='border border-black px-4 py-2'>Research Papers -Non UGC Listed Journals</td>
               <td className='border border-black px-4 py-2 '><a href='#'>Click here</a>	</td>
               </tr>
              
           
              
           </tbody>
          </table>
          </div>
     },
    { id: 5, name: 'Academic Contribution', content: 

      <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Designation</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Institute</th>
  
               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>	Assistant Coordinator, Skill Development</td>
               <td className='border border-black px-4 py-2'>Rayat Shikshan Sanstha, Satara</td>

               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Central Placement Officer	</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Rayat Shikshan Sanstha, Satara   </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>3</td>
               <td className='border border-black px-4 py-2'>Center Director, Banking Recruitment Guidance Centre 	</td>
               <td className='border border-black px-4 py-2'>DG College, Satara</td>
               </tr>
              
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>4</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Coordinator, B.Voc (Financial Markets & Services)	</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>_  </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>5</td>
               <td className='border border-black px-4 py-2'>	Former Chairman 	</td>
               <td className='border border-black px-4 py-2'>The Rayat Sevak Coop Bank Ltd. Satara (Having Business of 1800 Cr.)</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>6</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Research Consultant	</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Rayat Institute of Research and Development, Satara </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>7</td>
               <td className='border border-black px-4 py-2'>	IQAC Member</td>
               <td className='border border-black px-4 py-2'>Mahaveer College, Kolhapur</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>8</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>	BoS Chairman</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>Bank Management, DG College of Commerce, Satara  </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>9</td>
               <td className='border border-black px-4 py-2'>	BoS Member of Business Economics	</td>
               <td className='border border-black px-4 py-2'>	Shivaji University, Kolhapur</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>10</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>BoS Member of Business Economics	</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>KBP College Pandharpur (Solapur) Autonomous College</td>
               </tr>
               
              
           
              
           </tbody>
          </table>
          </div> 
    },
  ];

  useEffect(() => {
    if (drawerOpen) setDrawerVisible(true);
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerVisible(false);
    setTimeout(() => setDrawerOpen(false), 300); // match drawer animation
  };

  const AboutMeCard = () => (
    <div className="w-full lg:w-80 border-2 border-black shadow-lg rounded-2xl p-4 space-y-4 bg-white">
      <h2 className="font-semibold text-[18px] text-gray-900">About Me:</h2>

      <div className="flex items-start space-x-3">
        <FaGraduationCap className="text-8xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Education</h3>
          <p className="text-gray-800">
            (MA-Econ, Ph.D (Banking), B.Ed, GDC&A, PGDRD, MCJ, DIT, NET, SET)
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Address</h3>
          <p className="text-gray-800">Karmaveer Bhaurao Patil University, Satara.</p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
        <FaPhone className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Phone</h3>
          <p className="text-gray-800">+91-9860176059</p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
        <FaEnvelope className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Email</h3>
          <p className="text-gray-800">registrar@unikbp.ac.in</p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
        <FaDesktop className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Web Address</h3>
          <p className="text-gray-800">www.unikbp.ac.in</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      
    {/* Background Image section */}
<div
  className="h-[250px] bg-cover bg-center relative bg-black"
  style={{
    backgroundImage: "url('/images/tback.png')",
  }}
>
  <div className="absolute inset-0 bg-black opacity-45" />
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
    <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
    Registrar
    </h1>
    <div className="border-t-2 border-white w-[500px] my-4" />
    <div className=" text-white py-3 px-6 flex items-center space-x-2 text-sm">
      <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
      <span className="hover:underline cursor-pointer"><Link href="/">Home</Link></span>
      <span>/</span>
     
      <span className="text-[#fbbf24] font-semibold">Registrar</span>
    </div>
  </div>
</div>

      {/* Profile Header */}
      <div className="bg-gray-200 w-full px-5 py-6 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <Image
          src="/images/resistrar.jpg"
          alt="Registrar"
          width={160}
          height={160}
          className="h-40 w-40 rounded-full border-4 border-[#00A99D] shadow-lg object-cover"
        />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
          <h2 className="text-red-900 text-2xl md:text-3xl font-semibold">
            Prof. Dr. Vijay Maruti Kumbhar
          </h2>
          <p className="font-bold text-base text-gray-900">
            (MA-Econ, Ph.D (Banking), B.Ed, GDC&A, PGDRD, MCJ, DIT, NET, SET)
          </p>
          <p className="text-gray-800">Ag. Registrar, KBP University, Satara</p>
        </div>
      </div>

      {/* Mobile Button for Drawer */}
      <div className=" lg:hidden px-4 mt-4 flex justify-center">
  <button
    className="bg-[#8a0c56] w-1/2 text-white font-semibold px-4 py-2 rounded-lg"
    onClick={() => setDrawerOpen(true)}
  >
    Show About Me
  </button>
</div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
       {/* Background Overlay */}
<div
  className={`absolute inset-0  duration-300 ease-in-out `}
  onClick={closeDrawer}
/>

          {/* Drawer Panel */}
          <div
            className={`relative w-80 h-full bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
              drawerVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                
                <button
                  className="text-black font-bold text-2xl items-end text-left"
                  onClick={closeDrawer}
                >
                  &times;
                </button>
              </div>
              <AboutMeCard />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="w-full px-4 py-6 flex flex-col lg:flex-row gap-6 items-start justify-center">
        {/* Desktop About Me Card */}
        <div className="hidden lg:block">
          <AboutMeCard />
        </div>

        {/* Tabs Card */}
        <div className="w-full lg:w-2/3 border-2 border-black shadow-lg rounded-2xl p-4 relative bg-white">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-4 relative">
            <button
              className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {tabs.find((t) => t.id === activeTab)?.name}
              <ChevronDown
                className={`transform transition-transform ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 bg-white text-black shadow-md rounded-lg absolute w-full z-10">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveTab(t.id);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm font-medium hover:bg-gray-200"
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex space-x-3 justify-center border-b-2 border-gray-500 pb-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === t.id
                    ? 'bg-[#8a0c56] text-white'
                    : 'bg-amber-500 text-black'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 text-black">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
