import React from 'react';
import Login from './Login';
import Register from './Register';
import Recap from './Recap';
import { Switch, Route, Redirect } from 'react-router-dom';

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login title="Login" subTitle="Type your credentials below..." />
      </Route>
      <Route path="/register">
        <Register title="Register" subTitle="Let's talk about you..." />
      </Route>
      <Route path="/recap">
        <Recap title="Recapitulatif" subTitle="You are :" />
      </Route>
    </Switch>
  );
}

export default Routing;
