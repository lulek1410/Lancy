import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Logo from "../Logo";

describe("Logo", () => {
  it("renders a heading", () => {
    render(<Logo />);
    expect(screen.getByText("LANCY")).toBeInTheDocument();
  });
});
