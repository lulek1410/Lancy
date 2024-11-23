import React from "react";

import { Props } from "../Card";

const Card = jest.fn((props: Props) => {
  return <div data-testid="Card">Card</div>;
});

export default Card;
