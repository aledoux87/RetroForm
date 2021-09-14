import React from 'react';
import { string } from 'prop-types';
import User from '../data/user';



function Recap(props) {
  return (

    <form className="retro-field">
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

      <div>
        <p>Nom d'utilisateur : {props.userData.login}</p>
        <p>Nom : {props.userData.lastName}</p>
        <p>Prénom : {props.userData.firstName}</p>
        <p>Adresse mail : {props.userData.email}</p>
        <p>Année de naissance : {props.userData.birthYear}</p>
        <p>Sexe : {props.userData.gender}</p>
      </div>      

    </form>

  );
}


Recap.propTypes = {
  title: string.isRequired,
  subTitle: string,
  userData: User
};

export default Recap;
