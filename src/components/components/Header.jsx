"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/components/ui/dropdown-menu";
import { countries } from "@/data";
import HeaderBg from "./HeaderBg";
import { usePathname } from "next/navigation";

// import { DropdownMenu } from "@/components/components/ui/dropdown-menu";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const selectedCountryData = countries.find(
    (country) => country.name === selectedCountry
  );
  const pathname = usePathname();

  const renderHeaderBg = () => {
    if (pathname === "/") {
      return <HeaderBg image="/assets/images/headerImg.png" />;
    }
    // if (pathname === "/shop") {
    //   return (
    //     <HeaderBg
    //       image="/assets/images/wellnessBg.png"
    //       title="Wellness"
    //       text="Our luxury gift boxes, thoughtfully curated to promote relaxation, health, and mindfulness. Explore wellness boxes for birthdays, pampering, or stress relief."
    //     />
    //   );
    // }
    return null; // For all other paths
  };

  return (
    <>
      <Navbar />

      {renderHeaderBg()}
    </>
  );
};

export default Header;
