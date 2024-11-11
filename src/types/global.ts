import { ReactNode } from "react";

export interface Option {
  title: string | ReactNode;
  action: () => void;
}
