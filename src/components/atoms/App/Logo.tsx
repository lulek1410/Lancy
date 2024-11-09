import React from "react";
import { Shrikhand } from "next/font/google";
import Link from "next/link";

const overpass = Shrikhand({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Logo = () => {
  return (
    <Link
      className={`${overpass.className} text-3xl`}
      aria-label="Logo"
      href={"/dashboard"}
    >
      LANCY
    </Link>
  );
};

export default Logo;
