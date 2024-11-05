import MainNavList from "@/components/molecules/App/MainNavList";

import { ListItemData } from "@/components/atoms/App/NavLink/index.types";

import {
  LuCalendarDays,
  LuFolder,
  LuLayoutDashboard,
  LuSettings,
  LuUsers,
} from "react-icons/lu";

const items: ListItemData[] = [
  { text: "Dashboard", icon: <LuLayoutDashboard />, path: "/dashboard" },
  { text: "Calendar", icon: <LuCalendarDays />, path: "/calendar" },
  { text: "Clients", icon: <LuUsers />, path: "/clients" },
  { text: "Disc", icon: <LuFolder />, path: "/disc" },
  { text: "Settings", icon: <LuSettings />, path: "/settings" },
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
