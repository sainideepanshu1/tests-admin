import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import NavbarData from "../Data/NavbarData";
import ProfilePhoto from "../Media/2ead53f5d9c64c6987ff27141023b96b.jpg";
import { Link } from "react-router-dom";
import logo from "../Media/logoipsum-285.svg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div style={{}} className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="right"
        style={{ display: "flex", alignItems: "center", gap: "40px" }}
      >
        <div className="nav-items">
          {NavbarData.map((item, index) => {
            return (
              <a key={index} href="/">
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="profile">
          <img src={ProfilePhoto} alt="Profile" />
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/profile">
              <div style={{ display: "flex" }}>
                <CgProfile />
              </div>
              Profile
            </Link>
            <Link className="dropdown-item" to="/">
              <div style={{ display: "flex" }}>
                <AiFillSetting />
              </div>
              Settings
            </Link>
            <Link className="dropdown-item" to="/">
              <div style={{ display: "flex" }}>
                <CiLogout />
              </div>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
