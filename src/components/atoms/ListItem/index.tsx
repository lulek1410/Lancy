import classNames from "classnames";
import { ReactNode } from "react";

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

type Props = SelectableItem & {
  content: string | ReactNode;
  className?: string;
};

const ListItem = ({
  content,
  selectable = false,
  selected,
  className,
}: Props) => {
  return (
    <li
      className={classNames(
        `${
          className || ""
        } px-5 h-12 flex w-full items-center relative select-none`,
        {
          selectable: selectable,
          selected: selected,
        }
      )}
    >
      {content}
    </li>
  );
};

export default ListItem;
