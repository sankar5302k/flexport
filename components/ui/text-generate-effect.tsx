"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.8,
  initialDelay = 2.5, // Default initial delay for larger screens
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  initialDelay?: number; // Optional prop
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  // Determine if the screen is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    // Set initial delay to 0 for mobile screens
    const delay = isMobile ? 0 : initialDelay;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.3, { startDelay: delay }), // Adjust delay based on screen size
      }
    );
  }, [scope.current, isMobile]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-2">
        <div className="dark:text-white text-black text-xs sm:text-sm md:text-base leading-snug tracking-wide relative bottom-1 sm:pt-0 pt-5">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
