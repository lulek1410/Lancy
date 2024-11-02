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
        <aside>
          <MainNavbar />
        </aside>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default AppLayout;
