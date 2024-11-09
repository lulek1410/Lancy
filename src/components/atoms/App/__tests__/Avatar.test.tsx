import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders avatar", () => {
    render(<Avatar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
