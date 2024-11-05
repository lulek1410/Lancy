import React, { ReactNode } from "react";
import MainNavbar from "../organisms/App/MainNavbar";

interface Props {
  children: ReactNode;
}

const AppLayout = (props: Readonly<Props>) => {
  return (
    <>
      <header></header>
      <div className="flex">
        <aside className="w-52 xl:w-56 2xl:w-60">
          <MainNavbar />
        </aside>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default AppLayout;
