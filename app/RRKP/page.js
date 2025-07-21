import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from './Accordion';

const Page = () => {
  return (
    <div className="relative">
      {/* Background Image section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{
          backgroundImage: "url('/images/tback.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-base md:text-4xl font-bold font-['Times_New_Roman'] text-white">
            Role & Responsibility
          </h1>
          <div className="border-t-2 border-white w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
            <Image
              src="/images/breadcrumb.png"
              alt="breadcrumb"
              width={20}
              height={20}
            />
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Role & Responsibility</span>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Hon. Chancellor of the University"
            content=" The Chancellor, when present, shall preside over the Convocation of the university and may issue directions to the Vice-Chancellor to convene the meeting of any authority of the university for specific purposes, whenever necessary, and the Vice-Chancellor shall submit the minutes of such meeting to the Chancellor for his perusal."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Hon. Vice Chancellor of the University"
            content="Vice-Chancellor is the principal academic and executive officer of the university and ex-officio Chairperson of the Management Council, Academic Council, Board of Examinations and Evaluation, Board of Lifelong Learning and Extension, Finance and Accounts Committee, Board of National and International Linkages and the Board for Innovation, Incubation and Enterprise, Board of Information Technology, Board of Students’ Development, Board of Sports and Physical Education and Board of Research and shall preside in the absence of the Chancellor at any convocation for conferring degrees and also at any meeting of Senate."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Registrar of the University"
            content="The Registrar shall be the Chief Administrative Officer of the university. He shall be a full-time salaried officer and shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, Board of Examinations & Evaluation"
            content="The Director, Board of Examinations and Evaluation shall be a full-time salaried officer and shall work directly under the directions and control of the Vice-Chancellor. He shall discharge his functions under the superintendence, direction and guidance of the Board of Examinations and Evaluation, and shall be concerned with the implementation of the policies and directives given by the Board of Examinations and Evaluation."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, Innovation, Incubation & Linkages"
            content="The Director of Innovation, Incubation and Linkages shall be a full-time salaried officer who shall be responsible for creation and cultivation of an enabling environment to propagate the concept of innovation, for converting innovative ideas into working models through a process of incubation which shall finally lead to creation of an enterprise and to cultivate, establish, maintain and strengthen the link of the university with premier national and international universities and institutions."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Finance and Accounts Officer"
            content="The Finance and Accounts Officer shall be the principal finance, accounts and audit officer of the university. He shall be a full-time salaried officer and shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Dean, Faculty of Science and Technology"
            content="The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic policies approved by the Academic Council in respect of academic development, maintenance of quality of education including standards of teaching and research and training of teachers within his faculty. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Dean, Faculty of Commerce and Management"
            content="The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic policies approved by the Academic Council in respect of academic development, maintenance of quality of education including standards of teaching and research and training of teachers within his faculty. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Dean, Faculty of Humanities"
            content="The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic policies approved by the Academic Council in respect of academic development, maintenance of quality of education including standards of teaching and research and training of teachers within his faculty. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Dean, Faculty of Interdisciplinary Studies"
            content="The Dean be responsible for academic planning and academic audit of the programmes and implementation of academic policies approved by the Academic Council in respect of academic development, maintenance of quality of education including standards of teaching and research and training of teachers within his faculty. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, Student Development"
            content="The Director of Students’ Development shall be nominated by the Vice-Chancellor, from amongst the teachers having a minimum aggregate teaching experience of ten years and desired exposure in the field of extracurricular and extension activities. He shall work directly under the superintendence, directions and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, Lifelong Learning and Extension"
            content="The Director of Lifelong Learning and Extension shall be a full-time salaried officer of the university and shall be responsible to carry out the activities of the Board of Lifelong Learning and Extension. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, Sports and Physical Education"
            content="The Director of Sports and Physical Education shall be a full-time salaried officer responsible for promoting the culture of sports and supervising sports-related activities in the university, colleges, and recognized institutions. He shall work under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Director, National Service Scheme (NSS)"
            content="The Director of the National Service Scheme shall be nominated by the Vice-Chancellor from amongst the teachers having a minimum aggregate teaching experience of ten years, experience of at least three years as NSS Programme Officer, and desired exposure in the field of National Service Scheme activities."
          />
        </div>

        <div className="mt-2 space-y-4 max-w-5xl mx-auto text-justify text-[17px] leading-7">
          <Accordion
            title="Librarian/Director Knowledge Resource Centre, UNIKBP"
            content="The Director, Knowledge Resource Centre shall be a full-time salaried officer of the university and shall be in charge of the Knowledge Resource Centre. He shall work directly under the superintendence, direction and control of the Vice-Chancellor."
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
