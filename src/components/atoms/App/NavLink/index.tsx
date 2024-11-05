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
      className={classNames(`selectable`, {
        selected: selected,
      })}
    >
      <div className="placeholder-container -top-3">
        <div className="placeholder -rotate-90"></div>
      </div>
      <Link href={path} className="flex h-12 w-full items-center gap-2 px-5">
        <div className="text-2xl">{icon}</div>
        <p className="h-6">{text}</p>
      </Link>
      <div className="placeholder-container -bottom-3">
        <div className="placeholder rotate-180"></div>
      </div>
    </li>
  );
};

export default NavLink;
