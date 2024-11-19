import { ReactNode } from "react";

export interface ListItemData {
  text: string;
  icon: ReactNode;
  path: string;
}

export interface Props extends ListItemData {
  selected: boolean;
}
