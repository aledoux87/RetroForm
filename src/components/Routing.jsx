import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

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
    </Switch>
  );
}

export default Routing;
