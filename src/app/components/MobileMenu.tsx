import React from "react";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="flex  justify-center items-center w-screen h-screen absolute top-0 left-0 bg-slate-100 md:relative md:bg-transparent md:w-fit md:h-fit  ">
      <ul className="flex h-48 w-48 flex-col justify-around items-center md:flex-row md:h-fit md:w-fit">
        <li className="md:border-r md:border-slate-800 px-2">
          <Link href="/resume">Resume</Link>
        </li>
        <li className="md:border-r md:border-slate-800 px-2">
          <Link href="/projects">Projects</Link>
        </li>
        <li className=" px-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
