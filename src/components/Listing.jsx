import React from 'react';
import { shape, string, number } from 'prop-types';
import { useHistory } from 'react-router';

function Listing(props) {
  const history = useHistory();

  return (
    <div className="retro-form">
      <h2>Listing</h2>
      {Object.entries(props.userData).length > 0 && (
        <ul>
          {Object.entries(props.userData).map(([key, val], idx) => (
            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ textDecoration: 'underline' }}>{key} :</span> {val}
            </li>
          ))}
        </ul>
      )}
      <button className="retro-button" onClick={() => history.push('/login')}>
        RESET
      </button>
    </div>
  );
}

Listing.propTypes = {
  userData: shape({
    login: string,
    email: string,
    passwordStrong: number,
    firstName: string,
    lastName: string,
    birthYear: number,
    gender: string
  })
};

export default Listing;
