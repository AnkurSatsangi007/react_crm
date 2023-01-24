import React from "react";
import MainHeader from "./MainHeader";
import Footer from "../footer/Footer";
import MainSectionContainer from "./MainSectionContainer";
import DeskOne from "../pages/DeskOne";
// import Routing from "../Routes/Routing";




export default function HeaderContainer() {
  return (
    <div className="wrapper">
      <MainHeader />
      <MainSectionContainer/>
      <Footer />
    </div>
  );
}
