import React from "react";
import Bubble from "../Bubble/Bubble";

export default function NavBubbles() {
  const navSections = [
    {
      name: "Resume",
      path: "/resume",
      color: "#e88bff",
      borderColor: "#790096",
    },
    {
      name: "Projects",
      path: "/projects",
      color: "#ff8b8b",
      borderColor: "#860000",
    },
    {
      name: "Contact",
      path: "/contact",
      color: "#8bfff7",
      borderColor: "#00847b",
    },
  ];
  return (
    <div className="flex justify-between w-full">
      {navSections.map((section) => (
        <Bubble navSection={section} key={section.name} />
      ))}
    </div>
  );
}
