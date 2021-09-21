import React from 'react';
import { string } from 'prop-types';
import { useSelector } from 'react-redux';

function Recap(props) {
  const user = useSelector(state => state.user);

  return (
    <form className="retro-form">
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}

      <ul>
        {Object.entries(user).map(([key, val], idx) => (
          <li key={idx} >
            <span>{key} :</span> {val}
          </li>
        ))}
      </ul>
    </form>
  );
}

Recap.propTypes = {
  title: string.isRequired,
  subTitle: string
};

export default Recap;
