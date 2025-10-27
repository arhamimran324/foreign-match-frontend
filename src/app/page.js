"use client";
import React, { useEffect, useState } from "react";
import { HomeLayout } from "@/components/provider/home-layout";
import Image from "next/image";
import { HowItWorks } from "@/components/components/HowItWorks";
import { DiscoverSection } from "@/components/components/DiscoverSection";
import { ForeignMatches } from "@/components/components/ForeignMatches";
import ForeignLeadHere from "@/components/components/ForeignLeadHere";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");
  //   if (!hasVisited) {
  //     setOpen(true); // Show dialog on first visit
  //     // localStorage.setItem("hasVisited", "true"); // Mark as visited
  //   }
  // }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <HomeLayout>
      <HowItWorks />
      <DiscoverSection />
      <ForeignMatches />
      <ForeignLeadHere />
    </HomeLayout>
  );
};

export default HomePage;
