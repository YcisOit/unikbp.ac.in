import { Title } from '@mui/icons-material';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    const data= [
  { id:1,
        Title:"1) About HEI/University",
        link:<a href='#' target='blank'></a>
   },
 { id:2,
       Title:"a) About us: Overview	",
          link:<a href='/pdf/about-us.pdf' target='blank'>	About us</a>
   },
   { id:3,
     Title:" ",
     text:(
      <>
      <p>Karmaveer Bhaurao Patil University, Satara
      </p>
      </>
     )
        
    },
   { id:4,
         Title:"• Address of the university:	",
         text:(
          <>
          <p>
          Address: 4th Floor G-Building Ycis Powai Naka, Satara, Maharashtra 415001
          </p>
          </>
         )
          
      },
  
   { id:5,
    Title:"• Telephone No. email id		",
    text:(
     <>
     <p>
     Phone: 02162 229 907, Email: registrar@unikbp.ac.in
     </p>
     </>
    )
     },
    { id:6,
         Title:"• Website Link:	",
           link:<a href='		https://unikbp.ac.in' target='blank'>	https://unikbp.ac.in</a>
      },
      { id:7,
        Title:" b) Act and Statutes or MoA (provide link)	",
          link:<a href='	/Admission/' target='blank'>	https://unikbp.ac.in/admission/</a>
     },
     { id: 8 ,
      Title:"• Initially Submitted DPR: (in case of a self-financed university)	",
      text:(
        <>
        <p>
        Not Applicable
        </p>
        </>
       )
   },
   { id:9,
    Title:"• Compliance of the DPR so far: (in case of a self-financed university)		",
    text:(
      <>
      <p>
      Not Applicable
      </p>
      </>
     )
 },
 { id:10,
  Title:"• Previous Year's Annual Report (provide Link)	",
    link:(
<div>
  <ul>
<li><a href='#' target='blank'>Click Here(Marathi) </a></li>
<li><a href='#' target='blank'>Click Here(English)</a></li>
</ul>
</div>

    )
  
},
{ id:11,
  Title:"c) Institutional Development Plan (Next Five year)		",
  text:(
    <>
    <p>
    Perspective Plan - IDP in progress
    </p>
    </>
   )
},
{ id:12,
  Title:"• Constituent Units/other campus (Wherever applicable)		",
  text:(
    <>
    <p>
    Not Applicable
    </p>
    </>
   )
},
{ id:13,
  Title:"d) AISHE code		",
  text:(
    <>
    <p>
    U-0325hyoip
    </p>
    </>
   )
},
{ id:14,
  Title:"d) AISHE code		",
  text:(
    <>
    <p>
    U-0325
    </p>
    </>
   )
},
{ id:15,
  Title:"• Link to the proforma		",
    link:<a href='	DCF-I' target='blank'>	DCF-I</a>
},
{
  id:16,
  Title:" e) Accreditation / Ranking (NAAC, NIRF) Details of IQAC (act 6(7))	",
  link:<a href='' target='blank'>  </a>
},
{
  id:17,
  Title:" NAAC",
  link:<a href='	Accreditation Report and Action Plan NIRF DATA IQAC' target='blank'> 	Accreditation Report and Action Plan NIRF DATA IQAC </a>
},
{
  id:18,
  Title:"Accreditation status: NAAC (act 6 (6))	 ",
  text:(
    <>
    <p>
    A++ with CGPA 3.52
    </p>
    </>
   )
},
{
  id:19,
  Title:" • Validity of Accreditation	",
  text:(
    <>
    <p>
    : March 30, 2026
    </p>
    </>
   )},
{
  id:20,
  Title:" • AQAR: (provide Link)	",
  link:<a href='	AQAR' target='blank'> 	AQAR </a>
},
{
  id:21,
  Title:" SSR (provide Link)	",
  link:<a href='	Self Study Report' target='blank'> 	Self Study Report </a>
},
{
  id:22,
  Title:" • NBA	",
  text:(
    <>
    <p>
    Not accredited
    </p>
    </>
   )
},
{
  id:23,
  Title:" • Number of courses with NBA accreditation	",
  text:(
    <>
    <p>
    Nil    </p>
    </>
   )
},
{
  id:24,
  Title:"• NIRF Ranking:	 ",
  text:(
    <>
    <p>
    NIRF Ranking List (Rank Band 151-200)
    </p>
    </>
   )
},
{
  id:25,
  Title:" • Application :	",
  link:<a href='NIRF DATA' target='blank'> NIRF DATA </a>
},
{
  id:26,
  Title:"• Other Rankings (if any)	 ",
  link:<a href='' target='blank'>  </a>
},
{
  id:27,
  Title:" 2) Trust (whom so ever applicable for)	",
  text:(
    <>
    <p>
    Not Applicable
    </p>
    </>
   )
},
{
  id:28,
  Title:"• Name and address of the /sponsoring body / Trust/Society/Company and the Trustees (if Any)	 ",
  text:(
    <>
    <p>
    ----    
    </p>
    </>
   )
},
{
  id:29,
  Title:"• Address including Telephone, Mobile, E-Mail	 ",
  text:(
    <>
    <p>
    ----    
    </p>
    </>
   )
},
{
  id:30,
  Title:"3) Administration (Profiles with photographs)	 ",
  link:<a href='' target='blank'>  </a>
},{
  id:31,
  Title:" • University/HEI Organogram Chart	",
  link:<a href='	Organogram Chart' target='blank'> 	Organogram Chart </a>
},{
  id:32,
  Title:" • Chancellor	",
  link:<a href='https://rajbhavan-maharashtra.gov.in/en/governors-profile/' target='blank'> 	 Chancellor Profile </a>
},{
  id:33,
  Title:" • Vice Chancellor	",
  link:<a href='/pdf/Vicechancellor.pdf' target='blank'>	Vice Chancellor Profile  </a>
},{
  id:34,
  Title:" • Pro-Vice-Chancellor (wherever applicable)	",
  link:<a href='	/pdf/Vicechancellor.pdf' target='blank'> 	Pro-Vice Chancellor Profile </a>
},{
  id:35,
  Title:" • Registrar	",
  link:<a href='/pdf/DrVijayKumbhar.pdf' target='blank'> Registrar Profile </a>
},{
  id:36,
  Title:" • Finance Officer	",
  link:<a href='/FinanceandAccounts' target='blank'>	Finance Officer Profile  </a>
},{
  id:37,
  Title:" • Controller of Examination	",
  link:<a href='	/DirectorBOEE' target='blank'> 	Controller of Examination Profile </a>
},{
  id:38,
  Title:" • Chief Vigilance Officer	",
  link:<a href='	Chief Vigilance Officer Profile' target='blank'> 	Chief Vigilance Officer Profile </a>
},{
  id:39,
  Title:" • Executive Council, Academic Council, Board of Studies, Finance Committee	",
  link:(
    <div>
      <ul>
        <li><a href='' target='blank'>  Executive Council</a></li>
        <li><a href='' target='blank'> 	Board of Studies </a></li>
        <li><a href='' target='blank'> Academic Council </a></li>
        <li><a href='' target='blank'> Finance Committee</a></li>
      </ul>
    </div>
  )
},{
  id:40,
  Title:"4) Profile of Vice Chancellor/Director/Principal	 ",
  link:<a href='/pdf/Vicechancellor.pdf' target='blank'> Hon. VC Profile </a>
},{
  id:41,
  Title:"5) Academics	 ",
  link:<a href='/AcademicsProgram' target='blank'>PG academics-programs Admission  </a>
},{
  id:42,
  Title:"a) Academic Programs	 ",
  link:<a href='/AcademicsProgram' target='blank'> 	Link to Programs </a>
},{
  id:43,
  Title:" b) Names of the Schools/Divisions/Departments/Centers	",
  link:<a href='' target='blank'> Link to Departments </a>
},{
  id:44,
  Title:" c) Total Number of Programs under Each School	",
  link:<a href='' target='blank'> 	Link from PG Admission </a>
},{
  id:45,
  Title:" d) Internship and Placement (Program-wise)	",
  link:<a href='' target='blank'>  </a>
},{
  id:46,
  Title:" e) Academic Calendar	",
  link:<a href='' target='blank'>  </a>
},{
  id:47,
  Title:" f) Library: Basic Information at a Glance	",
  link:<a href='' target='blank'> 	Library Info </a>
},{
  id:48,
  Title:"6) NEP Implementation Strategies	 ",
  link:<a href='' target='blank'> NEP Syllabus </a>
},{
  id:49,
  Title:" 7) Prospectus (including fee structure for various programs)	",
  link:<a href='' target='blank'> 	view </a>
},{
  id:50,
  Title:"8) Faculty	 ",
  link:<a href='' target='blank'> Faculty Information </a>
},{
  id:51,
  Title:"9) Permanent Faculty: Students Ratio	 ",
  text:(
    <>
    <p>
    1:19    
    </p>
    </>
   )
},
{
  id:52,
  Title:" 10) International Students and Collaboration	",
  link:<a href='' target='blank'>  </a>
},
{
  id:53,
  Title:" • Admission Guidelines for International Students	",
  link:<a href='' target='blank'> Admission Guidelines </a>
},
{
  id:54,
  Title:"• Facilities Provided to International Students	 ",
  link:<a href='' target='blank'> 	Facilities Info </a>
},{
  id:55,
  Title:" • Name and Duration of Twinning Programs with Foreign Universities	",
  text:(
    <>
    <p>
    Medical Information Management (Duration: 2 years)    
    </p>
    </>
   )
},{
  id:56,
  Title:" • If there is Foreign Collaboration	",
  text:(
    <>
    <p>
    MOU link ??? EST/EST PG    
    </p>
    </>
   )
},{
  id:57,
  Title:" 11) Research	",
  link:<a href='' target='blank'>  </a>
},{
  id:58,
  Title:" • Research and Development Cell	",
  link:<a href='' target='blank'> Research Development Cell </a>
},{
  id:59,
  Title:" • Publications	",
  link:<a href='' target='blank'> 	Publications </a>
},{
  id:60,
  Title:"• Patents (Published/Applied)	 ",
  link:<a href='' target='blank'>Patents  </a>
},{
  id:61,
  Title:" • Industry Collaborations	",
  text:(
    <>
    <p>
    IQAC    
    </p>
    </>
   )
},{
  id:62,
  Title:" • Central Facilities	",
  link:<a href='' target='blank'> 	Central Facilities </a>
},{
  id:63,
  Title:"• MoUs	 ",
  link:<a href='' target='blank'> 	MoUs </a>
},{
  id:64,
  Title:" • Shodhganga and Shodhgangotri	",
  link:<a href='' target='blank'> 	Shodhganga </a>
},{
  id:65,
  Title:"12) Infrastructure (Information of Infrastructure and Other Resources Available)	 ",
  link:<a href='' target='blank'>  </a>
},{
  id:66,
  Title:"• Number of Tutorial rooms and size of each	 ",
  link:<a href='' target='blank'>  </a>
},{
  id:67,
  Title:" • Number of Drawing Halls with capacity of each	",
  link:<a href='' target='blank'>  </a>
},{
  id:68,
  Title:" • Number of Computer Centers with capacity of each	",
  link:<a href='' target='blank'>  </a>
},{
  id:69,
  Title:" • Central Examination Facility, Number of rooms and capacity of each	",
  text:(
    <>
    <p>
    ?    
    </p>
    </>
   )
},{
  id:70,
  Title:"• Online examination facility (Number of Nodes, Internet bandwidth, etc.)	 ",
  text:(
    <>
    <p>
    ?    
    </p>
    </>
   )
},{
  id:71,
  Title:"• Barrier Free Built Environment for disabled and elderly persons	 ",
  text:(
    <>
    <p>
    ?    
    </p>
    </>
   )
},{
  id:72,
  Title:"• Fire and Safety Certificate	 ",
  text:(
    <>
    <p>
    ?    
    </p>
    </>
   )
},{
  id:73,
  Title:" • Hostel Facilities	",
  link:<a href='' target='blank'> # </a>
},{
  id:74,
  Title:"• Library	 ",
  link:<a href='' target='blank'>  </a>
},{
  id:75,
  Title:" • List of Major Equipment/Facilities in each Laboratory/Workshop	",
  link:<a href='' target='blank'> # </a>
},{
  id:76,
  Title:"• Computing Facilities	 ",
  text:(
    <>
    <p>
    ?    
    </p>
    </>
   )
},{
  id:77,
  Title:"• Internet Bandwidth	 ",
  link:<a href='' target='blank'> # </a>
},
{
  id:78,
  Title:"• Innovation Cell	 ",
  link:<a href='' target='blank'>#  </a>
},
{
  id:79,
  Title:" • Social Media Cell	",
  link:<a href='' target='blank'>#  </a>
},
{
  id:80,
  Title:" List of facilities available	",
  link:<a href='' target='blank'> 	Click Here </a>
},
{
  id:81,
  Title:" To upload the respective short video (1 - 2 min) of Infrastructure and facilities available w.r.t the courses in the website	",
  link:<a href='' target='blank'> # </a>
},
{
  id:82,
  Title:" • Games and Sports Facilities	",
  link:<a href='' target='blank'> # </a>
},
{
  id:83,
  Title:"• Teaching Learning Process	 ",
  link:<a href='' target='blank'> IQAC </a>
},
{
  id:84,
  Title:" • Academic Time Table with the name of the Faculty members handling the Course	",
  link:<a href='' target='blank'> ??  </a>
},
{
  id:85,
  Title:" • For each Post Graduate Courses give the following: Title of the Course	",
  link:<a href='' target='blank'>PG Admission  </a>
},
{
  id:86,
  Title:" • Laboratory facilities exclusive to the Post Graduate Course	",
  link:<a href='' target='blank'>	PG Admission  </a>
},
{
  id:87,
  Title:" 13) Student Life	",
  link:<a href='' target='blank'>  </a>
},
{
  id:88,
  Title:"• Available hostel accommodation	 ",
  link:<a href='' target='blank'> # </a>
},
{
  id:89,
  Title:" • Fellowships/ Scholarships (provide details)	",
  link:<a href='' target='blank'> # </a>
},
{
  id:90,
  Title:" • Academic Bank of Credits (provide link)	",
  link:<a href='https://www.abc.gov.in/' target='blank'> https://www.abc.gov.in/ </a>
},
{
  id:91,
  Title:"• Digi Locker NAD Portal (provide link)	 ",
  link:<a href='	http://www.nad.gov.in/' target='blank'> 	http://www.nad.gov.in/ </a>
},
{
  id:92,
  Title:" • National Scholarship Portal (provide link)	",
  text:(
    <>
    <p>
    PG Admission    
    </p>
    </>
   )
},
{
  id:93,
  Title:" 14) Campus Harmony & Well Being	",
  
},
{
  id:94,
  Title:" • e-Samadhan (Provide link)	",
  link:<a href='	https://samadhaan.ugc.ac.in/' target='blank'> 	https://samadhaan.ugc.ac.in/ </a>
},
{
  id:95,
  Title:" • Student Grievance Redressal Committee (SGRC)	",
  link:<a href='/SGRC' target='blank'> 	https:https://unikbp.ac.in/students-grievance-redressal-committee-sgrc/</a>
},
{
  id:96,
  Title:"• Details of OMBUDSPERSON	 ",
  link:<a href='' target='blank'>  </a>
},
{
  id:97,
  Title:" • Internal Quality Assurance Cell	",
  link:<a href='' target='blank'> 	https://unikbp.ac.in/director-internal-quality-assurance-cell-iqac/ </a>
},
{
  id:98,
  Title:" • Internal Complaint Committee to address complaints of Sexual Harassment	",
  link:<a href='/ICC' target='blank'> 	https://unikbp.ac.in/internal-complaints-committee-icc/ </a>
},
{
  id:99,
  Title:" • Anti-Ragging Cell with Helpline number	",
  link:<a href='/Antirag' target='blank'> 	https://unikbp.ac.in/anti-ragging/ </a>
},{
  id:100,
  Title:"• Equal Opportunity Cell	 ",
  text:(
    <>
    <p>
?   
 </p>
    </>
   )
},
{
  id:101,
  Title:"• Socio-Economically Disadvantaged Group Cell (SEDG)	 ",
  text:(
    <>
    <p>
?    </p>
    </>
   )
},
{
  id:102,
  Title:"• Alumni	 ",
  link:<a href='' target='blank'>  </a>
},
{
  id:103,
  Title:"• Alumni Association (provide link of portal wherever applicable)	 ",
  link:<a href='' target='blank'> # </a>
},
{
  id:104,
  Title:"• Alumni Co-ordination Cell	 ",
  link:<a href='' target='blank'> # </a>
},
{
  id:105,
  Title:"15) Information Corner	 ",
  link:<a href='' target='blank'>  </a>
},
{
  id:106,
  Title:" • RTI: Details of CPIO and Appellate authority (wherever applicable)	",
  link:<a href='' target='blank'>???  </a>
},
{
  id:107,
  Title:" • Circular and Notices	",
  link:<a href='' target='blank'>#  </a>
},
{
  id:108,
  Title:" Announcements",
  link:<a href='' target='blank'> # </a>
},
{
  id:109,
  Title:"• Newsletters	 ",
  link:<a href='' target='blank'> # </a>
},
{
  id:110,
  Title:"• News, Recent events & Achievements	",
  link:<a href='' target='blank'> # </a>
},
{
  id:111,
  Title:" Job openings	",
  link:<a href='/Recruitment' target='blank'> https://unikbp.ac.in/recruitment/ </a>
},
{
  id:112,
  Title:" • Reservation Roster (wherever applicable)	",
  text:(
    <>
    <p>
    • Special Cell   
    </p>
    </>
   )
},
{
  id:113,
  Title:"• Important Instructions	 ",
  link:<a href='' target='blank'>  </a>
},
{
  id:114,
  Title:" • The mandatory disclosure should be available freely to view/download to the public without any restrictions.	",
  link:<a href='' target='blank'>  </a>
},
{
  id:115,
  Title:" • The complete mandatory disclosure document should be converted into a single PDF file and the URL (web link).	",
  link:<a href='' target='blank'>  </a>
},
{
  id:116,
  Title:" ESTABLISHMENT--विद्यार्थी व सामान्य जनतेसाठी अनिवार्यपणे स्वप्रमाणितीकरण करावयाच्या माहितीबाबत शासन परिपत्रक दिनांक ८ फेब्रुवारी, २०२४ च्या अनुसरणाने परिपत्रक	",
  link:<a href='' target='blank'>  </a>
},




                
               

    ];
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
          Mandatory Disclosure
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
            <span className="text-[#fbbf24] font-semibold">Mandatory Disclosure</span>
          </div>
        </div>
      </div>
    <div className='flex items-center justify-center p-10 '>


        <table className='border border-black w-auto text-black justify-center p-4 items-center shadow-lg'>
            <thead>
                <tr>
                    <th className='bg-gray-900 border border-white px-4 py-2 text-white'>
                        
                     Format of information to be publish on the website (Please fill information, as applicable)
                    </th>
                    <th className='bg-gray-900 border border-white  px-4 py-2 text-white'>
                    Present Status/ Concerned Section
                    </th>
                </tr>
            </thead>
            <tbody>

            {data.map((T)=>(
                
               <React.Fragment key={T.id}>
                  <tr >
                  {T.Title && (
                    <td className='border border-black px-4 py-2'>{T.Title}</td>
                  )}
                  {T.link && (
                    <td className='text-blue-600 underline border border-black px-4 py-2'>{T.link}</td>
                  )}
                  
                   {T.text && (
                    <td className='e border border-black px-4 py-2'>{T.text}</td>
                  )}
                  </tr>

                 
              

               </React.Fragment>
                
            ))

            }
               </tbody>
        
        </table>
    </div>
    </div>
  )
}

export default page