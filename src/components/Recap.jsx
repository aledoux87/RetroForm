import React from 'react';
import { string } from 'prop-types';
import { useSelector } from 'react-redux';

function Recap(props) {
  const user = useSelector(state => state.user);

  return (
    <form className="retro-field">
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

      <div>
        <p>Nom d'utilisateur : {user["login"]}</p>
        <p>Nom : {user["lastName"]}</p>
        <p>Prénom : {user["firstName"]}</p>
        <p>Force du mot de passe : {user["passwordStrong"]}</p>
        <p>Adresse mail : {user["email"]}</p>
        <p>Année de naissance : {user["birthYear"]}</p>
        <p>Sexe : {user["gender"]}</p>
      </div>
    </form>
  );
}

Recap.propTypes = {
  title: string.isRequired,
  subTitle: string
};

export default Recap;
