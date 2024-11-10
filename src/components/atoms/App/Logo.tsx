import React from "react";
import { Coiny } from "next/font/google";
import Link from "next/link";

const overpass = Coiny({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const Logo = () => {
  return (
    <Link
      className={`${overpass.className} text-3xl text-gray-100`}
      aria-label="Logo"
      href={"/dashboard"}
    >
      LANCY
    </Link>
  );
};

export default Logo;
