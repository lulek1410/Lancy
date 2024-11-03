import MainNavList from "@/components/molecules/App/MainNavList";

import { IMainNavItem } from "@/components/molecules/App/MainNavList.types";

const items: IMainNavItem[] = [
  { content: "Dashboard" },
  { content: "Calendar" },
  { content: "Clients" },
  { content: "Disc" },
  { content: "Settings" },
];

const MainNavbar = () => {
  return (
    <nav
      aria-label="Main app navigation"
      className=" bg-[#D2D3DB] h-screen w-full flex flex-col gap-2 text-base xl:text-lg 2xl:text-xl "
    >
      <MainNavList items={items} />
    </nav>
  );
};

export default MainNavbar;
