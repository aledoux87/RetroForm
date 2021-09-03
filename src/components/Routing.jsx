import React from 'react';
import { shape, string, number, func } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Listing from './Listing';

function Routing(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login title="Login" subTitle="Type your credentials below..." setUserData={props.setUserData} />
      </Route>
      <Route path="/register">
        <Register title="Register" subTitle="Let's talk about you..." setUserData={props.setUserData} />
      </Route>
      <Route path="/register">
        <Listing userData={props.userData} />
      </Route>
    </Switch>
  );
}

Routing.propTypes = {
  userData: shape({
    login: string,
    email: string,
    passwordStrong: number,
    firstName: string,
    lastName: string,
    birthYear: number,
    gender: string
  }),
  setUserData: func
};

export default Routing;
