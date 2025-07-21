import Image from 'next/image';
import Link from 'next/link';

const StatutoryCommitteePage = () => {
  const colleges = [
    {
      name: 'RTI',
      url: '#',
    },
    {
      name: 'Women Empowerment',
      url: '#',
    },
    {
      name: 'Student Grievances',
      url: '#',
    },
    {
      name: 'Staff Grievances',
      url: '#',
    },
  ];

  return (
    <main>
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
            Statutory Committee
          </h1>

          {/* Line divider */}
          <div className="border-t-2 border-white w-[80%] md:w-[500px] my-4" />

          {/* Breadcrumb */}
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
            <span className="text-[#fbbf24] font-semibold">Statutory Committee</span>
          </div>
        </div>
      </div>

      {/* Committee Links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {colleges.map((college, index) => (
          <a
            key={index}
            href={college.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <h2 className="text-[#8b0a52] font-bold text-lg hover:text-blue-600 transition-colors duration-300">
              {college.name}
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
};

export default StatutoryCommitteePage;
