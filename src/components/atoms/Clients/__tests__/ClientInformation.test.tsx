import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import ClientInformation from "../ClientInformation";

describe("ClientInformation", () => {
  it("Should render", () => {
    render(
      <ClientInformation
        name={"Michael"}
        surname={"Scott"}
        lessonsWeekday={"Wednesday"}
        lessonsTime={"18:30"}
        level={"B2"}
        info={"Wants to prepare for C1 exam"}
      />,
    );
    expect(screen.getByText("Michael Scott")).toBeInTheDocument();
    expect(screen.getByText("Lessons:")).toBeInTheDocument();
    expect(screen.getByText("Wednesday at 18:30")).toBeInTheDocument();
    expect(screen.getByText("Level:")).toBeInTheDocument();
    expect(screen.getByText("B2")).toBeInTheDocument();
    expect(
      screen.getByText("Wants to prepare for C1 exam"),
    ).toBeInTheDocument();
  });
});
