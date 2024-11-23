import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import ClientsLayout from "../ClientsLayout";
import ClientsGrid from "@/components/organisms/Clients/ClientsGrid";

jest.mock("@/components/organisms/Clients/ClientsGrid");

describe("ClientsLayout", () => {
  it("should render", () => {
    render(<ClientsLayout />);
    expect(screen.getByText("Filters and actions bar")).toBeInTheDocument();
    expect(ClientsGrid).toHaveBeenCalledTimes(1);
  });
});
