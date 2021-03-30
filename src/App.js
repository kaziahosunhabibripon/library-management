import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Router>
      <Header/>
        <Switch>
        <Route path="/home">
            <Home/>
          </Route>
          <Route path="/orders">
            
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/deals">
            <Home/>
          </Route>
          <Route path="/login">
            <Admin/>
          </Route>
          <Route exact path="/">
            <Home/>
            
          </Route>
          <Route path="*">
            <NotFound/>
            
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
