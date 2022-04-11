import React from "react";
import "./Sidebar.css";

import homeIcon from "../icons/home.png";
import writeIcon from "../icons/write.png";
import aboutIcon from "../icons/about.png";
import categoryIcon from "../icons/category.png";
import labelIcon from "../icons/label.png";
import contactIcon from "../icons/contact.png";
import privacyIcon from "../icons/privacy.png";

export default function Sidebar() {
  const user = true;

  return (
    <div className="sidebar">
      <div className="sidebarList">
        <a href="/" className="sidebarListItem">
          <img src={homeIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Home</h6>
        </a>

        <a href={user ? "/write" : "/login"} className="sidebarListItem">
          <img src={writeIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Write</h6>
        </a>

        <a href="/categories" className="sidebarListItem">
          <img src={categoryIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Categories</h6>
        </a>

        <a href="/labels" className="sidebarListItem">
          <img src={labelIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Labels</h6>
        </a>

        <a href="/about" className="sidebarListItem">
          <img src={aboutIcon} alt="" />
          <h6 className="sidebarTitle">About</h6>
        </a>

        <a href="/contact" className="sidebarListItem">
          <img src={contactIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Contact</h6>
        </a>

        <a href="/privacy" className="sidebarListItem">
          <img src={privacyIcon} alt="" />
          &nbsp;
          <h6 className="sidebarTitle">Privacy Policy</h6>
        </a>
      </div>
    </div>
  );
}
