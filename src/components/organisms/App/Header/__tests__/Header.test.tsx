import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import Header from "../Header";
import Avatar from "@/components/atoms/App/Avatar";
import Logo from "@/components/atoms/App/Logo";

jest.mock("@/components/atoms/App/Avatar");
jest.mock("@/components/atoms/App/Logo");

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Avatar).toHaveBeenCalledTimes(1);
  });
});
