import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { WorkLocations } from '@/constants/workLocations'

const LocationSection = () => {
  return (
    <section className="relative py-5 md:py-10 pb-8 md:pb-14 bg-gradient-to-br from-[#fff0f6] via-[#ffe6f0] to-[#fff8fb] overflow-hidden">
  
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    {/* Heading */}
    <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2">
      We Proudly Serve
    </h2>

    {/* Subtext */}
    <p className="text-[15px] tracking-wide font-serif   sm:text-[16px] text-[#555] leading-relaxed mb-6">
      Bringing top-quality services to your doorstep with professionalism and care — 
      across major cities in NCR.
    </p>

    {/* City List */}
    <div className="flex flex-wrap justify-center gap-6">
      {WorkLocations?.map((city, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                     bg-white border border-[#AF0D5A] shadow-md 
                     hover:bg-[#AF0D5A] hover:text-white 
                     transition-all duration-300 text-[#AF0D5A] font-medium 
                     hover:shadow-lg hover:scale-105"
        >
          <FaMapMarkerAlt className="text-lg" />
          {city}
        </span>
      ))}
    </div>
  </div>
</section>

  )
}

export default LocationSection