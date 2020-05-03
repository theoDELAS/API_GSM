import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PhonePage from './pages/PhonePage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/telephones/:order" component={HomePage} />
        <Route exact path="/telephone/:id" component={PhonePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router> 
  );
}

export default App;
