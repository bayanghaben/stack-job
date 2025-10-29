import React from "react";
import NavBar from "../NavBar/NavBar";
import SideMenu from "../SideMenu/SideMenu";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <SideMenu />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
