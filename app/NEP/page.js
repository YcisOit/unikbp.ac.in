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
  <table className="min-w-full border border-black text-black shadow-lg">
    <thead>
      <tr>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white text-sm sm:text-base">Sr. NO.</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white text-sm sm:text-base">Date</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white text-sm sm:text-base">Notice</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white text-sm sm:text-base">Download PDF</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-black px-4 py-2 text-sm sm:text-base">1</td>
        <td className="border border-black px-4 py-2 text-sm sm:text-base">16-06-2023</td>
        <td className="border border-black px-4 py-2 text-sm sm:text-base">	University Annual Report Released</td>
        <td className="text-blue-600 underline border border-black px-4 py-2 text-sm sm:text-base">
          <a href="#">View PDF</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


         },
    { id: 2, name: 'Circulars Orders', 
     Content:  
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Date</th>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Notice</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>16-06-2023</td>
         <td className='border border-black px-4 py-2'>Implementation of NEP 2020</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/1-Implementation-of-NEP-2020-1.pdf'>View PDF</a> </td>
         </tr>
         
     </tbody>
    </table> 
    </div>},

    { id: 3, name: 'Government Resolution', 
     Content: 
     <div className="overflow-x-auto">
  <table className="min-w-full border border-black text-black shadow-lg">
    <thead>
      <tr>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white">Sr.NO.</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white">Date</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white">Notice</th>
        <th className="bg-gray-900 border border-white px-4 py-2 text-white">Download PDF</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-black px-4 py-2">1</td>
        <td className="border border-black px-4 py-2">10-06-2024</td>
        <td className="border border-black px-4 py-2">University Annual Report Released</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
      <tr className="bg-gray-200">
        <td className="border border-black px-4 py-2">2</td>
        <td className="border border-black px-4 py-2">20/04/2023</td>
        <td className="border border-black px-4 py-2">Revised Guidelines for Credit and Program Structure</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-2">3</td>
        <td className="border border-black px-4 py-2">26/11/2022</td>
        <td className="border border-black px-4 py-2">Formation of Sukanu Samiti</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
      <tr className="bg-gray-200">
        <td className="border border-black px-4 py-2">4</td>
        <td className="border border-black px-4 py-2">16/10/2022</td>
        <td className="border border-black px-4 py-2">Establishment of Task Force</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-2">5</td>
        <td className="border border-black px-4 py-2">20/09/2022</td>
        <td className="border border-black px-4 py-2">Establishment of Kayragat</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
      <tr className="bg-gray-200">
        <td className="border border-black px-4 py-2">6</td>
        <td className="border border-black px-4 py-2">26/04/2022</td>
        <td className="border border-black px-4 py-2">Implementation of National Credit Framework</td>
        <td className="text-blue-600 underline border border-black px-4 py-2">
          <a href="#">View PDF</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    },
    { id: 4, name: 'Policy',   Content: 
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Date</th>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Notice</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>	16/06/2023</td>
         <td className='border border-black px-4 py-2'>New Education Policy – 2020	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/1-NEP-2020.pdf'>View PDF</a> </td>
         </tr>
     </tbody>
    </table>
    </div> },
    { id: 5, name: 'Article',
       Content:
        
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">       <thead>
         <tr>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
          <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Date</th>
          <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Notice</th>
          <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className='border border-black px-4 py-2'>1</td>
          <td className='border border-black px-4 py-2'>25/07/2023</td>
          <td className='border border-black px-4 py-2'>Multi-Faculty Education			</td>
          <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/1-Multi-Faculty-Education-Marathi.pdf'>View PDF</a> </td>
          </tr>
          <tr>
          <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>	25/07/2023	</td>
          <td className='border border-black px-4 py-2  bg-gray-200'>NEP 2020 : Introduction		</td>
          <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/2-NEP-2020-Introduction-Marathi.pdf'>View PDF</a>  </td>
          </tr>
       
          
         
      </tbody>
     </table>
     
</div>

     },
    { id: 6, name: 'Professor of Practice',
      Content: 
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Date</th>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Notice</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>30/09/2022		</td>
         <td className='border border-black px-4 py-2'>UGC Professor of Practice Letter		</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/1-UGC-Professor-of-Practice-Letter-30-09-2022.pdf'>View PDF</a> </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>30/09/2022	</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>UGC Guildeline for engaing Professor of Practice in Universities and Colleges	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/2-UGC-Guildeline-for-engaing-Professor-of-Practice-in-Universities-and-Colleges.pdf'>View PDF</a>  </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2'>3</td>
         <td className='border border-black px-4 py-2'>30/09/2022	</td>
         <td className='border border-black px-4 py-2'>Guidelines for Empanelment of Adjunct Professor,Research Professor and Professor of practice	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/3-Guidlines-for-Empanelement-of-Adjunct-Professor.pdf'>View PDF</a>  </td>
         </tr>
         
        
     </tbody>
    </table>
    </div>
    },
    { id: 7, name: 'Rport', 
      

      Content:
<div className="overflow-x-auto w-full">
<table className="min-w-full border border-black text-black shadow-lg">      <thead>
        <tr>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Date</th>
         <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Notice</th>
         <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Download PDF</th>
         </tr>
       </thead>
       <tbody>
         <tr>
         <td className='border border-black px-4 py-2'>1</td>
         <td className='border border-black px-4 py-2'>20/10/2023	</td>
         <td className='border border-black px-4 py-2'>Dr. R. D. Kulkarni Committee Report	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/1-RPT-20221020-Dr-R-D-Kulkarni-Committee-Report-1_65.pdf'>View PDF</a> </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2  bg-gray-200'>2</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>28/10/2022	</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>Ujwala Chakradeo Committee Report	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/2-RPT-20221028-Dr-Ujwala-Chakradeo-Committee-Report.pdf'>View PDF</a>  </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2'>3</td>
         <td className='border border-black px-4 py-2'>28/10/2022		</td>
         <td className='border border-black px-4 py-2'>Dr Abhay Wagh Committee Report of Teacher Evaluation		</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/3-RPT-20221028-Dr-Abhay-Wagh-Committee-Report-of-Teacher-Evaluation-1.pdf'>View PDF</a>  </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2  bg-gray-200'>4</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>	28/10/2022</td>
         <td className='border border-black px-4 py-2  bg-gray-200'>Dr Abhay Wagh Committee Report of Poly to Engineering Admission	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2  bg-gray-200'> <a href='/pdf/4-RPT-20221028-Dr-Abhay-Wagh-Committee-Report-of-Poly-to-Engineering-Admission.pdf'>View PDF</a>  </td>
         </tr>
         <tr>
         <td className='border border-black px-4 py-2'>5</td>
         <td className='border border-black px-4 py-2'>30/06/2021		</td>
         <td className='border border-black px-4 py-2'>Task Force Report Annexure	</td>
         <td className='text-blue-600 underline border border-black px-4 py-2'><a href='/pdf/5-RPT-20210630-Task-Force-Report-Annexure.pdf'>View PDF</a> </td>
         </tr>
        
     </tbody>
    </table>
    </div>
     },


    { id: 8, name: 'Syllabus per NEP', Content: <button  className="block w-50 bg-amber-500 px-4 py-2 text-center rounded-full text-sm font-medium hover:bg-[#8a0c56] text-white"> <a href="/Syllabus"  >
      Syllabus pre NEP 2020
    </a></button> },
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
    NEP 2020
    </h1>

    {/* Line divider */}
    <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

    {/* Breadcrumb */}
    <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
      <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
      <span className="hover:underline cursor-pointer"><Link href="/">Home</Link></span>
      <span>/</span>
      <span className="text-[#fbbf24] font-semibold">NEP 2020</span>
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

