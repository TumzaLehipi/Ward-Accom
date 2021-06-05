import React from 'react';

import Navbar from './components/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalStyle } from './styles/global';

function Home() {
  return (
   
      <Router>
      <GlobalStyle/>
        <Navbar/>
      </Router>
  
  );
}

export default Home
