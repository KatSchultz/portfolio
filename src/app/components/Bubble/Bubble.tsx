import React from "react";
import Link from "next/link";

interface BubbleProps {
  navSection: {
    name: string;
    path: string;
    color: string;
    borderColor: string;
  };
}

export default function Bubble({ navSection }: BubbleProps) {
  const styles = {
    backgroundColor: navSection.color,
    border: `solid 1px ${navSection.borderColor}`,
  };
  return (
    <Link href={navSection.path}>
      <div
        className="h-24 w-24 rounded-full flex justify-center items-center"
        style={styles}
      >
        {navSection.name}
      </div>
    </Link>
  );
}
