import React from "react";
import Bubble from "../Bubble/Bubble";
import { navOptions } from "@/app/config/navOptions";

export default function NavBubbles() {
  return (
    <div className="flex justify-between w-full">
      {navOptions.map((option) => (
        <Bubble menuOption={option} key={option.name} />
      ))}
    </div>
  );
}
