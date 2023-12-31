import React from "react";
import Link from "next/link";
import { navOptions } from "@/app/config/navOptions";

interface NavMenuProps {
  isOpen: boolean;
}

export default function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <nav
      className={`flex justify-center items-center w-screen h-screen absolute top-0 right-0 bg-slate-100 md:relative md:bg-transparent md:w-fit md:h-fit md:block `}
    >
      <ul
        className={`${
          isOpen ? "slide-up" : ""
        } flex h-48 w-48 flex-col justify-around items-center md:flex-row md:h-fit md:w-fit`}
      >
        {navOptions.map((option, index) => {
          return (
            <li
              className={`${
                index > 0 ? "md:border-l md:border-slate-800 px-2" : "px-2"
              }`}
              key={option.name}
            >
              <Link href={option.path}>{option.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
