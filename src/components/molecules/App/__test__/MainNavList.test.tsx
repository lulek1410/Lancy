import { render, screen } from "@testing-library/react";
import { describe, mock } from "node:test";
import MainNavList from "../MainNavList";
import { ListItemData } from "@/components/atoms/App/NavLink/index.types";
import NavLink from "@/components/atoms/App/NavLink";

jest.mock("@/components/atoms/App/NavLink");

describe("MainNavList", () => {
  it("Should render", () => {
    render(<MainNavList items={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Should render items", () => {
    const items: ListItemData[] = [
      {
        text: "Dashboard",
        path: "/dashboard",
        icon: <div>Icon 1</div>,
      },
      {
        text: "Clients",
        path: "/clients",
        icon: <div>Icon 2</div>,
      },
    ];
    render(<MainNavList items={items} />);

    expect(NavLink).toHaveBeenCalledTimes(items.length);
    expect(NavLink).toHaveBeenNthCalledWith(
      1,
      {
        ...items[0],
        selected: false,
      },
      expect.anything(),
    );
    expect(NavLink).toHaveBeenNthCalledWith(
      2,
      {
        ...items[1],
        selected: false,
      },
      expect.anything(),
    );
  });
});
