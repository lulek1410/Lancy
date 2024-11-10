"use client";

import { usePathname } from "next/navigation";

import NavLink from "@/components/atoms/App/NavLink";
import { ListItemData } from "@/components/atoms/App/NavLink/index.types";

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
          selected={item.path.includes(pathname)}
        />
      ))}
    </ul>
  );
};

export default MainNavList;
