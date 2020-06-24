import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import "./App.css";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import OCRState from "./context/ocr/OCRState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <OCRState>
          <Router>
            <div className="App">
              <Navbar
                title="Optical character recognition"
                icon="fas fa-atom"
              />
              <div className="container">
                <Alert alert={alert} />
                <Switch>
                  <Route exact path="/" component={Home} />
                  {/* Add attribute component={...} when rendering a single component*/}
                  <Route exact path="/about" component={About} />
                  {/* Works similar to the following */}
                  {/* <Route exact path="/about" render={(props) => <About />} /> */}
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </OCRState>
      </AlertState>
    </GithubState>
  );
};

export default App;
