'use client'
import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-gray-200 shadow-md"
      >
        <span className="text-base md:text-2xl font-bold  text-[#8a0c56] font-['Times_New_Roman'] ">{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
}
