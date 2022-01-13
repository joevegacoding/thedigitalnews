import { Container, Link, Flex } from "@theme-ui/components";
import React, { useState } from "react";
import useStyles from "./styles.js";
import { keyframes } from "styled-components";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const classes = useStyles();
  const navLinks = ["Home", "Tech", "Politics", "Business"];
  const divs = [<div></div>, <div></div>, <div></div>];

  const burgerClicked = () => {
    setActive(!isActive);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h4>The Digital News</h4>
      </div>
      <hr className={classes.line} />
      <ul className={isActive ? classes.navActive : classes.navLinks}>
        {isActive
          ? navLinks.map((link, index) => {
              return (
                <li
                  style={{
                    animation: `navLinkFade 0.5s ease forwards ${
                      index / 5 + 0.5
                    }s`,
                  }}
                >
                  <a href="#">{link}</a>
                </li>
              );
            })
          : ""}
      </ul>
      <ul className={classes.desktopNav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tech"> Tech</Link>
        </li>
        <li>
          <Link>Politics</Link>
        </li>
        <li>
          <Link>Business</Link>
        </li>
      </ul>
      <hr className={classes.line} />
      <div onClick={burgerClicked} className={classes.burger}>
        <div className={isActive ? classes.line1 : ""}></div>
        <div className={isActive ? classes.line2 : ""}></div>
        <div className={isActive ? classes.line3 : ""}></div>
      </div>
    </nav>
  );
};

export default Navbar;
