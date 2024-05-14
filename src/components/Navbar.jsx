import React from "react";
import "./navbar.css";
import Toggle from "../assets/Toggle.svg";
import bell from "../assets/bell.svg";
import gear from "../assets/gear.svg";
import absExp from "../assets/absExp.svg";
import chevronDown from "../assets/chevronDown.svg";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="left-nav-cont">
        <img  className="toggle" src={Toggle} alt="" />

        <input className="nav-search-cont" type="text" placeholder="search" />
      </div>

      <div className="right-nav-cont flex-prop">
        <img src={bell} alt="" />
        <img src={gear} alt="" />
        <div className="abs-exp flex-prop">
          <img src={absExp} alt="" />
          <select class="custom-select" name="" id="">
            <option selected>ABS erp</option>
          </select>
        </div>
        <div className="abs-exp flex-prop">
          <img className="profile-img" src="" alt="" />
          <select class="custom-select" name="" id="">
            <option selected>Manoj Kumar</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
