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
  pricePerHour: string;
  cyclicalLessonsWeekday: string;
  cyclicalLessonsTime: string;
  lessonDuration: string;
  lessonsExceptions: LessonException[];
  info?: string;
}
