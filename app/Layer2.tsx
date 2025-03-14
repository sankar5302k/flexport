import React, { useEffect, useId, useRef, useState } from "react";
import Image from 'next/image';
import { FlipWords } from "../components/ui/flip-words";
import { Compare } from "@/components/ui/compare";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/use-outside-click";

const cards = [
  {
    name: "Adham Dannaway",
    title: "Product Designer",
    content: () => (
      <>
        I&apos;m a product designer based in sunny Sydney, Australia.Since 2005, I&apos;ve enjoyed turning complex problems into simple,
        beautiful and intuitive solutions.
      </>
    ),
    image: "/adham.png",
  },
  {
    name: "Steve Johnson",
    title: "Frontend Developer",
    content: () => (
      <>
        I&apos;m a frontend developer based in sunny Sydney, Australia.Since 2005, I&apos;ve enjoyed turning complex problems into simple,
        beautiful and intuitive solutions.
      </>
    ),
    image: "/steve.png",
  },
  {
    name: "David Heinemeier Hansson",
    title: "Backend Developer",
    content: () => (
      <>
        I&apos;m a backend developer based in sunny Sydney, Australia.Since 2005, I&apos;ve enjoyed turning complex problems into simple,
        beautiful and intuitive solutions.
      </>
    ),
    image: "/dhh.png",
  },
];

export default function Layer2() {
  const [activeCard, setActiveCard] = useState(null);
  const modalRef = useRef(null);
  const id = useId();

  useOutsideClick(modalRef, () => {
    setActiveCard(null);
  });

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/50 z-0" />
      <div className="container relative z-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center text-white">
          Meet the team
        </h1>
        <p className="text-lg text-center text-zinc-400">
          We are a team of passionate designers and developers who love to
          build beautiful and intuitive products.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.name}
              className="relative flex flex-col items-center justify-center w-full h-full p-4 bg-zinc-900 rounded-lg cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={() => setActiveCard(card.name)}
            >
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.name}
                width={200}
                height={200}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold text-white">{card.name}</h2>
              <p className="text-sm text-zinc-400">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-zinc-900/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={modalRef}
              className="relative flex flex-col items-center justify-center w-full max-w-2xl p-8 bg-zinc-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100"
                onClick={() => setActiveCard(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {cards.map((card) => {
                if (card.name === activeCard) {
                  return (
                    <div
                      key={card.name}
                      className="relative flex flex-col items-center justify-center w-full h-full"
                    >
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                      <h2 className="text-2xl font-bold text-white">
                        {card.name}
                      </h2>
                      <p className="text-lg text-zinc-400">{card.title}</p>
                      <p className="text-base text-zinc-400">
                        {card.content()}
                      </p>
                    </div>
                  );
                }
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
