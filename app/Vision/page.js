import Image from 'next/image';
import Link from 'next/link';

export default function Vision() {
  return (
    <div className="relative">
      <div
        className="h-[250px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-lg md:text-4xl font-bold font-['Times_New_Roman']">Vision Mission Goals</h1>
          <div className="border-t-2 border-white w-full max-w-md my-4" />
          <div className="text-white py-3 px-4 flex flex-wrap items-center justify-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Vision Mission Goals</span>
          </div>
        </div>
      </div>
      <section className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman'] mb-4">Vision :</h2>
        </div>
        <div className="max-w-5xl mx-auto text-justify text-[16px] leading-7 px-4 py-6">
          <p>To equip students with knowledge and scientific attitude for living in the world of rapid technological change by means of teaching and training in science studies and to sustain the position as one of the most qualitative institutes imparting core science and multidisciplinary education.</p>
        </div>
      </section>
      <section className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman'] mb-4">Mission :</h2>
        </div>
        <div className="max-w-4xl mx-auto text-justify text-[16px] leading-7 px-4 py-6">
          <ul className="list-disc list-inside space-y-3">
            <li>To provide higher education in science with an inter- and multidisciplinary approach for all, especially the downtrodden and grassroots.</li>
            <li>To enhance the knowledge-generating capacity of students in the global environment, delivering superior and sustainable stakeholder values.</li>
            <li>To promote scientific temper among rural youth, enabling them to awaken the masses intellectually.</li>
            <li>To promote quality research through technology development and its transfer.</li>
            <li>To inculcate values like social equality, national integration, brotherhood, and self-help.</li>
            <li>To give special attention to women&apos;s empowerment programs.</li>
            <li>To make students aware of social responsibilities, disaster management, environmental protection, and natural resource conservation.</li>
            <li>To develop skills by upgrading the educational network and using modern communication technologies, contributing to national socio-economic development.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white text-[#1a1a1a] font-serif text-center">
        <div className="bg-gray-200 px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8a0c56] font-['Times_New_Roman'] mb-4">Motto :</h2>
        </div>
        <div className="space-y-2 text-xl md:text-2xl px-4 py-6">
          <p><b>&quot;Education Through Self-help&quot;</b></p>
          <p><b>&quot;स्व-मदतातून शिक्षण&quot;</b></p>
          <p><b>&quot;सवसहायतायाः माध्यमेन शिक्षा&quot;</b></p>
        </div>
      </section>
      <section className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman'] mb-4">Features :</h2>
        </div>
        <div className="max-w-4xl mx-auto text-justify text-[16px] leading-7 px-4 py-6">
          <ul className="list-disc list-inside space-y-3">
            <li>The candidate should preserve a printout of the online form submitted and submit it at the time of final admission.</li>
            <li>PG applicants can apply during their final semester but must submit mark sheets at admission.</li>
            <li>Ph.D. applicants must submit PG mark sheets at admission.</li>
            <li>Entrance tests are required for PG and Ph.D., excluding foreign students.</li>
            <li>Admissions follow Maharashtra&apos;s reservation policy.</li>
            <li>Displayed intake quotas may vary.</li>
            <li>No need to submit hard copies; keep a printed copy for records.</li>
            <li>Entrance fee to be paid online.</li>
            <li>Only paid applications will be considered.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white text-[#1a1a1a] font-serif">
        <div className="bg-gray-200 px-4 py-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8a0c56] font-['Times_New_Roman'] mb-4">Objectives :</h2>
        </div>
        <div className="max-w-4xl mx-auto text-justify text-[16px] leading-7 px-4 py-6">
          <ul className="list-disc list-inside space-y-3">
            <li>To provide instructions, teaching, and training in scholarly disciplines and make provisions for research, advancement, and dissemination of knowledge.</li>
            <li>To create higher levels of intellectual and innovative abilities.</li>
            <li>To establish state-of-the-art facilities for education and research.</li>
            <li>To create centers of excellence to enhance employability and academic pursuits.</li>
            <li>To provide consultancy to various organizations.</li>
            <li>To launch new institutions and industry-relevant courses.</li>
            <li>To award recognized academic credentials.</li>
            <li>To ensure compliance with UGC and regulatory bodies.</li>
            <li>To collaborate nationally and internationally.</li>
            <li>To offer meaningful learning for Indian and international students.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
