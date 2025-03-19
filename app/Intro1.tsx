"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Link from 'next/link';

export function Intro1() {
  const words = [
    {
      text: "Dive",
      className: "text-white",
    },
    {
      text: "into",
      className: "text-white",
    },
    {
      text: "the",
      className: "text-white",
    },
    {
      text: "realm",
      className: "text-white",
    },
    {
      text: "of",
      className: "text-white",
    },
    {
      text: "F.L.E.X PORT",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[10rem] sm:h-[20rem] md:h-[20rem] px-4">
      <p className="text-white text-xs sm:text-md md:text-base mt-40 sm:mt-0 ">
        The road to change starts from here
      </p>
      
      {/* Only show the typewriter effect on medium screens and above */}
      <div className="hidden md:block">
        <TypewriterEffectSmooth words={words} />
      </div>

      {/* Show static text on mobile */}
      <div className="block md:hidden">
        <p className="text-white text-xl md:text-lg font-bold ">Dive into Realm of F.L.E.X PORT.</p>
      </div>
      
      <TextGenerateEffect words={"Freelancing Learning Experience eXchange Portfolios"} />
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
      <Link href="/Login">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        </Link>
        <Link href="/Reg">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm" >
          Log in
        </button>
        </Link>
      </div>
    </div>
  );
}
