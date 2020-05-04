import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PhonePage from './pages/PhonePage';
import AddPhone from './pages/AddPhone';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/addPhone" component={AddPhone} />
        <Route exact path="/telephones/order/:order" component={HomePage} />
        <Route exact path="/telephones/brand/:brand" component={HomePage} />
        <Route exact path="/telephone/:id" component={PhonePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router> 
  );
}

export default App;
