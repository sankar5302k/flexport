"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from 'next/image';

export function Portf() {
  const [searchQuery, setSearchQuery] = useState("");

  const placeholders = [
    "Search by Developer Name",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  // Filter items based on the search query
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center px-4 py-8 bg-white dark:bg-neutral-900">
        <h2 className="mb-10 text-xl text-center sm:text-3xl dark:text-white text-black">
          Explore the Portfolios
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex-1 overflow-auto">
        <BentoGrid className="max-w-4xl mx-auto">
          {filteredItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={<Skeleton src={item.imageSrc} />}
              link={item.link}
              className={i === 3 || i === 6 ? "md:col-span-1" : ""}
            />
          ))}
        </BentoGrid>
      </div>
      <br />
      <br />
    </div>
  );
}

const Skeleton = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
    <Image
      src={src}
      alt="Portfolio image"
      height={200}
      width={500}
      className="object-contain rounded-xl"
    />
  </div>
);
const items = [
  {
    title: "Adhaam Dannaway",
    description: "Im a product designer from Sydney, specialising in UI design and design systems.",
    imageSrc: "/port.jpeg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.adhamdannaway.com/",
  },
  {
    title: "Onyedika Edewor",
    description: "I am a software engineer with more than four years of experience.",
    imageSrc: "https://media.licdn.com/dms/image/v2/D4D03AQG7YrWfQ7NDXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671160298006?e=1732147200&v=beta&t=ig_hI7VTzNi3G_eUAfSjxY_h12pwECfltSqlViycUA0",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link:"https://www.onyedika.xyz/",
  },
  {
    title: "Lauren Wallers",
    description: "With 10+ years of experience, I have a deep passion for designing digital products.",
    imageSrc: "https://media.licdn.com/dms/image/v2/C4E03AQE4sD3NIEDn6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1649701143644?e=1732147200&v=beta&t=DvUaxbCcdVKfaRUYytKGfeoeOeuALVk-SkbPuDl2b3Q",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link:"https://www.lauren-waller.com/",
  },
  {
    title: "Ram Maheshwari",
    description: "Understand the impact of effective communication in our lives.",
    imageSrc: "https://media.licdn.com/dms/image/v2/D4E03AQElWXg4JIEOMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669834773963?e=1732147200&v=beta&t=240eQ_JEQ1lW5xYHcg4H075A3PIcP3D9S0qULhJwv3s",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link:"https://www.rammaheshwari.com/",
   
  },
  {
    title: "Adhaam Dannaway",
    description: "Im a product designer from Sydney, specialising in UI design and design systems.",
    imageSrc: "/port.jpeg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.adhamdannaway.com/",
  },
  {
    title: "Onyedika Edewor",
    description: "I am a software engineer with more than four years of experience.",
    imageSrc: "https://media.licdn.com/dms/image/v2/D4D03AQG7YrWfQ7NDXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671160298006?e=1732147200&v=beta&t=ig_hI7VTzNi3G_eUAfSjxY_h12pwECfltSqlViycUA0",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link:"https://www.onyedika.xyz/",
  },

];
