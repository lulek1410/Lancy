import React from "react";

export interface Props {
  name: string;
  surname: string;
  lessonsWeekday: string;
  lessonsTime: string;
  level: string;
  info: string | null;
}

const ClientInformation = ({
  name,
  surname,
  lessonsWeekday,
  lessonsTime,
  level,
  info,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-2 text-center font-bold">
        {name} {surname}
      </h3>
      <div className="grid grid-cols-[60px_minmax(0,1fr)] items-center gap-x-3">
        <p>Lessons:</p>
        <p>
          {lessonsWeekday} at {lessonsTime}
        </p>
        <p>Level:</p>
        <p>{level}</p>
      </div>
      <p>{info}</p>
    </div>
  );
};

export default ClientInformation;
