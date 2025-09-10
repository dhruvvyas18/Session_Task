import React from "react";
import Header from "../Home/Header/Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div className="tw:bg-gray-100">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
