import React from "react";
import Bubble from "../Bubble/Bubble";
import { navOptions } from "@/app/config/navOptions";

export default function NavBubbles() {
  return (
    <div className="bubble-container flex justify-between w-full gap-4">
      {navOptions.map((option, index) => (
        <Bubble menuOption={option} key={option.name} index={index} />
      ))}
    </div>
  );
}
