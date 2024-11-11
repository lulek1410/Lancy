import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders avatar", () => {
    const { container } = render(<Avatar />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
