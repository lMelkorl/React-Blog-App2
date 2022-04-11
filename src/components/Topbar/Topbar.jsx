/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Topbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import defaultPP from "../../images/default.png";

export default function Topbar() {
  const user = true;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav" expand="md" light>
        <NavbarBrand className="navIcon" href="/">
          <span>lMelkorl</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar></Nav>

          {isOpen ? (
            <>
              <br />
              <div className="centerCon">
                <Sidebar />
              </div>
            </>
          ) : (
            <></>
          )}

          {user ? (
            <>
              <Link className="centerCon" to="/settings">
                <img className="topImg" src={defaultPP} alt="" />
              </Link>
            </>
          ) : (
            <>
              <div className="centerCon">
                <NavItem>
                  <NavLink className="loginNav" href="/login">
                    Log in
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="loginNav" href="/register">
                    Sign Up
                  </NavLink>
                </NavItem>
              </div>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
