"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from 'next/image';

export function Layer1() {

    const data = [
        {
          title: "Person with Idea",
          content: (
            <div>
              <p className="text-white White:text-White text-sm md:text-base  pt-5 pb-[40px]">
                Got a great project idea but lack teammates or unsure how to start? No worries—our Domain AI and Collab AI are here to guide you every step of the way!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="https://as2.ftcdn.net/v2/jpg/05/02/90/87/1000_F_502908727_FtOUBTc8dWMz8d9q4FXgsbRbw04zereL.jpg"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                />
                        <div className="hidden md:block">

                <Image
                  src="https://img.freepik.com/free-vector/business-idea-concept-with-people_52683-28609.jpg"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                />
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Domain.AI",
          content: (
            <div>
              <p className="text-white White:text-White text-sm md:text-base  pt-5 pb-[40px]">
                Our Domain AI, powered by Llama 3.1, provides you with tailored technology recommendations, frameworks, and tools based on the project you describe.
              </p>
              <p className="text-white White:text-White text-sm md:text-base  pt-3 pb-[40px]">
                Whether you're building from scratch or refining an existing idea, Domain AI guides you with precise insights to help you choose the right tech stack for your unique needs, ensuring efficient and successful project development.
              </p>
              <button className="p-[3px] relative sm:ml-[20rem]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Explore Now
                </div>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[70px]">
                <Image
                  src="https://jumpgrowth.com/wp-content/uploads/2021/01/10-Web-Development-Frameworks.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                />                        <div className="hidden md:block">

                <Image
                  src="https://newvision-software.com/wp-content/uploads/2023/10/MicrosoftTeams-image-68.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                /></div>
              </div>
            </div>
          ),
        },
        {
          title: "Collab.AI",
          content: (
            <div>
              <p className="text-white White:text-White text-sm md:text-base  pt-5 pb-[40px]">
                Collab AI helps you find the right experts to collaborate on any technology your project needs.
              </p>
              <p className="text-white White:text-White text-sm md:text-base  pt-3 pb-[40px]">
                It matches you with professionals proficient in the exact technology you're struggling with, and even supports collaboration in your native language.
              </p>
              <button className="p-[3px] relative sm:ml-[20rem]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Collab.AI
                </div>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[70px]">
                <Image
                  src="https://www.nojitter.com/sites/default/files/Collab_AdobeStock_302523366_92221.jpeg"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                />                        <div className="hidden md:block">

                <Image
                  src="https://f5b623aa.rocketcdn.me/wp-content/uploads/elementor/thumbs/Blog_Navigating-Human-AI-Collaboration-in-Model-Evaluation-qms6nr4wuzofyry275pjtkh1kq7bjq7hnmjbmak2bk.jpg"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05)]"
                /></div>
              </div>
            </div>
            
          ),
        },
      ];
      return (
        <div className="w-full">
          <Timeline data={data} />
        </div>
      );
    }
