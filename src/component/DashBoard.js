import React from "react";
//sidebar
import SideBarContainer from "./sidebar/SidebarContainer";
//header and main contacnt 
import HeaderContainer from "./header/HeaderContainer";

function DashBoard() {
  return (
    <>
      <SideBarContainer />
      <HeaderContainer/>
      {/* <h1>hello</h1> */}
    </>
  );
}
 
export default DashBoard;
