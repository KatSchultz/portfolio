import React from "react";
import Link from "next/link";
import { NavOption } from "@/app/config/navOptions";

interface BubbleProps {
  menuOption: NavOption;
  index: number;
}

export default function Bubble({ menuOption, index }: BubbleProps) {
  const styles = {
    backgroundColor: menuOption.color,
    borderColor: menuOption.color,
  };
  return (
    <Link href={menuOption.path}>
      <div
        style={styles}
        className={`bubble bubble-${index} h-12 max-w-1/3 rounded-full flex justify-center font-bold items-center`}
      >
        {menuOption.name}
      </div>
    </Link>
  );
}
