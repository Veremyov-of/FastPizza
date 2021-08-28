import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./css/style.css";

//components
import Overheader from './components/Overheader';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Contacts from './components/Contacts';
import Payment from "./components/Payment";
import Footer from "./components/Footer";

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
      <Contacts />
      <Payment />
      <Footer />
    </Router>
  );
}

export default App;
