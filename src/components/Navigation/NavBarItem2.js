import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//import classes from "./NavBar.module.css";

// const hide = "flex";
// if (authorised) {
//   hide = "none";
// }

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
    color: "white",
  },
  "& @media only screen and (max-width: 768px)": {
    color: "black",
  },
});

const NavBarItem = (props) => {
  console.log(props);
  const authorised = useSelector((state) => state.auth.userId);
  const restricted = () => {
    if (!authorised && !props.restricted) {
      return "flex";
    } else if (authorised) {
      return "flex";
    } else return "none";
  };

  const navButton = (
    <li style={{ display: restricted() }}>
      <Item /* className={classes.NavBarItem} */>
        <Link to={props.link}>{props.children}</Link>
      </Item>
    </li>
  );

  return navButton;
};

export default NavBarItem;
