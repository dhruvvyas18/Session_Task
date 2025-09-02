import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 flex flex-col">
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
