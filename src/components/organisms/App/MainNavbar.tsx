import React from "react";

import UnorderedList from "@/components/molecules/UnorderedList";

import { IListItem } from "@/components/atoms/ListItem/index.types";

const items: IListItem[] = [
  { content: "Dashboard" },
  { content: "Calendar" },
  { content: "Clients" },
  { content: "Disc" },
  { content: "Settings" },
];

const MainNavbar = () => {
  return (
    <nav aria-label="Main app navigation">
      <UnorderedList items={items} />
    </nav>
  );
};

export default MainNavbar;
