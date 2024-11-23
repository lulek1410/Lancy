import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import { LessonException } from "@/types/global";

export interface Props {
  exceptions: LessonException[];
}

const LessonsExceptions = ({ exceptions }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {exceptions.length ? <p>Changed lessons:</p> : null}
      {exceptions.map((exception, index) => (
        <p className="flex items-center gap-1" key={index}>
          <time className="text-milano-red-800" aria-label="removed-lesson">
            {exception.lessonDateTimeDuration}
          </time>
          {exception.newLessonDateTimeDuration &&
          exception.lessonDateTimeDuration ? (
            <>
              <FaArrowRight className="mb-1 text-xs" aria-hidden="true" />
              <span className="sr-only">Changes to</span>
            </>
          ) : null}
          <time className="text-green-800" aria-label="new-lesson">
            {exception.newLessonDateTimeDuration}
          </time>
        </p>
      ))}
    </div>
  );
};

export default LessonsExceptions;
