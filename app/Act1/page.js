import Link from "next/link";
import Image from "next/image";

export default function ActNoticesTable() {
  const notices = [/* Your data as is...*/];

  return (
    <>
      {/* Background Header Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">
            Act/Notices
          </h1>

          <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

          <div className="text-white py-2 px-6 flex items-center space-x-2 text-sm">
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
            <span className="text-[#fbbf24] font-semibold">Act/Notices</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full max-w-7xl mx-auto overflow-x-auto p-4">
        <div className="max-h-[600px] overflow-y-auto border border-gray-300 rounded-md shadow">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-2 border text-center">Sr.no</th>
                <th className="px-4 py-2 border text-left">Act Notices</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 focus-within:bg-gray-100 transition"
                >
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <a
                      href={notice.link}
                      className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {notice.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
