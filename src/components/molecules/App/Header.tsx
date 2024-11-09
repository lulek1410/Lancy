import Avatar from "@/components/atoms/App/Avatar";
import Logo from "@/components/atoms/App/Logo";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-gradient-to-t from-[hsl(7,79%,32%)] from-10% to-moccaccino-800 to-30% px-10">
      <Logo />
      <Avatar />
    </header>
  );
};

export default Header;