// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './Main';
import About from './About';
import Work from './Work';

import NotFound from './NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />

    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
