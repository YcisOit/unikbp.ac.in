import Image from "next/image";
import Link from "next/link";

export default function ViceChancellor() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Honorable Vice-Chancellor
          </h1>
          <div className="border-t-2 border-white w-full max-w-lg my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline cursor-pointer">Home</Link>
            <span>/</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Honorable Vice-Chancellor</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-100 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/images/HVC.png"
            alt="Dr. Mhaske Dnyandeo Kundlik"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border-4 border-[#00A99D] shadow-lg object-cover"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8a0c56]">
              Dr. Mhaske Dnyandeo Kundlik
            </h2>
            <p className="text-xl md:text-2xl text-[#8a0c56] mt-2">
              V.C of Karmaveer Bhaurao Patil University
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 space-y-4 max-w-7xl mx-auto text-justify text-[17px] leading-7 p-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Academic & Administrative Positions (Last thirty-three years):
        </h2>
        <p className="text-lg ml-4">Teaching Experience – Lecturer / Reader : 14 years</p>
        <p className="text-lg ml-4 mb-6">Administrative Experience – Principal : 19 years</p>

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Membership of Statutory Authorities (Immediate Past):
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Life member, Bombay Natural History Society Mumbai</li>
          <li>Vice Chairman, Nature Conservation Society</li>
          <li>Member, International Bird Conservation Network and RSPB, U.K.</li>
          <li>Life Member – Bihar School of Yoga, Munger</li>
          <li>Member, Station Consultative Committee, Solapur Division</li>
          <li>District Coordinator and Chairman of NSS during 2006-2008 & 2008-2010 by Savitribai Phule Pune University, Pune</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold mb-2">Research Experience:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Recognized Research Guide for M.Phil and Ph.D. of Savitribai Phule Pune University</li>
          <li>Area of research: Bird Biodiversity Conservation & Management</li>
          <li>Resource / Chairperson at various conferences, seminars, and workshops</li>
          <li>Keynote address / Plenary Lectures: 25</li>
          <li>Invited lectures – Science Associations and DST inspire programme: 100+</li>
          <li>Participation in seminars, conferences & symposiums – 110</li>
        </ul>
      </div>
    </div>
  );
}
