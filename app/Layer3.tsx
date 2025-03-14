"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
    },
    {
      title: "Industry based problems",
      description:
        "This platform empowers you to tackle real-world, industry-based challenges.",
    },
    {
      title: "Freelancer Access Control",
      description:
        "Allows companies to limit freelancers, ensuring targeted and quality submissions.",
    },
    {
      title: "ProfileBoost System",
      description: "Earn points for participation to enhance profiles and boost visibility.",
    },
    {
      title: "Competitive Task Entry",
      description: "Freelancers compete by submitting work, best output wins payment",
    },
    {
      title: "Freelancer Incentive",
      description:
        "Gamified system rewards non-winners with points for skill growth.",
    },
    {
      title: "Multi Tier Architecture",
      description:
        "Top performers earn compensation, others gain profile benefits, boosting quality and participation.",
    },
    {
      title: "100% Secured Payments",
      description: "Here we assure 100% secured and assured payment.",
  
    },
  ];

export function Layer3() {
    return (
        <>
        <h1 className="mb-4 text-3xl font-extrabold leading-none text-center tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white flex items-center justify-center mt-[4rem]">Enter into New Gen Freelance</h1>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Freelancing here goes beyond just independent work, it serves as an industry-driven skill development platform.</p>
    <div className="flex items-center justify-center">
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
         Explore more
        </span>
      </button></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        

<footer className="bg-neutral-200 shadow mt-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-black sm:text-center ">© 2023 <a href="#" className="hover:underline">FLEX PORT™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

        </>
      );
    }
     
    const Feature = ({
        title,
        description,
        icon,
        index,
      }: {
        title: string;
        description: string;
        icon: React.ReactNode;
        index: number;
      }) => {
        return (
          <div
            className={cn(
              "flex flex-col lg:border-r py-10 relative group/feature border-neutral-300 dark:border-neutral-800", 
              (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
              index < 4 && "lg:border-b dark:border-neutral-800"
            )}
          >
            {index < 4 && (
              <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
              <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
      
            {/* Icon */}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
              {icon}
            </div>
      
            {/* Title */}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                {title}
              </span>
            </div>
      
            {/* Description */}
            <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
              {description}
            </p>
          </div>
        );
      };
