"use client";
import React, { useState } from "react";
import {
  IconUserBolt,
  IconBuildingStore,
  IconAffiliate,
  IconMessageChatbot,
  IconBriefcase,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Portf } from "./Portf";
import { Logo } from "./Logo";

export default function Application() {
  const links = [
    {
      label: "MarketPlace",
      href: "#",
      icon: <IconBuildingStore className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => setSelectedSection("MarketPlace"), // Moved inside link object
    },
    {
      label: "Portfolios",
      href: "#",
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => setSelectedSection("Portfolios"),
    },
    {
      label: "Collab.AI",
      href: "#",
      icon: <IconAffiliate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => setSelectedSection("Collab.AI"),
    },
    {
      label: "Domain.AI",
      href: "#",
      icon: <IconMessageChatbot className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => setSelectedSection("Domain.AI"),
    },
    {
      label: "Freelance",
      href: "#",
      icon: <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => setSelectedSection("Freelance"),
    },
  ];
  
  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("MarketPlace"); // Track selected section

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-full"
      )}
    >
hi
    </div>
  );
}
interface DashboardProps {
  selectedSection: string;
}


const Dashboard: React.FC<DashboardProps> = ({ selectedSection }) => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {selectedSection === "Portfolios" ? (
          <Portf />
        ) : selectedSection === "Domain.AI" ? (
          <Portf />
        ) : (
          <DefaultContent />
        )}
      </div>
    </div>
  );
};

const DefaultContent = () => {
  return (
    <>
      <div className="flex gap-2">
        {[...new Array(4)].map((_, i) => (
          <div
            key={"first" + i}
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        {[...new Array(2)].map((_, i) => (
          <div
            key={"second" + i}
            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
};
