import InfoCards from "./cards";
import Image from "next/image";
import Link from "next/link";

export default function KBPuni() {
  return (
    <div className="relative">
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Karmaveer Bhaurao Patil State University
          </h1>
          <div className="border-t-2 border-white w-full sm:w-[500px] my-4" />
          <div className="text-white py-2 px-4 flex flex-wrap items-center justify-center gap-2 text-sm">
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
            <span className="hover:underline cursor-pointer">Officer</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold text-center">
              Karmaveer Bhaurao Patil State University
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="bg-white text-[#1a1a1a] font-serif">
        {/* Header Section */}
        <div className="bg-gray-200 px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman']">
            Karmaveer Bhaurao Patil State University, Satara (U-1258) :
          </h1>
        </div>

        {/* Body Text */}
        <div className="mt-6 space-y-4 max-w-5xl mx-auto px-4 text-justify text-base md:text-[17px] leading-7">
          <p>
            Karmaveer Bhaurao Patil University, Satara is the Cluster University <strong>established by Government of Maharashtra on 27th October, 2021</strong>...
          </p>
          <p>
            <strong>“Karmaveer Bhaurao Patil University, Satara”</strong> as a cluster comprising of <strong>Yashavantrao Chavan Institute of Science, Satara (YCIS)</strong>...
          </p>
          <p>...Earlier the constituent colleges were run by Rayat Shikshan Sanstha...</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 max-w-4xl mx-auto space-y-2 px-4 text-base leading-6 text-justify">
          <p><strong>Established :</strong> 27th October 2021 (Commenced 3rd November, 2022)</p>
          <p><strong>Website :</strong> <a className="text-blue-600 underline" href="https://www.unikbp.ac.in/">unikbp.ac.in</a></p>
          <p><strong>Classification :</strong> Public University under Clause 6 (3) of MPUA 2016</p>
          <p><strong>UGC 2(f) :</strong> Approved</p>
          <p><strong>AISHE Code :</strong> U-1258</p>
          <p><strong>Parent Body :</strong> Rayat Shikshan Sanstha, Satara <a className="text-blue-600 underline" href="http://www.erayat.org/">erayat.org</a></p>
          <p><strong>Chancellor :</strong> Shri C. P. Radhakrishnan</p>
          <p><strong>Provost :</strong> Shri. Chandrakant Dalvi (Retd. IAS)</p>
          <p><strong>Acting Vice-Chancellor :</strong> Dr. Dnyandeo Mhaske</p>
          <p><strong>Registrar:</strong> Dr. Vijay Kumbhar</p>
        </div>
      </main>

      {/* Features Section */}
      <main className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman']">
            Some Special Features of the KBP :
          </h1>
        </div>

        <div className="mt-6 max-w-4xl mx-auto space-y-2 px-4 text-base leading-7 text-justify">
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>Inherent Multidisciplinary Education and Research University (MERU) structure</li>
            <li>Efficient management due to close geographic proximity of 4 colleges</li>
            <li>All accredited with NAAC Grade ‘A’</li>
            <li>Long-standing heritage and academic excellence</li>
            <li>Affordable fee structure as Govt. colleges</li>
            <li>Choice Based Credit System (CBCS) implementation</li>
            <li>Cross-disciplinary additional credit options</li>
            <li>Over 100 years of academic legacy</li>
            <li>Strong industry tie-ups, internships, placement support</li>
            <li>Efficient exam and evaluation process</li>
            <li>Strong alumni network</li>
          </ul>
        </div>
      </main>

      {/* Constituent Colleges Section */}
      <main className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman']">
            Constituent Colleges :
          </h1>
        </div>
        <div className="px-4 py-6">
          <InfoCards />
        </div>
      </main>
    </div>
  );
}
