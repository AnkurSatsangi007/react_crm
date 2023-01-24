import React from "react";
import SvgTitle from "../Ui/SvgTitle";
import MainSidebar from "./MainSideBar";
import ResourceSideBar from "./ResourceSideBar";
import ShortCut from "./ShortCut";

export default function SideBarContainer() {
  return (
    <div className="sidebar p-2 py-md-3 @@cardclass">
      <div className="container-fluid">
        {/* <!-- sidebar: title--> */}
        <div className="title-text d-flex align-items-center mb-4 mt-1">
          <h4 className="sidebar-title mb-0 flex-grow-1">
            {/* <span className="sm-txt">N</span>
            <span>X CRM</span> */}
            <div style={{width:"30rem"}}>
            <SvgTitle/>
            </div>
            
          </h4>
        </div>
       
        {/* <!-- sidebar: menu list --> */}
        <div className="main-menu flex-grow-1">
          <MainSidebar/>
          <ResourceSideBar/>
        </div>
        {/* <!-- sidebar: footer link --> */}
        {/* <!-- sidebar: footer link --> */}
        <ShortCut/>
      </div>
    </div>
  );
}
