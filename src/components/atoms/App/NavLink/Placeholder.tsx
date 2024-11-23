import classNames from "classnames";
import React from "react";

export interface Props {
  isVisible: boolean;
  position: "top" | "bottom";
}

const Placeholder = ({ isVisible, position }: Props) => {
  return (
    <div
      className={classNames("pointer-events-none absolute right-0", {
        "-top-3": position === "top",
        "-bottom-3": position === "bottom",
      })}
    >
      <div
        className={classNames(
          "relative h-3 w-3 overflow-hidden before:absolute before:bottom-0 before:left-0 before:block before:h-6 before:w-6 before:rounded-[50%] before:shadow-[-0.75rem_0.75rem_0_0_red] before:shadow-transparent before:duration-150",
          {
            "before:shadow-fantasy-50": isVisible,
            "-rotate-90": position === "top",
            "rotate-180": position === "bottom",
          },
        )}
      ></div>
    </div>
  );
};

export default Placeholder;
