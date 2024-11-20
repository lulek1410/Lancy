import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import AppLayout from "../AppLayout";
import Header from "@/components/organisms/App/Header/Header";
import MainNavbar from "@/components/organisms/App/MainNavbar";

jest.mock("@/components/organisms/App/Header/Header");
jest.mock("@/components/organisms/App/MainNavbar");

describe("MainNavbar", () => {
  it("renders main navbar", () => {
    render(
      <AppLayout>
        <div>Child</div>
      </AppLayout>,
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
    expect(MainNavbar).toHaveBeenCalledTimes(1);
    expect(Header).toHaveBeenCalledTimes(1);
  });
});
