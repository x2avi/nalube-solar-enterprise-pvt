'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";




import Services from "./services";
import RevealLinks from "./snippets/faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Consultation from "./consultation";
import Maintenance from "./maintenance";
import EnergyStorage from "./energystorage";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const ConsultationRef = useRef<HTMLDivElement>(null);
  const MaintenanceRef = useRef<HTMLDivElement>(null);
  const EnergyStorageRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    ConsultationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToMaintenance = () => {
    MaintenanceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEnergyStorage = () => {
    EnergyStorageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToConsultation={scrollToConsultation}
        scrollToMaintenance={scrollToMaintenance}
        scrollToEnergyStorage={scrollToEnergyStorage}
        scrollToServices={scrollToServices}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Custom, solar, system <br /> design professional <br /> installation & energy effeciency consultation
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        we are dedicated to harnessing the power of the sun to provide clean, renewable energy for homes, businesses, and communities
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne/>
        </div>
        <div ref={ConsultationRef}>
          <Consultation />
        </div>
        <div ref={MaintenanceRef}>
          <Maintenance />
        </div>
        <div ref={EnergyStorageRef}>
          <EnergyStorage />
        </div>
        <div id ='services'>
        <Services />
        </div>
        <InfiniteMovingCardsDemo />
        < RevealLinks />
      </div>
    </div>
  );
}
