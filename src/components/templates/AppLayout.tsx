import { ReactNode } from "react";

import Header from "@/components/molecules/App/Header";
import MainNavbar from "@/components/organisms/App/MainNavbar";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Readonly<Props>) => {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <aside className="w-52 overflow-hidden xl:w-56 2xl:w-60">
          <MainNavbar />
        </aside>
        <main className="bg-fantasy-50">{props.children}</main>
      </div>
    </>
  );
};

export default AppLayout;
