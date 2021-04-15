import React from "react";
import InitialPresentation from "./InitialPresentation";
import NavBar from "./NavBar";
import EmptyWrap from "../hoc/EmptyWrap";
import WorkExperience from "./WorkExperience";
const Layout = () => {
  return (
    <EmptyWrap>
      <NavBar />
      <InitialPresentation />
      <WorkExperience />
    </EmptyWrap>
  );
};

export default Layout;
