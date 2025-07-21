'use client'
import Slider from 'react-slick'
import React from 'react';
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { WidthFull } from '@mui/icons-material'

const images = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
  '/slider4.jpg',
  '/slider5.jpg',
  '/slider6.jpg',
]

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-black/40 p-2 rounded-full text-white"
    onClick={onClick}
  >
    <ChevronRight />
  </div>
)

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-black/40 p-2 rounded-full text-white"
    onClick={onClick}
  >
    <ChevronLeft />
  </div>
)

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100"></div>
    ),
    responsive: [
      {
        breakpoint: 1024, // tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="relative  lg:w-full  overflow-hidden">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomeSlider
