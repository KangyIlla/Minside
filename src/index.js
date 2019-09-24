import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './EntryComponents/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route } from "react-router-dom";
import Movie from "./RoutingComponents/Movie";
import Character from "./RoutingComponents/Character"
import Menu from "./EntryComponents/Menu"

const routing = (
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={App} />
        <Route path="/Movie" component={Movie} />
        <Route path="/Character" component={Character} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
