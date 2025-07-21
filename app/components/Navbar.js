"use client"; // Needed for Next.js App Router

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Rlogo from "../../public/Rlogo.jpg"
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState("");
    const [nestedSubMenu, setNestedSubMenu] = useState("");
    // For left-side opening logic
    const [leadershipLeft, setLeadershipLeft] = useState(false);
    const [directorLeft, setDirectorLeft] = useState(false);
    const [authoritiesLeft, setAuthoritiesLeft] = useState(false);
    const leadershipRef = useRef(null);
    const directorRef = useRef(null);
    const authoritiesRef = useRef(null);

    const toggleSubMenu = (menu) => {
      setOpenSubMenu(openSubMenu === menu ? "" : menu);
      setNestedSubMenu(""); // Reset nested submenu when switching main ones
    };
  
    const toggleNestedSubMenu = (submenu) => {
      setNestedSubMenu(nestedSubMenu === submenu ? "" : submenu);
    };

    // Helper to check if submenu overflows right
    const checkOverflow = (ref, setLeft) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
          setLeft(true);
        } else {
          setLeft(false);
        }
      }
    };

    useEffect(() => {
      // Only run on desktop
      const handleResize = () => {
        checkOverflow(leadershipRef, setLeadershipLeft);
        checkOverflow(directorRef, setDirectorLeft);
        checkOverflow(authoritiesRef, setAuthoritiesLeft);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [openSubMenu, nestedSubMenu]);

    return (
<>

      <nav className="top-0 left-0 w-full bg-[#930e5c] shadow-md z-50 px-6 md:px-12 lg:px-10 py-2 pt-6 pb-5 flex items-center justify-between  h-[60px] md:h-[80px] lg:h-[80px] ">
       
 
        {/* Desktop Navigation */}
{/* Desktop Navigation */}
<ul className="hidden md:flex flex-wrap space-x-5 space-y-2 text-white w-full font-medium items-center">

  {/* Home */}
  <li>
    <Link href="/" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Home</Link>
  </li>


{/* About Us */}
<li className="relative group">
  <div className="flex items-center gap-2 cursor-pointer px-2 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">
    <span>About Us</span>
    <FaChevronDown size={12} />
  </div>

  {/* Smooth Dropdown */}
  <ul className="absolute left-0 top-full max-h-0 overflow-hidden opacity-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:py-2 transition-all duration-500 ease-in-out flex flex-col bg-[#930e5c] shadow-xl text-white w-[270px] z-50 mt-2 border-2 border-white  space-y-1">
  {[
    { href: "/KBP", label: "Karmaveer Bhaurao Patil State University" },
    { href: "/Vision", label: "Vision Mission Goals" },
    { href: "/HC", label: "Honorable Chancellor" },
    { href: "/HVC", label: "Honorable Vice-Chancellor" },
    { href: "/Resistrar", label: "Honorable Registrar" },
    { href: "/KBPN", label: "KBP Notification" },
  ].map((item, index) => (
    <li
      key={item.href}
      className={`${index !== 0 ? "border-t border-white" : ""}`}
    >
      <Link
        href={item.href}
        className="block px-4 py-2 rounded-lg hover:bg-black hover:scale-[1.03] transition-transform duration-300 ease-in-out focus:outline-none"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>


</li>





<li className="relative group">
  {/* Officers button */}
  <div className="flex items-center gap-2 cursor-pointer px-3 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300">
    <span>Officers</span>
    <FaChevronDown size={12} />
  </div>

  {/* First-level dropdown */}
  <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#930e5c] shadow-xl text-white w-[240px] z-50 mt-2 border-2 border-white space-y-1">

    {/* Leadership submenu */}
    <li className="relative group/leadership">
      <div className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md hover:bg-black transition">
        <span>Leadership</span>
        <FaChevronDown size={10} />
      </div>

      {/* Leadership submenu list */}
      <ul
        ref={leadershipRef}
        className={`absolute top-0 left-full hidden group-hover/leadership:flex flex-col bg-[#930e5c] shadow-xl text-white w-[280px] z-50 mt-1 border-2 border-white space-y-1 overflow-hidden opacity-0 max-h-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:py-2 transition-all duration-500 ease-in-out open-left`}
      >
        {[
          { href: "/pdf/Vicechancellor.pdf", label: "Vice Chancellor" },
          { href: "/Resistrar", label: "Registrar" },
          { href: "/DirectorBOEE", label: "Director BOEE" },
          { href: "/FinanceandAccounts", label: "Finance and Accounts" },
          { href: "/DeanFacultyofScienceandTechnology", label: "Dean, Faculty of Science and Technology" },
          { href: "/DeanFacultyofHumanities", label: "Dean, Faculty of Humanities" },
          { href: "/Deanfacultyofcommerceandmanagement", label: "Dean, Faculty of Commerce and Management" },
          { href: "/DeanFacultyofInterdiciplinaryStudies", label: "Dean, Faculty of Interdisciplinary Studies" },
        ].map((item, i) => (
          <li key={i} className={`${i !== 0 ? "border-t border-white" : ""}`}>
            <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-black transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>

    {/* Divider */}
    <li className="border-t border-white/30 my-1"></li>

    {/* Director submenu */}
    <li className="relative group/director">
      <div className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md hover:bg-black transition">
        <span>Director</span>
        <FaChevronDown size={10} />
      </div>

      {/* Director submenu list */}
      <ul
        ref={directorRef}
        className={`absolute top-0 left-full hidden group-hover/director:flex flex-col bg-[#930e5c] shadow-xl text-white w-[320px] z-50 mt-1 border-2 border-white space-y-1 overflow-hidden opacity-0 max-h-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:py-2 transition-all duration-500 ease-in-out open-left`}
      >
        {[
          { href: "/DirectorInnovationIncubationLinkagesandPlacements", label: "Director Innovation, Incubation, Linkages and Placements" },
          { href: "/DirectorKnowledgeandCenter", label: "Director, Knowledge and Center" },
          { href: "/DirectorStudentDevelopment", label: "Director, Student Development" },
          { href: "/DirectorSportsofPhysicalEducation", label: "Director, Sports of Physical Education" },
          { href: "/DirectorNationalServiceScheme", label: "Director, National Service Scheme" },
          { href: "/DirectorBoardofLanguages", label: "Director, Board of Languages" },
          { href: "/DirectorLifelongLearningandExtension", label: "Director, Lifelong Learning and Extension" },
          { href: "/DirectorSkillDevelopmentandVocationalEducation", label: "Director, Skill Development and Vocational Education" },
          { href: "/DirectorInternalQualityAssuranceCell(IQAC)", label: "Director, Internal Quality Assurance Cell (IQAC)" },
        ].map((item, i) => (
          <li key={i} className={`${i !== 0 ? "border-t border-white" : ""}`}>
            <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-black transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  </ul>
</li>









{/* Organization */}
<li className="relative group">
  {/* Trigger */}
  <div className="flex items-center gap-2 cursor-pointer px-3 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300">
    <span>Organization</span>
    <FaChevronDown size={12} />
  </div>

  {/* Dropdown menu */}
  <ul className="absolute left-0 top-full max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex-col bg-[#930e5c] shadow-2xl  text-white w-[250px] z-50 mt-1 border-2 border-white  space-y-1  ">

    {/* Constituent Colleges */}
    <li>
      <Link href="/CC" className="block px-3 py-2  hover:bg-black transition">
        Constituent Colleges
      </Link>
    </li>

    {/* Statutory Committee */}
    <li className="border-t border-white">
      <Link href="/SS" className="block px-3 py-2 rounded-md hover:bg-black  transition">
        Statutory Committee
      </Link>
    </li>
  </ul>
</li>



{/* Academics */}
<li className="relative group">
  {/* Trigger */}
  <div className="flex items-center gap-2 cursor-pointer px-3 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300">
    <Link href="/">Academics</Link>
    <FaChevronDown size={12} />
  </div>

  {/* Dropdown */}
  <ul className="absolute left-0 top-full max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex-col bg-[#930e5c] shadow-2xl  text-white w-[250px] z-50 mt-1 border-2 border-white space-y-1">

    <li>
      <Link href="/Admission" className="block px-3 py-2 rounded-md hover:bg-black  transition">
        Admission
      </Link>
    </li>

    <li className="border-t border-white">
      <Link href="/AcademicsProgram" className="block px-3 py-2 rounded-md hover:bg-black  transition">
        Academic Programs
      </Link>
    </li>

    <li className="border-t border-white">
      <Link href="/Chairs" className="block px-3 py-2 rounded-md hover:bg-black  transition">
        Centers & Chairs
      </Link>
    </li>

    <li className="border-t border-white">
      <Link href="/BoS" className="block px-3 py-2 rounded-md hover:bg-black transition">
        BOS
      </Link>
    </li>

  </ul>
</li>


  {/* Single Items */}
  <li><Link href="/NEP" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">NEP-2020 @KBPU</Link></li>
  <li><Link href="/IQAC" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">IQAC</Link></li>
  <li><Link href="/School" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">School</Link></li>



  {/* Remaining Single Items */}
  <li><Link href="/ResearchandDevelopment" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Research and Development</Link></li>
  <li><Link href="/Act1" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Act/Notification</Link></li>
  <li><Link href="/events"className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Events</Link></li>

  <li><Link href="/RTI" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">RTI/RTS</Link></li>


{/* Boards and Committees */}


<li className="relative group">

  <div className="flex items-center gap-2 cursor-pointer px-3 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300">
    <span>Boards and Committees</span>
    <FaChevronDown size={12} />
  </div>

  {/* First-level dropdown */}
  <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#930e5c] shadow-xl text-white w-[240px] z-50 mt-2 border-2 border-white space-y-1">
   {/* Internal Complaints Committee */}
   <li>
      <Link href="/ICC" className="block px-3 py-2 rounded-md hover:bg-black  transition">
        Internal Complaints Committee (ICC)
      </Link>
    </li>

    {/* Students' Grievance Redressal Committee */}
    <li className="border-t border-white">
      <Link href="/SGRC" className="block px-3 py-2 rounded-md hover:bg-black transition">
        Students' Grievance Redressal Committee (SGRC)
      </Link>
    </li>
    <li className="border-t border-white my-1"></li>
    
    <li className="relative group/leadership">
      <div className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md hover:bg-black transition">
        <span>Authorities</span>
        <FaChevronDown size={10} />
      </div>

      <ul
        ref={authoritiesRef}
        className={`absolute top-0 left-full hidden group-hover/leadership:flex flex-col bg-[#930e5c] shadow-xl text-white w-[280px] z-50 mt-1 border-2 border-white space-y-1 overflow-hidden opacity-0 max-h-0 group-hover:max-h-[600px] group-hover:opacity-100 group-hover:py-2 transition-all duration-500 ease-in-out open-left`}
      >
        {[
          { href: "/Cocom", label: "Co-ordination Committees" },
          { href: "/BLLLP", label: " Board of Innovation, Incubation Linkage & Placement" },
          { href: "/FAC", label: "  Finance and Accounts Committee" },
          { href: "/AC", label: " Academic Council" },
          { href: "/BOG", label: "  BOARD OF GOVERNANCE" },
          { href: "/GC", label: "General Council" },
         
        ].map((item, i) => (
          <li key={i} className={`${i !== 0 ? "border-t border-white" : ""}`}>
            <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-black transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>


   

    
  </ul>
</li>




  {/* Final Single Items */}
  <li><Link href="/MandatoryDisclosure" className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Mandatory Disclosure</Link></li>
    {/* Publications */}
    <li className="relative group">
    <div className="flex items-center gap-2 cursor-pointer px-2 py-1 text-white bg-transparent rounded-full font-serif hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">
    <Link href="/" >Publications</Link>
      <FaChevronDown size={12} />
    </div>
    <ul className="absolute left-0 top-full max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex-col bg-[#930e5c] shadow-2lg  text-white w-[250px] z-50 mt-1 border-2 border-white space-y-2 space-x-2">
   
    <li>
      <Link href="/AnnualR" className="block px-3 py-2 rounded-md hover:bg-black  transition">
      Annual Reports
      </Link>
    </li>
    
    </ul>
  </li>
  <li><Link href="/Affiliation"className=" px-2 py-1 inline-block text-white bg-transparent rounded-full font-serif  hover:bg-black hover:scale-105 transform transition duration-300 focus:outline-none">Affiliation</Link></li>

</ul>


  
        {/* Mobile Menu Button */}
        <div className="md:hidden w-full flex justify-end items-end pr-6">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} className="text-white " /> : <FaBars size={28} className="text-white" />}
          </button>
        </div>
  
        {/* Mobile Menu Dropdown */}
   {/* Mobile Dropdown Menu */}
   {isOpen && (
        <div className="absolute top-55 left-0 w-full bg-[#930e5c]  shadow-md  md:hidden flex flex-col  text-white font-serif z-50">
          <Link href="/" onClick={() => setIsOpen(false)} className=" p-4 border-t border-white">Home</Link>

          {/* About Us */}
          <div>
            <div className="flex justify-between items-center cursor-pointer border-t border-white p-4 " onClick={() => toggleSubMenu("about")}>
              <span>About Us</span>
              <FaChevronDown />
            </div>
            {openSubMenu === "about" && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link href="/KBP" onClick={() => setIsOpen(false)}>Karmaveer Bhaurao Patil State University</Link>
                <Link href="/Vision" onClick={() => setIsOpen(false)}>Vision Mission Goals</Link>
                <Link href="/HC" onClick={() => setIsOpen(false)}>Honorable Chancellor</Link>
                <Link href="/HVC" onClick={() => setIsOpen(false)}>Honorable Vice-Chancellor</Link>
                <Link href="/Resistrar" onClick={() => setIsOpen(false)}>Honorable Registrar</Link>
                <Link href="/KBPN" onClick={() => setIsOpen(false)}>KBP Notification</Link>
              </div>
            )}
          </div>

          {/* Officers */}
          <div>
            <div className="flex justify-between items-center cursor-pointer border-t border-white p-4 " onClick={() => toggleSubMenu("officers")}>
              <span>Officers</span>
              <FaChevronDown />
            </div>
            {openSubMenu === "officers" && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">

                {/* Leadership */}
                <div>
                  <div className="flex justify-between items-center cursor-pointer " onClick={() => toggleNestedSubMenu("leadership")}>
                    <span>Leadership</span>
                    <FaChevronDown size={10} />
                  </div>
                  {nestedSubMenu === "leadership" && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm">
                      <Link href="/pdf/Vicechancellor.pdf" onClick={() => setIsOpen(false)}>Vice Chancellor</Link>
                      <Link href="/Resistrar" onClick={() => setIsOpen(false)}>Registrar</Link>
                      <Link href="/DirectorBOEE" onClick={() => setIsOpen(false)}>Director BOEE</Link>
                      <Link href="/FinanceandAccounts" onClick={() => setIsOpen(false)}>Finance and Accounts</Link>
                      <Link href="/DeanFacultyofScienceandTechnology" onClick={() => setIsOpen(false)}>Dean, Faculty of Science and Technology</Link>
                      <Link href="/DeanFacultyofHumanities" onClick={() => setIsOpen(false)}>Dean, Faculty of Humanities</Link>
                      <Link href="/Deanfacultyofcommerceandmanagement" onClick={() => setIsOpen(false)}>Deanfaculty of Commerce and management</Link>
                      <Link href="/DeanFacultyofInterdiciplinaryStudies" onClick={() => setIsOpen(false)}>Dean, Faculty of Interdiciplinary Studies</Link>
                    </div>  
                  )}
                </div>

                {/* Director */}
                <div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleNestedSubMenu("director")}>
                    <span>Director</span>
                    <FaChevronDown size={10} />
                  </div>
                  {nestedSubMenu === "director" && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm">
                      <Link href="/DirectorInnovationIncubationLinkagesandPlacements" onClick={() => setIsOpen(false)}>Director Innovation, Incubation, Linkages and Placements</Link>
                      <Link href="/DirectorKnowledgeandCenter" onClick={() => setIsOpen(false)}>Director, Knowledge and Center</Link>
                      <Link href="/DirectorStudentDevelopment" onClick={() => setIsOpen(false)}>Director, Student Development</Link>
                      <Link href="/DirectorSportsofPhysicalEducation" onClick={() => setIsOpen(false)}>Director, Sports of Physical Education</Link>
                      <Link href="/DirectorNationalServiceScheme" onClick={() => setIsOpen(false)}>Director, National Service Scheme</Link>
                      <Link href="/DirectorBoardofLanguages" onClick={() => setIsOpen(false)}>Director, Board of Languages</Link>
                      <Link href="/DirectorLifelongLearningandExtension" onClick={() => setIsOpen(false)}>Director ,Lifelong Learning and Extension</Link>
                      <Link href="/DirectorSkillDevelopmentandVocationalEducation" onClick={() => setIsOpen(false)}>Director Skill Development and Vocational Education</Link>
                      <Link href="/DirectorInternalQualityAssuranceCell(IQAC)" onClick={() => setIsOpen(false)}>Director, Internal Quality Assurance Cell (IQAC)</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Orgnization */}
          <div>
            <div className="flex justify-between items-center cursor-pointer border-t border-white p-4 " onClick={() => toggleSubMenu("org")}>
              <span>Organization</span>
              <FaChevronDown />
            </div>
            {openSubMenu === "org" && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link href="/CC" onClick={() => setIsOpen(false)}>  Constituent Colleges</Link>
                <Link href="/SS" onClick={() => setIsOpen(false)}>  Statutory Committee</Link>
            
              </div>
            )}
          </div>

            {/* Acdmics */}
            <div>
            <div className="flex justify-between items-center cursor-pointer border-t border-white p-4 " onClick={() => toggleSubMenu("acdmic")}>
              <span>Acadmics</span>
              <FaChevronDown />
            </div>
            {openSubMenu === "acdmic" && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link href="/" onClick={() => setIsOpen(false)}> Academics Programs</Link>
                <Link href="/" onClick={() => setIsOpen(false)}> Centers & Chairs</Link>
                <Link href="/" onClick={() => setIsOpen(false)}> BOS</Link>
            
              </div>
            )}
          </div>


          {/* Other submenus like Organization, Academics, Publications... */}
          {/* Repeat similar structure with toggleSubMenu and nestedSubMenu as needed */}

          {/* Static Links */}
          <Link href="/NEP" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>NEP-2020 @KBPU</Link>
          <Link href="/IQAC" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>IQAC</Link>
          <Link href="/School" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>School</Link>
          <Link href="/ResearchandDevelopment" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Research and Development</Link>
          <Link href="/events" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/Act1" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Act/Notification</Link>
          <Link href="/RTI" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>RTI/RTS</Link>
          <Link href="/MandatoryDisclosure" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Mandatory Disclosure</Link>
               {/* Publication */}
               <div>
            <div className="flex justify-between items-center cursor-pointer border-t border-white p-4 " onClick={() => toggleSubMenu("pb")}>
              <span>Publications</span>
              <FaChevronDown />
            </div>
            {openSubMenu === "pb" && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link href="/AnnualR" onClick={() => setIsOpen(false)}>  Annual Reports</Link>
                
            
              </div>
            )}
          </div>

          <Link href="/Affiliation" className="hover:text-cyan-500 border-t  border-white p-4" onClick={() => setIsOpen(false)}>Affiliation</Link>
          <Link href="/Teacherscorner" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Teachers Corner</Link>
          <Link href="/" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Academic Calendar</Link>
          <Link href="/" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Students Center</Link>
          <Link href="/" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Facilities</Link>
          <Link href="/" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>e-Books</Link>
          <Link href="/" className="hover:text-cyan-500 border-t border-white p-4" onClick={() => setIsOpen(false)}>Contacts</Link>
          <div className="border-2 border-white"></div>
        </div>
      )}
    

       
      </nav>
      </>
    );
  };
  export default Navbar;  

<style jsx global>{`
  .open-left {
    left: auto !important;
    right: 100% !important;
  }
`}</style>  