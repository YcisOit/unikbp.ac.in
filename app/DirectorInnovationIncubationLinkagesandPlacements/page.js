'use client';
import Image from 'next/image';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaDesktop,FaBriefcase, FaLightbulb,FaUniversity } from 'react-icons/fa';

const Page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const tabs = [
    { id: 1, name: 'About',
       content: (<>
         <div className="flex flex-col  items-start  text-left space-y-2">
         
          <p className="font-bold text-base text-gray-900 text-justify">
          Dr. Ganesh S. Nhivekar is working as an Assistant Professor at the Department of Electronics , Yashavantrao Chavan Institute of Science ,Satara. He did his Bachelors and Masters in Electronics and awarded a Ph.D. degree from Shivaji University, Kolhapur. He has qualified SET (Electronic Science) exams. Furthermore, he was a recipient of the UGC Rajiv Gandhi National Fellowship. His area of research and expertise is Embedded System and Fuzzy Logic Controller. Presently he is working on IOT technology, He has developed prototype of IOT based solar powered autonomous weather station, IoT based multi parameter measurement in Chemical Analysis Systems and Device for Analyzing Oil Content in Aromatic Plants.
          </p>
       
        </div>
 
       </>) },
    { id: 2, name: 'About Research', 
    content: 
  <>

    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 mb-4">
    
    <p className="font-bold text-base text-gray-900">
    Publication :
    </p>
    <p className="font-bold text-base text-gray-900">
    Papers :<span className='font-normal text-base text-gray-800'>22 Conference : 12 Books: 02</span>
    </p>
    <p className="font-bold text-base text-gray-900">
    Patents : <span className='font-normal text-base text-gray-800'>01 (Application Accepted, Certificate of Design not Generated.)</span>
    </p>
   
    <p className="font-bold text-base text-gray-900">
    Publications (List of papers published in SCI Journals, in year wise descending order).
    </p>
  </div>


    <div className="overflow-x-auto w-full">
    <table className="min-w-full border border-black text-black shadow-lg">      <thead>
            <tr>
             <th className='bg-gray-900 border border-white px-4 py-2 text-white'>Authors </th>
             <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Title</th>
             <th className='bg-gray-900 border border-white px-4 py-2 text-white'>Name of Journal</th>
             <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Volume</th>
             <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Page</th>
             <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Year</th>

             </tr>
           </thead>
           <tbody>
             <tr>
             <td className='border border-black px-4 py-2'>Kiran A Nirmal, Ganesh S Nhivekar, Atul C Khot, Tukaram D Dongale, Tae Geun Kim</td>
             <td className='border border-black px-4 py-2'>Unraveling the Effect of the Water Content in the Electrolyte on the Resistive Switching Properties of Self-Assembled One-Dimensional Anodized TiO2 Nanotubes</td>
             <td className='border border-black px-4 py-2'>The Journal of Physical Chemistry Letters</td>
             <td className=' border border-black px-4 py-2'> 13</td>
             <td className=' border border-black px-4 py-2'>7870-7880</td>
             <td className=' border border-black px-4 py-2'>2021</td>

             </tr>
             <tr>
             <td className='border border-black px-4 py-2  bg-gray-200'>G.Nhivekar, S Barkade, J Wagh, B Jadhav</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>Fuzzy Logic Based Contactless Risk Dedication and Prevention System to prevent COVID-19 Suspect at Entrance</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>Journal of Advanced Engineering Research</td>
             <td className=' border border-black px-4 py-2 bg-gray-200'>8</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>91- 93</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>2021</td>

             </tr>
            
             <tr>
             <td className='border border-black px-4 py-2'>S. S. Barkade, G. S. Nhivekar,J. A. Wagh and B. T. Jadhav</td>
             <td className='border border-black px-4 py-2'>Applicative Aspects of Piezoelectric Sensors for Power Generation	</td>
             <td className='border border-black px-4 py-2'>	Journal of Environmental Science, Computer Science and Engineering & Technology</td>
             <td className=' border border-black px-4 py-2'> 9</td>
             <td className=' border border-black px-4 py-2'>663-667</td>
             <td className=' border border-black px-4 py-2'>2020</td>

             </tr>
               
             <tr>
             <td className='border border-black px-4 py-2  bg-gray-200'>Nhivekar G.S., Mudholkar Ravi</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>TF Estimation and Verification of Machine Tool Cooler Prototype</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>International Journal of Advanced Scientific and Technical Research</td>
             <td className=' border border-black px-4 py-2 bg-gray-200'>3</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>	520-527</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>2014</td>

             </tr>
            
             <tr>
             <td className='border border-black px-4 py-2'>Nhivekar G.S., Mudholkar Ravi</td>
             <td className='border border-black px-4 py-2'>FPGA based Fuzzy Optoelectronic Color Sensor System	</td>
             <td className='border border-black px-4 py-2'>International journal of conputer applications	</td>
             <td className='border border-black px-4 py-2'>9</td>
             <td className=' border border-black px-4 py-2'> 21-24</td>
             <td className=' border border-black px-4 py-2'>2013</td>
             </tr>
             <tr>
             <td className='border border-black px-4 py-2  bg-gray-200'>Nhivekar Ganesh, Mudholkar Ravi</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>Microcontroller Based Low Cost Portable PC Mouse and Keyboard Tester</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>Leonardo Journal of Sciences (LJS)ISSN-1583-0223</td>
             <td className=' border border-black px-4 py-2 bg-gray-200'>11</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>	31-36</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>2012</td>

             </tr>
            
             <tr>
             <td className='border border-black px-4 py-2'>Nhivekar Ganesh, Mudholkar Ravi</td>
             <td className='border border-black px-4 py-2'>Data Logger and Remote Monitoring System for Multiple Parameter Measurement Applications</td>
             <td className='border border-black px-4 py-2'>Journal of Electrical and Electronics Engineering.ISSN:18446035</td>
             <td className=' border border-black px-4 py-2'> 4</td>
             <td className=' border border-black px-4 py-2'>139-142</td>
             <td className=' border border-black px-4 py-2'>2011</td>

             </tr>
             <tr>
             <td className='border border-black px-4 py-2  bg-gray-200'>Nhivekar Ganesh, Mudholkar Ravi</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>Implementation of fuzzy logic control algorithm in embedded microcomputers for dedicated application</td>
             <td className='border border-black px-4 py-2  bg-gray-200'>international Journal of Engineering, Science and Technology , MultiCraft ISSN: 2141-2839</td>
             <td className=' border border-black px-4 py-2 bg-gray-200'>3</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>276-283</td>
             <td className=' border border-black px-4 py-2  bg-gray-200'>2011</td>

             </tr>
            
           
            
         </tbody>
        </table>
        </div>


        </>
    },
 
    { id: 3, name: 'Details of Patents', content:
        <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Patent Title</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Name of Applicants</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Patent No</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'>Award Date     </th>

            

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>Basic Electronics-A practical approach (B.Sc.-I),ISBN:978-93-83796-05-2</td>
               <td className=' border border-black px-4 py-2'>G.S.Nhivekar, P.U.Lande	</td>
               <td className=' border border-black px-4 py-2'>Swchand Publication</td>
               <td className=' border border-black px-4 py-2'>2015</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>2</td>
               <td className='border border-black px-4 py-2'>A Lab Manual Of Practical Course In Electronics,ISBN:978-93-89533-82-8</td>
               <td className=' border border-black px-4 py-2'>D.M.Panahalkar, G.S.Nhivekar, N.P.Mote,S.D.Jadhav</td>
               <td className=' border border-black px-4 py-2'>Nirale Prakashan</td>
               <td className=' border border-black px-4 py-2'>2018  </td>


               </tr>
           
              
           </tbody>
          </table>
          </div> 
     },
     { id: 4, name: 'Books', content:
        <div className="overflow-x-auto w-full">
            <p className="font-bold text-base text-gray-900">
            BOOKS/REPORTS/CHAPTERS/GENERAL ARTICLES ETC.
    </p>
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Patent Title</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Name of Applicants</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Patent No</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'>Award Date     </th>

            

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>Basic Electronics-A practical approach (B.Sc.-I),ISBN:978-93-83796-05-2</td>
               <td className=' border border-black px-4 py-2'>G.S.Nhivekar, P.U.Lande	</td>
               <td className=' border border-black px-4 py-2'>Swchand Publication</td>
               <td className=' border border-black px-4 py-2'>2015</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>2</td>
               <td className='border border-black px-4 py-2'>A Lab Manual Of Practical Course In Electronics,ISBN:978-93-89533-82-8</td>
               <td className=' border border-black px-4 py-2'>D.M.Panahalkar, G.S.Nhivekar, N.P.Mote,S.D.Jadhav</td>
               <td className=' border border-black px-4 py-2'>Nirale Prakashan</td>
               <td className=' border border-black px-4 py-2'>2018  </td>


               </tr>
           
              
           </tbody>
          </table>
          </div> 
     },
     { id: 5, name: 'Awards', content:
        <div className="overflow-x-auto w-full">
            <p className="font-bold text-base text-gray-900">
            Award/prize/certificate etc. won by the investigator:
    </p>
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Name of Award</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Awarding Agency</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Year</th>
    

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>Rajiv Gandhi National Fellowship (RGNF)</td>
               <td className=' border border-black px-4 py-2'>U.G.C.</td>
               <td className=' border border-black px-4 py-2'>2010-2014</td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>2</td>
               <td className='border border-black px-4 py-2'>	Faculty Exchange</td>
               <td className=' border border-black px-4 py-2'>RUSA sponsored YCIS, Satara</td>
               <td className=' border border-black px-4 py-2'>	2020</td>


               </tr>
           
              
           </tbody>
          </table>
          </div> 
     },
     { id: 6, name: 'Projects submitted', content:
        <div className="overflow-x-auto w-full">
   
      <table className="min-w-full border border-black text-black shadow-lg">      <thead>
              <tr>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Sr.NO. </th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Name of Award</th>
               <th className='bg-gray-900 border border-white px-4 py-2 text-white'> Awarding Agency</th>
               <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>Year</th>
    

               </tr>
             </thead>
             <tbody>
               <tr>
               <td className='border border-black px-4 py-2'>1</td>
               <td className='border border-black px-4 py-2'>IoT and Geoinformatics Based Flood Monitoring and Prediction System</td>
               <td className=' border border-black px-4 py-2'>State University Research Excellence (SERB SURE)</td>
               <td className=' border border-black px-4 py-2'>Submitted  </td>
               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>2</td>
               <td className='border border-black px-4 py-2'>	Design and development of Portable Soil tester using Visible- Near infrared reflectance spectroscopy</td>
               <td className=' border border-black px-4 py-2'>RUSA sponsored In-house Scheme, YCIS, Satara.</td>
               <td className=' border border-black px-4 py-2'>	Submitted</td>

               </tr>
               <tr>
               <td className='border border-black px-4 py-2'>3</td>
               <td className='border border-black px-4 py-2'>Use of Augmented reality for making educational modules.</td>
               <td className=' border border-black px-4 py-2'> making educational modules.	RUSA sponsored In-house Scheme, YCIS, Satara</td>
               <td className=' border border-black px-4 py-2'>Submitted  </td>
               </tr>
           
              
           </tbody>
          </table>
          </div> 
     },

     { id: 7, name: 'Journal Cover Image', content:<p> Unraveling the Effect of the Water Content in the Electrolyte on the Resistive Switching Properties of Self-Assembled One-Dimensional Anodized TiO2 Nanotubes Kiran A. Nirmal, Ganesh S. Nhivekar, Atul C. Khot, Tukaram D. Dongale, and Tae Geun Kim <b>The Journal of Physical Chemistry Letters 2022</b> 13 (33), 7870-7880 DOI: 10.1021/acs.jpclett.2c01075</p>}
   
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
        <FaGraduationCap className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Education</h3>
          <p className="text-gray-800">
          M.Sc., SET, Ph.D. (Electronics)
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
      <FaBriefcase  className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Experience:</h3>
          <p className="text-gray-800">
          UG -06 Years
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
      < FaLightbulb className="text-8xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Title of PhD Thesis:</h3>
          <p className="text-gray-800">
          DESIGN AND IMPLEMENTATION OF FPGA BASED EMBEDDED FUZZY LOGIC CONTROLLER FOR HIGH SPEED MACHINE TOOL TEMPERATURE CONTROL
          </p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
      < FaUniversity className="text-5xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Name of the guide and Institution/University:</h3>
          <p className="text-gray-800">
          Guide: Prof. R.R. Mudholkar University: Shivaji University, Kolhapur          </p>
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
          <p className="text-gray-800">   +91-9096630757</p>
        </div>
      </div>
      <hr className="h-0.5 bg-gray-600" />

      <div className="flex items-start space-x-3">
        <FaEnvelope className="text-3xl text-black mt-1" />
        <div>
          <h3 className="text-lg text-gray-800">Email</h3>
          <p className="text-gray-800">  fao@unikbp.ac.in</p>
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
    Director Innovation, Incubation, Linkages and Placements
    </h1>
    <div className="border-t-2 border-white w-[500px] my-4" />
    <div className=" text-white py-3 px-6 flex items-center space-x-2 text-sm">
      <Image src="/images/breadcrumb.png" alt="breadcrumb" width={20} height={20} className="w-5 h-5" />
      <span className="hover:underline cursor-pointer"><Link href='/'>Home</Link></span>
      <span>/</span>
      <span className="hover:underline cursor-pointer">Officer</span>
      <span>/</span>
      <span className="text-[#fbbf24] font-semibold">Director Innovation, Incubation, Linkages and Placements</span>
    </div>
  </div>
</div>

      

      {/* Profile Header */}
      <div className="bg-gray-200 w-full px-5 py-6 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
       
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
          <h2 className="text-red-900 text-2xl md:text-3xl font-semibold">
          Prof. Dr. G. S. Nhivekar
          </h2>
          <p className="font-bold text-base text-gray-900">
          M.Sc. Ph.D SET
          </p>
          <p className="text-gray-800">Ag. Director, Innovation, Incubation, Linkage and Placement, KBP, University, Satara</p>
          <p className="font-bold text-base text-gray-900">
        Year of declaration of PhD :<span className='font-normal text-base text-gray-800'>2014</span>
          </p>
          <p className="font-bold text-base text-gray-900">
          Recognized as M.Phil/Ph.D guide : <span className='font-normal text-base text-gray-800'>(Recognition Letter Number)</span>
          </p>
          <p className="font-bold text-base text-gray-900">
          Whether availed FDP/Fellowship/Scholarship:<span className='font-normal text-base text-gray-800'>UGC the Rajiv Gandhi National Fellowship</span>
          </p>
          <p className="font-bold text-base text-gray-900">
          (RGNF):-
          </p>
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
