import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import Card from "../Card";
import ClientInformation from "@/components/atoms/Clients/ClientInformation";
import LessonsExceptions from "@/components/atoms/Clients/LessonsExceptions";

jest.mock("@/components/atoms/Clients/ClientInformation");
jest.mock("@/components/atoms/Clients/LessonsExceptions");

describe("Card", () => {
  const cardInfo = {
    id: 1,
    name: "John",
    surname: "Doe",
    level: "Intermediate",
    lessonsWeekday: "Wednesday",
    lessonsTime: "10:00",
    lessonDuration: "1 hour",
    lessonsExceptions: [
      {
        lessonDateTimeDuration: null,
        newLessonDateTimeDuration: "26.12.2024 10:00-11:00",
      },
      {
        lessonDateTimeDuration: "01.01.2025 10:00-11:00",
        newLessonDateTimeDuration: "02.01.2025 10:00-11:00",
      },
    ],
    info: "Specializes in conversational skills.",
  };

  it("Should render", () => {
    const { id, lessonsExceptions: exceptions, ...clientInfo } = cardInfo;
    render(<Card cardInfo={cardInfo} />);
    expect(screen.getByRole("region"));
    expect(ClientInformation).toHaveBeenCalledTimes(1);
    expect(ClientInformation).toHaveBeenNthCalledWith(
      1,
      { ...clientInfo },
      expect.anything(),
    );
    expect(LessonsExceptions).toHaveBeenCalledTimes(1);
    expect(LessonsExceptions).toHaveBeenNthCalledWith(
      1,
      { exceptions },
      expect.anything(),
    );
  });
});
