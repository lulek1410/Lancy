import classNames from "classnames";
import Link from "next/link";

import Placeholder from "./Placeholder";

import { Props } from "./index.types";

const NavLink = ({ text, icon, selected, path }: Props) => {
  return (
    <li
      className={classNames(
        `relative z-10 h-12 w-full origin-right cursor-pointer select-none text-lg duration-150 ease-in-out before:absolute before:bottom-1 before:left-[1rem] before:h-[3px] before:w-[calc(100%-2.25rem)] before:origin-center before:scale-x-0 before:rounded-full before:bg-governor-bay-800 before:duration-150 before:ease-in-out hover:before:scale-x-100`,
        {
          "bg-fantasy-50 hover:before:scale-x-0": selected,
        },
      )}
    >
      <Placeholder position="top" isVisible={selected} />
      <Link href={path} className="flex h-12 w-full items-center gap-2 px-5">
        <div className="text-2xl">{icon}</div>
        <p className="h-6">{text}</p>
      </Link>
      <Placeholder position="bottom" isVisible={selected} />
    </li>
  );
};

export default NavLink;
