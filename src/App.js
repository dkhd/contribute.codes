import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import GithubCorner from "react-github-corner";

import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="text-gray-700 bg-gray-100 min-h-screen">
      <GithubCorner href="https://github.com/dkhd/contribute.codes" />
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
