import classNames from "classnames";
import Link from "next/link";

import { ListItemData } from "./index.types";

import "./index.css";

interface Props extends ListItemData {
  selected: boolean;
}

const NavLink = ({ text, icon, selected, path }: Props) => {
  return (
    <li
      className={classNames(`w-full relative select-none text-lg selectable`, {
        selected: selected,
      })}
    >
      <Link href={path} className="flex gap-2 h-12 px-5 w-full items-center">
        <div className="text-2xl">{icon}</div>
        <p className="h-6">{text}</p>
      </Link>
    </li>
  );
};

export default NavLink;
