import React from "react";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/Home/NavBar/NavBar";
////////////

import Home from "./Components/Home/Home/Home";
import Book from "./Components/Book/Book/Book";
import Login from "./Components/Login/Login/Login";
///////////

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

///////////
export const UserContext = createContext();
export const UserOrderContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selcOrder, setSelcOrder] = useState({});
  return (
    <div>
      <UserOrderContext.Provider value={[selcOrder, setSelcOrder]}>
        <UserContext.Provider value={[loginUser, setLoginUser]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/book">
                <Book></Book>
              </PrivateRoute>
              <Route exact path="/">
                <Home></Home>
              </Route>
              {/* //// */}

              <Route
                render={({ location, history }) => (
                  <React.Fragment>
                    <SideNav
                      onSelect={(selected) => {
                        const to = "/" + selected;
                        if (location.pathname !== to) {
                          history.push(to);
                        }
                      }}
                    >
                      <SideNav.Toggle />
                      <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                          <NavIcon>
                            <i
                              className="fa fa-fw fa-home"
                              style={{ fontSize: "1.75em" }}
                            />
                          </NavIcon>
                          <NavText>Home</NavText>
                        </NavItem>
                        {/* <NavItem eventKey="devices">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-device"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Devices</NavText>
                  </NavItem> */}
                      </SideNav.Nav>
                    </SideNav>
                    <main>
                      {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                      <Route path="/home" component={(props) => <Home />} />
                      {/* <Route path="/devices" component={props => <Devices />} /> */}
                    </main>
                  </React.Fragment>
                )}
              />

              {/* //// */}
            </Switch>
          </Router>
        </UserContext.Provider>
      </UserOrderContext.Provider>
    </div>
  );
}

export default App;
