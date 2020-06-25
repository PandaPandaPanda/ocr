import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import "./App.css";

import OCRState from "./context/ocr/OCRState";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <OCRState>
      <Router>
        <div className="App">
          <Navbar title="OCR (Convert Image to Text)" icon="fas fa-atom" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </OCRState>
  );
};

export default App;
