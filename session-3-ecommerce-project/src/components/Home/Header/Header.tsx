import React from "react";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import Actions from "./Actions";

function Header() {
  return (
    <>
      <div className="tw:flex tw:w-full tw:justify-between tw:p-[35px] tw:bg-slate-200  tw:sticky top-0  ">
        <div className="tw:flex tw:w-1/12">
          <Logo />
        </div>
        <NavigationItems />
        <Actions />
      </div>
    </>
  );
}

export default Header;
