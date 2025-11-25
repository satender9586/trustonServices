"use client";
import React from "react";
import Link from "next/link";
import { ServicesItems } from "../constants/ServicesFakeData";
import ServiceItemCard from "./Cards/ServiceItemCard";
import WithTrandingLable from "@/hoc/WithTrandingLable";

const Services: React.FC = () => {
  const ServiceItemCardWithLabel = WithTrandingLable(ServiceItemCard);

  return (
    <section className="bg-gradient-to-b from-[#E0F7FA] via-white to-[#FFF0F5] py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-[26px] sm:text-[36px] md:text-[44px] font-serif font-semibold tracking-[1.5px] text-[#D81B60] mb-4">
            Trusted Home Services{" "}
            <span className="hidden md:inline-block">for Delhi NCR</span>
          </h2>

          {/* Mobile description */}
          <p className="block md:hidden text-[14px] sm:text-[15px] text-[#555555] leading-relaxed text-center px-4 sm:px-10">
            Reliable AC, fridge & washing machine service right at your doorstep in Delhi NCR.
          </p>

          {/* Desktop description */}
          <p className="hidden sm:block text-[15px] sm:text-[16px] text-[#555555] leading-relaxed px-4 sm:px-10">
            Welcome to <span className="text-[#D81B60] font-semibold">Trust On Services</span> — your go-to choice for reliable AC, washing machine, and refrigerator repairs across Delhi NCR. Fast, trusted, and professional services at your doorstep.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ServicesItems?.map((service) => {
            const CardComponent = service.trending
              ? ServiceItemCardWithLabel
              : ServiceItemCard;

            return (
              <div
                key={service.itemname}
                className="cursor-pointer hover:scale-[1] transition-transform"
              >
                <Link href={`/services/${service.path}`}>
                  <CardComponent
                    itemUrl={service.itemUrl}
                    itemName={service.itemname}
                    itemDesc={service.itemDesc}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
