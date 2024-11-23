import { ReactNode } from "react";

export interface Option {
  title: string | ReactNode;
  action: () => void;
}

export interface LessonException {
  lessonDateTimeDuration: string | null;
  newLessonDateTimeDuration: string | null;
}

export interface CardInfo {
  id: number;
  name: string;
  surname: string;
  level: string;
  lessonsWeekday: string;
  lessonsTime: string;
  lessonDuration: string;
  lessonsExceptions: LessonException[];
  info: string | null;
}
