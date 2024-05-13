import React from "react";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar-cont">
      <div className="abs-svg-icon svg-icon">
        <RxDashboard />
      </div>
      <div className="svg-icon">
        <RxDashboard />
      </div>
      <div className="svg-icon">
        <MdOutlineMenu />
      </div>
      <div className="svg-icon">
        <AiOutlineUsergroupAdd />
      </div>
      <div className="svg-icon">
        <RxDashboard />
      </div>
      <div className="svg-icon">
        <MdOutlineMenu />
      </div>
      <div className="svg-icon">
        <AiOutlineUsergroupAdd />
      </div>
      <div className="svg-icon">
        <RxDashboard />
      </div>
      <div className="svg-icon">
        <MdOutlineMenu />
      </div>
      <div className="svg-icon">
        <AiOutlineUsergroupAdd />
      </div>
    </div>
  );
};

export default Sidebar;
