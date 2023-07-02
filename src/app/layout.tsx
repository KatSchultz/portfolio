"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import Hamburger from "./components/hamburger/Hamburger";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Katie Schultz Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex flex-col">
          <header className="w-full justify-between flex p-2">
            <Link href="/">
              <div className="flex justify-end items-center">
                <div className="h-6 w-6 rounded-full bg-my-teal pr-4"></div>
                <h2 className="px-2 text-lg font-semibold">Katie Schultz</h2>
                <p>Developer</p>
              </div>
            </Link>
            <div
              className="flex flex-row-reverse md:hidden"
              onClick={() => setMenuDisplay(!menuDisplay)}
            >
              <Hamburger isOpen={menuDisplay} />
              {menuDisplay && <MobileMenu />}
            </div>
            <div className="hidden md:flex">
              <MobileMenu />
            </div>
          </header>
          <div className="p-2 flex h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
