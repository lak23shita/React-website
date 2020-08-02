import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import {Route,Switch, Redirect} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Services from './Components/Services';

import Navbar from './Components/Navbar';
function App() {
  return (
    
    <div>
    
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/gallery' component={Gallery} />
    <Route exact path='/services' component={Services} />
    <Redirect to='/'/>
    
    </Switch>
    
    </div>
  );
}

export default App;
