'use client'
import dynamic from 'next/dynamic'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Dynamically import Slider
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
})

export default Slider
