"use client";

import { Props } from "../MainNavList.types";

const MainNavList = jest.fn((props: Props) => (
  <div data-testid="MainNavList">MainNavList</div>
));

export default MainNavList;
