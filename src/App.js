import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./css/style.css";

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
