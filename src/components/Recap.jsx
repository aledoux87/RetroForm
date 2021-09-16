import React from 'react';
import { string } from 'prop-types';
import User from '../data/user';



function Recap(props) {
  return (

    <form className="retro-field">
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

      <div>
        <p>Nom d'utilisateur : {props.currentUser.login}</p>
        <p>Nom : {props.currentUser.lastName}</p>
        <p>Prénom : {props.currentUser.firstName}</p>
        <p>Adresse mail : {props.currentUser.email}</p>
        <p>Année de naissance : {props.currentUser.birthYear}</p>
        <p>Sexe : {props.currentUser.gender}</p>
      </div>      

    </form>

  );
}



Recap.propTypes = {
  title: string.isRequired,
  subTitle: string,
  currentUser: User
};

export default Recap;
