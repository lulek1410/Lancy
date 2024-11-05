"use client";

import ListItem from "@/components/atoms/ListItem";

import { usePathname } from "next/navigation";
import { IMainNavItem } from "./MainNavList.types";

interface Props {
  items: IMainNavItem[];
  className?: string;
}

const MainNavList = (props: Props) => {
  const { items, className } = props;
  const pathname = usePathname();

  return (
    <ul className={`${className || ""}`}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          {...item}
          selectable
          selected={pathname.split("/").includes(item.text)}
        />
      ))}
    </ul>
  );
};

export default MainNavList;
