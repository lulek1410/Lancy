"use client";

import NavLink from "@/components/atoms/App/NavLink";
import { ListItemData } from "@/components/atoms/App/NavLink/index.types";

import { usePathname } from "next/navigation";

interface Props {
  items: ListItemData[];
  className?: string;
}

const MainNavList = (props: Props) => {
  const { items, className } = props;
  const pathname = usePathname();

  return (
    <ul className={`${className || ""}`}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          {...item}
          selected={pathname.split("/").includes(item.text)}
        />
      ))}
    </ul>
  );
};

export default MainNavList;
