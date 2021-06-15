import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import { NavItem } from 'react-bootstrap';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <SideNav
        style={{
          backgroundColor: "#f64747ba",
          color: "white",
        }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
              <Link to="/home">
                {" "}
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/home">Home</Link>
            </NavText>
          </NavItem>
          {/*  */}

          <NavItem eventKey="login">
            <NavIcon>
              <Link to="/login">
                {" "}
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Link to="/login">login</Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
