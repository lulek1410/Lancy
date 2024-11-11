import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "node:test";

import Dropdown from "../Dropdown";
import { Option } from "@/types/global";

describe("Dropdown", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render children", () => {
    render(<Dropdown options={[]}>Child</Dropdown>);
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  const openDropdown = async (options: Option[] = []) => {
    const user = userEvent.setup();
    render(<Dropdown options={options}>Child</Dropdown>);
    const child = screen.getByText("Child");
    await user.click(child);
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    return { user, menu, child };
  };

  describe("Toggle behavior", () => {
    it("Should open/close dropdown when child clicked", async () => {
      const { user, menu, child } = await openDropdown();
      await user.click(child);
      expect(menu).not.toBeInTheDocument();
    });

    it("Should close when clicked outside", async () => {
      const { user, menu } = await openDropdown();
      await user.click(document.body);
      expect(menu).not.toBeInTheDocument();
    });
  });

  describe("dropdown options", () => {
    it("Should render provided options", async () => {
      const options = [
        { title: "Log in", action: () => {} },
        { title: "Test option", action: () => {} },
      ];
      await openDropdown(options);
      options.forEach((option) => {
        expect(screen.getByText(option.title)).toBeInTheDocument();
      });
    });

    it("Should invoke options actions on click", async () => {
      const actionMock = jest.fn();
      const { user } = await openDropdown([
        { title: "Test option", action: actionMock },
      ]);
      const option = screen.getByText("Test option");
      expect(option).toBeInTheDocument();
      await user.click(option);
      expect(actionMock).toHaveBeenCalledTimes(1);
    });
  });
});
