import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const member = [
    {
      Sr: "1",
      AffiliationForm: "०१ नवीन अभ्यासक्रम प्रस्ताव प्रपत्र - अ",
      wordlink: "/pdf/Wordfile/०१-नवीन-अभ्यासक्रम-प्रस्ताव-प्रपत्र-अ.docx",
      pdflink: "/pdf/०१-नवीन-अभ्यासक्रम-प्रस्ताव-प्रपत्र-अ.pdf",
    },
    {
      Sr: "2",
      AffiliationForm: "०२ नवीन अभ्यासक्रम प्रस्ताव प्रपत्र - ब",
      wordlink: "/pdf/Wordfile/०२-नवीन-अभ्यासक्रम-प्रस्ताव-प्रपत्र-ब.docx",
      pdflink: "/pdf/०२-नवीन-अभ्यासक्रम-प्रस्ताव-प्रपत्र-ब_1.pdf",
    },
    {
      Sr: "3",
      AffiliationForm: "०३ नवीन अभ्यासक्रम प्रस्ताव शिफारस व हमीपत्रे",
      wordlink: "/pdf/Wordfile/०३-नवीन-अभ्यासक्रम-प्रस्ताव-शिफारस-व-हमीपत्रे.docx",
      pdflink: "/pdf/०३-नवीन-अभ्यासक्रम-प्रस्ताव-शिफारस-व-हमीपत्रे.pdf",
    },
    {
      Sr: "4",
      AffiliationForm: "०४ नवीन स्कील व CoC कोर्सेस प्रस्ताव",
      wordlink: "/pdf/Wordfile/०४-नवीन-स्कील-व-CoC-कोर्सेस-प्रस्ताव.docx",
      pdflink: "/pdf/०४-नवीन-स्कील-व-CoC-कोर्सेस-प्रस्ताव.pdf",
    },
    {
      Sr: "5",
      AffiliationForm: "०५ नैसर्गिक विस्तार मान्यता प्रस्ताव",
      wordlink: "/pdf/Wordfile/०५-नैसर्गिक-विस्तार-मान्यता-प्रस्ताव.docx",
      pdflink: "/pdf/०५-नैसर्गिक-विस्तार-मान्यता-प्रस्ताव.pdf",
    },
    {
      Sr: "6",
      AffiliationForm: "Lab Recognition Proforma - KBPU",
      wordlink: "/pdf/Wordfile/Lab-Recogniton-Proforma-KBPU.docx",
      pdflink: "",
    },
    {
      Sr: "7",
      AffiliationForm: "Recognition of PhD Center - Proforma - KBPU",
      wordlink: "/pdf/Wordfile/Recognition-of-PhD-Centre-Proforma-KBPU.docx",
      pdflink: "",
    },
    {
      Sr: "8",
      AffiliationForm: "Proforma for Staff Approval-Self Finance Program",
      wordlink:
        "/pdf/Wordfile/Proforma-for-Staff-Approval-Self-Finance-Programme.doc",
      pdflink: "",
    },
    {
      Sr: "9",
      AffiliationForm: "Proforma for Extra Student(10% and 40%)",
      wordlink: "",
      pdflink: "/pdf/Proforma-for-Extra-Students.pdf",
    },
    {
      Sr: "10",
      AffiliationForm: "Affiliation and Extension KBPU -Format A",
      wordlink: "",
      pdflink: "",
    },
    {
      Sr: "11",
      AffiliationForm: "Affiliation and Extension KBPU -Format B",
      wordlink: "/pdf/Wordfile/Affiliation-and-Extension-KBPU-Format-B-1.docx",
      pdflink: "",
    },
  ];

  return (
    <div className="w-full">
      {/* Background Section */}
      <div
        className="h-[250px] bg-cover bg-center relative bg-black"
        style={{ backgroundImage: "url('/images/tback.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-45" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold font-['Times_New_Roman']">
            Affiliation
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
            <Link href="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#fbbf24] font-semibold">Affiliation</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-4 w-full flex justify-center">
        <div className="overflow-x-auto w-full max-w-6xl">
          <table className="min-w-full border border-black text-sm md:text-base">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Sr.No
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Affiliation Form
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Download Word
                </th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">
                  Download PDF
                </th>
              </tr>
            </thead>
            <tbody>
              {member.map((m) => (
                <tr key={m.Sr}>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {m.Sr}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {m.AffiliationForm}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {m.wordlink ? (
                      <a
                        href={m.wordlink}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {m.pdflink ? (
                      <a
                        href={m.pdflink}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
