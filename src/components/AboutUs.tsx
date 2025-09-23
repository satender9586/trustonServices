import React from "react";
import { Stats } from "@/constants/about";
import EnqueryPopUp from "./Models/EnqueryPopUp";

const AboutUs = () => {
  

  return (
    <section className="bg-gradient-to-b from-[#EBF7FD] via-white to-[#FDEBF3] py-5 sm:py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 text-center max-w-5xl">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-4xl md:leading-12  tracking-[1.5px] md:tracking-[2px] md:font-semibold text-[#AF0D5A] mb-2 md:mb-2">
          Who We Are
        </h2>

        {/* Description */}
        <p className="md:hidden  text-[15px] sm:text-lg text-[#747474] leading-relaxed max-w-3xl mx-auto mb-10">
          At{" "}
          <span className="text-[#AF0D5A] font-semibold">
            Trust On Services
          </span>
          , we provide expert repair, installation, and maintenance
        </p>
        <p className="hidden  md:block text-[15px] tracking-wide sm:text-[16px] text-[#747474] leading-relaxed mb-6">
          At{" "}
          <span className="text-[#AF0D5A] font-semibold">
            Trust On Services
          </span>
          , we provide expert repair, installation, and maintenance for all
          major home appliances. With <strong>7+ years</strong> of experience,
          our certified technicians ensure **fast, reliable, and professional
          service** every time.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mb-10">
          {Stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-7 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-t-4 border-[#AF0D5A]"
            >
              <div className="flex flex-col items-center">
                <div className="text-[#AF0D5A] text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {<item.icon /> }
                </div>
                <span className="block text-base sm:text-lg  font-semibold text-gray-800 mb-1  tracking-wide  group-hover:text-[#AF0D5A] transition-colors">
                  {item.label}
                </span>
                <p className="tracking-wide text-sm text-gray-600  space-y-1 leading-snug sm:leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <EnqueryPopUp>
            <button className="px-8 py-3 bg-[#AF0D5A] hover:bg-[#92144b] transition-colors text-white rounded-full shadow-lg text-base font-semibold tracking-wide">
              Book a Service
            </button>
          </EnqueryPopUp>
          <span className="text-sm text-[#777] font-serif">
            Certified • Fast • Reliable
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
