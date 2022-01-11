import { Container, Link, Flex } from "@theme-ui/components";
import React, { useState } from "react";
import useStyles from "./styles.js";
import { keyframes } from "styled-components";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState("false");
  const classes = useStyles();
  const navLinks = ["Home", "Tech", "Politics", "Business"];

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
              console.log(index / 7);
            })
          : ""}
      </ul>
      <hr className={classes.line} />
      <div onClick={burgerClicked} className={classes.burger}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
