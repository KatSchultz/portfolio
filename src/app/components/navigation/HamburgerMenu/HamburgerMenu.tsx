"use client";

import React, { useState } from "react";
import "./HamburgerMenu.css";
import NavMenu from "../NavMenu";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const stylesBurger1 = {
    transform: `${isOpen ? "rotate(45deg)" : "rotate(0)"}`,
  };
  const stylesBurger2 = {
    transform: `${isOpen ? "translateX(-100%)" : "translateX(0)"}`,
    opacity: `${isOpen ? 0 : 1}`,
  };
  const stylesBurger3 = {
    transform: `${isOpen ? `rotate(-45deg)` : "rotate(0)"}`,
  };

  return (
    <div
      className="hamburger w-8 h-8 flex justify-around flex-col z-10 "
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen && <NavMenu isOpen={isOpen} />}
      <div
        style={stylesBurger1}
        className="burger burger1 w-8 h-1 bg-slate-900 "
      />
      <div
        style={stylesBurger2}
        className="burger burger2 w-8 h-1 bg-slate-900 "
      />
      <div
        style={stylesBurger3}
        className="burger burger3 w-8 h-1 bg-slate-900 "
      />
    </div>
  );
}
