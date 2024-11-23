import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

import LessonsExceptions from "../LessonsExceptions";

import { LessonException } from "@/types/global";

describe("LessonsExceptions", () => {
  it("Should render", () => {
    const exceptions: LessonException[] = [
      {
        lessonDateTimeDuration: null,
        newLessonDateTimeDuration: "26.12.2024 10:00-11:00",
      },
      {
        lessonDateTimeDuration: "01.01.2025 10:00-11:00",
        newLessonDateTimeDuration: "02.01.2025 10:00-11:00",
      },
    ];
    render(<LessonsExceptions exceptions={exceptions} />);
    expect(screen.getByText("Changed lessons:")).toBeInTheDocument();
    expect(screen.getByText("26.12.2024 10:00-11:00")).toBeInTheDocument();
    expect(screen.getByText("01.01.2025 10:00-11:00")).toBeInTheDocument();
    expect(screen.getByText("02.01.2025 10:00-11:00")).toBeInTheDocument();
  });

  it("should not render elements if prop list empty", () => {
    render(<LessonsExceptions exceptions={[]} />);
    expect(screen.queryByText("Changed lessons:")).not.toBeInTheDocument();
  });
});
