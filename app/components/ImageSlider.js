"use client"; // Ensures it's a client component
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Form from "./Form";

// Import images
import image1 from "../../public/image1.jpeg";
import image2 from "../../public/image2.jpeg";
import image3 from "../../public/image3.jpeg";
import image4 from "../../public/image4.jpeg";

const images = [image1, image2, image3, image4];

const ImageSlider = () => {
  return (
    <div className="w-full h-[30vh] md:h-[70vh]"> {/* Reduced height */}

   
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
    
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        
        
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
               <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0} // Load first image faster
            />
        
          </SwiperSlide>
          
          
        ))}
           {/* Custom Navigation Buttons */}
         
           <div className="absolute inset-0 flex justify-end items-center z-20 px-50 ">
  {/* Desktop & Tablet - Show Form */}
  <div className="hidden sm:block">
    <Form />
  </div>

  {/* Mobile - Show Login Button */}
  <button className="sm:hidden bg-blue-500 text-white px-4 py-2 rounded-md">
    Login
  </button>
</div>

      </Swiper>
      
  
        {/* Custom Pagination Styling */}
        <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color:  cyan  !important;
          opacity: 1;
        }
      `}
      </style>
    </div>
  );
};

export default ImageSlider;
