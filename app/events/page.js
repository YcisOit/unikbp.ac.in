'use client';
import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RoomIcon from "@mui/icons-material/Room";

function Footer() {
  const MapComponent = () => {
    return (
      <div className="relative w-full max-w-lg mx-auto">
        <Image
          src="/images/map2.png"
          alt="Maharashtra Map"
          width={600}
          height={400}
          className="w-full h-auto"
        />
        <div
          className="absolute flex flex-col items-center group"
          style={{ top: "60%", left: "23%", transform: "translate(-50%, -50%)" }}
        >
          <a
            href="https://maps.app.goo.gl/nNyEEo5MQETgCXmX8"
            className="p-2 rounded-full hover:transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoomIcon style={{ fontSize: 30, color: "crimson" }} />
          </a>
          <span className="hidden group-hover:block absolute left-full ml-2 bg-gray-500/80 text-white text-sm font-bold px-2 py-1 rounded shadow-md mt-1">
            Karmaveer Bhaurao Patil University, Satara
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <footer className="bg-[#930e5c] text-white py-8 w-full">
      <div className="w-full mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-start [@media(max-width:600px)]:gap-20">
          
          {/* 🔹 Logo & Social Icons */}
          <div className="flex flex-col items-center text-center w-full md:w-50">
            <Image
              src="/images/footer1.png"
              alt="Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <div className="flex space-x-4">
              <a href="#facebook" className="text-white text-lg hover:text-blue-500">
                <FacebookIcon fontSize="large" />
              </a>
              <a href="#twitter" className="text-white text-lg hover:text-blue-400">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="#youtube" className="text-white text-lg hover:text-red-500">
                <YouTubeIcon fontSize="large" />
              </a>
            </div>
          </div>

          {/* 🔹 QUICK LINKS */}
          <div className="w-full md:w-80 text-center md:text-left">
            <h4 className="text-lg font-bold border-b-2 border-white pb-2 mb-1">QUICK LINKS</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer">Free Online Education – SWAYAM</a></li>
              <li><a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer">University Grant Commission</a></li>
              <li><a href="https://www.unishivaji.ac.in/" target="_blank" rel="noopener noreferrer">Shivaji University, Kolhapur</a></li>
              <li><a href="https://www.kbpksksu.edu.in/" target="_blank" rel="noopener noreferrer">Karmaveer Bhaurao Patil University, Satara</a></li>
              <li><a href="https://rayatshikshan.edu/" target="_blank" rel="noopener noreferrer">Rayat Shikshan Sanstha</a></li>
              <li><a href="https://jdhekolhapur.org.in/" target="_blank" rel="noopener noreferrer">Joint Director Kolhapur</a></li>
              <li><a href="https://highereducation.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">Director Higher Education Pune</a></li>
              <li><a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">Maharashtra Shashan</a></li>
            </ul>
          </div>

          {/* 🔹 CONTACT Section */}
          <div className="w-full md:w-70 text-center md:text-left">
            <h4 className="text-lg font-bold border-b-2 border-white pb-2 mb-1">CONTACT</h4>
            <p>📞 Phone: <span className="text-blue-400">02162 233 857</span></p>
            <p>📍 Address: Karmaveer Samadhi Parisar, Satara</p>
            <p>✉ Email: <a href="mailto:secretary@rayatshikshan.edu" className="text-blue-400">secretary@rayatshikshan.edu</a></p>

            {/* 🔹 COLLEGES Section */}
            <div className="w-full md:w-70 mt-2 text-center md:text-left">
              <h4 className="text-lg font-bold border-b-2 border-white pb-2 mb-1">COLLEGES</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><a href="https://www.ycis.ac.in/" target="_blank" rel="noopener noreferrer">Yashwantrao Chavan Institute of Science</a></li>
                <li><a href="http://csc.ac.in/" target="_blank" rel="noopener noreferrer">Chhatrapati Shivaji College, Satara</a></li>
                <li><a href="https://dgccsatara.edu.in/" target="_blank" rel="noopener noreferrer">Dhananjayrao Gadgil College Of Commerce, Satara</a></li>
              </ul>
            </div>
          </div>

          {/* 🔹 GOOGLE MAP */}
          <div className="w-full md:w-80 text-center">
            <h4 className="text-lg font-bold border-b-2 border-white pb-1">GOOGLE MAP</h4>
            <div className="w-full h-67 md:h-80 rounded-lg overflow-hidden mt-0">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm border-t border-white pt-4">
        <p>© Karmaveer Bhaurao Patil University, Satara | Powered by YCIS OIT, Satara</p>
      </div>
    </footer>
  );
}

export default Footer;
