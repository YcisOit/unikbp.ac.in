"use client";
import React, { useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const inquiries = [
  { id: 1, title: "परिपत्रक क्र.५०(२५-२६)- रयत सेवकांच्या बदल्यांचे धोरण २०२५-२६", link: "#" },
  { id: 2, title: "Scholarship Application", link: "#" },
  { id: 3, title: "परिपत्रक क्र.४१(२४-२५)- संगणक विभाग - Interactive Panel बसविणे", link: "#" },
  { id: 4, title: "नवीन शैक्षणिक वर्ष २०२५-२६ साठी प्रवेश प्रक्रिया सुरु!", link: "#" },
  { id: 1, title: "परिपत्रक क्र.५०(२५-२६)- रयत सेवकांच्या बदल्यांचे धोरण २०२५-२६", link: "#" },
  { id: 2, title: "Scholarship Application", link: "#" },
  { id: 3, title: "परिपत्रक क्र.४१(२४-२५)- संगणक विभाग - Interactive Panel बसविणे", link: "#" },
  { id: 4, title: "नवीन शैक्षणिक वर्ष २०२५-२६ साठी प्रवेश प्रक्रिया सुरु!", link: "#" },
  { id: 1, title: "परिपत्रक क्र.५०(२५-२६)- रयत सेवकांच्या बदल्यांचे धोरण २०२५-२६", link: "#" },
  { id: 2, title: "Scholarship Application", link: "#" },
  { id: 3, title: "परिपत्रक क्र.४१(२४-२५)- संगणक विभाग - Interactive Panel बसविणे", link: "#" },
  { id: 4, title: "नवीन शैक्षणिक वर्ष २०२५-२६ साठी प्रवेश प्रक्रिया सुरु!", link: "#" },
  { id: 1, title: "परिपत्रक क्र.५०(२५-२६)- रयत सेवकांच्या बदल्यांचे धोरण २०२५-२६", link: "#" },
  { id: 2, title: "Scholarship Application", link: "#" },
  { id: 3, title: "परिपत्रक क्र.४१(२४-२५)- संगणक विभाग - Interactive Panel बसविणे", link: "#" },
  { id: 4, title: "नवीन शैक्षणिक वर्ष २०२५-२६ साठी प्रवेश प्रक्रिया सुरु!", link: "#" },
];

const Download = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container || isPaused) return;
      scrollAmount += 1;
      container.style.transform = `translateY(-${scrollAmount}px)`;

      if (scrollAmount >= 40) {
        container.appendChild(container.firstElementChild);
        container.style.transition = "none";
        container.style.transform = `translateY(0)`;
        scrollAmount = 0;
      } else {
        container.style.transition = "transform 0.2s linear";
      }
    };

    const interval = setInterval(scroll, 100);

    // Pause on hover
    const stopScrolling = () => setIsPaused(true);
    const startScrolling = () => setIsPaused(false);

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
    };
  }, [isPaused]);

  return (
   

    <div className="relative w-full max-w-[350px] h-[200px]   mx-auto overflow-hidden">
   
      <div ref={scrollRef} className="absolute flex flex-col gap-1 w-full h-full ">
        {inquiries.map((inquiry, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="flex items-center p-2 bg-gradient-to-r from-cyan-500 to-cyan-300 text-white font-bold text-sm md:text-base shadow-md my-1 h-[40px] w-[85%] truncate">
              <span className="truncate w-full">{inquiry.title}</span>
            </div>
            <a
              href={inquiry.link}
              className="bg-cyan-700 p-2 flex items-center justify-center transition-all hover:bg-blue-900 w-[15%] h-[40px] shadow-md"
            >
              <DownloadIcon style={{ fontSize: 20, color: "white" }} />
            </a>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Download;
