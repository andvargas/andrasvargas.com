import React from "react";
import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//import classes from "./NavBar.module.css";

const Item = styled(Button)({
  fontFamily: "Montserrat, sans serif",
  fontSize: "0.7em",
  padding: "1px",
  color: "white",
  width: "9vw",

  "&:hover": {
    WebkitFontSmoothing: "antialiased",
    fontWeight: "bold",
  },
  "& a": {
    textDecoration: "none",
  },
  "& @media only screen and (max-width: 768px)": {
    color: "black",
  },
});

const NavBarItem = (props) => {
  return (
    <li>
      <Item /* className={classes.NavBarItem} */>
        <Link to={props.link}>{props.children}</Link>
      </Item>
    </li>
  );
};

export default NavBarItem;
