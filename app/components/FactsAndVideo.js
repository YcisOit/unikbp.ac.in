'use client'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Activity Images
const recentActivities = [
  '/images/activity1.jpg',
  '/images/activity2.jpg',
  '/images/activity3.jpg',
]

// Custom Arrows
const CustomNextArrow = (props) => {
  const { className, onClick } = props
  return <div className={`${className} text-[#8b0a52] z-10`} onClick={onClick} />
}

const CustomPrevArrow = (props) => {
  const { className, onClick } = props
  return <div className={`${className} text-[#8b0a52] z-10`} onClick={onClick} />
}

const FactsAndVideo = () => {
  // InView for animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <div className="bg-gray-200 py-10 px-4 sm:px-6 lg:px-12 mt-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Carousel Section */}
        <div className="md:col-span-2">
          <h2 className="text-[35px] font-serif font-bold text-[#8b0a52] mb-4 text-center">
            Recent Activities
          </h2>
          <div className="w-[90%] mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Slider {...settings}>
                {recentActivities.map((img, index) => (
                  <div key={index} className="px-2">
                    <div className="bg-white shadow-lg rounded-md border-2 border-black overflow-hidden h-45 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={`Activity ${index + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[35px] font-serif font-bold text-[#8b0a52] mb-4">
            Video Tour
          </h2>
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
          <div className="aspect-video w-full shadow-lg overflow-hidden">
        
            <iframe
              src="https://www.youtube.com/embed/hk4wd0PBD70"
              title="Video Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
           
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FactsAndVideo
