import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/global';

function App() {
  return (
      <Router>
      <GlobalStyle/>
        <Routes/>
      </Router>
  
  );
}

export default App
