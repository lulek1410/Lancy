import React from "react";

import { FaArrowRight } from "react-icons/fa6";

import { CardInfo } from "@/types/global";

interface Props {
  cardInfo: CardInfo;
}

const Card = ({ cardInfo }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-governor-bay-100 p-3">
      <span>{cardInfo.name}</span>
      <p>{cardInfo.surname}</p>
      <p>{cardInfo.level}</p>
      <p>{cardInfo.pricePerHour}</p>
      <p>
        {cardInfo.cyclicalLessonsWeekday} {cardInfo.cyclicalLessonsTime}
      </p>
      {cardInfo.lessonsExceptions.map((exception) => (
        <p className="flex items-center gap-1">
          <span className="inline-block align-middle line-through">
            {exception.lessonDateTimeDuration}
          </span>
          {exception.newLessonDateTimeDuration &&
          exception.lessonDateTimeDuration ? (
            <FaArrowRight className="mb-1 text-xs" />
          ) : null}
          <span inline-block>{exception.newLessonDateTimeDuration}</span>
        </p>
      ))}
    </div>
  );
};

export default Card;
