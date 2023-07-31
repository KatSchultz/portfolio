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
    // border: `solid 1px ${menuOption.borderColor}`,
  };
  return (
    <Link href={menuOption.path}>
      <div
        className={`bubble bubble-${index} h-24 w-24 rounded-full flex justify-center items-center`}
        style={styles}
      >
        {menuOption.name}
      </div>
    </Link>
  );
}
