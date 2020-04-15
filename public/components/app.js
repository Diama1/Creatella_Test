import React from "react";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import "../assets/style.scss";
import Product from './home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component= {Product} />
    </Switch>
  </BrowserRouter>
)

export default App;
