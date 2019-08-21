import React from 'react';
import '../App.css';
import Menu from "./Menu";
import {Route} from "react-router-dom";
import About from "../RoutingComponents/About";

function App() {
  return (
    <div className="App">
        <Menu />
        <Route path="/About" component={About}/>
    </div>
  );
}

export default App;
