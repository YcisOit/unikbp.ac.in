'use client'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer' // ✅ You missed this import

const resourcesTop = [
  { title: 'SWAYAM', href: '#', img: '/Swayam.jpg' },
  { title: 'NAD', href: '#', img: '/NAD.jpg' },
  { title: 'UG/PG MOOCs', href: '#', img: '/moocs.png' },
  { title: 'SHODHGANGA', href: '#', img: '/SodhGanga-1.png' },
  { title: 'e-PG PATHSHALA', href: '#', img: '/ePGPathshala.jpg' },
  { title: 'SWAYAM PRABHA', href: '#', img: '/SwayamPrabha.jpg' },
]

const resourcesBottom = [
  { title: 'EXAMINATION', href: '#', img: '/examination.png' },
  { title: 'ADMISSION', href: '#', img: '/Icon_admission.png' },
  { title: 'SCHOLARSHIP', href: '#', img: '/icon_scholarship.png' },
  { title: 'REQUIREMENT', href: '#', img: '/YJU.png' },
  { title: 'IQAC', href: '#', img: '/icon_iqac.png' },
  { title: 'TENDERS', href: '#', img: '/icon_tender.png' },
]

const ResourceCard = ({ title, href, img }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.10, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Link
        href={href}
        className="flex flex-col items-center justify-center p-1 bg-white hover:shadow-xl  w-full shadow-xl hover:scale-105 transform transition duration-300"
      >
        <div className="relative w-20 h-16 sm:w-24 sm:h-20">
          <Image src={img} alt={title} fill className="object-contain" />
        </div>
        <span className="text-black font-bold font-serif text-center text-[16px] break-words">
          {title}
        </span>
      </Link>
    </motion.div>
  )
}

const ResourceGrid = () => {
  return (
    <div className="w-full bg-white py-3">
      {/* Top Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4 px-4 sm:px-6 md:px-10">
        {resourcesTop.map((res, i) => (
          <ResourceCard key={i} {...res} />
        ))}
      </div>

{/* Marquee Bar */}
<div className="w-full bg-gray-200 mb-4 border-8 border-[#8b0a52] shadow-xl">
  <div className="max-w-screen-xl p-1 mx-auto">
    <Marquee pauseOnHover gradient={false} speed={50}>
      <Link
        href="/university-logo.jpg"
        className="text-black font-semibold underline mr-10" // Added margin-right
        target="_blank"
      >
        University Logo Download
      </Link>
      <Link
        href="https://unikbp.ac.in/bba_recruitment/"
        className="text-black font-semibold underline"
        target="_blank"
      >
        bba_recruitment
      </Link>
    </Marquee>
  </div>
</div>


      {/* Bottom Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4 sm:px-6 md:px-10">
        {resourcesBottom.map((res, i) => (
          <ResourceCard key={i} {...res} />
        ))}
      </div>
    </div>
  )
}

export default ResourceGrid
