import React from 'react';
import Login from './Login';
import Register from './Register';
import Recap from './Recap';
import { func } from 'prop-types';
import User from '../data/user';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function Routing(props) {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login 
          title="Login" 
          subTitle="Type your credentials below..." 
          setcurrentUser={props.setcurrentUser}
          />
        </Route>
        <Route path="/register">
          <Register
            title="Register"
            subTitle="Let's talk about you..."
            setcurrentUser={props.setcurrentUser}
          />
        </Route>
        <Route path="/recap">
          <Recap
            title="Recapitulatif"
            subTitle="You are :"
            currentUser={props.currentUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


Routing.propTypes = {
  currentUser: User,
  setcurrentUser: func
};

export default Routing;
