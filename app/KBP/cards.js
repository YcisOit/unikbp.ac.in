"use client";

import React, { useState } from "react";
import Link from "next/link";

const cards = [
  {
    Name: "Yashavantrao Chavan Institute of Science, Satara (Autonomous College) (C-11240)",
    Link: "https://ycis.ac.in",
    Desc: " Nestled in the hills of Sahyadri, is the historic and scenic city Satara, the location of Yashavantrao Chavan Institute of Science. The institute is the member of family Rayat Shikshan Sanstha, a renowned educational trust, founded by Late Padmbhushan Dr. Karmaveer Bhaurao Patil.  ",
    Esta: "1965 ",
    Faculty: "Science",
    NAAC: "SSR Submitted",
  },
  {
    Name: "Dhananjayrao Gadgil College of Commerce, Satara (Autonomous College)(C-11024)",
    Link: "https://dgccsatara.edu.in",
    Desc: "Ours is premiere and reputed single-faculty (Autonomous) Commerce College in the jurisdiction of Shivaji University, Kolhapur, Maharashtra.",
    Esta: "1971  ",
    Faculty: "Commerce",
    NAAC: " A++ 4th Cycle",
  },
  {
    Name: "Chhatrapati Shivaji College, Satara (Autonomous College)(C-11029)",
    Link: "https://csc.ac.in",
    Desc: "Chhatrapati Shivaji College, Satara is the first college of the Rayat Shikshan Sanstha established in 1947 by Karmaveer Bhaurao Patil. It is affiliated to Shivaji University and accredited with ‘B’ Grade by NAAC",
    Esta: "1947  ",
    Faculty: "Arts",
    NAAC: "A+ 3rd Cycle",
  },
];

const InfoCards = () => {
  const [drawerOpen, setDrawerOpen] = useState(false  );

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <div className="sm:hidden flex justify-center mb-4 pt-5">
      <button
  onClick={() => setDrawerOpen(true)}
  style={{ backgroundColor: "#8a0c56" }}
  className="text-white px-4 py-2 rounded-lg shadow-md"
>
  Open Colleges
</button>

      </div>

      {/* Drawer for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden flex flex-col`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Constituent Colleges :</h2>
          <button onClick={() => setDrawerOpen(false)} className="text-xl">
            ×
          </button>
        </div>
        <div className="overflow-y-auto p-4 space-y-4 flex-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-4 shadow"
            >
              <Link href={card.Link} target="_blank">
                <h2 className="text-blue-600 font-semibold hover:underline">
                  {card.Name}
                </h2>
              </Link>
              <p className="text-gray-600 mb-2">{card.Desc}</p>
              <p><strong>Esta:</strong> {card.Esta}</p>
              <p><strong>Faculty:</strong> {card.Faculty || "N/A"}</p>
              <p><strong>NAAC:</strong> {card.NAAC || "N/A"}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards shown normally on larger screens */}
      <div className="hidden sm:flex flex-row flex-wrap justify-center gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 w-80 hover:shadow-lg transition"
          >
            <Link href={card.Link} target="_blank">
              <h2 className="text-blue-600 text-lg font-semibold hover:underline">
                {card.Name}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2">{card.Desc}</p>
            <p><strong>Esta:</strong> {card.Esta}</p>
            <p><strong>Faculty:</strong> {card.Faculty || "N/A"}</p>
            <p><strong>NAAC:</strong> {card.NAAC || "N/A"}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoCards;
