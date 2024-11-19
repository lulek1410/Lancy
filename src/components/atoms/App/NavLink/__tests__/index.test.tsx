import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import NavLink from "..";
import { ReactNode } from "react";
import Link from "next/link";

jest.mock("next/link", () => {
  return jest.fn(
    ({ href, children }: { href: string; children: ReactNode }) => {
      return <a href={href}>{children}</a>;
    },
  );
});

describe("Avatar", () => {
  it("renders avatar", () => {
    const { container } = render(
      <NavLink selected={false} text={""} path={"/path"} icon={<></>} />,
    );
    expect(Link).toHaveBeenCalledTimes(1);
    expect(Link).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        href: "/path",
      }),
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

  it("renders with selected variant", () => {
    render(<NavLink selected={true} text="" path={""} icon={<></>} />);
    expect(
      screen.getByRole("listitem").classList.contains("selected"),
    ).toBeTruthy();
  });
});
