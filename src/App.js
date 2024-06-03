import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Router';
import Navigation from './Components/Header/index';


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <AppRoutes />
        </Router>
      </>
    );
  }
}
