import Image from "next/image"; 
import React from "react";
import { NavbarDemo } from "./NavbarDemo";
import { Intro1 } from "./Intro1";
import { Layer1 } from "./Layer1";
import { Layer2 } from "./Layer2";
import { Layer3 } from "./Layer3";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDemo />
      </div>
      <div className="mt-20 md:mt-0">
        <Intro1 />
      </div>
      <div className="mt-20 md:mt-0">

      <Layer1 />
      </div>
      <Layer2 />
      <Layer3 ></Layer3>
    </>
  );
}
