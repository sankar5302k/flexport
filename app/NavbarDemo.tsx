"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" top-2 inset-x-0 max-w-2xl mx-auto my-10 z-30", className)}>
      <Menu setActive={setActive}>
        {/* Portfolios Section */}
        <MenuItem setActive={setActive} active={active} item="Portfolios">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-sm sm:text-base text-white">
            <HoveredLink href="/web-dev">Front-end Developer</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX Designer</HoveredLink>
          </div>
        </MenuItem>

        {/* MarketPlace Section */}
        <MenuItem setActive={setActive} active={active} item="MarketPlace">
          <div className="text-sm sm:text-base grid grid-cols-1 gap-4 p-2 sm:p-4 text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-10">
            <ProductItem
              title="E-Commerce Landing Page"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Shop smarter, live better—discover products that fit your lifestyle."
            />
            <ProductItem
              title="Portfolio Page"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Showcase your work, highlight your talent, and make your mark in the creative world."
            />
            <ProductItem
              title="Social Blog Page"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Where thoughts take shape—discover insights, trends, and stories that matter."
            />
            <ProductItem
              title="Video Streaming Platform"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Watch anywhere, anytime—unlimited entertainment, just a click away."
            />
          </div>
        </MenuItem>

        {/* SkillBridge Section */}
        <MenuItem setActive={setActive} active={active} item="SkillBridge">
          <div className="flex flex-col space-y-2 sm:space-y-4 text-sm sm:text-base text-white">
            <HoveredLink href="/hobby">Domain.AI</HoveredLink>
            <HoveredLink href="/individual">Collab.AI</HoveredLink>
          </div>
        </MenuItem>

        {/* Freelance Section */}
        <MenuItem setActive={setActive} active={active} item="Freelance">
          <div className="text-sm sm:text-base grid grid-cols-1 gap-4 p-2 sm:p-4 text-white sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-10">
            <ProductItem
              title="Hire"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Connect with freelancers ready to bring your ideas to life."
            />
            <ProductItem
              title="Work"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Get hired for projects that inspire and challenge you."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
