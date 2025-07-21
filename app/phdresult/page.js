import Image from "next/image";
import Link from "next/link";

const subjects = [
  { name: "Marathi", link: "/pdf/files/Marathi.pdf" },
  { name: "Hindi", link: "/pdf/files/Hindi.pdf" },
  { name: "English", link: "/pdf/files/English.pdf" },
  { name: "History", link: "/pdf/files/History.pdf" },
  { name: "Psychology", link: "/pdf/files/Psychology.pdf" },
  { name: "Geography", link: "/pdf/files/Geography.pdf" },
  { name: "Economics", link: "/pdf/files/Economics.pdf" },
  { name: "Sociology", link: "/pdf/files/Sociology.pdf" },
  { name: "Business Economics", link: "/pdf/files/Business-economics.pdf" },
  { name: "Commerce and Management", link: "/pdf/files/Commerce-_-Management.pdf" },
  { name: "Botany", link: "/pdf/files/Botany.pdf" },
  { name: "Biotechnology", link: "/pdf/files/Biotechnology.pdf" },
  { name: "Chemistry", link: "/pdf/files/Chemistry.pdf" },
  { name: "Computer Science", link: "/pdf/files/Computer-science.pdf" },
  { name: "Statistics", link: "/pdf/files/Statistics.pdf" },
  { name: "Physics", link: "/pdf/files/Physics.pdf" },
  { name: "Zoology", link: "/pdf/files/Zoology.pdf" },
  { name: "Electronics", link: "/pdf/files/Electronics.pdf" },
  { name: "Political Science", link: "/pdf/files/Political-Science_0001.pdf" },
];

export default function SubjectTable() {
  return (
    <>
      {/* Background Image Section */}
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Ph.D Entrance Result 2024-25
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-yellow-400 font-semibold">
              Ph.D Entrance Result 2024-25
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto p-4 justify-center flex">
        <table className="min-w-1/2 border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Sr. No</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">View File</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{subject.name}</td>
                <td className="border px-4 py-2 text-blue-600 underline">
                  <a
                    href={subject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
