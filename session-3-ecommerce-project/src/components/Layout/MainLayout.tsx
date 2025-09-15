import Header from "../Home/Header/Header";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div className="tw:bg-[rgb(249,249,249)]">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
