'use client';
import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tab = [
    { id: 1, name: 'Home', 
    Content:
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">       <thead>
         <tr>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Name</th>
          <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className='border border-black px-4 py-2'>1</td>
          <td className='border border-black px-4 py-2'>Research Notices	</td>
          <td className='text-blue-600 underline border border-black px-4 py-2'> 
            <a href="/pdf/PHD-RC-Lab-letter.pdf">View PDF</a></td>
          </tr>
          <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>Format</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'>
             <a href="/pdf/PHD-RC-Lab-letter.pdf">View PDF</a>  </td>
          </tr>
        
          
         
      </tbody>
     </table>
     
</div>

         },
    { id: 2, name: 'Activities', 
     Content:  
        
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">       <thead>
         <tr>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Name</th>
          <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className='border border-black px-4 py-2'>1</td>
          <td className='border border-black px-4 py-2'>	IPR Activities 2021-24</td>
          <td className='text-blue-600 underline border border-black px-4 py-2'>
  <a href='/pdf/IPRActivities-2021-24.pdf' target='_blank' rel='noopener noreferrer'>
    View PDF
  </a>
</td>          </tr>
          <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>	Research Activity list 2021-24</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/researchactivity.pdf'>View PDF</a>  </td>
          </tr>
          
          
         
      </tbody>
     </table>
     
</div>},

    { id: 3, name: 'Patent Data', 
     Content: 
     <div className="overflow-x-auto w-full">
     <table className="min-w-full border border-black text-black shadow-lg">      <thead>
             <tr>
              <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
              <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Year</th>
              <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className='border border-black px-4 py-2'>1</td>
              <td className='border border-black px-4 py-2'>	2021-2022</td>
              <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/List2021-22-1.pdf'>View PDF</a> </td>
     
              </tr>
              <tr>
               <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
               <td className='border border-black px-4 py-2  bg-gray-200'>	2022-2023	</td>
               <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/List2022-2023-1.pdf'>View PDF</a>  </td>
               </tr>
               <tr>
              <td className='border border-black px-4 py-2'>3</td>
              <td className='border border-black px-4 py-2'>	2023-2024</td>
              <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/List2023-2024.pdf'>View PDF</a> </td>
     
              </tr>
             
          </tbody>
         </table>
         </div>

    },
    { id: 4, name: 'Publications',   Content: 
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Year</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>	2021</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/2021.pdf'>View PDF</a> </td>

         </tr>
         <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>	2022	</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/2022.pdf'>View PDF</a>  </td>
          </tr>
          <tr>
         <td className='border border-black px-4 py-2'>3</td>
         <td className='border border-black px-4 py-2'>	2023</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/2023.pdf'>View PDF</a> </td>

         </tr>
         <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>4</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>	2024	</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/2024.pdf'> View PDF</a>  </td>
          </tr>

     </tbody>
    </table>
    </div> },
    { id: 5, name: 'Research projects',
       Content:
        
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">       <thead>
         <tr>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Name</th>
          <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className='border border-black px-4 py-2'>1</td>
          <td className='border border-black px-4 py-2'>	Seed Money 2021-22</td>
          <td className='text-blue-600 underline border border-black px-4 py-2'><a>View PDF</a> </td>
          </tr>
          <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>Seed Money 2022-23	</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/Seed_Money_2022-23-3.pdf'>View PDF</a>  </td>
          </tr>
          <tr>
          <td className='border border-black px-4 py-2'>3</td>
          <td className='border border-black px-4 py-2'>KBPU Sanctioned Projects</td>
          <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/KBPU_Sanctioned_Projects.pdf'>View PDF</a> </td>
          </tr>
          
         
      </tbody>
     </table>
     
</div>

     },
    { id: 6, name: 'Startups',
      Content: 
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Title</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>Startups	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/Startups.pdf'>View PDF</a> </td>
         </tr>
       
         
        
     </tbody>
    </table>
    </div>
    },
   
  ];

  return (
    <>



    {/* Background Header Section */}
    <div
  className="h-[250px] bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/tback.png')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-50" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
    <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
    Research and Development
    </h1>

    {/* Line divider */}
    <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

    {/* Breadcrumb */}
    <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
      <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
      <Link href="/" className="hover:underline cursor-pointer">Home</Link>
      <span>/</span>
      <span className="text-[#fbbf24] font-semibold">Research and Development</span>
    </div>
  </div>
</div>






  
    <div className="w-full max-w-5xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row relative py-10">
      



      {/* Dropdown for Mobile */}
      <div className="md:hidden w-full mb-4">
        <button
          className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg flex justify-between items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {tab.find((t) => t.id === activeTab)?.name}
          <ChevronDown
            className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 bg-white text-black shadow-md rounded-lg absolute w-[90%] max-w-md z-10">
            {tab.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id);
                  setIsDropdownOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-200 ${
                  activeTab === t.id ? 'bg-gray-100 font-semibold' : ''
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col w-1/4 space-y-2 pr-4 border-r border-gray-300">
        {tab.map((t) => (
        <button
        key={t.id}
        onClick={() => setActiveTab(t.id)}
        className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
          activeTab === t.id
            ? 'bg-[#8a0c56] text-white font-semibold'
            : 'bg-amber-500'
        }`}
      >
            {t.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="md:w-3/4 w-full md:pl-4 mt-4 md:mt-0">
        {tab.find((t) => t.id === activeTab)?.Content}
      </div>
    </div>
    </>
  );
};

export default Page;

