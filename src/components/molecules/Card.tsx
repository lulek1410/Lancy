import React from "react";

import { FaArrowRight } from "react-icons/fa6";

import { CardInfo } from "@/types/global";

interface Props {
  cardInfo: CardInfo;
}

const Card = ({ cardInfo }: Props) => {
  return (
    <section
      className="rounded-lg bg-governor-bay-100 p-3"
      aria-labelledby={`card-title-${cardInfo.name}-${cardInfo.surname}`}
    >
      <div className="flex flex-col items-center">
        <h3 className="mb-2 text-center">
          {cardInfo.name} {cardInfo.surname}
        </h3>
        <div className="mb-2 grid grid-cols-[60px_minmax(0,1fr)] items-center gap-x-3">
          <p>Lessons:</p>
          <p>
            {cardInfo.cyclicalLessonsWeekday} at {cardInfo.cyclicalLessonsTime}
          </p>
          <p>Level:</p>
          <p>{cardInfo.level}</p>
        </div>
        {cardInfo.lessonsExceptions.length ? <p>Changed lessons:</p> : null}
        {cardInfo.lessonsExceptions.map((exception, index) => (
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
    </section>
  );
};

export default Card;
