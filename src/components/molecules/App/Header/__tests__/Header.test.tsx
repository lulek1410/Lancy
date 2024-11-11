import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Header from "../Header";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    expect(screen.getByText("LANCY")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
