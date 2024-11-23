import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import ClientsGrid from "../ClientsGrid";
import Card from "@/components/molecules/Clients/Card";
import { testCardInfoData } from "../CardTestData";

jest.mock("@/components/molecules/Clients/Card");

describe("ClientsGrid", () => {
  it("Should render", () => {
    render(<ClientsGrid />);
    expect(Card).toHaveBeenCalledTimes(testCardInfoData.length);
    testCardInfoData.forEach((cardInfo) => {
      expect(Card).toHaveBeenCalledWith({ cardInfo }, expect.anything());
    });
  });
});
