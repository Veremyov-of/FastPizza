import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./css/style.css";




//components
import Overheader from './components/Overheader';
import Navbar from "./components/Navbar";

import Home from './components/Home';
import Stock from './components/Stock';


import Contacts from './components/Contacts';
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Basket from './components/Basket';
import Delivery from "./components/Delivery";

import Vacancies from "./components/Vacancies";
import ContractOffer from "./components/ContractOffer";

function App() {



  return (
    <Router>
        <Overheader />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/delivery">
            <Delivery />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/vacancies">
            <Vacancies />
          </Route>
          <Route path="/contractOffer">
            <ContractOffer />
          </Route>
        </Switch>
        <Contacts />
        <Payment />
        <Footer />
    </Router>
  );
}

export default App;
