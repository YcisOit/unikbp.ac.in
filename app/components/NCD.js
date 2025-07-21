"use client";
import React, { useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";


function NCD ()  {


  {/*Download */}
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

 {/*News */}

  const inquiries1 = [
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
  
  const News = () => {
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
        <div ref={scrollRef} className="absolute flex flex-col gap-1 w-full h-full">
          {inquiries1.map((inquiry, index) => (
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


 {/*circulars */}


  const inquiries2 = [
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
  
  const Circulars = () => {
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
        <div ref={scrollRef} className="absolute flex flex-col gap-1 w-full h-full">
          {inquiries2.map((inquiry, index) => (
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

















  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-6 p-4 lg:p-10 bg-gray-100">
      {/* Main Wrapper with responsive flex/grid */}
      <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6 w-[95%]">
        
        {/* Circulars Section */}
        <div className="w-full md:w-[48%] lg:w-full flex flex-col">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10 pl-4 sm:pl-6 md:pl-8">
            <div>
              <h2 className="text-[22px] sm:text-[25px] text-black font-serif text-center">
                Circulars
              </h2>
              <span className="block w-[80px] sm:w-[100px] h-[3px] bg-black mt-[4px] mb-[6px] lg:mb-[5px]"></span>
            </div>
            <button className="bg-[#0dc8e5] text-white border-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold cursor-pointer rounded-none uppercase mb-3 sm:mb-5 hover:bg-blue-700">
              View All
            </button>
          </div>
          <Circulars />
        </div>

        {/* Download Section */}
        <div className="w-full md:w-[48%] lg:w-full flex flex-col">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10 pl-4 sm:pl-6 md:pl-8">
            <div>
              <h2 className="text-[22px] sm:text-[25px] text-black font-serif text-center">
                Download
              </h2>
              <span className="block w-[80px] sm:w-[100px] h-[3px] bg-black mt-[4px] mb-[6px] lg:mb-[5px]"></span>
            </div>
            <button className="bg-[#0dc8e5] text-white border-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold cursor-pointer rounded-none uppercase mb-3 sm:mb-5 hover:bg-blue-700">
              View All
            </button>
          </div>
          <Download />
        </div>

        {/* News Section */}
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10 pl-4 sm:pl-6 md:pl-8">
            <div>
              <h2 className="text-[22px] sm:text-[25px] text-black font-serif text-center">
                News
              </h2>
              <span className="block w-[80px] sm:w-[100px] h-[3px] bg-black mt-[4px]  mb-[6px] lg:mb-[5px]"></span>
            </div>
            <button className="bg-[#0dc8e5] text-white border-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold cursor-pointer rounded-none uppercase mb-3 sm:mb-5 hover:bg-blue-700">
              View All
            </button>
          </div>
          <News />
        </div>

      </div>
    </div>
  );
};

export default NCD;
