"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaArrowRight,
  FaSnowflake,
  FaTools,
  FaFan,
  FaThermometerHalf,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import EnqueryPopUp from "./Models/EnqueryPopUp";

// Framer Motion variants for icons
const iconVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

const Header: React.FC = () => {
  const icons: React.ElementType[] = [
    FaSnowflake,
    FaFan,
    FaThermometerHalf,
    FaTools,
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#E0F7FA] via-white to-[#FFF0F5] pt-28 pb-20">
      {/* Floating Gradient Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -right-20 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
        >
          {/* Icons */}
          <motion.div className="flex gap-5 sm:gap-6 text-4xl sm:text-5xl text-[#AF0D5A] justify-center flex-wrap">
            {icons.map((Icon, i) => (
              <motion.div
                key={i}
                variants={iconVariants}
                custom={i}
                whileHover={{ scale: 1.2, rotate: 10, color: "#FF4081" }}
                className="transition-all cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[62px] leading-tight tracking-[1.1px] text-[#D81B60]"
          >
            Expert AC Repair Services at Your Doorstep
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="font-sans text-[17px] md:text-[18px] leading-8 md:leading-9 text-[#555555] px-5 max-w-2xl"
          >
            Fast, reliable & affordable <strong>AC repair and maintenance</strong> anywhere in Delhi NCR.
            Book trained professionals <span className="hidden md:inline">and enjoy cool comfort all year round.</span>
          </motion.p>

          {/* Ratings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center"
          >
            <div className="flex text-[#FFD700] gap-1.5 text-[20px]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-[15px] sm:text-sm text-[#666] font-medium tracking-wide">
              Rated 5.0 by 1,000+ Customers
            </span>
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-[#FFF0F5] text-[#D81B60] text-[13px] sm:text-sm px-4 py-1.5 rounded-full font-semibold tracking-wide shadow-md"
          >
            Serving Delhi NCR Since 2016 🚚
          </motion.span>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
          >
            <EnqueryPopUp>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-sans bg-[#D81B60] hover:bg-[#AD1457] transition-all text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              >
                Book Service Now <FaArrowRight />
              </motion.button>
            </EnqueryPopUp>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
