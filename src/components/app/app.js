import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import About from '../navbar/About';
import Info from '../navbar/Info';
import { TodoApp } from '../navbar/TodoApp';


export const App = props => {
  
  return (
    <Router>
     <Navbar/>
      <Switch>
        <Route path='/' exact component={Info} />
        <Route path='/todoapp' component={TodoApp} />
        <Route path='/about' component={About} /> 
      </Switch>
    </Router>
  );
}

