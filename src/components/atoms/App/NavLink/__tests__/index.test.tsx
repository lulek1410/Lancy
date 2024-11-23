import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { ReactNode } from "react";

import NavLink from "..";
import Link from "next/link";
import Placeholder from "../Placeholder";

jest.mock("../Placeholder");
jest.mock("next/link", () => {
  return jest.fn(
    ({ href, children }: { href: string; children: ReactNode }) => {
      return <a href={href}>{children}</a>;
    },
  );
});

describe("Avatar", () => {
  it("renders avatar", () => {
    render(<NavLink selected={false} text={""} path={"/path"} icon={<></>} />);
    expect(Link).toHaveBeenCalledTimes(1);
    expect(Link).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        href: "/path",
      }),
      expect.anything(),
    );
    expect(Placeholder).toHaveBeenCalledTimes(2);
    expect(Placeholder).toHaveBeenNthCalledWith(
      1,
      {
        position: "top",
        isVisible: false,
      },
      expect.anything(),
    );
    expect(Placeholder).toHaveBeenNthCalledWith(
      2,
      {
        position: "bottom",
        isVisible: false,
      },
      expect.anything(),
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(
      <NavLink
        selected={false}
        text={""}
        icon={<div>Test icon</div>}
        path={""}
      />,
    );
    expect(screen.getByText("Test icon")).toBeInTheDocument();
  });

  it("renders provided text", () => {
    render(
      <NavLink selected={false} text="link text" path={""} icon={<></>} />,
    );
    expect(screen.getByText("link text")).toBeInTheDocument();
  });
});
