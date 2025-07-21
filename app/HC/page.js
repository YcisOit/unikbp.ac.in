import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Honorable Chancellor
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
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Honorable Chancellor</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/HC.png"
            alt="Hon’ble Chancellor Shri C. P. Radhakrishnan"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border-4 border-[#00A99D] shadow-lg object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">Hon’ble Chancellor</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-900 mt-2">
              Shri C. P. Radhakrishnan
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
              The Governor of Maharashtra State is the Chancellor of all the Universities in Maharashtra. By virtue of
              his office, he is the Head of Karmaveer Bhaurao Patil State University. Presently, Hon’ble Governor Shri
              C. P. Radhakrishnan is the Chancellor of Karmaveer Bhaurao Patil State University, Satara.
            </p>
            <p className="mt-4 font-semibold text-sm md:text-base">
              For more details visit:{" "}
              <a
                href="https://rajbhavan-maharashtra.gov.in/en/governors-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                https://rajbhavan-maharashtra.gov.in/en/governors-profile/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
