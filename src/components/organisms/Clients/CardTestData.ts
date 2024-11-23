import { CardInfo } from "@/types/global";

export const testCardInfoData: CardInfo[] = [
  {
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
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    level: "Beginner",
    lessonsWeekday: "Wednesday",
    lessonsTime: "14:00",
    lessonDuration: "45 minutes",
    lessonsExceptions: [
      {
        lessonDateTimeDuration: "31.12.2024 14:00-14:45",
        newLessonDateTimeDuration: null,
      },
    ],
    info: null,
  },
  {
    id: 3,
    name: "Alice",
    surname: "Johnson",
    level: "Advanced",
    lessonsWeekday: "Friday",
    lessonsTime: "16:00",
    lessonDuration: "1.5 hours",
    lessonsExceptions: [
      {
        lessonDateTimeDuration: "23.11.2024 16:00-17:30",
        newLessonDateTimeDuration: "24.11.2024 16:00-17:30",
      },
      {
        lessonDateTimeDuration: "24.12.2024 16:00-17:30",
        newLessonDateTimeDuration: "26.12.2024 16:00-17:30",
      },
    ],
    info: "Focuses on business English and presentations.",
  },
  {
    id: 4,
    name: "Bob",
    surname: "Williams",
    level: "Beginner",
    lessonsWeekday: "Thursday",
    lessonsTime: "18:30",
    lessonDuration: "30 minutes",
    lessonsExceptions: [],
    info: "Patient and supportive teaching style.",
  },
  {
    id: 5,
    name: "Emily",
    surname: "Brown",
    level: "Intermediate",
    lessonsWeekday: "Tuesday",
    lessonsTime: "09:00",
    lessonDuration: "1 hour",
    lessonsExceptions: [
      {
        lessonDateTimeDuration: "25.11.2024 9:00-10:00",
        newLessonDateTimeDuration: "26.11.2024 9:00-10:00",
      },
      {
        lessonDateTimeDuration: "31.12.2024 9:00-10:00",
        newLessonDateTimeDuration: "02.01.2025 9:00-10:00",
      },
    ],
    info: null,
  },
];
