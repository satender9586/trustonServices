"use client";
import React from "react";
import {
  FaArrowRight,
  FaSnowflake,
  FaTools,
  FaFan,
  FaThermometerHalf,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import EnqueryPopUp from "./Models/EnqueryPopUp";

const Header: React.FC = () => {
  const icons: React.ElementType[] = [
    FaSnowflake,
    FaFan,
    FaThermometerHalf,
    FaTools,
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#E0F7FA] via-white to-[#FFF0F5] pt-28 pb-20">
      {/* Static Gradient Blobs */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          {/* Icons */}
          <div className="flex gap-5 sm:gap-6 text-4xl sm:text-5xl text-[#AF0D5A] justify-center flex-wrap">
            {icons.map((Icon, i) => (
              <div key={i} className="cursor-pointer">
                <Icon />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[62px] leading-tight tracking-[1.1px] text-[#D81B60]">
            Expert AC Repair Services at Your Doorstep
          </h1>

          {/* Subtext */}
          <p className="font-sans text-[17px] md:text-[18px] leading-8 md:leading-9 text-[#555555] px-5 max-w-2xl">
            Fast, reliable & affordable <strong>AC repair and maintenance</strong>
            anywhere in Delhi NCR. Book trained professionals{" "}
            <span className="hidden md:inline">
              and enjoy cool comfort all year round.
            </span>
          </p>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
            <div className="flex text-[#FFD700] gap-1.5 text-[20px]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-[15px] sm:text-sm text-[#666] font-medium tracking-wide">
              Rated 5.0 by 1,000+ Customers
            </span>
          </div>

          {/* Badge */}
          <span className="inline-block bg-[#FFF0F5] text-[#D81B60] text-[13px] sm:text-sm px-4 py-1.5 rounded-full font-semibold tracking-wide shadow-md">
            Serving Delhi NCR Since 2016 🚚
          </span>

          {/* CTA Button */}
          <EnqueryPopUp>
            <button className="font-sans bg-[#D81B60] hover:bg-[#AD1457] transition-all text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center">
              Book Service Now <FaArrowRight />
            </button>
          </EnqueryPopUp>
        </div>
      </div>
    </header>
  );
};

export default Header;
