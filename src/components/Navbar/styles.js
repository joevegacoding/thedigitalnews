import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "20vh",
    margin: "20px",

    backgroundColor: "rgb(255,254,250)",
    "@media screen and (max-width: 768px)": {
      flexDirection: "row",
      minHeight: "12vh",
      margin: "25px",

      zIndex: 1000,
    },
  },
  logo: {
    color: "red",
    textTransform: "uppercase",
    letterSpacing: "5px",
    fontSize: "20px",
    zIndex: "1000",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    zIndex: 1000,
    "@media screen and (max-width: 768px)": {
      position: "absolute",
      right: 0,
      height: "100vh",
      top: "10vh",
      backgroundColor: "rgb(255, 254, 250)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      transform: "translateX(100%)",
      transition: "transform 0.5s ease-in",

      "& li": {
        opacity: 0,
      },
    },

    "& a": {
      color: "black",
      textDecoration: "none",
      letterSpacing: "3px",
      fontSize: "17px",
    },

    "& li": {
      listStyle: "none",
    },
  },

  navActive: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    zIndex: 1000,
    "@media screen and (max-width: 768px)": {
      position: "absolute",
      right: 0,
      height: "100vh",
      top: "10vh",
      backgroundColor: "rgb(255, 254, 250)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      transform: "translateX(0%)",
      transition: "transform 0.5s ease-in",

      "& li": {
        opacity: 0,
      },
    },

    "& a": {
      color: "black",
      textDecoration: "none",
      letterSpacing: "3px",
      fontSize: "17px",
      // opacity: 0,
    },

    "& li": {
      listStyle: "none",
    },
  },

  line: {
    color: "black",
    width: "70%",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },

  burger: {
    display: "none",
    zIndex: "1000",
    "@media screen and (max-width: 768px)": {
      display: "block",
      cursor: "pointer",
    },
    "& div": {
      width: "25px",
      height: "3px",

      margin: "5px",
      backgroundColor: "black",
    },
  },

  line1: {},
  line2: {},
  line3: {},
});
