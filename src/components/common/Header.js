import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  const floatToRight = { float: "right" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/songs" activeStyle={activeStyle}>
        Songs
      </NavLink>
      {" | "}
      <NavLink to="/artists" activeStyle={activeStyle}>
        Artists
      </NavLink>
      {" | "}
      <NavLink to="/albums" activeStyle={activeStyle}>
        Queued Albums
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/themes" activeStyle={activeStyle} style={floatToRight}>
        Themes
      </NavLink>
    </nav>
  );
};

export default Header;
