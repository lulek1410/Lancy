import { IMainNavItem } from "@/components/molecules/App/MainNavList.types";
import classNames from "classnames";

import "./index.css";

type SelectableItem =
  | {
      selectable: true;
      selected: boolean;
    }
  | {
      selectable: false;
      selected?: never;
    }
  | {
      selectable?: false | undefined;
      selected?: never;
    };

type Props = SelectableItem &
  IMainNavItem & {
    className?: string;
  };

const ListItem = ({
  text,
  icon,
  selectable = false,
  selected,
  className,
}: Props) => {
  return (
    <li
      className={classNames(
        `${
          className || ""
        } flex gap-2 items-center px-5 h-12 w-full relative select-none text-lg`,
        {
          selectable: selectable,
          selected: selected,
        }
      )}
    >
      <div className="text-2xl">{icon}</div>
      <p className="h-6">{text}</p>
    </li>
  );
};

export default ListItem;
