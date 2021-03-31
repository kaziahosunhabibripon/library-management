import React, { createContext, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/deals">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />

          </Route>
          <Route path="*">
            <NotFound />

          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
