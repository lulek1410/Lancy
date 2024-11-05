import MainNavList from "@/components/molecules/App/MainNavList";

import { IMainNavItem } from "@/components/molecules/App/MainNavList.types";

import {
  LuCalendarDays,
  LuFolder,
  LuLayoutDashboard,
  LuSettings,
  LuUsers,
} from "react-icons/lu";

const items: IMainNavItem[] = [
  { text: "Dashboard", icon: <LuLayoutDashboard /> },
  { text: "Calendar", icon: <LuCalendarDays /> },
  { text: "Clients", icon: <LuUsers /> },
  { text: "Disc", icon: <LuFolder /> },
  { text: "Settings", icon: <LuSettings /> },
];

const MainNavbar = () => {
  return (
    <nav
      aria-label="Main app navigation"
      className=" bg-[#D2D3DB] h-screen w-full flex flex-col gap-2 text-base xl:text-lg 2xl:text-xl"
    >
      <MainNavList items={items} />
    </nav>
  );
};

export default MainNavbar;
