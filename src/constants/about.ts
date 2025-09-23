import { FaTools, FaCertificate, FaHeadset } from "react-icons/fa";
import { IconType } from "react-icons";

type Stat = {
  label: string;
  sub: string;
  icon: IconType;   
};

export const Stats: Stat[] = [
  { label: "7+ Years", sub: "Industry Experience", icon: FaTools },
  { label: "Certified", sub: "Expert Technicians", icon: FaCertificate },
  { label: "24/7", sub: "Customer Support", icon: FaHeadset },
];
