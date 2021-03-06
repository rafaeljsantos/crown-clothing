import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import { HomePage } from "./pages/homepage/homepage.component";

import './App.scss';

const Hats = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exat path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
