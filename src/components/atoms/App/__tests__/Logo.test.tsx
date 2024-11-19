import { render, screen } from "@testing-library/react";
import Link from "next/link";
import { describe } from "node:test";
import { ReactNode } from "react";

import Logo from "../Logo";

jest.mock("next/link", () => {
  return jest.fn(
    ({ href, children }: { href: string; children: ReactNode }) => {
      return <a href={href}>{children}</a>;
    },
  );
});

describe("Logo", () => {
  it("renders a heading", () => {
    render(<Logo />);
    expect(Link).toHaveBeenCalledTimes(1);
    expect(Link).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        href: "/dashboard",
        children: "LANCY",
        "aria-label": "Logo",
      }),
      expect.anything(),
    );
    expect(screen.getByText("LANCY")).toBeInTheDocument();
  });
});
