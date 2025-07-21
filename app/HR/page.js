import Image from "next/image";
import Link from "next/link";

export default function HR() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Honorable Registrar
          </h1>
          <div className="border-t-2 border-white w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Honorable Registrar</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex items-center justify-center p-5 bg-gray-100">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Image */}
          <Image
            src="/HR.jpg"
            alt="Dr. Vijay Maruti Kumbhar"
            width={200}
            height={200}
            className="rounded-full border-4 border-[#00A99D] shadow-lg object-cover"
          />

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#800080]">
              Dr. Vijay Maruti Kumbhar
            </h2>
            <p className="text-xl text-black mt-2 text-justify">
              In charge Registrar, Karmaveer Bhaurao Patil University, Satara & Head and Associate Professor in Economics & Bank Management, Dhananjayrao Gadgil College of Commerce, Satara.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
