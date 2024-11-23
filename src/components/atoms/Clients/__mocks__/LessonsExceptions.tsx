import React from "react";

import { Props } from "../LessonsExceptions";

const LessonsExceptions = jest.fn((props: Props) => {
  return <div data-testid="LessonsExceptions">LessonsExceptions</div>;
});

export default LessonsExceptions;
