import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route path="/" compoenent={Home}></Route>
      <Route path="/about" compoenent={About}></Route>
      <Route path="/contact" compoenent={Contact}></Route>
    </div>
  </Router>  
);

export default App;
