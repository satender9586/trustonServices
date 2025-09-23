import { StaticImageData } from "next/image";

export interface ServiceCardProps {
  itemUrl: StaticImageData;
  itemName: string;
  itemDesc: string;
}

export interface WhyChooseUsItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export interface WhyChooseUsCrauselProps {
  data: WhyChooseUsItem[];
}

export interface CompanyLovesItem {
  imgs: StaticImageData;
  title: string;
}

export interface CompaniesLovesProps {
  data: CompanyLovesItem[];
}

export interface OwnerInfo {
  name: string;
  desc: string;
  extrDesc: string;
  profile: StaticImageData;
}

export interface TeamMembersInfo {
  name: string;
  desc: string;
  experience: string;
  profile: StaticImageData;
  role: string;
}

export interface FAQ {
  title: string;
  desc: string;
}

interface ServiceCategory {
  name: string;
  path: string;
  itemname: string;
  itemUrl: StaticImageData;
  itemDesc: string;
  trending?: boolean;
}

export interface Service {
  itemname: string;
  itemUrl: StaticImageData;
  itemDesc: string;
  path: string;
  trending: boolean;
}

export interface ServicesCategoryCardProps {
  srv: {
    img: string;
    name: string;
    price?: string;
    features: string[];
  };
  j: number;
}
