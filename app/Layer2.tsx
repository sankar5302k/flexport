"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";
import Image from 'next/image';
import { FlipWords } from "../components/ui/flip-words";
import { Compare } from "@/components/ui/compare";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/use-outside-click";
import { LinkPreview } from "@/components/ui/link-preview";

export function Layer2() {
    const words = ["Personalized", "Unique", "Customized", "modern"];
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
      );
      const id = useId();
      const ref = useRef<HTMLDivElement>(null);
     
      useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
          if (event.key === "Escape") {
            setActive(false);
          }
        }
     
        if (active && typeof active === "object") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
     
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [active]);
     
      useOutsideClick(ref, () => setActive(null));
    return (
        <>
<div className="pt-[8rem] pb-[2rem] flex justify-center items-center px-2">
<div className="text-xs md:text-3xl lg:text-4xl mx-auto font-normal text-white text-center tracking-wide indent-0.5	
">
       Bored of using Pre defined UI <br/> showcase your 
            <FlipWords words={words} /> 
            Portfolios to the World
          </div>
        </div>
        <div className="flex justify-center items-center p-4 mb-10 ">
  <div className="w-full max-w-4xl"> {/* Container for responsive width */}
    <Compare
      firstImage="/linked.jpeg"
      secondImage="port.jpeg"
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="w-full h-[250px] md:h-[500px] rounded-xl"
      slideMode="hover"
    />
  </div>
</div>

          <br/>
          <br/>
<AnimatePresence>
  {active && typeof active === "object" && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 h-full w-full z-10" // Dark overlay for the modal
    />
  )}
</AnimatePresence>
<AnimatePresence>
  {active && typeof active === "object" ? (
    <div className="fixed inset-0 grid place-items-center z-[100]">
      <motion.button
        key={`button-${active.title}-${id}`}
        layout
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-800 text-white rounded-full h-6 w-6" // Dark close button
        onClick={() => setActive(null)}
      >
        <CloseIcon />
      </motion.button>
      <motion.div
        layoutId={`card-${active.title}-${id}`}
        ref={ref}
        className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 text-white sm:rounded-3xl overflow-hidden" // Dark modal background
      >
        <motion.div layoutId={`image-${active.title}-${id}`}>
          <Image
            priority
            width={200}
            height={200}
            src={active.src}
            alt={active.title}
            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
          />
        </motion.div>

        <div>
          <div className="flex justify-between items-start p-4">
            <div>
              <motion.h3
                layoutId={`title-${active.title}-${id}`}
                className="font-bold text-white" // Dark text for title
              >
                {active.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${active.description}-${id}`}
                className="text-neutral-400" // Dark text for description
              >
                {active.description}
              </motion.p>
            </div>

            <motion.a
              layoutId={`button-${active.title}-${id}`}
              href={active.ctaLink}
              target="_blank"
              className="px-4 py-3 text-sm rounded-full font-bold bg-neutral-700 text-white"
            >
              {active.ctaText}
            </motion.a>
          </div>
          <div className="pt-4 relative px-4">
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
            >
              {typeof active.content === "function"
                ? active.content()
                : active.content}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  ) : null}
</AnimatePresence>
<ul className="max-w-2xl mx-auto w-full gap-4">
  {cards.map((card, index) => (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      key={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 flex flex-col md:flex-row justify-between items-center  hover:bg-neutral-900 text-white rounded-xl cursor-pointer" // Dark theme for card
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={card.src}
            alt={card.title}
            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
          />
        </motion.div>
        <div>
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-white text-center md:text-left" // Dark text for card title
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-400 text-center md:text-left" // Dark text for card description
          >
            {card.description}
          </motion.p>
        </div>
      </div>
      <motion.button
        layoutId={`button-${card.title}-${id}`}
        className="px-4 py-2 text-sm rounded-full font-bold bg-neutral-700 hover:bg-white-500 hover:text-white text-white mt-4 md:mt-0" // Dark button styling
      >
        {card.ctaText}
      </motion.button>
    </motion.div>
  ))}
</ul>


</>
      );

}
export const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-white"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };
   
  const cards = [
    {
      description: "Web Designer",
      title: "Adham Dannaway",
      src: "/port.jpeg",
      ctaText: "Visit",
      ctaLink: "https://www.adhamdannaway.com/",
      content: () => {
        return (
          <p>
 I'm a product designer based in sunny Sydney, Australia.Since 2005, I've enjoyed turning complex problems into simple,
  beautiful and intuitive designs.
 When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park<br/> 
          </p>
        );
      },
    },
    {
      description: "Software Engineer",
      title: "Onyedika Edewor",
      src: "https://media.licdn.com/dms/image/v2/D4D03AQG7YrWfQ7NDXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671160298006?e=1732147200&v=beta&t=ig_hI7VTzNi3G_eUAfSjxY_h12pwECfltSqlViycUA0",
      ctaText: "Visit",
      ctaLink: "https://www.onyedika.xyz/",
      content: () => {
        return (
          <p>
I am a software engineer with more than four years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget. Strong skills include  
Angular, React, Nodejs, Webdriverio, Cypress, Data Structure, Algorithms, RESTful APIs, UI/UX, Web3 Engineer, and Figma Design.
          </p>
        );
      },
    },
   
    {
      description: "Frontend Developer",
      title: "Lauren Wallers",
      src: "https://media.licdn.com/dms/image/v2/C4E03AQE4sD3NIEDn6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649701143644?e=1732147200&v=beta&t=DvUaxbCcdVKfaRUYytKGfeoeOeuALVk-SkbPuDl2b3Q",
      ctaText: "Visit",
      ctaLink: "https://www.lauren-waller.com/",
      content: () => {
        return (
        <p>
            As a Product Designer with over 10 years experience I have developed a deep love for designing digital products. 
            My journey over the years has taken me from Design to Front-end Web Development to Product Management and back to Design.
             Switching roles has helped me develop a wide range of skills including UX/UI design, design systems and front-end styleguides, 
             market and user research, data-driven product development, managing cross-functional teams and defining long-term strategies. 
          </p>
        );
      },
    },
    {
      description: "Content Creator",
      title: "Ram Maheshwari",
      src: "https://media.licdn.com/dms/image/v2/D4E03AQElWXg4JIEOMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669834773963?e=1732147200&v=beta&t=240eQ_JEQ1lW5xYHcg4H075A3PIcP3D9S0qULhJwv3s",
      ctaText: "Visit",
      ctaLink: "https://www.rammaheshwari.com/",
      content: () => {
        return (
          <p>
Hello! I am a seasoned Web Developer and a passionate Programming Content Creator. 
I bring a unique blend of technical skills and creativity to the table. As a Web Developer, 
I specialize in creating beautiful and functional websites and web applications that are optimized for user experience.
 My expertise lies in HTML, CSS, JavaScript, Wordpress, PHP, React, etc.
          </p>
        );
      },
    },
  ];