'use client';
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from 'next/image';

const Newclg = () => {
  const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tabsData = [
      {
        id: 1,
        name: "Colleges",
        table: (
            <div className="overflow-x-auto h-[400px]">
  <table className="w-full border-collapse border border-black mt-4">
    <thead className="sticky top-0 bg-gray-900 text-white">
      <tr className="overflow-y-scroll">
        <th className="border border-black px-4 py-2">Sr. No.</th>
        <th className="border border-black px-4 py-2">College Name</th>
        <th className="min-w-[150px] border border-black py-2">Principal&apos;s Name</th>
        <th className="border border-black py-2">District</th>
        <th className="border border-black py-2">Address</th>
        <th className="min-w-[300px] border border-black py-2">Courses</th>
      </tr>
    </thead>
    <tbody>
              <tr>
                <td className="border border-black px-4 py-2  text-black">1</td>
                <td className="border  border-black px-4 py-2  text-black">Chh. Shivaji College, Satara.</td>
                <td className="border  border-black px-4 py-2  text-black">Prin.Dr.V.S. Shivankar</td>
                <td className="border  border-black px-4 py-2  text-black">Satara</td>
                <td className="border  border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara Phone : 02162-234678Fax : : 02162-234678</td>
                <td className="border  border-black px-4 py-2  text-black">B.A (English, Marathi, Sanskrit, Hindi, Economics, Politics, Sociology, Geography, History, Statistics, NCC, Music), M.A.(English, Marathi, Sanskrit, Hindi, Economics, Politics, Sociology, Geography, History)., B.Voc.-Media and Entertainment</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">2</td>
                <td className="border border-black px-4 py-2  text-black">Sadguru  Gadage  Maharaj College, Karad.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.M.M.Rajmane</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Karad, Tal.-Karad, Dist.-Satara Phone : (02164) 271346 Fax : (02164) 271346</td>
                <td className="border border-black px-4 py-2  text-black">M.A. (Marathi, Hindi, English, History, Sociology, Economics, Politics) M.Com., M.Sc. (Zoology, Chemistry) B.A. B.Com., B.Sc.(B.Sc.Comp.Sci, B.Sc.III Stat) M.A. (Geography, Biotechnology, BCA, BCS., B.Com.IT, M.Sc.(Comp.Sci), M.Sc. (Industrial Microbiology)., B.Voc.-Hotel Management</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2  text-black">3</td>
                <td className="border  border-black px-4 py-2  text-black">	Azad  College of Education, Satara.	</td>
                <td className="border  border-black px-4 py-2  text-black">Prin.Dr.Smt.V.S.Nalavade</td>
                <td className="border  border-black px-4 py-2  text-black">Satara</td>
                <td className="border  border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara Phone : (02162) 231257 Fax : (02162) 231257</td>
                <td className="border border-black px-4 py-2  text-black">Education (B.Ed.)</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">4</td>
                <td className="border border-black px-4 py-2  text-black">Yashvantrao Chavan Inst, of Science, Satara.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.B.T.Jadhav</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara
Phone : (02162)-234392
Fax  : (02162)-234392</td>
                <td className="border border-black px-4 py-2  text-black">B.Sc.(Physics, Chemistry, Botany, Botany-Seed, Botany-P.P., Electronics, Statistics, Mathematics, Zoology, Zoo-Fisheries, Microbiology, ),M.Sc.(Botany, Zoology, Chemistry, Microbiology, Mathematics, Physics, Statistics) (B.Sc.Comp.Sci.,B.sc.I Forensic Sci.Entire, B.Sc.I Nano Science & Technology Entire) Bio-Technology, Food Processing and Packing, Seed Technology, Animation Science, BCS, Ph.D.., B.Voc.-Software development</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2  text-black">5</td>
                <td className="border  border-black px-4 py-2  text-black">	Dahiwadi College, Dahiwadi</td>
                <td className="border  border-black px-4 py-2  text-black">	I/C Prin.Dr.Balvant B.S.	</td>
                <td className="border  border-black px-4 py-2  text-black">Satara</td>
                <td className="border  border-black px-4 py-2  text-black">Dahiwadi, Tal.-Man, Dist.-Satara
Phone : (02165) 220231
Fax : (02165) 220231</td>
                <td className="border border-black px-4 py-2  text-black">B.A.(Marathi, English, Hindi, Economics,History, Geography, Politics), B.Com. (Adv.Accountacy), B.Sc. (Physics, Botany, Chemistry, Zoology, Computer Science), BCA, Ph.D., B.Sc.II (Optional Microbiology)., B.Voc.-Agriculture</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">6</td>
                <td className="border border-black px-4 py-2  text-black">Ismailsaheb Mulla Law college, Satara</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.Smt.S.S.Pawar</td>
                <td className="border border-black px-4 py-2  text-black">	Satara</td>
                <td className="border border-black px-4 py-2  text-black">	Satara, Tal.-Satara, Dist.-Satara
Phone : (02162) 234138
Fax : (02162) 234138</td>
                <td className="border border-black px-4 py-2  text-black">Three Year Law Course, Five Year Law Course, D.L.L.</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">7</td>
                <td className="border border-black px-4 py-2  text-black">	Dhananjayrao Gadgil College of commerce, Satara.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.Smt.P.S.
                Gaikwad</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara
Phone : (02162)-234729
Fax : (02162)-234729</td>
                <td className="border border-black px-4 py-2  text-black">B.Com.(NCC, Hospitality Management, Bank Management Entire,M.Com., BCA, B.Com.- IT., B.Voc.-1.Financial Markets and services
             2.Accounting & Taxation
             3.Web designing & Management</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">8</td>
                <td className="border border-black px-4 py-2  text-black">	Shripatrao Kadam Mahavidyalaya,Shirwal.</td>
                <td className="border border-black px-4 py-2  text-black">	Prin.Dr.Smt.M.V. Bobade	</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Shirwal, Tal.-Khandala, Dist-Satara
Phone : (02169) 244202
Fax : (02169) 244202</td>
                <td className="border border-black px-4 py-2  text-black">B.A. (Marathi, English, Hindi, Economics, History) B.Com. (Advanced Accountancy ), BCA</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">9</td>
                <td className="border border-black px-4 py-2  text-black">D. P. Bhosale College,  Koregaon</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr. V.S.Sawant</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">	Tal.-Koregaon, Dist.-Satara
Phone : (02163) 220219
Fax  : (02163) 220219</td>
                <td className="border border-black px-4 py-2  text-black">B.A.,B.Com.,B.Sc.,M.Sc., BCA., B.Voc.</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">10</td>
                <td className="border border-black px-4 py-2  text-black">Sharadchandra Pawar College, Lonand.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.T.N. Gholap</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Lonand, Tal.-Khandala, Dist.-Satara-415521
Phone : (02169) 225175
Fax : (02169) 225175</td>
                <td className="border border-black px-4 py-2  text-black">B.A. (English. Marathi, Geography, Hindi, History) B.Com.,  (Accountancy) B.Sc. (Electronics, Physics, Chemistry), M.Com</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">11</td>
                <td className="border border-black px-4 py-2  text-black">Savitribai Phule Mahila Mahavidyalaya, Satara.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.S.G. Menkudale</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara
Phone : (02162) 231705
Fax : (02162) 231705</td>
                <td className="border border-black px-4 py-2  text-black">B.A.,B.Com., B.C.A., B.Voc.-Nursing</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">12</td>
                <td className="border border-black px-4 py-2  text-black">Sou.Mangaltai Ramchandra Jagtap Mahila Mahavidyalaya, Umbraj</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.S.M.Kambale</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">UmbrajTal.-Karad, Dist.-Satara
Phone : (02164) 264235
Fax  : (02164) 264235</td>
                <td className="border border-black px-4 py-2  text-black">B.A.(English, Marathi, Hindi, History, Sociology)., B.Voc.-1.Beauty & Wellness
                2.Dress Designing & Tailoring</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">13</td>
                <td className="border border-black px-4 py-2  text-black">Yashvantrao Chavan Mahavidyalaya, Panchwad.</td>
                <td className="border border-black px-4 py-2  text-black">I/C Prin.Dr.P. M. Shinde</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">	Pachwad, Tal.-Wai, Dist.-Satara
Phone : (02167) 285403
Fax : (02167) 285403</td>
                <td className="border border-black px-4 py-2  text-black">B.A.(ENGLISH, MARATHI, HINDI, HISTORY, SOCIOLOGY), B.Com. (ADVANCE ACCOUNTANCY, INDSTRIAL MANAGEMENT)</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">14</td>
                <td className="border border-black px-4 py-2  text-black">	Arts & Commerce College, Pusegaon.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.K.B. Jagdale</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Pusegaon, Tal-Khatav, Dist.-Satara, 415502.
Phone : (02375) 260637
Fax  : (02375) 260637</td>
                <td className="border border-black px-4 py-2  text-black">B.A.(English, Marathi, History, Hindi), B.Com (Modern Management Practices, Coopertive Development, Buisness Regularity Frame Work, Business Environment, Adv.Accounting & Auditing)</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">15</td>
                <td className="border border-black px-4 py-2  text-black">Karmaveer Bhaurao Patil  College of Engnieering, Sadarbazar, Satara</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.A.C. Attar</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Satara, Tal.-Satara, Dist.-Satara
Phone : (02162) 230636
Fax : (02162) 235767</td>
                <td className="border border-black px-4 py-2  text-black">B.E.(Civil, Computer, Mechanical, Production, Electronics , M.E.(Mechanical, Electronics))</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">16</td>
                <td className="border border-black px-4 py-2  text-black">Karmaveer Bhaurao Patil  Polytechnic,242/B/1, Panmalewadi, Varye, Satara.</td>
                <td className="border border-black px-4 py-2  text-black">I/C Prin.K.C. Shaikh</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">	Panmalewadi. Varye,
Tal.-Satara, Dist.-Satara
Phone : (02162) 200402</td>
                <td className="border border-black px-4 py-2  text-black">Engg.Diploma (Civil, Mechanical, Electronics & Telecommunication, Electrical, Computer)</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">17</td>
                <td className="border border-black px-4 py-2  text-black">Karmaveer Bhaurao Patil Inst. of Management Studies & research , Satara</td>
                <td className="border border-black px-4 py-2  text-black">Dr.B.S.Sawant</td>
                <td className="border border-black px-4 py-2  text-black">Satara</td>
                <td className="border border-black px-4 py-2  text-black">Varye, Tal.-Satara, Dist.-Satara
Phone : (02162)-230011
Fax : (02162)-230011</td>
                <td className="border border-black px-4 py-2  text-black">MBA., DBM, BCA, BBA., B.Voc.-Retail Management and Information Technology</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">18</td>
                <td className="border border-black px-4 py-2  text-black">Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.K.H.Shinde</td>
                <td className="border border-black px-4 py-2  text-black">Solapur</td>
                <td className="border border-black px-4 py-2  text-black">Poona Road, Pandharpur, Dist.-Pandharpur-413304
Phone : (02186)-223104
Fax : (02186)-228258</td>
                <td className="border border-black px-4 py-2  text-black">B.A., (Marathi, Hindi, English, A.I,H.& C, Politics, Economics, History, Geography )  B.Com Adv.Accountancy, Adv.Costing, Management Industrial ),  B.Sc.(Physics, Chemistry, Botany, Zoology, Mathematics, Statistics, Electronics) M.A. (Marathi, Geography, History, Economics, Hindi, English) M.Sc. (Anay.Chemistry)M.Com., ECS, B.C.A.., B.Voc.-Food Processing and Managment</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-black">19</td>
                <td className="border border-black px-4 py-2  text-black">Arts & Commerce College, Madha.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.S.R. Dhere</td>
                <td className="border border-black px-4 py-2  text-black">Solapur</td>
                <td className="border border-black px-4 py-2  text-black">Madha, Tal.-Madha, Dist.-Solapur. Phone (02183)-234026
                Fax (02183)-234026</td>
                <td className="border border-black px-4 py-2  text-black">B.A., B.Com.(Adv., Accounting, Auditing)</td>
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black py-2 text-black">20</td>
                <td className="border border-black px-4 py-2  text-black">	Laxmibai Bhaurao Patil Mahila Mahavidyalaya,Solapur.</td>
                <td className="border border-black px-4 py-2  text-black">Prin.Dr.D.J.Salunkhe</td>
                <td className="border border-black px-4 py-2  text-black">Solapur</td>
                <td className="border border-black px-4 py-2  text-black">Solapur Tal.,Dist.-Solapur
Phone : (0217)-2620602
Fax : (0217)-2620602</td>
                <td className="border border-black px-4 py-2  text-black">B.A.,B.Com,  M.Com.</td>
              </tr>

            </tbody>
          </table>
          </div>
        )
        
      },
      {
        id: 2,
        name: "NAAC Reaccreditations ISO 9001-2008",
        table: (
            <div className="overflow-x-auto h-[400px]">
            <table className="w-full border-collapse border  border-black mt-4">
            <thead>
            <tr className="bg-gray-800 text-white">
              <th rowSpan="2" className="border border-white px-4 py-2">Sr. No.</th>
              <th rowSpan="2" className="border border-white px-4 py-2">Name of College</th>
              <th colSpan="2" className="border border-white px-4 py-2">Third Cycle</th>
            </tr>
            <tr className="bg-gray-800 text-white">
              <th className="border border-white px-4 py-2">CGPA</th>
              <th className="border border-white px-4 py-2">Grade</th>
            </tr>
          </thead>
              <tbody>
              
              <tr className="overflow-y-scroll">
              <td className="border border-black px-4 py-2  text-black">1</td>
                <td className="border  border-black px-4 py-2  text-black">	Sadguru Gadage Maharaj College, Karad</td>
                <td className="border  border-black px-4 py-2  text-black">3.63</td>
                <td className="border  border-black px-4 py-2  text-black">	A+</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">2</td>
                <td className="border  border-black px-4 py-2  text-black">	Dhananjayrao Gadgil College of Commece, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">3.61</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">3</td>
                <td className="border  border-black px-4 py-2  text-black">	Yashwantrao Chanvan Institute of Science, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">3.57</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">4</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi</td>
                <td className="border  border-black px-4 py-2  text-black">3.53</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">5</td>
                <td className="border  border-black px-4 py-2  text-black">	Chhatrapati Shivaji College, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">3.51</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">6</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur</td>
                <td className="border  border-black px-4 py-2  text-black">3.51</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">7</td>
                <td className="border  border-black px-4 py-2  text-black">		R.B.N.B. College, Shrirampur</td>
                <td className="border  border-black px-4 py-2  text-black">3.44</td>
                <td className="border  border-black px-4 py-2  text-black">A+</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">8</td>
                <td className="border  border-black px-4 py-2  text-black">	Dahiwadi College, Dahiwadi</td>
                <td className="border  border-black px-4 py-2  text-black">3.25</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">9</td>
                <td className="border  border-black px-4 py-2  text-black">	Laxmibai Bhaurao Patil Mahila Mahavidyalya, Solapur</td>
                <td className="border  border-black px-4 py-2  text-black">3.23</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">10</td>
                <td className="border  border-black px-4 py-2  text-black">Maharaja Jivajirao Shinde Mahavidyalaya, Shrigonda</td>
                <td className="border  border-black px-4 py-2  text-black">3.22</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">11</td>
                <td className="border  border-black px-4 py-2  text-black">Mahatma Phule Arts, Science & Commerce College, Panvel</td>
                <td className="border  border-black px-4 py-2  text-black">3.18</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">12</td>
                <td className="border  border-black px-4 py-2  text-black">	Mahatma Phule Mahavidyalaya, Pimpri</td>
                <td className="border  border-black px-4 py-2  text-black">3.16</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">13</td>
                <td className="border  border-black px-4 py-2  text-black">	C.D.Jain College of Commerce, Shrirampur</td>
                <td className="border  border-black px-4 py-2  text-black">3.14</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">14</td>
                <td className="border  border-black px-4 py-2  text-black">	D.P.Bhosale College, Koregaon</td>
                <td className="border  border-black px-4 py-2  text-black">3.12</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">15</td>
                <td className="border  border-black px-4 py-2  text-black">	Balwant College, Vita</td>
                <td className="border  border-black px-4 py-2  text-black">3.11</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">16</td>
                <td className="border  border-black px-4 py-2  text-black">		Annasaheb Awate College, Manchar</td>
                <td className="border  border-black px-4 py-2  text-black">3.11</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">17</td>
                <td className="border  border-black px-4 py-2  text-black">	Dada Patil Mahavidyalaya, Karjat</td>
                <td className="border  border-black px-4 py-2  text-black">3.09</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">18</td>
                <td className="border  border-black px-4 py-2  text-black">	Rajarshi Chhatrapati Shahu College, Kolhapur</td>
                <td className="border  border-black px-4 py-2  text-black">3.07</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">19</td>
                <td className="border  border-black px-4 py-2  text-black">	Radhabai Kale Mahila Mahavidyalaya, Ahemadnagar</td>
                <td className="border  border-black px-4 py-2  text-black">3.04</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">20</td>
                <td className="border  border-black px-4 py-2  text-black">	Ismailsaheb Mulla Law College, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">3.03</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">21</td>
                <td className="border  border-black px-4 py-2  text-black">	S.M.Joshi College, Hadapsar, Pune</td>
                <td className="border  border-black px-4 py-2  text-black">3.03</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">22</td>
                <td className="border  border-black px-4 py-2  text-black">	Dr.Patangrao Kadam Mahavidyalaya, Ramanandnagar(Burli)</td>
                <td className="border  border-black px-4 py-2  text-black">	3.02</td>
                <td className="border  border-black px-4 py-2  text-black">	A</td>
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">23</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil Management studies & Research, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">		2.95</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">24</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bahurao Patil Engineering College, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">	2.87</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">25</td>
                <td className="border  border-black px-4 py-2  text-black">	S.S.G.M. College, Kopergaon</td>
                <td className="border  border-black px-4 py-2  text-black">	2.82</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">26</td>
                <td className="border  border-black px-4 py-2  text-black">		Savitribai Phule Mahila Mahavidyalaya, Satara</td>
                <td className="border  border-black px-4 py-2  text-black">	2.8</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">27</td>
                <td className="border  border-black px-4 py-2  text-black">	Yashwantrao Chavan Mahavidyalaya, Panchwad</td>
                <td className="border  border-black px-4 py-2  text-black">2.77</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">28</td>
                <td className="border  border-black px-4 py-2  text-black">	Dr.Babasaheb Ambedkar Mahavidyalaya, Aundh, Pune</td>
                <td className="border  border-black px-4 py-2  text-black">	2.76</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">29</td>
                <td className="border  border-black px-4 py-2  text-black">Abasaheb Marathe Arts & New Commerce, Science College, Rajapur)</td>
                <td className="border  border-black px-4 py-2  text-black">2.73</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">30</td>
                <td className="border  border-black px-4 py-2  text-black">	Shri Raosaheb Ramrao Patil Mahavidyalaya, Savlaj</td>
                <td className="border  border-black px-4 py-2  text-black">2.71</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">31</td>
                <td className="border  border-black px-4 py-2  text-black">Chandrabai Shantappa Shendure College, Hupari</td>
                <td className="border  border-black px-4 py-2  text-black">	2.72</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">32</td>
                <td className="border  border-black px-4 py-2  text-black">	Sou. Mangalatai Ramchandra Jagtap Mahila Mahavidyalay, Umbraj</td>
                <td className="border  border-black px-4 py-2  text-black">2.66</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">33</td>
                <td className="border  border-black px-4 py-2  text-black">		Veer Vajekar Arts, Commerece & Science College, Phunde</td>
                <td className="border  border-black px-4 py-2  text-black">	2.58</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>

              <tr>
              <td className="border border-black px-4 py-2  text-black">34</td>
                <td className="border  border-black px-4 py-2  text-black">	Sharadchandra Pawar Mahavidyalaya, Lonand</td>
                <td className="border  border-black px-4 py-2  text-black">2.53</td>
                <td className="border  border-black px-4 py-2  text-black">	B+</td>
              </tr>


              </tbody>
              </table>
              </div>
        
        )
        
      },
      {
        id: 3,
        name: "Certification Autonomous Colleges",
        table:(
            <div className="overflow-x-auto  h-[400px]">
            <table className="w-full border-collapse border  border-black mt-4">
            <thead>
            <tr className="bg-gray-800 text-white overflow-y-scroll">
              <th className="border border-white px-4 py-2">Sr. No.</th>
              <th className="border border-white px-4 py-2">Name of College</th>
            </tr>
          
          </thead>
              <tbody className="text-justify">
              <tr>
              <td className="border border-black px-4 py-2  text-black">1</td>
                <td className="border  border-black px-4 py-2  text-black">Chandrarup Dakale Jain College of Commerce, Shrirampur</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">2</td>
                <td className="border  border-black px-4 py-2  text-black">Sadguru Gadage Maharaj College, Karad</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">3</td>
                <td className="border  border-black px-4 py-2  text-black">Swami Sahajanand Bharati College of Education, Shrirampur</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">4</td>
                <td className="border  border-black px-4 py-2  text-black">Dhanajayrao Gadgil College of Commerce, Satara</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">5</td>
                <td className="border  border-black px-4 py-2  text-black">	D.P.Bhosale College, Koregaon</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">6</td>
                <td className="border  border-black px-4 py-2  text-black">R.B.Narayanrao Boravake College, Shrirampur</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">7</td>
                <td className="border  border-black px-4 py-2  text-black">	Maharaja Jivajirao Shinde Mahavidyalaya, Shrigonda</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">8</td>
                <td className="border  border-black px-4 py-2  text-black">	Yashwantrao Chavan Institute of Science, Satara</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">9</td>
                <td className="border  border-black px-4 py-2  text-black">	Mahatma Phule Arts, Science, & Commerce College, Panvel</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">10</td>
                <td className="border  border-black px-4 py-2  text-black">	Mahatma Phule Mahavidyalaya, Pimrpi Pune</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">11</td>
                <td className="border  border-black px-4 py-2  text-black">	Dahiwadi College, Dahiwadi</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">12</td>
                <td className="border  border-black px-4 py-2  text-black">S.M. Joshi College, Hadapsar, Pune</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">13</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">14</td>
                <td className="border  border-black px-4 py-2  text-black">S.S.G.M. College, Kopergaon</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">15</td>
                <td className="border  border-black px-4 py-2  text-black">	Balwant College, Vita</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">16</td>
                <td className="border  border-black px-4 py-2  text-black">Laxmibai Bhaurao Patil Mahila Mahavidyalaya, Solapur</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">17</td>
                <td className="border  border-black px-4 py-2  text-black">	Dr.Patangrao Kadam Mahavidyalaya, Ramanandnagar(Burli)</td>
                
              </tr>
              <tr className="bg-gray-300">
              <td className="border border-black px-4 py-2  text-black">18</td>
                <td className="border  border-black px-4 py-2  text-black">	Radhabai Kale Mahila Mahavidyalaya, Ahemadnagar</td>
                
              </tr>
              <tr>
              <td className="border border-black px-4 py-2  text-black">19</td>
                <td className="border  border-black px-4 py-2  text-black">Dr.Babasaheb Ambedkar Mahavidyalaya, Aundh, Pune</td>
                
              </tr>
              </tbody>
              </table>
              </div>
  
        )
      },
      {
        id: 4,
        name: "Ranking",
        table: (
            <div className="overflow-x-auto">
            <table className="w-full border-collapse border  border-black mt-4">
            <thead>
            <tr className="bg-gray-800 text-white">
              <th rowSpan={2} className="border border-white px-4 py-2">Sr. No.</th>
              <th rowSpan={2} className="border border-white px-4 py-2">Name of College</th>
              <th rowSpan={2} className="border border-white px-4 py-2">Total Marks (700)</th>
              <th colSpan={2} className="border border-white px-4 py-2">Rank 2020 </th>
            </tr>
            <tr className="bg-gray-800 text-white">
              <th className="border border-white px-4 py-2">National</th>
              <th className="border border-white px-4 py-2"></th>
            </tr>
          </thead>
              <tbody className="text-justify">
              <tr>
                <td className="border border-black px-4 py-2  text-black">1</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi, New Mumbai</td>
                <td className="border  border-black px-4 py-2  text-black">496</td>
                <td className="border  border-black px-4 py-2  text-black">55</td>
                <td className="border  border-black px-4 py-2  text-black">15</td>
              
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black px-4 py-2  text-black">2</td>
                <td className="border  border-black px-4 py-2  text-black">		Dhananjayrao Gadgil College of Commerce, Satara Dist. Satara</td>
                <td className="border  border-black px-4 py-2  text-black">491</td>
                <td className="border  border-black px-4 py-2  text-black">59</td>
                <td className="border  border-black px-4 py-2  text-black">17</td>
              
              </tr>
              <tr>
                <td className="border border-black px-4 py-2  text-black">3</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi, New Mumbai</td>
                <td className="border  border-black px-4 py-2  text-black">482</td>
                <td className="border  border-black px-4 py-2  text-black">67</td>
                <td className="border  border-black px-4 py-2  text-black">19</td>
              
              </tr>
              <tr className="bg-gray-300">
                <td className="border border-black px-4 py-2  text-black">4</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi, New Mumbai</td>
                <td className="border  border-black px-4 py-2  text-black">475</td>
                <td className="border  border-black px-4 py-2  text-black">74</td>
                <td className="border  border-black px-4 py-2  text-black">23</td>
              
              </tr>
              <tr>
                <td className="border border-black px-4 py-2  text-black">5</td>
                <td className="border  border-black px-4 py-2  text-black">	Karmaveer Bhaurao Patil College, Vashi, New Mumbai</td>
                <td className="border  border-black px-4 py-2  text-black">468</td>
                <td className="border  border-black px-4 py-2  text-black">79</td>
                <td className="border  border-black px-4 py-2  text-black">26</td>
              
              </tr>
              </tbody>
              </table>
              </div>
        )

      }
      
    ];

    return (
      <div className="w-full max-w-5xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Dropdown for Mobile */}
        <div className="md:hidden w-full mb-4">
          <button
            className="w-full px-4 py-2 bg-[#00A99D] text-white rounded-lg flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {tabsData.find((tab) => tab.id === activeTab)?.name}
            <ChevronDown
              className={`transform transition-all ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {isDropdownOpen && (
            <div className="mt-2 bg-white text-black shadow-md rounded-lg absolute w-[90%] max-w-md z-10">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm font-medium hover:bg-gray-200"
                >
                  {tab.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Tabs for Desktop */}
        <div className="hidden md:flex w-1/4 flex-col border-r-2 pr-4 space-y-2">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all text-left w-full 
              ${activeTab === tab.id ? "bg-[#00A99D] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full md:w-3/4 p-4 flex flex-col items-center">
          {tabsData
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id} className="w-full">
                <h2 className="text-lg sm:text-2xl font-serif text-black text-center mb-4">
                  {tab.name}
                </h2>
                {/*  Divider and image */}
      <div className="flex items-center justify-center w-full mt-2">
  <hr className="flex-1 border-t-2 border-black sm:w-1/4 w-1/6" />
  <Image src="/tree.png" alt="logo" width={64} height={64} className="h-12 sm:h-16 mx-4" />

  <hr className="flex-1 border-t-2 border-black sm:w-1/4 w-1/6" />
</div>
                <p className="text-gray-900 text-centre px-4">{tab.tag}</p>
                  <p className="text-gray-900 text-justify px-4">{tab.content1}</p>
                  {tab.table && <div className="mt-4">{tab.table}</div>}
                
              </div>
            ))}
            
        </div>

      </div>
    );
  };

  return (
    
    <div className="w-[95%] max-w-6xl bg-[#E0F2F1] flex flex-col items-center mx-auto shadow-lg rounded-tl-[80px] rounded-br-[80px] mt-5 mb-5 border-t-[5px] border-b-[5px] border-[#00A99D] p-6">
    
  

      <Tabs />
    </div>
    
  );
};

export default Newclg;
