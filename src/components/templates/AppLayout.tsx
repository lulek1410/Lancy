import { ReactNode } from "react";

import Header from "@/components/organisms/App/Header/Header";
import MainNavbar from "@/components/organisms/App/MainNavbar";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Readonly<Props>) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex flex-1">
        <MainNavbar />
        <main className="bg-fantasy-50">{props.children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
