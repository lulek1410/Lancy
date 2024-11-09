import React, { ReactNode } from "react";
import MainNavbar from "../organisms/App/MainNavbar";
import Header from "../molecules/App/Header";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Readonly<Props>) => {
  return (
    <>
      <Header />
      <div className="flex">
        <aside className="w-52 overflow-hidden xl:w-56 2xl:w-60">
          <MainNavbar />
        </aside>
        <main className="bg-fantasy-50">{props.children}</main>
      </div>
    </>
  );
};

export default AppLayout;
