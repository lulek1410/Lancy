import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import MainNavbar from "../MainNavbar";
import MainNavList from "@/components/molecules/App/MainNavList";

jest.mock("@/components/molecules/App/MainNavList");

describe("MainNavbar", () => {
  it("renders main navbar", () => {
    render(<MainNavbar />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(MainNavList).toHaveBeenCalledTimes(1);
  });
});
