import { Utility, Link, Switch, SwitchLabel } from "@visa/nova-react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { switchTheme } from "../../utils/setTheme.js";

function Layout() {
  const handleSwitchTheme = (e) => {
    const newTheme = e.target.checked ? "visa-light" : "visa-dark";
    switchTheme(newTheme);
  };

  return (
    <>
      <Utility
        vFlex
        vFlexRow
        vJustifyContent="end"
        vAlignItems="center"
        vPaddingHorizontal={32}
        style={{ height: "40px" }}
      >
        <Link>Saved Items</Link>
        <Utility vFlex vFlexRow vAlignItems="center" vGap={8} vMarginLeft={16}>
          <SwitchLabel htmlFor="theme">Switch Theme</SwitchLabel>
          <Switch onChange={(e) => handleSwitchTheme(e)}></Switch>
        </Utility>
      </Utility>
      <Outlet />
    </>
  );
}

export default Layout;
