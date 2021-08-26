import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./css/style.css";

//components
import Overheader from './components/Overheader';
import Navbar from "./components/Navbar";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Overheader />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
