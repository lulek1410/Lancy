import { render, screen } from "@testing-library/react";
import { describe, mock } from "node:test";

import AvatarDropdown from "../AvatarDropdown";
import Dropdown from "../../Dropdown";
import Avatar from "@/components/atoms/App/Avatar";
import React from "react";

jest.mock("@/components/atoms/App/Avatar");
jest.mock("../../Dropdown");
jest.mock("@/components/atoms/App/NavLink");

describe("MainNavList", () => {
  it("Should render", () => {
    render(<AvatarDropdown />);
    const dropdownCalls = (Dropdown as jest.Mock).mock.calls;
    expect(dropdownCalls.length).toBe(1);
    const [firstCall] = dropdownCalls;
    const [firstCallProps] = firstCall;
    expect(firstCallProps.options).toEqual([
      { title: "Profile", action: expect.any(Function) },
      { title: "Log in", action: expect.any(Function) },
    ]);
    expect(React.isValidElement(firstCallProps.children)).toBe(true);
    expect(firstCallProps.children.type).toBe(Avatar);
  });
});
