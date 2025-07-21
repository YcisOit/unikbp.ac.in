'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const verticalTabs = [
  "Karmaveer Bhaurao Patil Chair in Social Inclusion",
  "Dr. Chintaman Dwarkanath Deshmukh Chair in Financial Inclusion​",
  "Sou.Laxmibai Bhaurao Patil Chair in Women Empowerment",
  "Dr. Pandurang Vasudeo Sukhatme Chair in Science for Sustainable Society",
];

const nestedTabs = {
  "Karmaveer Bhaurao Patil Chair in Social Inclusion": [
    "Introduction", "Vision", "Objectives", "Expected", "Plan of Activities & Scope"
  ],
  "Dr. Chintaman Dwarkanath Deshmukh Chair in Financial Inclusion​": [
    "Introduction", "Objectives", "Expected", "Proposed Activities", "Advisory Board"
  ],
  "Sou.Laxmibai Bhaurao Patil Chair in Women Empowerment": [
    "Introduction", "Vision", "Objectives", "Expected", "Proposed Activities", "Advisory Board"
  ],
  "Dr. Pandurang Vasudeo Sukhatme Chair in Science for Sustainable Society": [
    "Introduction", "Vision", "Objectives", "Proposed Initiatives/Activities",
    "Proposed Courses", "Areas of Priority", "Expected Outcomes"
  ],
};

const content = {
  "Karmaveer Bhaurao Patil Chair in Social Inclusion": {
    "Introduction": "    Karmaveer Bhaurao Patil Chair in Social Inclusion in KBP University, Satara is a multi-disciplinary teaching and research centre established under UGC Xth Plan to carry out research and teaching in the area of social exclusion, discriminatory studies and inclusive policies. This Post graduate diploma, M.Phil, Ph.D. programme focuses on developing understanding of the nature and dynamics of social exclusion and discrimination based on caste/ ethnicity, religion, gender and environment at both theoretical and empirical levels.",
    "Vision": "“Examining the effectiveness of existing policies for reducing the magnitude of Discrimination of Socially Discriminated and Excluded Groups / Communities in India, and to strive for establishingan egalitarian Society”",
    "Objectives": (
  <div>
    <h2 className="text-lg font-bold">The Centre is mandated to pursue the following objectives:</h2>
    <ul className="list-disc ml-5">
      <li>Conceptualize discrimination, exclusion and inclusion based on caste/ethnicity and religion.</li>
      <li>Develop understanding of the nature and dynamics of discrimination and exclusion.</li>
      <li>Formulate policies for protecting the rights of these groups and eradicating the problem of exclusion and discrimination.</li>
      <li>To organize national/ international Conference, Symposium, Seminars, workshop,Round Tables, Lectures for promotion and dissemination of knowledge regarding social exclusion, discrimination, public policies and to sensitize marginalized groups including religious minorities and weaker sections of the society.</li>
      <li>To collaborate with academicians, subject experts, intellectuals, policy makers,researchers, institutions, Universities and NGOs to promote collaborative learning/research on social exclusion and inclusive policies.</li>
      <li>To emerge as the finest Resource Centre by creating a Data Bank on socially marginalized group&apos;s particularly religious minorities to promote future research. </li>
      <li>To conduct any other related activity.</li>
    </ul>
  </div>
),
    "Expected": (
        <div>
          <h2 className="text-lg font-bold">Expected outcomes:</h2>
          <ul className='list-disc ml-5'>
            <li> To conceptualize and define discrimination and exclusion based on caste, ethnicity, class,gender, religion and region</li>
            <li>Describe the nature and dynamics of Social Exclusion and Discrimination in the Indian context. </li>
            <li> Apply knowledge of constitutional provisions, legislation and Inclusive policy in the maintenance of social justices. </li>
            <li>Analysis of the social, economic and political factors influenced on exclusion and inclusion process. </li>
            <li>A critical review of existing inclusive policy with reference to Indian Governmental policies for the inclusion of excluded communities. </li>
            <li>  Develop an understanding of discrimination at the empirical level through research projects and develop alternative inclusive policy.</li>
          </ul>
        </div>
),
    "Plan of Activities & Scope": (
      <div>
         <h2 className="text-lg font-bold">Plan of Activities and Scope:</h2>
  <table className=" md:min-w-full border border-black text-sm md:text-base">
    <thead className="bg-gray-400">
      <tr>
        <th className="border border-gray-300 px-2 md:px-4 py-2">Sr.No</th>
        <th className="border border-gray-300 px-2 md:px-4 py-2">Name of the Activity</th>
        <th className="border border-gray-300 px-2 md:px-4 py-2">Target Group</th> 
      </tr>
    </thead>
      <tbody >
      <tr >
          <td className="border border-gray-300 px-2 md:px-4 py-2"></td>
          <td className="border border-gray-300 px-2 md:px-4 py-2"><b>	A. Students Oriented</b></td>  
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">1</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Research Project activities	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">2</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Field Survey of Orphan Child Homes	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students</td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Survey of Old Age Home	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">4</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Health awareness Programme for Katkari,Kolati, Vasudev, Joshi (kudmude) etc.community	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Field visit of Homeless	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">6</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Guest Lecture Series	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">7</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Special Lecture Series	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">8</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Survey of Dam displacement people	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr >
          <td className="border border-gray-300 px-2 md:px-4 py-2"></td>
          <td className="border border-gray-300 px-2 md:px-4 py-2"><b>	B.Faculty Orientedprogrammes</b></td>  
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">9</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Minor Research	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Faculty</td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">10</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Minor Research		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Faculty</td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">11</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Seminar	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">12</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Workshops		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">13</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Training programme		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty
     </td>
     </tr>
     <tr >
          <td className="border border-gray-300 px-2 md:px-4 py-2"></td>
          <td className="border border-gray-300 px-2 md:px-4 py-2"><b>	C. Society Oriented Activities</b></td>  
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">14</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Environmental Issues and Social Exclusion		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">15</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Seminar on problems of Third Gender	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">16</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Political participation of Hilly Area Villages	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">17</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Socio-economic Study of Hilly area Villages	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">18</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Problems of SC. ST, OBC and NT – DNT Communities	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">19</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Socio-economic Study of Minority Communities		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">20</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Minority Rights in India	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">21</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Right to Education and Constitution of India		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">22</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Resurgence of Nationalism, Ethnic Conflict and Human Rights		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">23</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">  Engagement with Civil Society with regard to elimination of Child labour in Agricultural Activities		</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Students /Faculty/ People/ Society
     </td>
     </tr>
     <tr>
     <td className="border border-gray-300 px-2 md:px-4 py-2">24</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2"> Equal Opportunity, Social Justice	 	</td>
     <td className="border border-gray-300 px-2 md:px-4 py-2">Students /Faculty/ People/ Society
     </td>
     </tr>



     </tbody>
 </table>

      </div>
    ),
  },
  "Dr. Chintaman Dwarkanath Deshmukh Chair in Financial Inclusion​": {
    "Introduction": " Financial inclusion policy is one of the most important part of the inclusive growth policy of the Government of India. An inclusive society is one in which its members have equal opportunities for full and meaningful participation in various developmental activities and its benefits. Inclusive growth is economic growth that raises standards of livings for broad swaths of a population. Proponents for inclusive growth warn that inequitable growth may have adverse political outcomes. It includes social inclusion and Financial Inclusion. Financial Inclusion means that individuals and businesses have access to useful and affordable financial products and services that meet their needs transactions, payments, savings, credit and insurance delivered in a responsible and sustainable way.",
    "Objectives": (
      <div>
        <h2 className="text-lg font-bold">The Chair is academic mechanism for work on following directions :</h2>
        <ul className="list-disc ml-5">
          <li>Create awareness about Financial Inclusion among the Rural and Marginalized Society
          </li>
          <li> Conduct awareness with the help of GOs and NGOs working in this area
          </li>
          <li> Conduct Policy Oriented Study and Formulating policies for Financial Inclusion
          </li>
          <li>  Development of New Financial Products and Services for effective Financial Inclusion
          </li>
          <li>Provide guidance to the Research Students in the area of Financial Inclusion
          </li>
          <li>  Develop literature, empirical data base and reference study material for learners, researchers and policy makers
          </li>
          <li> Conduct any other Programmes and activities related to Financial Inclusion
          </li>
        </ul>
      </div>
    ),
    "Expected": (
        <div>
          <h2 className="text-lg font-bold">Expected outcomes:</h2>
          <ul className='list-disc ml-5'>
          <li> Awareness about rights, obligations and responsibilities
          </li>
          <li>Confidence building and leadership abilities
          </li>
          <li> Skill Development and Entrepreneurial Skills
          </li>
          <li>Independent Decision making abilities
          </li>
          <li> Increasing participation in economic, social and cultural activities
          </li>
          <li> Development of Women&apos;s Self Esteem
          </li>
          <li>Equal Opportunities in the all fields of life
          </li>

         </ul>
            </div>
      ),
    "Proposed Activities": (
      <div>
          <h2 className="text-lg font-bold">A. Awareness Programme: </h2>
          <ul className='list-disc ml-5'>
            <li>Awareness about rights
            </li>
            <li>Awareness about legal protection to the women
            </li>
            <li>Awareness about Government schemes and policies
            </li>
            <li> Financial Literacy Programme
            </li>
            <li> IT Literacy Programme
            </li>

            </ul>
            <h2 className="text-lg font-bold p-2">B.Education and Training: </h2>
          <ul className='list-disc ml-5'>
            <li>Skill development Courses
            </li>
            <li> Entrepreneurship Development Course
            </li>
            <li>Marketing and Management Courses
            </li>
            <li>Leadership Development Training
            </li>
            <li> Need based Certificate, Diploma and Advanced Diploma Courses
            </li>

            </ul>
            <h2 className="text-lg font-bold p-2">C.  Research and Development : </h2>
          <ul className='list-disc ml-5'>
            <li> Ph.D. Programme
            </li>
            <li>Minor and Major Research Projects
            </li>
            <li>Collection of Empirical Data
            </li>
            <li>Policy Oriented Project Work
            </li>
            <li> Organization of Seminar, conferences and workshops
            </li>

            </ul>

      </div>
    ),
    "Advisory Board":( 
      <div>
      <h2 className="text-lg font-bold mb-4">There will be advisory Board for this Chair :
      </h2>
      <table className="md:min-w-full border border-black text-sm md:text-base">
        <thead className="bg-gray-400">
          <tr>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Sr.No</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Name of the Activity</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Target Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">1</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Hon&apos;ble Vice-Chancellor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chairman
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">2</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One member Nominated by Academic Council</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
            </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One Member Nominated by Board of Governance</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">4</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Expert in the field of Women Empowerment</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            / Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Officer - District Women & Child Development Office</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member /Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">6</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Dean, Faculty of Humanities</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
           </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">7</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chair Professor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member Secretary
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    ),
  },
  "Sou.Laxmibai Bhaurao Patil Chair in Women Empowerment": {
    "Introduction": "The Sou. Laxmibai Bhaurao Patil Chair on Women Empowerment of Karmaveer Bhaurao Patil University, Satara is the platform for the Women empowerment and welfare of the women especially women from the disadvantaged groups of the society. The chair on Women's Empowerment promotes Gender Equality, education and training, skill development and networking to support women and conducting collaborative work. Women's empowerment can be defined to promoting women's sense of self-worth, their ability to determine their own choices, and their right to influence social change for themselves and others. It is closely aligned with female empowerment a fundamental human right that's also key to achieving a more peaceful, prosperous world.",
    "Vision": "“ To Educate, Aware, Train and Empower Women for Better Society “",
    "Objectives":(
     <div>
      <h2 className="text-lg font-bold">The Centre is mandated to pursue the following objectives:</h2>
        <ul className='list-disc ml-5'>
          <li>Conduct awareness programme with the help of GOs and NGOs working in this area.
          </li>
          <li>Conduct education and training programme for women empowerment
          </li>
          <li> Organize skill development courses for women and girl students
          </li>
          <li> Conduct survey and special studies in the various aspects of women empowerment
          </li>
          <li> Support to the government for implementation of schemes and policies
          </li>
          <li> Provide policy inputs to the government for women empowerment
          </li>
          <li> Conduct essential activities for women empowerment
          </li>
          <li> Conduct any other related activities
          </li>
        </ul>
     
     </div>

    ),
"Expected": (
        <div>
          <h2 className="text-lg font-bold">Expected outcomes:</h2>
          <ul className='list-disc ml-5'>
          <li> Awareness about rights, obligations and responsibilities
          </li>
          <li>Confidence building and leadership abilities
          </li>
          <li> Skill Development and Entrepreneurial Skills
          </li>
          <li>Independent Decision making abilities
          </li>
          <li> Increasing participation in economic, social and cultural activities
          </li>
          <li> Development of Women&apos;s Self Esteem
          </li>
          <li>Equal Opportunities in the all fields of life
          </li>

         </ul>
            </div>
      ),   
"Proposed Activities": (
      <div>
          <h2 className="text-lg font-bold">A. Awareness Programme: </h2>
          <ul className='list-disc ml-5'>
            <li>Awareness about rights
            </li>
            <li>Awareness about legal protection to the women
            </li>
            <li>Awareness about Government schemes and policies
            </li>
            <li> Financial Literacy Programme
            </li>
            <li> IT Literacy Programme
            </li>

            </ul>
            <h2 className="text-lg font-bold p-2">B.Education and Training: </h2>
          <ul className='list-disc ml-5'>
            <li>Skill development Courses
            </li>
            <li> Entrepreneurship Development Course
            </li>
            <li>Marketing and Management Courses
            </li>
            <li>Leadership Development Training
            </li>
            <li> Need based Certificate, Diploma and Advanced Diploma Courses
            </li>

            </ul>
            <h2 className="text-lg font-bold p-2">C.  Research and Development : </h2>
          <ul className='list-disc ml-5'>
            <li> Ph.D. Programme
            </li>
            <li>Minor and Major Research Projects
            </li>
            <li>Collection of Empirical Data
            </li>
            <li>Policy Oriented Project Work
            </li>
            <li> Organization of Seminar, conferences and workshops
            </li>

            </ul>

      </div>
    ), 
 "Advisory Board":( 
      <div>
      <h2 className="text-lg font-bold mb-4">There will be advisory Board for this Chair :
      </h2>
      <table className="md:min-w-full border border-black text-sm md:text-base">
        <thead className="bg-gray-400">
          <tr>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Sr.No</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Name of the Activity</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Target Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">1</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Hon&apos;ble Vice-Chancellor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chairman
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">2</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One member Nominated by Academic Council</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
            </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One Member Nominated by Board of Governance</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">4</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Expert in the field of Women Empowerment</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            / Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Officer - District Women & Child Development Office</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member /Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">6</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Dean, Faculty of Humanities</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
           </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">7</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chair Professor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member Secretary
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    ), 
   },
  "Dr. Pandurang Vasudeo Sukhatme Chair in Science for Sustainable Society": {
    "Introduction": "Karmaveer Bhaurao Patil University, Satara is a State Public University established in 2022 under Maharashtra State Public University Act – 2016 Section 3 (6) with the financial support from Rashtriya Uchchtar Shiksha Abhiyan (RUSA) – a joint initiative of State Government of Maharashtra and Government of India. The varsity is a cluster of highly performing autonomous colleges including Yashavantrao Chavan Institute of Science, Satara (lead college), Dhananjayrao Gadgil College of Commerce, Satara (constituent college) and Chhatrapati Shivaji College, Satara (constituent). The major objective of the university is to improve the quality of education and enhance capacity to become dynamic and demand drive. It aims to promote cutting-edge research and to create outstanding conditions for young scholars at universities, to deepen cooperation between disciplines and institutions, to strengthen national/ international cooperation of research. It shall serve as a platform for communication, collaboration and co-operation that will optimize scarce resources as well as free students from the autocracy of boundaries and the constraints of location using emergent IT tools. The concept combines the best in traditional systems with the new opportunities for knowledge enhancement. Since the establishment, the university aimed at translation of research based extension to individuals and society. The chair will provide the opportunity to students, individuals and different societal groups towards the ideas for science involvement for betterment of society focusing on the sectors include Agriculture, Health, Education, Vocational Training, Business Processing technologies etc which will indirectly help for doubling India's rural GDP. Through this chair, we try and welcome innovative ways of agro based rural industries/Industrial technologies such as Vermicomposting, Biofertilizers, Candle making, Dairy activities, Mushroom cultivation, floriculture, paper bag making, medicinal plant cultivation, apiculture etc. Moreover, different awareness workshops, training programs will be organized to different societal groups.",
    "Vision": "To run the activities and courses dedicated towards involvement of science in societal development focusing overall development of rural technology and scientific solutions to the social causes through retrieving funds under CSR (Corporate- Social Responsibility) industry and corporate sectors as well as from MSME, Govt. of India.",
    "Objectives":(
      <div>
        <h2 className="text-lg font-bold">The Chair is academic mechanism for work on following directions :
        </h2>
        <ul className='list-disc ml-5'>
          <li>To assess the fundamental needs of rural area, people and society.
          </li>
          <li> To act as basis for providing rural entrepreneurships.
          </li>
          <li>To develop safe and eco-friendly technologies and their transformation to villagers.
          </li>
          <li>To conserve and promote indigenous knowledge
          </li>
          <li>Socio-nutritional-economic development of indigenous peoples through appropriate integrated technology and awareness
          </li>
          <li> To aware peoples regarding government policies.
          </li>
          <li>To develop skill in students to for aforementioned tasks by commencing various courses
          </li>
          <li> To conduct any other related activities
          </li>

        </ul>
      </div>
    ),
    "Proposed Initiatives/Activities": (
      <div>
        <h2 className="text-lg font-bold p-2">The Chair is academic mechanism for work on following directions :</h2>
    <ul className='list-disc ml-5'>
      <li>Awareness Programmes  </li>
      <li>Collaborative Activities with research organizations and industry      </li>
      <li>Capacity building initiatives      </li>
      <li>Expert Lecture Series      </li>
      <li> Research Projects      </li>
      <li>Community Engagement Programme      </li>
      <li> Training and training modules      </li>
      <li> Workshop/Seminar/Conferences      </li>
      <li>Organization of Hackathon/Ideathon/Start-up/Skill competitions      </li>
      <li>Technology development for renewable energy sources      </li>
      <li>Small Scale and Agro-Processing Training      </li>
      <li>Soil-Water Testing, Agriculture and Agro product Entrepreneurship Training      </li>
      <li>Organic Farming, Integrated Pest Management and Remote Sensing      </li>

    </ul>

      </div>
    ),
    "Proposed Courses": <b> The Chair will run different courses such as SKILL, Diploma, Value Added, Product Design and Development, Solutions to various environmental issues, Technology Development etc.</b>,
    "Areas of Priority":(
      <div>
        <h2 className="text-lg font-bold p-2">In general, the priority areas for Chair are those that ensure the overall prosperity and wellbeing of the society through the application of science and technology and are of direct relevance and benefit to the people. Broadly, the scientific areas identified for undertaking the activities and programmes of the Chair include but not restricted to following,        </h2>
        <ul className='list-disc ml-5'>
          <li>Sustainable and Precision Agricultural          </li>
          <li> Materials for societal wellbeing          </li>
          <li>Food Processing and Micro-electronics          </li>
          <li> Science popularisation – science centres/museums          </li>
          <li> Information & Communication Technology          </li>
          <li>Bio-safety and Bio-ethical Issues          </li>
          <li>Protection of Intellectual Property Rights of Traditional Knowledge          </li>
          <li> Public-Private Partnership for Technological Innovation          </li>
          <li>Technology Transfer          </li>
          <li>Ecology, Environment and Biodiversity          </li>
          <li> Any Other Subject/Topic Relevant to the Science for Societal Development          </li>
       </ul>
      </div>
    ),
    "Expected Outcomes":(
      <div>
          <ul className='list-disc ml-5'>
            <li>Generation of baseline data of socio-economic status of the peoples of Satara and adjoining area.
            </li>
            <li>The awareness programs, various activities and courses will enrich the basic understanding of science, technology and its transfer to the society
            </li>
            <li> Skill training will promote the rural entrepreneurships
            </li>
            <li>Safe and eco-friendly practices will reduce the environmental degradation.
            </li>
            <li> Opportunity to promote indigenous knowledge through various scientific tools.
            </li>
            <li>Individuals will learn about different schemes and government policies for setting new start-ups.
            </li>
            <li>Solutions to the various societal needs and issues.
            </li>

            </ul>

      <table className="md:min-w-full border border-black text-sm md:text-base">
        <thead className="bg-gray-400">
          <tr>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Sr.No</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Name of the Activity</th>
            <th className="border border-gray-300 px-2 md:px-4 py-2">Target Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">1</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Hon&apos;ble Vice-Chancellor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chairman
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">2</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One member Nominated by Academic Council</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
            </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">3</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">One Member Nominated by Board of Governance</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">4</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Expert in the field of Women Empowerment</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
            / Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">5</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Officer - District Women & Child Development Office</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member /Faculty</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">6</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Dean, Faculty of Humanities</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member
           </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 md:px-4 py-2">7</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Chair Professor</td>
            <td className="border border-gray-300 px-2 md:px-4 py-2">Member Secretary
            </td>
          </tr>
        </tbody>
      </table>



      </div>
    ),
  },
};

export default function ChairsPage() {
  const [activeVerticalTab, setActiveVerticalTab] = useState(verticalTabs[0]);
  const [activeNestedTab, setActiveNestedTab] = useState(nestedTabs[verticalTabs[0]][0]);

  return (

<div>
      
        {/* Background Section */}
        <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
          Centers & Chairs
          </h1>
          <div className="border-t-2 border-white w-[70%] max-w-[500px] my-4" />
          <div className="text-white py-3 px-6 flex items-center space-x-2 text-sm">
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
            <span className="text-[#fbbf24] font-semibold">Centers & Chairs</span>
          </div>
        </div>
      </div>



                <div className="flex flex-col md:flex-row p-4 my-3 mx-2 border-[3] gap-4">
  {/* Vertical Tabs – Accordion on mobile, sidebar on desktop */}
  <aside className="w-full md:w-1/4 bg-white space-y-3 my-12">
    {verticalTabs.map((chair) => (
      <div key={chair} className="border rounded overflow-hidden">
        {/* Vertical Tab Button */}
        <button
          onClick={() => {
            if (activeVerticalTab === chair && window.innerWidth < 768) {
              setActiveVerticalTab(''); // toggle off
            } else {
              setActiveVerticalTab(chair);
              setActiveNestedTab(nestedTabs[chair][0]);
            }
          }}
          className={`w-full text-left p-3 font-semibold flex justify-between items-center ${
            activeVerticalTab === chair
              ? 'bg-black text-white'
              : 'bg-[#880e4f] text-white hover:bg-black'
          }`}
        >
          {chair}
          <span className="md:hidden">{activeVerticalTab === chair ? '−' : '+'}</span>
        </button>

        {/* Accordion Content - only visible on small screens */}
        <div
          className={`md:hidden transition-all duration-300 ${
            activeVerticalTab === chair ? 'max-h-screen p-4' : 'max-h-0 overflow-hidden'
          } bg-gray-100 space-y-4`}
        >
          {/* Horizontal Tabs */}
          <div className="flex flex-wrap gap-2">
            {nestedTabs[chair].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveNestedTab(tab)}
                className={`px-4 py-2 font-medium rounded ${
                  activeNestedTab === tab
                    ? 'bg-black text-white'
                    : 'bg-[#fdd835] hover:bg-[#880e4f] hover:text-white text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[300px] overflow-y-auto pr-2 text-justify">
            {content[chair][activeNestedTab]}
          </div>
        </div>
      </div>
    ))}
  </aside>

  {/* Main content area – shown only on medium+ screens */}
  <main className="hidden md:block flex-1 p-4 border-[3]">
    <h1 className="text-2xl my-2 font-bold text-[#880e4f]">{activeVerticalTab}</h1>

    <div className="bg-white p-4 border-[3] shadow text-justify leading-relaxed">
      {/* Horizontal Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {nestedTabs[activeVerticalTab]?.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveNestedTab(tab)}
            className={`px-4 py-2 font-medium rounded ${
              activeNestedTab === tab
                ? 'bg-black text-white'
                : 'bg-[#fdd835] hover:bg-[#880e4f] hover:text-white text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto pr-2 max-h-[300px]">
        {content[activeVerticalTab]?.[activeNestedTab]}
      </div>
    </div>
  </main>
</div>



    </div>
  );
}
